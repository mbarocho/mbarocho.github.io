var script = document.createElement('script');
script.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"

script.onload = function() {
  emailjs.init("toN7vFxzeanQU3SW5");
};

document.head.appendChild(script);

window.onload = function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        var firstName = document.getElementById("user_fname");
        var lastName = document.getElementById("user_lname");
        var emailAddress = document.getElementById("user_email");
        var phoneNumber = document.getElementById("user_phone");
        var mailInput = document.getElementById("user_message");

        var fullName = firstNameInput.value + ' ' + lastNameInput.value;

        var formDetails = {
            sender: fillName.value,
            email: emailAddress.value,
            phone: phoneNumber.value,
            message: mailInput.value
        };

        emailjs.send("contact-service", "template_prime", formDetails)
            .then(function() {
                console.log("SUCCESS!");
                console.log("Form element:", document.getElementById("contact-form"));
            }, function(error) {
                console.log("FAILED...", error);
            });
    });
}
