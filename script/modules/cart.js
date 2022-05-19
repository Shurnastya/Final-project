function cardInit(){
    const cartSide = document.querySelector('.cart');

    const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]');

    if (cartStorage.length) {
        cartStorage.forEach (elem => {
            let { img, title, p, price } = elem;
            let newCard = document.createElement('div');
            newCard.classList.add('card');

            newCard.innerHTML = `
            <img src="${img}" alt="#">
            <div class="card-info">
                <h3>${title}</h3>
                <p class="description">${p}</p>
            </div>
            <div class="counter">
                <button class="counter-btn" data-direction="minus">-</button>
                <input type="text" value="1" class="counter-value">
                <button class="counter-btn" data-direction="plus">+</button>
            </div>
                <h3>${price}</h3>
                <button class="card-delete">&#10006;</button>
            `

            cartSide.appendChild(newCard);

        });

        cardCounter();
    };

    // Кол-во товара в корзине
    function cardWidget(){
        let widget = document.querySelector('.card-widget');
        widget.innerHTML = `
        <span>${cartStorage.length}</span>
        `;
    };

    cardWidget();

    // Счётчик
    const btn = document.querySelectorAll('.counter-btn');

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

    // Удаление
    const btnDel = document.querySelectorAll('.card-delete');


    // Total
    function cardCounter() {
        const total = document.querySelector('.total').children[0];
        let prise = cartStorage.reduce((price, item) => price += parseInt(item.price), 0);
        total.innerText = total.innerText + ` ${prise} BYN`;
    };

};

cardInit();