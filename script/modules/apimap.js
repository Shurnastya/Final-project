export default function init() {
    let map = new ymaps.Map('map', {
        center: [53.90193024244387,27.553482824081406],
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