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

// Code for "Projects" Carousel

document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.querySelector(".project-container");
    const projects = document.querySelectorAll(".project");
    const projectWidth = projects[0].offsetWidth; // Assuming all project cards have the same width
    let currentIndex = 0;

    function updateCarousel() {
        const translateXValue = -currentIndex * projectWidth;
        projectContainer.style.transform = `translateX(${translateXValue}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % projects.length;
        updateCarousel();
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateCarousel();
    }

    document.getElementById("next").addEventListener("click", nextSlide);
    document.getElementById("prev").addEventListener("click", previousSlide);
});




/*
document.addEventListener("DOMContentLoaded", function() {
    const projectSection = document.getElementById("projects");
    const projects = document.querySelectorAll(".project");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % projects.length;
        updateAbout();
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateAbout();
    }

    function updateProjects() {
        const translateXValue = -currentIndex * 100; // Adjust based on card width
        projectSection.style.transform = `translateX(${translateXValue}%)`;
    }

    //setInterval(nextSlide, 2000);
    document.getElementById("next").addEventListener("click", nextSlide);
    document.getElementById("prev").addEventListener("click", previousSlide);

});
*/

// Code for Light Mode Toggle

function lightMode() {
    var element = document.body;
    var topBar = document.querySelector('.top-bar');
    var nameTag = document.querySelector('.nametag');

    element.classList.toggle("light");

    if (topBar) {
        topBar.classList.toggle("light");
    }
    if (nameTag) {
        nameTag.classList.toggle("light");
    }
}
