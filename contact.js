const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Disable button to prevent multiple clicks
    const sendBtn = contactForm.querySelector(".btn-send");
    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
            formMessage.textContent = "Message sent successfully! ✅";
            formMessage.className = "form-message success show";
            contactForm.reset();
            sendBtn.disabled = false;
            sendBtn.textContent = "Send Message";
        }, (err) => {
            formMessage.textContent = "Oops! Something went wrong… ❌";
            formMessage.className = "form-message error show";
            sendBtn.disabled = false;
            sendBtn.textContent = "Send Message";
            console.error(err);
        });
});
