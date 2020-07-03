

const Aang = document.querySelector(".Avatar");
const background = document.querySelector("section");

let toggle = false;

Aang.addEventListener("mouseover", () => {

    const timeline = anime.timeline( {
        duration: 300, 
        easing: "easeInBack"
    });

    timeline.add({
        targets: ".Avatar",
        d: [
            {value: toggle ? Aang: background}
        ]
    })
    .add ({
        targets: "section",
        backgroundColor: toggle ? "rgb(255, 255, 255)" : "rgb(0, 0, 4)"
    })

    if(!toggle) {
        toggle = true;
    } else {
        toggle = false;
    };


})