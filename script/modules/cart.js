function cardInit(){
    const cartSide = document.querySelector('.cart');
    const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]');

    if (cartStorage.length) {
        cartStorage.forEach (elem => {
            let { id, img, title, p, counter, price } = elem;
            let newCard = document.createElement('div');
            newCard.classList.add('card');
            newCard.id = `${id}`;

            newCard.innerHTML = `
            <img src="${img}" alt="#">
            <div class="card-info">
                <h3>${title}</h3>
                <p class="description">${p}</p>
            </div>
            <div class="counter">
                <button class="counter-btn" data-direction="minus">-</button>
                <input type="text" value="${counter}" class="counter-value">
                <button class="counter-btn" data-direction="plus">+</button>
            </div>
                <h3 class="price">${price}</h3>
                <button class="card-delete" data-id='${id}'>&#10006;</button>
            `

            cartSide.appendChild(newCard);

        });

        // Удаление
        const btnDel = document.querySelectorAll('.card-delete');

        btnDel.forEach(btnDel => {

            btnDel.addEventListener('click', () => {
                let elem = btnDel.dataset.id
                const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]');
                const newEl = cartStorage.filter(obj => obj.id !== elem);
                localStorage.setItem('cart', JSON.stringify(newEl));
                btnDel.parentElement.remove();

                let btnCount = document.querySelectorAll('.card-delete');
                if (btnCount.length === 0) 
                cardInit();
                cardWidget();
                cardCounter();
            });

        });

        // Счетчик

        const btn = document.querySelectorAll('.counter-btn');

        btn.forEach(btn => {
            btn.addEventListener('click', function () {
                const direction = this.dataset.direction;
                const inp = this.parentElement.querySelector('.counter-value');
                const currentValue = +inp.value;
                let newValue;

                if (direction === 'plus') {
                    let cartContainer = JSON.parse(localStorage.getItem('cart') || '[]');
                    let parentId = this.parentElement.parentElement.id
                    newValue = currentValue +1;

                    cartContainer = cartContainer.map(item => {
                        if (item.id === parentId){
                            item.counter = newValue;
                        }

                        return item;
                    });

                    localStorage.setItem('cart', JSON.stringify(cartContainer));

                } else {
                    let cartContainer = JSON.parse(localStorage.getItem('cart') || '[]');
                    let parentId = this.parentElement.parentElement.id
                    newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;

                    cartContainer = cartContainer.map(item => {
                        if (item.id === parentId){
                            item.counter = newValue;
                        }

                        return item;
                    });

                    localStorage.setItem('cart', JSON.stringify(cartContainer));
                    
                };

                inp.value = newValue;
                cardCounter();

            });

        });

        // Итого
        function cardCounter() {
            let cartStorage = JSON.parse(localStorage.getItem('cart'));
            const total = document.querySelector('.total').children[0];
            let prise = cartStorage.reduce((price, item) => (price += parseInt(item.price) *  item.counter), 0);
            total.innerText = `Итого: ${prise} BYN`;
        };

        cardCounter();
    };

    // Пустая корзина
    if (cartStorage.length <= 0) {

        let cardNull = document.createElement('div');
        cardNull.classList.add('card-null');

        cardNull.innerHTML = `
        <div class="container-card-null">
            <span class="icon-card-null"></span>
            <h3>Корзина пуста</h3>
            <button class="btn-card-null"><a href="../../index.html">Посмотреть меню</a></button>
        </div>
        `

        const total = document.querySelector('.total').children[0];
        total.innerText = total.innerText + ` 0 BYN`;

        cartSide.appendChild(cardNull);

    };

    // Кол-во товара в корзине
    function cardWidget(){
        let cartStorage = JSON.parse(localStorage.getItem('cart'));
        let widget = document.querySelector('.card-widget');
        widget.innerHTML = `
        <span>${cartStorage.length}</span>
        `;
    };

    cardWidget();

};

cardInit();