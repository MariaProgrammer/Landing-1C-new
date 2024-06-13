//подключение яндекс карты

let center = [59.93474177445552,30.330277591735808];

function init() {
  let map = new ymaps.Map('contact-map', {
    center: center,
    zoom: 16

  });

  let placeMark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.svg',
    iconImageSize: [50, 70],
    iconImageOffset: [20, 40]

  });

  map.controls.remove('zoomControl'); // удаляем контрол зуммирования  
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placeMark);
}

ymaps.ready(init);