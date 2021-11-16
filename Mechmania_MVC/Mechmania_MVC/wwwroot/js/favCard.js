"use strict"
import sliderContent from "./sliderContent.js";
//Handling what happens while faving a card
export default function favCard() {
    let storedCount = getFavStorage();
    const countFav = document.querySelector("#count");
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach(el => el.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        //Getting Parent Element Id

        const id = el.parentElement.getAttribute("id");
        // el.classList.toggle("clicked");
        el.classList.toggle("fas");
        //If it is not stored add it.
        //Else Remove it from storage
        if (!storedCount.includes(id)) {
            storedCount.push(id);
            countFav.textContent = storedCount.length;
            localStorage.setItem('favorites', storedCount);

        }
        else {
            storedCount = storedCount.filter(el => el !== id);
            countFav.textContent = storedCount.length;
            localStorage.setItem('favorites', storedCount);
        }
        sliderContent();

    }))

}
export function getFavStorage() {
    const storage = localStorage.getItem('favorites');
    if (storage) {
        return storage.split(',');
    }
    else {
        return [];
    }
}