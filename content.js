let cooking = [document.getElementById("cooking_image"), document.getElementById("cooking_description")];
let books = [document.getElementById("books_image"), document.getElementById("books_description")];
let programming = [document.getElementById("programming_image"), document.getElementById("programming_description")];
let content = {"cooking":cooking, "books":books, "programming":programming};

const ContentOnMouseEnter = e => {
    // Get target subsection
    let section = e.target.id.split("_")[0];
    // Get subsection title letters
    let animationTargets = content[section][1];
    console.log(animationTargets);
    // TODO: Check if prev target section == current, if yes dont animate again
}

const ContentOnMouseLeave = e => {
    // Get target subsection
    let section = e.target.id.split("_")[0]; 
}

for(var key in content){
    content[key].forEach(el => {
        el.addEventListener("mouseenter", ContentOnMouseEnter);
        el.addEventListener("mouseleave", ContentOnMouseLeave);
    })
}