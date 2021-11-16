"use strict"
const imgArr = ["~/images/mechanics_profile/mech1.jpg", "~/images/mechanics_profile/mech2.jpg", "~/images/mechanics_profile/mech3.jpg", "~/images/mechanics_profile/mech4.jpg"]
export default function randomImg() {
    return imgArr[Math.round(Math.random() * 2 + 1)];
}