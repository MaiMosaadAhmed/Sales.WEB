$(document).ready(function () {
    $('#mainNavbar li.active').removeClass('active');
    $('#mainNavbar li.clients-area').addClass('active');
    $('#mainNavbar li.clients-area .item6').addClass('active');
});

initMap();
function initMap() {
    // The location of Uluru
    // const uluru = { lat: -25.344, lng: 131.036 };
    const uluru = [
        { lat: 30.07147408, lng: 31.27632713 },
        { lat: 30.0715120, lng: 31.27644157 },
        { lat: 30.07157516, lng: 31.2764911651611 },
        { lat: 30.0715351104736, lng: 31.2769470214843 },
        { lat: 30.0718555450439, lng: 31.2763748168945 },
        { lat: 30.0717506408691, lng: 31.2764263153076 },
        { lat: 30.0716934204101, lng: 31.2764892578125 },
        { lat: 30.0713729858398, lng: 31.2773189544677 },
        { lat: 30.0712814331054, lng: 31.2773246765136 },
        { lat: 30.0713424682617, lng: 31.2773475646972 },
    ];
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 30.07147408, lng: 31.27632713 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const l = "MO";

    //const markers = uluru.map((location, i) => {
    //    return new google.maps.Marker({
    //        position: location,
    //        // label:marker,
    //        ,
    //    });
    //});
    //new MarkerClusterer(map, markers, {
    //    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    //});
    // The marker, positioned at Uluru
    for (var i = 0; i < uluru.length; i++) {
        const marker = new google.maps.Marker({
            position: uluru[i],
            map: map

        });
    }

}