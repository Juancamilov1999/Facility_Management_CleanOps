// ===========================
// CLEANOPS LANDING PAGE SCRIPT
// ===========================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ===========================
    // INITIALIZATION
    // ===========================

    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // ===========================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Don't prevent default for # only links
            if (href === '#') return;

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===========================
    // TAB SWITCHER (Features Section)
    // ===========================

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Add active class to corresponding content
            const targetContent = document.getElementById(targetTab + '-features');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // ===========================
    // SCROLL REVEAL ANIMATIONS
    // ===========================

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-50px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Add scroll-reveal class to elements and observe them
    const revealElements = document.querySelectorAll(
        '.pain-point, .comparison-card, .feature-card, .benefit-card, .stat-item'
    );

    revealElements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });

    // ===========================
    // DEMO FORM HANDLING
    // ===========================

    const demoForm = document.getElementById('demo-form');
    const successMessage = document.getElementById('success-message');
    const formWrapper = document.getElementById('form-wrapper');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnLoader = document.getElementById('btn-loader');

    if (demoForm) {
        demoForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Clear previous errors
            clearFormErrors();

            // Get form data
            const formData = new FormData(demoForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                company: formData.get('company'),
                phone: formData.get('phone'),
                userType: formData.get('userType'),
                message: formData.get('message'),
                timestamp: new Date().toISOString()
            };

            // Validate form
            if (!validateForm(data)) {
                return;
            }

            // Show loading state
            setLoadingState(true);

            // Simulate API call (replace with actual API endpoint in production)
            try {
                // Store in localStorage for demo purposes
                const submissions = JSON.parse(localStorage.getItem('cleanops_demos') || '[]');
                submissions.push(data);
                localStorage.setItem('cleanops_demos', JSON.stringify(submissions));

                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Hide form and show success message
                demoForm.style.display = 'none';
                successMessage.style.display = 'block';

                // Reset form
                demoForm.reset();

                // Hide success message and show form again after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    demoForm.style.display = 'block';
                }, 5000);

            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
            } finally {
                setLoadingState(false);
            }
        });
    }

    // Form validation function
    function validateForm(data) {
        let isValid = true;

        // Validate name
        if (!data.name || data.name.trim().length < 2) {
            showError('name', 'El nombre debe tener al menos 2 caracteres');
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            showError('email', 'Por favor, ingresa un email válido');
            isValid = false;
        }

        // Validate company
        if (!data.company || data.company.trim().length < 1) {
            showError('company', 'La empresa es requerida');
            isValid = false;
        }

        // Validate user type
        if (!data.userType) {
            showError('userType', 'Por favor, selecciona un tipo de usuario');
            isValid = false;
        }

        return isValid;
    }

    // Show error message
    function showError(fieldName, message) {
        const input = document.getElementById(fieldName);
        const errorElement = document.getElementById(fieldName + '-error');

        if (input) {
            input.classList.add('error');
        }

        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    // Clear all form errors
    function clearFormErrors() {
        const errorElements = document.querySelectorAll('.form-error');
        const inputElements = document.querySelectorAll('.form-input');

        errorElements.forEach(el => el.textContent = '');
        inputElements.forEach(el => el.classList.remove('error'));
    }

    // Set loading state
    function setLoadingState(isLoading) {
        if (submitBtn && btnText && btnLoader) {
            submitBtn.disabled = isLoading;
            btnText.style.display = isLoading ? 'none' : 'inline';
            btnLoader.style.display = isLoading ? 'inline-flex' : 'none';
        }
    }

    // Clear error on input
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('error');
            const errorElement = document.getElementById(this.id + '-error');
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    });

    // Clear error on radio change
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
        input.addEventListener('change', function() {
            const errorElement = document.getElementById(this.name + '-error');
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    });

    // ===========================
    // UTILITY FUNCTIONS
    // ===========================

    // Get data from localStorage (for debugging)
    window.getCleanOpsSubmissions = function() {
        const submissions = localStorage.getItem('cleanops_demos');
        if (submissions) {
            console.table(JSON.parse(submissions));
            return JSON.parse(submissions);
        } else {
            console.log('No submissions found');
            return [];
        }
    };

    // Clear localStorage data (for debugging)
    window.clearCleanOpsSubmissions = function() {
        localStorage.removeItem('cleanops_demos');
        console.log('Submissions cleared');
    };

    // ===========================
    // CONSOLE WELCOME MESSAGE
    // ===========================

    console.log('%cCleanOps Landing Page', 'color: #0A7BC1; font-size: 24px; font-weight: bold;');
    console.log('%cTu operación de Facility Management en un solo lugar', 'color: #7F8C8D; font-size: 14px;');
    console.log('\n📊 Para ver las solicitudes de demo: getCleanOpsSubmissions()');
    console.log('🗑️  Para limpiar las solicitudes: clearCleanOpsSubmissions()');

});

// ===========================
// ADDITIONAL FEATURES
// ===========================

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// Handle browser back/forward button
window.addEventListener('popstate', function() {
    // Reset any active states if needed
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add active class to navigation on scroll (if navigation is added in the future)
const handleScroll = debounce(function() {
    // Add scroll-based logic here if needed
    // For example: change header background on scroll
}, 100);

window.addEventListener('scroll', handleScroll);

// Accessibility: Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close modals (if any are added in the future)
    if (e.key === 'Escape') {
        // Close any open modals
    }

    // Tab key navigation is handled by browser default
});

// Add touch support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left
            // Add swipe left logic if needed
        } else {
            // Swiped right
            // Add swipe right logic if needed
        }
    }
}

// Preload images (optional - uncomment if needed)
/*
function preloadImages() {
    const images = [
        '../Public/Logos/Logo CleanOps Full Color.png',
        '../Public/Logos/Logo CleanOps Blanco.png'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload on page load
window.addEventListener('load', preloadImages);
*/

// Error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        console.warn('Failed to load image:', this.src);
        // Optionally add a fallback image or placeholder
    });
});

// Analytics placeholder (add your analytics code here)
/*
function trackEvent(category, action, label) {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }

    // Or any other analytics service
    console.log('Event tracked:', category, action, label);
}

// Track button clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        trackEvent('Button', 'Click', 'CTA - Solicitar Demo');
    });
});
*/

// ===========================
// SERVICE WORKER (for PWA - optional)
// ===========================

/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
*/
