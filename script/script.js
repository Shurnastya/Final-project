// API MAP
function init() {
    let map = new ymaps.Map('map', {
        center: [53.9021212946909,27.55250859833873],
        zoom: 17
    });

    let placemark = new ymaps.Placemark([53.90210688053431,27.555478152444977], {}, {
        // iconLayout: 'default#image',
        // iconImageHref: '../img/marker.png',
        // iconImageSize: [40, 40],
        // iconImageOffset: [0, 0]
    });

    //Убираем лишние элементы с карты 
    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeControl');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');

    map.geoObjects.add(placemark);
};

ymaps.ready(init);

// Slider
const slider = function (className){
    let container = document.querySelector(className)
    let ul = container.querySelector('ul');
    if(!ul) return;

    let slideItems = ul.querySelectorAll('li');
    if(!slideItems || !(slideItems.length > 1)) return;

    const next = function (e){
        let saveNext = e.target.classList.contains('btn-next') ? 'next' : 'prev';
        // let saveNext = '';
        // if(e.target.classList.contains('btn-next')){
        //     saveNext = 'next';
        // }else{
        //     saveNext = 'prev';
        // }

        let x = ul.style.transform || '0';
        x = x.replace('translateX(', '');
        x = x.replace(')', '');
        x = Math.abs(parseInt(x));

        if(saveNext === 'next'){
            if(x < ((slideItems.length * 100) - 100)){
                x += 100;
            }else {
                x = 0;
            };
        };
        if(saveNext === 'prev'){
            if(x > 0){
                x -= 100;
            }else{
                x = (slideItems.length * 100) - 100;
            }
        };


        ul.style.transform = `translateX(-${x}%)`
        console.log(ul.style.transform);
    };

    let btns = document.querySelectorAll('.btn');
    btns.forEach(btn => btn.addEventListener('click', next));
};

slider('.my-slider');