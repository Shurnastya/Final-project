export default function card (){ 

    const cards = document.querySelectorAll('.cart-product');

    cards.forEach((elem) => {

        const id = elem.dataset.id;
        const btn = elem.childNodes[3].childNodes[9];
        const img = elem.children[0].currentSrc;
        const title = elem.childNodes[3].childNodes[1].innerText;
        const p = elem.childNodes[3].childNodes[5].innerText;
        const price = elem.childNodes[3].childNodes[7].innerText;

        function add() {
            if (localStorage.getItem('cart')) {
                let data = JSON.parse(localStorage.getItem('cart'));
                if (data.some(elem => elem.p === p)) {
                    btn.innerHTML = 'Добавлено <span class="icon-card"></span>';
                };
            };
        };

        btn.addEventListener('click', () => {
            const cartStorage = localStorage.getItem('cart') || '[]';
            const cart = JSON.parse(cartStorage)
            const card = { id, img, title, p, price };
            localStorage.setItem('cart', JSON.stringify([...cart, card]));
        });

        add();

    });

    // Кол-во товара в корзине
    function cardWidget(){
        const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    
        let widget = document.querySelector('.card-widget');
        widget.innerHTML = `
        <span>${cartStorage.length}</span>
        `;
    };
    
    cardWidget();

};