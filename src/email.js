var script = document.createElement('script');
script.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"

script.onload = function() {
  emailjs.init("toN7vFxzeanQU3SW5");
};

/*
(function() {
    emailjs.init("toN7vFxzeanQU3SW5");
})();
*/

document.head.appendChild(script);

window.onload = function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        //const formElement = document.getElementById("contact-form");

        var formDetails = {
            name: 'James',
            notes: 'Check this out!'
        };
        emailjs.sendForm("contact-service", "template_prime", formDetails)
            .then(function() {
                console.log("SUCCESS!");
                console.log("Form element:", document.getElementById("contact-form"));
            }, function(error) {
                console.log("FAILED...", error);
            });
    });
}
