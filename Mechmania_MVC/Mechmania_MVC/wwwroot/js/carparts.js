const tipsData = {
    engine: "Car engines experience a variety of problems. Some of these can be fixed simply, and others may make the engine permanently inoperable. ",
    oil: " There are three types of motor oils – Mineral/regular, Semi-synthetic and Synthetic. Be sure to check for the SAE international rating to.",
    diagnose: "Car diagnostic tests scan your car’s components and systems to check for issues with components like the engine, transmission, oil tank, throttle, and many more.",
    tire: "Tires are made up of over 200 materials. In addition to rubber for traction, tires include various metals such as titanium and cobalt",
    gear: "Gears are made out of a wide variety of materials. Plastic, steel, and non-ferrous alloys are typically used to create bevel gears. Plastics are utilized.",
    battery: "Recycling batteries is not only the sustainable choice, but it is also the responsible choice. All batteries use materials that could cause harm "
}
export default function carPartSelect() {
    const buttons = document.querySelectorAll(".button-item");
    console.log(buttons)
    const tipTextBox = $(".tip-text");
    buttons.forEach(button => button.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.id;
        const text = tipsData[id];
        document.querySelectorAll(".caricon").forEach(el => el.classList.remove("selected"))
        document.getElementById(`${id}-img`).classList.add("selected")
        tipTextBox.show();
        tipTextBox.text(text);

    }))
}