document.addEventListener('DOMContentLoaded', function() {
    // 1. Sticky Navbar Glassmorphism Effect
    const navbar = document.querySelector('.navbar-custom');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Reveal Sections on Scroll (ScrollReveal simplified)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 3. Iframe Loader for Power BI / Dashboard
    const iframe = document.querySelector('iframe');
    const loader = document.querySelector('.loader-wrapper');

    if (iframe && loader) {
        iframe.addEventListener('load', () => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        });

        // Fail-safe for slow dashboards (hide spinner after 12s anyway)
        setTimeout(() => {
            if (loader.style.display !== 'none') {
                 loader.style.opacity = '0';
                 setTimeout(() => { loader.style.display = 'none'; }, 500);
            }
        }, 12000);
    }
});
