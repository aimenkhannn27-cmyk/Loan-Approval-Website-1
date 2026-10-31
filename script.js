 
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(event) {
        const targetId = this.getAttribute('href');

        if (targetId.length > 1) {
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
