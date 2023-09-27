emailjs.init("toN7vFxzeanQU3SW5");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get form data
    const formData = new FormData(event.target);
  
    // Send the email
    emailjs.sendForm("service_gvoyobe", "template_dgcujsr", formData)
      .then(function(response) {
        console.log("Email sent successfully", response);
        // Optionally, you can display a success message to the user.
      }, function(error) {
        console.error("Email sending failed", error);
        // Optionally, you can display an error message to the user.
      });
  });