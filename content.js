let cooking = [document.getElementById("cooking_image"), document.getElementById("cooking_description")];
let books = [document.getElementById("books_image"), document.getElementById("books_description")];
let programming = [document.getElementById("programming_image"), document.getElementById("programming_description")];

// TODO: Optimize and refactor?
const ContentOnMouseEnter = e => {
    // Get target subsection
    let section = e.target.id.split("_")[0];
    console.log(section);
}

const ContentOnMouseLeave = e => {
    // Get target subsection
    let section = e.target.id.split("_")[0];
    console.log(section);
}

cooking.forEach(element => {
    element.addEventListener("mouseenter", ContentOnMouseEnter);
    element.addEventListener("mouseleave", ContentOnMouseLeave);
});
books.forEach(element => {
    element.addEventListener("mouseenter", ContentOnMouseEnter);
    element.addEventListener("mouseleave", ContentOnMouseLeave);
});
programming.forEach(element => {
    element.addEventListener("mouseenter", ContentOnMouseEnter);
    element.addEventListener("mouseleave", ContentOnMouseLeave);
});
