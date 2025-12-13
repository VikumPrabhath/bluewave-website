// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileClose = document.querySelector('.mobile-close');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            mobileNav.classList.add('active');
        });
    }
    
    if (mobileClose) {
        mobileClose.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.mobile-nav') && 
            !event.target.closest('.mobile-toggle') && 
            mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
        }
    });
    
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a, .mobile-nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (currentPage === linkHref) {
            link.classList.add('active');
        }
        
        // Add click handler for mobile nav links
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mobileNav.classList.remove('active');
            }
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});