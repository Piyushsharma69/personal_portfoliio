document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded for Piyush Sharma");

    // ==========================================
    // 1. DARK MODE TOGGLE
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check if user previously selected dark mode
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerText = '☀️'; // Change icon to sun
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeToggle.innerText = '☀️';
            localStorage.setItem('theme', 'dark'); // Save preference
        } else {
            themeToggle.innerText = '🌙';
            localStorage.setItem('theme', 'light'); // Save preference
        }
    });

    // ==========================================
    // 2. SCROLL ANIMATIONS
    // ==========================================
    const animatedElements = document.querySelectorAll('.card, .section-title, .skill-tag');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // ==========================================
    // 3. COPY EMAIL FUNCTIONALITY
    // ==========================================
    const emailLink = document.getElementById('emailLink');
    const myEmail = "bhargav.piyush12@gmail.com";

    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault(); 
            navigator.clipboard.writeText(myEmail).then(() => {
                const originalText = emailLink.innerText;
                emailLink.innerText = "Email Copied!";
                emailLink.style.color = "#2563eb"; 
                setTimeout(() => {
                    emailLink.innerText = originalText;
                    emailLink.style.color = ""; 
                }, 2000);
            }).catch(err => console.error('Failed to copy: ', err));
        });
    }
});