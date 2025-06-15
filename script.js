// Simple form submission handler with validation and alert (no backend)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMsg = document.getElementById('formMsg');

    // Form submit event listener
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent the form from submitting the usual way

        // Hide any previous error messages
        formMsg.style.display = 'none';

        // Get the values from the form fields
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // Validation check for empty fields
        if (!name || !email || !message) {
            displayError('Please fill out all fields.');
            return;
        }

        // Email format validation using regex
        if (!isValidEmail(email)) {
            displayError('Please enter a valid email address.');
            return;
        }

        // If validation passes, simulate successful form submission
        alert(`Thanks for your message, ${name}! I'll get back to you soon.`);
        form.reset();  // Reset the form fields
    });

    // Helper function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Helper function to display error messages
    function displayError(message) {
        formMsg.textContent = message;
        formMsg.style.display = 'block';
    }
});
