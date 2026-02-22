// Variables for slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slideshow only if slides exist (hero is static otherwise)
    if (slides && slides.length > 0) {
        showSlide(0);
        autoSlideshow();
    }
    setupFormListeners();
});

// Slideshow functions
function changeSlide(n) {
    showSlide(slideIndex += n);
}

function goToSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (slides[slideIndex]) {
        slides[slideIndex].classList.add('active');
    }
    if (dots[slideIndex]) {
        dots[slideIndex].classList.add('active');
    }
}

// Auto-increment slideshow
function autoSlideshow() {
    changeSlide(1);
    setTimeout(autoSlideshow, 5000); // Change slide every 5 seconds
}

// Dot navigation
function setCurrentSlide(n) {
    clearTimeout(slideTimer);
    goToSlide(n);
    slideTimer = setTimeout(autoSlideshow, 5000);
}

let slideTimer;

// Section Navigation
function showSection(sectionId) {
    // Scroll the target section into view and update nav active state
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        // Use smooth scroll and respect the navbar height via CSS scroll-margin-top
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Update active class on nav links
    const navLinks = document.querySelectorAll('.nav-tabs a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href') || '';
        if (href.replace('#', '') === sectionId) {
            link.classList.add('active');
        }
    });
}

// Toggle collapsible form visibility inside a section
function toggleForm(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const collapsible = section.querySelector('.form-collapsible');
    const button = section.querySelector('.open-form-btn');
    if (!collapsible) return;

    const isCollapsed = collapsible.classList.contains('collapsed');
    if (isCollapsed) {
        collapsible.classList.remove('collapsed');
        if (button) button.textContent = 'Close Form';
        // scroll into view
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        collapsible.classList.add('collapsed');
        if (button) button.textContent = 'Open Form';
        // optionally scroll back to top of section
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Form Listeners
function setupFormListeners() {
    // Client Form
    const clientForm = document.getElementById('clientForm');
    if (clientForm) {
        clientForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitClientForm();
        });
    }

    // Recruitment Form
    const recruitmentForm = document.getElementById('recruitmentForm');
    if (recruitmentForm) {
        recruitmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitRecruitmentForm();
        });
    }

    // Quick Contact Form
    const quickContactForm = document.getElementById('quickContactForm');
    if (quickContactForm) {
        quickContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitQuickContact();
        });
    }
}

// Client Form Submission
function submitClientForm() {
    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientEmail').value;
    const phone = document.getElementById('clientPhone').value;
    const company = document.getElementById('clientCompany').value;
    const mineralType = document.getElementById('clientMineralType').value;
    const quantity = document.getElementById('clientQuantity').value;
    const message = document.getElementById('clientMessage').value;

    // Validation
    if (!name || !email || !phone || !mineralType || !quantity || !message) {
        showFormMessage('clientFormMessage', 'Please fill in all required fields.', 'error');
        return;
    }

    // Email validation
    if (!isValidEmail(email)) {
        showFormMessage('clientFormMessage', 'Please enter a valid email address.', 'error');
        return;
    }

    // Phone validation (basic)
    if (!isValidPhone(phone)) {
        showFormMessage('clientFormMessage', 'Please enter a valid phone number.', 'error');
        return;
    }

    // Log form data (in a real application, this would be sent to a server)
    console.log('Client Inquiry Submitted:', {
        name,
        email,
        phone,
        company,
        mineralType,
        quantity,
        message,
        submittedAt: new Date().toLocaleString()
    });

    // Show success message
    showFormMessage('clientFormMessage', 'Thank you for your inquiry! We will contact you soon.', 'success');

    // Reset form
    document.getElementById('clientForm').reset();

    // Clear message after 5 seconds
    setTimeout(() => {
        document.getElementById('clientFormMessage').style.display = 'none';
    }, 5000);
}

// Recruitment Form Submission
function submitRecruitmentForm() {
    const name = document.getElementById('appName').value;
    const email = document.getElementById('appEmail').value;
    const phone = document.getElementById('appPhone').value;
    const dob = document.getElementById('appDOB').value;
    const position = document.getElementById('appPosition').value;
    const experience = document.getElementById('appExperience').value;
    const qualification = document.getElementById('appQualification').value;
    const agree = document.getElementById('appAgree').checked;

    // Validation
    if (!name || !email || !phone || !dob || !position || !qualification || !agree) {
        showFormMessage('recruitmentFormMessage', 'Please fill in all required fields and agree to terms.', 'error');
        return;
    }

    // Email validation
    if (!isValidEmail(email)) {
        showFormMessage('recruitmentFormMessage', 'Please enter a valid email address.', 'error');
        return;
    }

    // Phone validation
    if (!isValidPhone(phone)) {
        showFormMessage('recruitmentFormMessage', 'Please enter a valid phone number.', 'error');
        return;
    }

    // Age validation (must be at least 18)
    const age = calculateAge(new Date(dob));
    if (age < 18) {
        showFormMessage('recruitmentFormMessage', 'You must be at least 18 years old to apply.', 'error');
        return;
    }

    // Log form data
    console.log('Recruitment Application Submitted:', {
        name,
        email,
        phone,
        dob,
        position,
        experience,
        qualification,
        submittedAt: new Date().toLocaleString()
    });

    // Show success message
    showFormMessage('recruitmentFormMessage', 'Your application has been submitted successfully! Thank you for your interest.', 'success');

    // Reset form
    document.getElementById('recruitmentForm').reset();

    // Clear message after 5 seconds
    setTimeout(() => {
        document.getElementById('recruitmentFormMessage').style.display = 'none';
    }, 5000);
}

// Quick Contact Form Submission
function submitQuickContact() {
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
        }
    });

    if (!isValid) {
        alert('Please fill in all fields.');
        return;
    }

    const name = inputs[0].value;
    const email = inputs[1].value;
    const phone = inputs[2].value;
    const message = inputs[3].value;

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!isValidPhone(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    console.log('Quick Contact Submitted:', {
        name,
        email,
        phone,
        message,
        submittedAt: new Date().toLocaleString()
    });

    alert('Thank you for contacting us! We will get back to you shortly.');
    form.reset();
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Accepts various phone formats
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

function showFormMessage(elementId, message, type) {
    const messageElement = document.getElementById(elementId);
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = 'form-message ' + type;
        messageElement.style.display = 'block';
    }
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
});

// Show home section by default
window.addEventListener('load', function() {
    showSection('home');
});
