let github = document.getElementById("github");
let mail = document.getElementById("mail");
let linkedin = document.getElementById("linkedin");

const ContactOnMouseEnter = e => {
    let icon = e.srcElement.childNodes[1];
    anime({
        targets:icon,
        rotate: 360,
        scale: 1.25
    })
}

const ContactOnMouseLeave = e => {
    let icon = e.srcElement.childNodes[1];
    anime({
        targets:icon,
        rotate: 0,
        scale: 1
    })
}

github.addEventListener("mouseenter", ContactOnMouseEnter);
mail.addEventListener("mouseenter", ContactOnMouseEnter);
linkedin.addEventListener("mouseenter", ContactOnMouseEnter);

github.addEventListener("mouseleave", ContactOnMouseLeave);
mail.addEventListener("mouseleave", ContactOnMouseLeave);
linkedin.addEventListener("mouseleave", ContactOnMouseLeave);