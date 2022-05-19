export default function lightboxImg() {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';

    const body = document.querySelector('.site');
    body.append(lightbox);

    const images = document.querySelectorAll('.cart-product img');
    images.forEach(image => {
        image.addEventListener('click', e => {
            lightbox.classList.add('active');

            const img = document.createElement('img');
            img.src = image.src;

            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild)
            };

            lightbox.append(img);
        });
    });

    lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
    });
};