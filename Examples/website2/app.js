const fileInput = document.getElementById('fileInput');
const gallerySection = document.getElementById('gallery-section');

function uploadPhoto() {
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imageUrl = e.target.result;
            displayPhoto(imageUrl);
        };

        reader.readAsDataURL(file);
    }
}

function displayPhoto(imageUrl) {
    const photoElement = document.createElement('img');
    photoElement.src = imageUrl;
    photoElement.classList.add('photo');
    gallerySection.appendChild(photoElement);
}
