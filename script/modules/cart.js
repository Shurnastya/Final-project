function cardInit(){
    const cartSide = document.querySelector('.cart');
    const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]');

    if (cartStorage.length) {
        cartStorage.forEach (elem => {
            let { id, img, title, p, price } = elem;
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
                <div class="counter-item" data-counter>1</div>
                <button class="counter-btn" data-direction="plus">+</button>
            </div>
                <h3 class="price">${price}</h3>
                <button class="card-delete">&#10006;</button>
            `

            cartSide.appendChild(newCard);

        });

        // Удаление
        const btnDel = document.querySelectorAll('.card-delete');

        btnDel.forEach(btnDel => {

            btnDel.addEventListener('click', (elem) => {
                const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]');
                const newEl = cartStorage.filter(obj => obj.id !== elem.path[1].id);
                localStorage.setItem('cart', JSON.stringify(newEl));
                elem.path[1].remove();
            });

        });

        // Счетчик
        function counter(){
            window.addEventListener('click', function (event) {
    
                if (event.target.dataset.direction === 'plus' || event.target.dataset.direction === 'minus') {
                    const counterWrapper = event.target.closest('.counter');
                    const counter = counterWrapper.querySelector('[data-counter]');
    
                    if (event.target.dataset.direction === 'plus'){
                        counter.innerText = ++counter.innerText;
                    };
        
                    if (event.target.dataset.direction === 'minus'){
                        if (parseInt(counter.innerText) > 1){
                            counter.innerText = --counter.innerText;
                        };
                    };
                };
    
            });
        };

        counter();

        // Итого
        function cardCounter() {
            const total = document.querySelector('.total').children[0];
            let prise = cartStorage.reduce((price, item) => price += parseInt(item.price), 0);
            total.innerText = total.innerText + ` ${prise} BYN`;
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
        let widget = document.querySelector('.card-widget');
        widget.innerHTML = `
        <span>${cartStorage.length}</span>
        `;
    };

    cardWidget();

};

cardInit();