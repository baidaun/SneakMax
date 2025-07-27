const cards = document.querySelectorAll('.card');

const rangeInput = document.getElementById('priceRange');

const displayPrice = document.getElementById('currentPrice');

displayPrice.textContent = rangeInput.value;

rangeInput.addEventListener('input', () => {
    displayPrice.textContent = rangeInput.value;
});


function parsePrice(priceText) {
    const numberString = priceText.replace(/\D/g, '');
    return parseInt(numberString, 10);
}

function filterCards() {
    const maxPrice = parseInt(rangeInput.value, 10);
    cards.forEach(card => {
        const priceSpan = card.querySelector('.card__price');
        const priceText = priceSpan.textContent;
        const price = parsePrice(priceText);
        if (price <= maxPrice) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

rangeInput.addEventListener('input', filterCards);

filterCards();