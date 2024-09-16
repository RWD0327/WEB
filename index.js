window.addEventListener('resize', function() {
    const menu = document.getElementById('menu');
    if (window.innerWidth < 674) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// Initial check
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    if (window.innerWidth < 674) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});