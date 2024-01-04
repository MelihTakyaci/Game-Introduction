   const gallery = document.getElementById('imageContainer');
    const images = document.querySelectorAll('.gallery-images');
    const imageCount = images.length;
    const imageWidth = images[0].offsetWidth;
    let currentIndex = 0;

    function showImage() {
        const transformValue = -currentIndex * imageWidth + 'px';
        gallery.style.transform = 'translateX(' + transformValue + ')';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % imageCount;
        showImage();
        reorderImages();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + imageCount) % imageCount;
        showImage();
        reorderImages();
    }

    function reorderImages() {
        const imagesArray = Array.from(images);
        const removedItem = imagesArray.splice(currentIndex, 1)[0];
        imagesArray.unshift(removedItem);
        gallery.innerHTML = '';
        imagesArray.forEach(img => gallery.appendChild(img));
    }

    document.addEventListener("DOMContentLoaded", function () {
        showImage();
    });