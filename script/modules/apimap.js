export default function init() {
    let map = new ymaps.Map('map', {
        center: [53.90193115887527,27.554072732139808],
        zoom: 17
    });

    let placemark = new ymaps.Placemark([53.90210688053431,27.555478152444977], {}, {
         iconLayout: 'default#image',
         iconImageHref: '../../img/marker.png',
         iconImageSize: [90, 100],
         iconImageOffset: [-45, -70]
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