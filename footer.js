let github = document.getElementById("github");
let mail = document.getElementById("mail");
let linkedin = document.getElementById("linkedin");

const onMouseEnter = e => {
    let icon = e.srcElement.childNodes[1];
    anime({
        targets:icon,
        rotate: 360,
        scale: 1.25
    })
}

const onMouseLeave = e => {
    let icon = e.srcElement.childNodes[1];
    anime({
        targets:icon,
        rotate: 0,
        scale: 1
    })
}

github.addEventListener("mouseenter", onMouseEnter);
mail.addEventListener("mouseenter", onMouseEnter);
linkedin.addEventListener("mouseenter", onMouseEnter);

github.addEventListener("mouseleave", onMouseLeave);
mail.addEventListener("mouseleave", onMouseLeave);
linkedin.addEventListener("mouseleave", onMouseLeave);