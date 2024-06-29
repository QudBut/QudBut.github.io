// JavaScript für Lightbox
document.addEventListener("DOMContentLoaded", function() {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    var closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.gallery-item img').forEach(function(image) {
        image.addEventListener('click', function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target == lightbox) {
            lightbox.style.display = "none";
        }
    });
});
