let github = document.getElementById("github");
let mail = document.getElementById("mail");
let linkedin = document.getElementById("linkedin");

const onMouseEnter = e => {
    let icon = e.srcElement.childNodes[1];
    anime({
        targets:icon,
        rotate: 360
    })
    console.log(icon);
}

const onMouseLeave = e => {
    let icon = e.srcElement.childNodes[1];
    anime({
        targets:icon,
        rotate: 0
    })
    console.log(icon);
}

github.addEventListener("mouseenter", onMouseEnter);
mail.addEventListener("mouseenter", onMouseEnter);
linkedin.addEventListener("mouseenter", onMouseEnter);

github.addEventListener("mouseleave", onMouseLeave);
mail.addEventListener("mouseleave", onMouseLeave);
linkedin.addEventListener("mouseleave", onMouseLeave);