"use strict"


//Map Initialization on Registration page load
window.onload = () => {
    initMap();
    onSignUp();
}
let idCounter = getIDStorage();

function getIDStorage() {
    const id = localStorage.getItem("id")
    if (id) {
        return +id;
    }
    else {
        return 0;
    }
}
let markersOnMap = [];
 let markerArr = [];
const deleteButton = document.querySelector("#deleteMarker");
function initMap() {
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

function onSignUp(idCounter) {

    const fullname = document.querySelector("#fullname");
    const companyname = document.querySelector("#companyname");
    const contactnumber = document.querySelector("#contactnumber");
    const profession = document.querySelector("#profession");
    onInputCheck();
    const signUpButton = document.querySelector("#signup")
    signUpButton.addEventListener('click', function (e) {
        e.preventDefault();
        checkRegistration();
    });
}

//Checking Input Values on Input;
function onInputCheck() {

    fullname.addEventListener('input', function () {
        lengthChecker(fullname, 6)
    });
    companyname.addEventListener('input', function () {
        lengthChecker(companyname, 3)
    });
    contactnumber.addEventListener('input', function () {
        numberCheckRegEx(contactnumber)
    });
    profession.addEventListener('input', function () {
        lengthChecker(profession, 15)
    });
}

//Checking Input values on submit
function checkRegistration() {
    let bool = true;
    const formElements = document.querySelectorAll(".input-item");
    formElements.forEach(el => {
        if (el.classList.toString().includes("wrong") || el.value.length === 0) {
            bool = false;
        }
    })
    if (!bool) {
        createModal("Oops! Please Fill All Fields :)");
    } else {
        idCounter += 2;
        localStorage.setItem("id", idCounter);
        createMechanic(fullname.value, companyname.value, contactnumber.value, profession.value, markerArr, idCounter);
        window.location.reload();
    }
}

//Length Checker Method
function lengthChecker(obj, num, error) {
    if (obj.value.length < num) {
        obj.classList.add("wrong");
    } else {
        obj.classList.remove("wrong")
    }
}
//Number RegEx Checker
function numberCheckRegEx(obj, error) {
    const regExNumber = /^(\+\d{12,13})$/
    if (obj.value.match(regExNumber)) {
        obj.classList.remove("wrong");
    }
    else {
        obj.classList.add("wrong");
    }
}

//Creating Mechanic on request. Adding it to the Local Storage.
function createMechanic(fullname, companyName, contactnumber, profession, location, id) {
    const mechanic = new Mechanic(fullname, companyName, contactnumber, profession, location, id);
    MechanicArr.push(mechanic);
    localStorage.setItem("mechanics", JSON.stringify(MechanicArr));
}

//Error Modal
function createModal(text) {
    const modal = document.createElement("div");
    modal.classList.add("error-modal");
    const modalTextBox = document.createElement("div");
    modalTextBox.classList.add("modal-text-box");
    const modalTitle = document.createElement("h1");
    modalTitle.textContent = text;
    const modalButton = document.createElement("button");
    modalButton.classList.add("modal-button");
    modalButton.textContent = "OK";

    modalTextBox.appendChild(modalTitle);
    modalTextBox.appendChild(modalButton);
    modal.appendChild(modalTextBox);
    document.body.appendChild(modal);
    modalButton.addEventListener('click', function () {
        document.body.removeChild(modal);
    })
}