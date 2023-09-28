emailjs.init("toN7vFxzeanQU3SW5");

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);

  emailjs.send("service_rm1yhbp", "template_dgcujsr", formData)
    .then(function(response) {
      console.log("Email sent successfully", response);
    }, function(error) {
      console.error("Email sending failed", error);
    });
});

