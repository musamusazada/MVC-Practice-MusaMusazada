"use strict"

import sliderContent from './sliderContent.js';
import getStorage from './storageGet.js';
import { getFavStorage } from './favCard.js'
let favedCards;
let countFav;
let localStorageArr;
$(document).ready(function () {
    slider();
   

});
window.onload = () => {
    favedCards = getFavStorage();
    localStorageArr = getStorage();
    countFav = document.querySelector("#count");
    countFav.textContent = favedCards.length;
    sliderContent();
}

function slider() {
    $(".favSlider").hide();
    $(".fav--display").click(function () {
        $(".favSlider").slideToggle();
    })

}
