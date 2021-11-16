// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
"use strict"

import carPartSelect from './carparts.js'
import renderCards from './mechanicCards.js';
import favCard from './favCard.js';
import { getFavStorage } from './favCard.js'
import sliderContent from './sliderContent.js';
import getStorage from './storageGet.js';

//Variables--DOM Objects
//Faved Count
let countFav;
//Faved IDs
let favedCards = [];
let cardContainer;
let localStorageArr;
//Slider;
//Create Carousel as soon as possible.
$(document).ready(function () {
    slider();
    carouselCreate()

});
window.onload = () => {
    favedCards = getFavStorage();
    localStorageArr = getStorage();
    console.log(localStorageArr[0])
    cardContainer = document.querySelector(".owl-carousel");
    countFav = document.querySelector("#count");
    countFav.textContent = favedCards.length;
    favedCards
    carPartSelect();
    renderCards(cardContainer);
    favCard();
    sliderContent();

    favedCardsOnLoad(favedCards);

    window.addEventListener('storage', () => {
        renderCards(cardContainer);
        favCard();
        window.location.reload();

    })

}

function favedCardsOnLoad(favedCards) {
    favedCards.forEach(el => {
        document.getElementById(`${+el + 1}`).classList.add("fas");
    })
}

//Carousel Functin 
//+ Options
function carouselCreate() {
    $(".owl-carousel").owlCarousel({
        loop: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        stagePadding: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })

}
//Favorite Slider
function slider() {
    $(".favSlider").hide();
    $(".fav--display").click(function () {
        $(".favSlider").slideToggle();
    })

}

