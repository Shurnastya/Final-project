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
function slider (){
    const image = document.querySelectorAll('.slider .slider-line img');
    const sliderLine = document.querySelector('.slider-line');
    let count = 0;
    let width;

    function initi(){

        width = document.querySelector('.slider-line').offsetWidth;
        sliderLine.getElementsByClassName.width = width*image.length + 'px';
        image.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });

        rollSlider();
    };

    window.addEventListener('resize', initi);
    initi();

    document.querySelector('.slider-prev').addEventListener('click', function(){

        count--;
        if (count < 0 ){
            count = image.length -1;
        }
        rollSlider();

    });

    document.querySelector('.slider-next').addEventListener('click', function(){

        count++;
        if (count >= image.length){
            count = 0;
        }
        rollSlider();

    });

    function rollSlider(){
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    };

};

slider();

//Popup