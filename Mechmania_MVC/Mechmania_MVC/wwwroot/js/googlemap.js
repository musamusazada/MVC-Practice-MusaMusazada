"use strict"
//Array for Markers.
//Every Registered Shop will go to Local Storage.
let markersOnMap = [];
export let markerArr = [];
const deleteButton = document.querySelector("#deleteMarker");
export function initMap() {
    //Creating map and setting basic options. Baku, zoom level 10 (city);
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.37767, lng: 49.89201 },
        zoom: 10,
    });

    //Listening for click on Map
    google.maps.event.addListener(map, 'click', function (event) {
        createMarker({ coords: event.latLng });
    })


    //Creating Marker on Click on the Map
    function createMarker(props) {
        const companyName = document.querySelector("#companyname").value;
        const marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            title: `${companyName}`
        })
        const infoWindow = new google.maps.InfoWindow({
            content: `<h4 class="infotext">${companyName}</h4>`
        })
        marker.addListener('click', function () {
            infoWindow.open(map, marker)
        })
        markerArr.push(marker.position);
        markersOnMap.push(marker);

    }

    //Deleting Marker from Map on Delete Click.
    deleteButton.addEventListener('click', function (e) {
        e.preventDefault();
        markersOnMap.forEach(el => el.setMap(null));
        markersOnMap = [];
        markerArr = [];
    })

}
