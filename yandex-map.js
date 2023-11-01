initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.querySelector('#YMapsID'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [71.427581, 51.129795],

                // Уровень масштабирования
                zoom: 15,
            }
        }
    );
    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
    map.setBehaviors(['drag', 'pinchZoom', 'mouseTilt']);
}