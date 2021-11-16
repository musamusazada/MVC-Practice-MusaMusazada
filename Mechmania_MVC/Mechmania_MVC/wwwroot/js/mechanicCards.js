"use strict";
import getLocalStorage from './storageGet.js'
import randomImg from './randomIMG.js';
export default function renderCards(cardBox) {
    cardBox.innerHTML = "";
    const mechanicsArr = getLocalStorage();
    if (mechanicsArr.length > 0) {
        mechanicsArr.forEach(el => cardCreator(el, cardBox));
    }
    else {
        cardBox.textContent = "No available Mechanics"
    }

}

function cardCreator(obj, cardBox) {
    //Creating Card
    const card = document.createElement("div");
    card.classList.add("item");
    card.classList.add("card-mechanic");
    card.setAttribute("id", `${obj._userID}`);

    //Card Fields
    //Random Profile Img
    const imgBox = document.createElement("div");
    imgBox.classList.add("img-box-profile");
    const img = document.createElement("img");
    img.setAttribute("src", randomImg());
    imgBox.appendChild(img);
    //Fullname
    const fullName = document.createElement("h1");
    fullName.textContent = `Full Name: ${obj._name}`;
    //Company Name
    const companyName = document.createElement("h1");
    companyName.textContent = `Company Name: ${obj._company}`;
    //Contact Number
    const contactNum = document.createElement("h1");
    contactNum.textContent = `Contact: ${obj._contact}`;
    //Card Heart
    const heart = document.createElement("i");
    heart.setAttribute("id", `${+obj._userID + 1}`)
    heart.classList.add("far");
    heart.classList.add("fa-heart");
    heart.classList.add("heart");
    card.appendChild(heart);
    card.appendChild(imgBox);
    card.appendChild(fullName);
    card.appendChild(companyName);
    card.appendChild(contactNum);

    cardBox.appendChild(card);
}