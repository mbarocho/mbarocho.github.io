// Preloader Code

var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementsByClassName("loading-bar")[0];
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    move();
    document.getElementById("loading");
});

setTimeout(function() {
    document.getElementById("loading").style.display = "none";
}, 1500);

/*

// Code For Navbar Section Selection
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.button');

const options = {
    rootMargin: '0px',
    threshold: 0.5,
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`.button[href="#${id}"]`).classList.add('active');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

*/

// Code for Contact Form Pop-Up

function openForm() {
    document.getElementById("contact").style.display = "block";
}
  
function closeForm() {
    document.getElementById("contact").style.display = "none";
}

// Code for Email.js connection

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

        var fullName = firstName.value + ' ' + lastName.value;

        var formDetails = {
            name: fullName.value,
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

// Code for "About Me" Carousel

/*

document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");
    const infoCards = document.querySelectorAll(".info-card");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % infoCards.length;
        updateAbout();
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + infoCards.length) % infoCards.length;
        updateAbout();
    }

    function updateAbout() {
        const translateXValue = -currentIndex * 100; // Adjust based on card width
        aboutSection.style.transform = `translateX(${translateXValue}%)`;
    }

    //setInterval(nextSlide, 2000);
    document.getElementById("next").addEventListener("click", nextSlide);
    document.getElementById("prev").addEventListener("click", previousSlide);

});

*/