/* Elements */
const EIGHT_SECONDS = 8000;
const addItemToBasketButton = document.querySelector('.add-to-basket');
const itemAddedToBasketBanner = document.querySelector('.item-in-basket');
const toggleImageSpinButton = document.querySelector('.toggle-image-btn.spin');
const toggleImageStaticButton = document.querySelector('.toggle-image-btn.close');
const sofaImage = document.querySelector('.product-image');

/* Event Listeners */
toggleImageSpinButton.addEventListener('click', toggleSpinEffect);
toggleImageStaticButton.addEventListener('click', toggleStaticImage);
addItemToBasketButton.addEventListener('click', animateAddItemToBasket);

/* Functions */
function toggleSpinEffect() {
    swapButtons();
    sofaImage.setAttribute('src', './images/sofa-gif.gif');
}

function toggleStaticImage() {
    swapButtons();
    sofaImage.setAttribute('src', './images/sofa-img.jpg');
}

function swapButtons() {
    toggleImageSpinButton.toggleAttribute('hidden');
    toggleImageStaticButton.toggleAttribute('hidden');
}

function animateAddItemToBasket() {
    itemAddedToBasketBanner.classList.add('success');
    setTimeout(function () {
        itemAddedToBasketBanner.classList.remove('success');
    }, EIGHT_SECONDS);
}