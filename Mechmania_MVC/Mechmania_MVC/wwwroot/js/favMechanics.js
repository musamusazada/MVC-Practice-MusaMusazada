import randomImg from './randomIMG.js'
let favObjects;
let favWrapper;
window.onload = () => {
    favObjects = JSON.parse(localStorage.getItem('allFavObjects'));
    favWrapper = document.querySelector(".fav-wrapper");
    favObjects.forEach(el => cardCreator(el, favWrapper));
    window.addEventListener('storage', () => {
        favObjects.forEach(el => cardCreator(el, favWrapper));
        window.location.reload();

    })

}

function cardCreator(obj, favWrapper) {
    //Creating Card
    const card = document.createElement("div");
    card.classList.add("col-12");
    card.classList.add("card-favorite");
    // card.setAttribute("id",`${obj._company}`);

    //Card Fields
    //Random Profile Img
    const imgBox = document.createElement("div");
    imgBox.classList.add("img-box-profile");
    const img = document.createElement("img");
    img.setAttribute("src", randomImg());
    imgBox.appendChild(img);
    //Text Box
    const textBox = document.createElement("div")
    textBox.classList.add("fav-text-box")
    //Fullname
    const fullName = document.createElement("h1");
    fullName.textContent = `Full Name: ${obj._name}`;
    //Company Name
    const companyName = document.createElement("h1");
    companyName.textContent = `Company Name: ${obj._company}`;
    //Contact Number
    const contactNum = document.createElement("h1");
    contactNum.textContent = `Contact Number: ${obj._contact}`;
    const infoAbout = document.createElement("h1");
    infoAbout.textContent = `Biography: ${obj._info}`;
    const loc = document.createElement("p");
    const locObj = obj._location[0];
    codeAddress(locObj, loc);
    textBox.appendChild(fullName);
    textBox.appendChild(companyName);
    textBox.appendChild(contactNum);
    textBox.appendChild(infoAbout);
    textBox.appendChild(loc);
    card.appendChild(imgBox);
    card.appendChild(textBox);

    favWrapper.appendChild(card);
}


//Function takes Location Lat and Lng. Also the Element.
//Finds the location ,takes the name, assigns it to textContent
function codeAddress(locationObj, loc) {
    const geocoder = new google.maps.Geocoder();
    let location = {};
    Object.assign(location, locationObj)
    geocoder.geocode({ 'location': location }, function (results, status) {
        if (status == 'OK') {
            loc.textContent = `Location: ${results[1].address_components[0].long_name}, ${results[1].address_components[1].long_name}`
        } else {
            loc.textContent = "No Location Available";
        }

    });

}