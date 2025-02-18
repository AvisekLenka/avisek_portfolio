// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

// Form submit handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Gather form data
    var templateParams = {
        user_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send the email
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams) // Replace with your service and template IDs
        .then(function(response) {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Error: " + error.text);
        });
});
