document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active"); // Toggle menu visibility
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

    // Form submission with Fetch API
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                form.innerHTML = "<p>Thank you! Your message has been sent.</p>";
            } else {
                form.innerHTML = "<p>Oops! There was a problem. Please try again later.</p>";
            }
        });
    }

