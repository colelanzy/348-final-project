// Initialize EmailJS with public key
(function() {
    emailjs.init("VcM2ayuWHtwKlqO-V");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Send the email using EmailJS
    emailjs.send("343-test", "template_vvfic8b", {
        name: name,
        email: email,
        subject: subject,
        message: message,
        from_email: email
    }).then(
        function(response) {
            document.getElementById("status-message").textContent = "Your message has been sent!";
            document.getElementById("status-message").style.color = "green";
            console.log("SUCCESS", response);
        },
        function(error) {
            document.getElementById("status-message").textContent = "Oops! Something went wrong. Please try again.";
            document.getElementById("status-message").style.color = "red";
            console.log("FAILED", error);
        }
    );

    // Clear the form fields after submitting
    document.getElementById("contact-form").reset();
});
