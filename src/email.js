document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    emailjs.sendForm("service_gvoyobe", "template_dgcujsr", formData)
      .then(function(response) {
        console.log("Email sent successfully", response);
      }, function(error) {
        console.error("Email sending failed", error);
      });
  });