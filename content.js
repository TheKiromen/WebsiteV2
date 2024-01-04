let cooking = [document.getElementById("cooking_image"), document.getElementById("cooking_description")];
let books = [document.getElementById("books_image"), document.getElementById("books_description")];
let programming = [document.getElementById("programming_image"), document.getElementById("programming_description")];
let content = {"cooking":cooking, "books":books, "programming":programming};

const ContentOnMouseEnter = e => {
    // Get target subsection
    let section = e.target.id.split("_")[0];
    let title = content[section][1].childNodes[1].childNodes;
    // Get subsection title letters
    let titleLetters = Array.prototype.slice.call(title).slice(1,title.length-1);
    // Get subsection image
    let sectionImage = content[section][0];

    // TODO: Add some animation to the images
    anime({
        targets: titleLetters,
        color: "#00f4ff",
        scale: 1.25,
        'letter-spacing': "5px",
        easing: "easeInOutQuad",
        duration: 100,
        delay: anime.stagger(30)
    })
}

const ContentOnMouseLeave = e => {
    // Get target subsection
    let section = e.target.id.split("_")[0];
    let title = content[section][1].childNodes[1].childNodes;
    // Get subsection title letters
    let animationTargets = Array.prototype.slice.call(title).slice(1,title.length-1);
    // Get subsection image
    let sectionImage = content[section][0];
    
    anime({
        targets: animationTargets,
        color: "#EEEEEE",
        scale: 1,
        'letter-spacing': "0px",
        easing: "easeInOutQuad",
        duration: 100,
        delay: anime.stagger(30)
    })
}

for(var key in content){
    content[key].forEach(el => {
        el.addEventListener("mouseenter", ContentOnMouseEnter);
        el.addEventListener("mouseleave", ContentOnMouseLeave);
    })
}