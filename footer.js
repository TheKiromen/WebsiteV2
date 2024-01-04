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

github.addEventListener("mouseenter", ContentOnMouseEnter);
mail.addEventListener("mouseenter", ContentOnMouseEnter);
linkedin.addEventListener("mouseenter", ContentOnMouseEnter);

github.addEventListener("mouseleave", ContentOnMouseLeave);
mail.addEventListener("mouseleave", ContentOnMouseLeave);
linkedin.addEventListener("mouseleave", ContentOnMouseLeave);