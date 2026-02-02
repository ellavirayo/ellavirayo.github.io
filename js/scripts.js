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
    }, 0000); // 2000 milliseconds = 2 seconds
});