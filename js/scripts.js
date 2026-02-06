window.addEventListener('load', function() {
    const loader = document.getElementById('gallery-loader');
    const gallery = document.getElementById('actual-gallery');

    // Add a 2-second delay so the animation is visible
    setTimeout(function() {
        if (loader && gallery) {
            loader.style.display = 'none';
            gallery.style.display = 'block';
            
            // Re-initialize AOS now that the gallery is visible
            AOS.init({
                duration: 800,
                once: true,
                offset: 100
            });
            AOS.refresh();
        }
    }, 0); // 2000 milliseconds = 2 seconds
});

document.addEventListener('DOMContentLoaded', function() {
    const contactDrawer = document.getElementById('contact-drawer');
    const closeBtn = document.getElementById('close-drawer');
    const connectLink = document.querySelector('a[href="#contact-drawer"]'); // Target the link

    if (connectLink) {
        // Prevent going to a new page and show the drawer instead
        connectLink.addEventListener('click', function(e) {
            e.preventDefault();
            contactDrawer.classList.add('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            contactDrawer.classList.remove('active');
        });
    }
});


window.addEventListener('load', function() {
    // Initialize AOS regardless of other elements
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    const loader = document.getElementById('gallery-loader');
    const gallery = document.getElementById('actual-gallery');

    if (loader && gallery) {
        loader.style.display = 'none';
        gallery.style.display = 'block';
        AOS.refresh();
    }
});