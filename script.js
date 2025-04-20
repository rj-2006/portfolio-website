document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');

    function setTheme(isDark) {
        htmlElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme === 'dark');

    // Theme toggle button click handler
    themeToggle.addEventListener('click', () => {
        const isDark = htmlElement.getAttribute('data-theme') === 'dark';
        setTheme(!isDark);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.section').forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add 'visible' class style
    const style = document.createElement('style');
    style.textContent = `
        .section.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Project Navigation
    const projectsGrid = document.querySelector('.projects-grid');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalProjects = document.querySelectorAll('.project-card').length;

    function updateProjectView(index) {
        const offset = index * projectsGrid.offsetWidth;
        projectsGrid.scrollTo({
            left: offset,
            behavior: 'smooth'
        });

        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');

        // Update arrow states
        prevArrow.style.opacity = index === 0 ? '0.5' : '1';
        nextArrow.style.opacity = index === totalProjects - 1 ? '0.5' : '1';
    }

    function navigateProjects(direction) {
        currentIndex = Math.max(0, Math.min(totalProjects - 1, currentIndex + direction));
        updateProjectView(currentIndex);
    }

    // Event Listeners
    prevArrow.addEventListener('click', () => navigateProjects(-1));
    nextArrow.addEventListener('click', () => navigateProjects(1));

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateProjectView(currentIndex);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            navigateProjects(-1);
        } else if (e.key === 'ArrowRight') {
            navigateProjects(1);
        }
    });

    // Initialize
    updateProjectView(0);
});
