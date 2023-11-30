let github = document.getElementById("github");
let mail = document.getElementById("mail");
let linkedin = document.getElementById("linkedin");

const onMouseEnter = e => {
    let icon = e.srcElement.childNodes[1];
    // TODO: start and animation?
    console.log(icon);
}

github.addEventListener("mouseenter", onMouseEnter);
mail.addEventListener("mouseenter", onMouseEnter);
linkedin.addEventListener("mouseenter", onMouseEnter);