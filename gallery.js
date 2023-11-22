const gallery = document.getElementById('image-gallery');
const overlay = document.getElementById('image-overlay');
const expandedImage = document.getElementById('expanded-image');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

// Open the overlay and show the selected image
function openImage(index) {
    currentIndex = index;
    const image = gallery.children[index].querySelector('img');
    const imageCaption = gallery.children[index].querySelector('.gallery-caption');
    expandedImage.src = image.src;
    caption.textContent = imageCaption.textContent;
    overlay.style.display = 'block';
}

// Close the overlay
function closeImage() {
    overlay.style.display = 'none';
}

// Show the previous image
function prevImage() {
    if (currentIndex > 0) {
        openImage(currentIndex - 1);
    }
}

// Show the next image
function nextImage() {
    if (currentIndex < gallery.children.length - 1) {
        openImage(currentIndex + 1);
    }
}

// Attach click event listeners to gallery items
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        openImage(parseInt(e.target.getAttribute('data-index')));
    }
});

// Close button click event
closeBtn.addEventListener('click', closeImage);

// Previous button click event
prevBtn.addEventListener('click', prevImage);

// Next button click event
nextBtn.addEventListener('click', nextImage);

// Keyboard navigation (left and right arrow keys)
document.addEventListener('keydown', (e) => {
    if (overlay.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'Escape') {
            closeImage();
        }
    }
});