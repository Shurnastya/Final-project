function popup () {
    const popupOpen = document.getElementById('popup-open');
    const popupClose = document.getElementById('popup-close');
    const popup = document.getElementById('popup');

    popupOpen.addEventListener('click', function(e) {
        e.preventDefault();
        popup.classList.add('active');
    });

    popupClose.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    const popupQuantity = document.getElementById('quantity');
    popupQuantity.innerHTML = `
    <button class="counter-btn-quantity" data-direction="minus">-</button>
    <input type="text" value="1" class="counter-value">
    <button class="counter-btn-quantity" data-direction="plus">+</button>
    `

    const btn = document.querySelectorAll('.counter-btn-quantity');

    btn.forEach(btn => {
        btn.addEventListener('click', function () {
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter-value');
            const currentValue = +inp.value;
            let newValue;

            if (direction === 'plus') {
                newValue = currentValue + 1;
            } else {
                newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
            };

            inp.value = newValue;

        });

    });

};

popup();