// ==================== Mobile Menu Toggle ====================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const headerEl = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-menu a");

function closeMenu() {
  navMenu.classList.remove("active");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
}

function openMenu() {
  navMenu.classList.add("active");
  menuToggle.classList.add("active");
  menuToggle.setAttribute("aria-expanded", "true");
  // Position menu right below header
  const headerHeight = headerEl.offsetHeight;
  navMenu.style.top = headerHeight + "px";
}

// Toggle menu on button click
menuToggle.addEventListener("click", () => {
  if (navMenu.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const navbar = document.querySelector(".navbar");
  if (navMenu.classList.contains("active") && !navbar.contains(e.target)) {
    closeMenu();
  }
});

// Close menu on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    closeMenu();
  }
});

// ==================== Header CTA Button ====================

const headerCTABtn = document.querySelector(".btn-header-cta");
if (headerCTABtn) {
  headerCTABtn.addEventListener("click", () => {
    const ctaSection = document.getElementById("contact");
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}

// ==================== Smooth Scrolling ====================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ==================== Scroll to CTA Button ====================

const scrollToCTABtn = document.getElementById("scrollToCTA");
if (scrollToCTABtn) {
  scrollToCTABtn.addEventListener("click", () => {
    const ctaSection = document.getElementById("contact");
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}

// ==================== Form Submission ====================

const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailInput = signupForm.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Basic email validation
    if (!isValidEmail(email)) {
      showNotification("Please enter a valid email address.", "error");
      return;
    }

    // Simulate form submission
    const button = signupForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;

    button.textContent = "Submitting...";
    button.disabled = true;

    // Simulate API call delay
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;

      showNotification(
        `Thank you! Check your email (${email}) for your sign-up confirmation.`,
        "success"
      );

      // Clear form
      signupForm.reset();
    }, 1500);
  });
}

// ==================== Email Validation ====================

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ==================== Notification System ====================

function showNotification(message, type = "info") {
  // Remove existing notification if any
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add styles dynamically if not in CSS
  if (!document.querySelector("style[data-notification]")) {
    const style = document.createElement("style");
    style.setAttribute("data-notification", "true");
    style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                font-size: 1rem;
                z-index: 9999;
                animation: slideIn 0.3s ease-out;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                max-width: 400px;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
            
            .notification-success {
                background-color: #2d7d5e;
                color: white;
            }
            
            .notification-error {
                background-color: #dc2626;
                color: white;
            }
            
            .notification-info {
                background-color: #3d5a80;
                color: white;
            }
            
            @media (max-width: 480px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-out";
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// ==================== Intersection Observer for Animations ====================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe cards and features
document
  .querySelectorAll(
    ".feature-item, .usp-card, .testimonial-card, .impact-card, .step"
  )
  .forEach((el) => {
    el.classList.add("fade-in-on-scroll");
    observer.observe(el);
  });

// Add fade-in styles
if (!document.querySelector("style[data-animations]")) {
  const animStyle = document.createElement("style");
  animStyle.setAttribute("data-animations", "true");
  animStyle.textContent = `
        .fade-in-on-scroll {
            opacity: 0;
            transform: translateY(20px);
        }
        
        .fade-in-on-scroll.fade-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
  document.head.appendChild(animStyle);
}

// ==================== Navbar Scroll Effect ====================

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== Analytics Tracking (Optional) ====================

// Track button clicks
document.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("click", () => {
    trackEvent("button_click", {
      button_text: btn.textContent,
      button_location: btn.closest("section")?.className || "unknown",
    });
  });
});

function trackEvent(eventName, eventData = {}) {
  // This can be connected to Google Analytics, Mixpanel, or similar
  console.log(`Event: ${eventName}`, eventData);

  // Example: Google Analytics integration
  // if (window.gtag) {
  //     gtag('event', eventName, eventData);
  // }
}

// ==================== Accessibility Improvements ====================

// Add focus visible styles
if (!document.querySelector("style[data-a11y]")) {
  const a11yStyle = document.createElement("style");
  a11yStyle.setAttribute("data-a11y", "true");
  a11yStyle.textContent = `
        button:focus-visible,
        a:focus-visible,
        input:focus-visible {
            outline: 2px solid #2d7d5e;
            outline-offset: 2px;
        }
    `;
  document.head.appendChild(a11yStyle);
}

// ==================== Initialization ====================

console.log("Eco-Vest Landing Page Loaded");
