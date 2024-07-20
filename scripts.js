// scripts.js

// Add any JavaScript functionality here if needed

// Example: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation check
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission
    alert(`Thank you for your message, ${name}! We will get back to you shortly.`);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
