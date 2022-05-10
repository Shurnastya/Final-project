export default function card (){ 
    const cards = document.querySelectorAll('.cart-product');

    cards.forEach((elem) => {

        const btn = elem.childNodes[3].childNodes[9];
        const img = elem.children[0].currentSrc;
        const title = elem.childNodes[3].childNodes[1].innerText;
        const p = elem.childNodes[3].childNodes[5].innerText;
        const price = elem.childNodes[3].childNodes[7].innerText;

        btn.addEventListener('click', () => {
            const cartStorage = localStorage.getItem('cart') || '[]';
            const cart = JSON.parse(cartStorage)
            const card = { img, title, p, price }
            localStorage.setItem('cart', JSON.stringify([...cart, card]))
        });
    });
};