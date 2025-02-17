document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', toggleMenu);
    
    // Handle nav links on small screens
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (navMenu.classList.contains('active')) {
                // Get the href attribute
                const href = link.getAttribute('href');
                
                // Check if it's a hash link (internal page navigation)
                if (href.startsWith('#')) {
                    // For hash links, close menu first then navigate
                    toggleMenu();
                    
                    // Get the target element
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    // If target exists, scroll to it
                    if (targetElement) {
                        setTimeout(() => {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }, 300); // Small delay to allow menu animation
                    }
                    
                    // Prevent default only for hash links
                    event.preventDefault();
                } else {
                    // For external links, let the default behavior happen after closing menu
                    toggleMenu();
                    // The browser will handle the navigation automatically
                }
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Add scroll event for header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// About 

 // Add scroll event listener for header
 window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// menu

     // Basic menu-page tab functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tabs = document.querySelectorAll('.menu-page-tab');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs
                    tabs.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    tab.classList.add('active');
                    
                    // Here you could add logic to filter menu-page items
                    // based on the selected category
                });
            });
        });