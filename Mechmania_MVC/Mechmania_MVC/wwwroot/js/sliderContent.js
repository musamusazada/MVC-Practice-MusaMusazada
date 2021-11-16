import getStorage from "./storageGet.js";
import { getFavStorage } from "./favCard.js";
export default function sliderContent(favedCards, storage) {
    const slider = document.querySelector(".favSlider");
    slider.innerHTML = "";
    let Cards = getFavStorage();
    let StorageArr = getStorage();
    let allFavObj = [];
    if (Cards.length > 0) {
        StorageArr.forEach(el => {

            if (Cards.includes(el._userID.toString())) {
                allFavObj.push(el);
                localStorage.setItem('allFavObjects', JSON.stringify(allFavObj))
                const card = document.createElement("div");
                card.textContent = `${el._name}`;
                slider.appendChild(card);
            }
        })
        createButton(slider)

    }
    else {
        slider.textContent = "No Favorites"
    }
}

function createButton(slider) {
    const btn = document.createElement("button");
    btn.setAttribute("id", "see-fav-button")
    btn.textContent = "See Favorites"
    slider.appendChild(btn);
    btn.addEventListener('click', function () {
        location.href = 'fav-mechanics.html'
    }
    );
}



