// --- 1. INITIALIZE EMAILJS ---
(function() {
    emailjs.init("-pmMN-gAfKo5MaEZ5"); // Your Public Key
})();

// --- 2. MOBILE MENU & UI LOGIC ---
let menuicon = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');
if(menuicon) {
    menuicon.onclick = () => {
        menuicon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

let readmore = document.getElementById('btn2');
if(readmore) {
    readmore.onclick = () => {
        readmore.innerHTML = (readmore.innerHTML === "Read More") ? "show less" : "Read More";
    };
}

// --- 3. SLIDER ---
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
if(next && prev) {
    next.addEventListener('click', () => {
        let webs = document.querySelectorAll('.web');
        document.querySelector('.slide').appendChild(webs[0]);
    });
    prev.addEventListener('click', () => {
        let webs = document.querySelectorAll('.web');
        document.querySelector('.slide').prepend(webs[webs.length - 1]);
    });
}

// --- 4. SCROLL EFFECTS ---
let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav ul li a');
let scrollarrow = document.getElementById('scrollarrow');

window.onscroll = () => {
    if (window.scrollY >= 400) {
        if(scrollarrow) scrollarrow.style.display = "block";
    } else {
        if(scrollarrow) scrollarrow.style.display = "none";
    }

    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            navlink.forEach(links => {
                links.classList.remove('active');
                let target = document.querySelector('header nav ul li a[href*=' + id + ']');
                if(target) target.classList.add('active');
            });
        }
    });
};

if(scrollarrow) {
    scrollarrow.onclick = () => window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
}

// --- 5. THE CONTACT FORM FIX ---
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const successMsg = document.getElementById("form-success");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Stop reload

            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            // Using your actual IDs provided earlier
            const serviceID = "service_s17v0hi";   
            const templateID = "template_3lxoowj"; 

            emailjs.sendForm(serviceID, templateID, this)
                .then(function () {
                    console.log("SUCCESS!");
                    contactForm.style.display = "none";
                    successMsg.style.display = "block";
                })
                .catch(function (error) {
                    console.error("FAILED...", error);
                    submitBtn.textContent = "Send Message";
                    submitBtn.disabled = false;
                    alert("EmailJS Error: " + error.text);
                });
        });
    }
});