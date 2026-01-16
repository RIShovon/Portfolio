// For Current Time
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // Local Formate Date & Time
    document.getElementById("current-datetime").innerText = dateTimeString;
}

// First Call and Per Second Update
updateDateTime();
setInterval(updateDateTime, 1000);


// For Contact Form
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get inputs
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';
    name.classList.remove('invalid', 'valid');
    email.classList.remove('invalid', 'valid');
    subject.classList.remove('invalid', 'valid');
    message.classList.remove('invalid', 'valid');

    let valid = true;

    // Name validation
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required';
        name.classList.add('invalid');
        valid = false;
    } else {
        name.classList.add('valid');
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        email.classList.add('invalid');
        valid = false;
    } else if (!email.value.match(emailPattern)) {
        emailError.textContent = 'Enter a valid email';
        email.classList.add('invalid');
        valid = false;
    } else {
        email.classList.add('valid');
    }

    // Subject validation
    if (subject.value.trim() === '') {
        subjectError.textContent = 'Subject is required';
        subject.classList.add('invalid');
        valid = false;
    } else {
        subject.classList.add('valid');
    }

    // Message validation
    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required';
        message.classList.add('invalid');
        valid = false;
    } else {
        message.classList.add('valid');
    }

    if (valid) {
        alert('Form submitted successfully!');
        form.reset();
        name.classList.remove('valid');
        email.classList.remove('valid');
        subject.classList.remove('valid');
        message.classList.remove('valid');
    }
});