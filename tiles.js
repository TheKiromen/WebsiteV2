const cols = 51;
const rows = 17;
let tileSize = document.body.clientWidth/cols;

const wrapper = document.getElementById("banner");
wrapper.style.setProperty("--columns", cols);
wrapper.style.setProperty("--rows", rows);

// List of node indexes that compose a logo
const logoTiles = [433,382,383,434,432,483,484,331,332,333,535,534,533,281,282,585,584,230,231,232,636,635,634,685,686,180,181,234,285,632,581,286,337,338,389,390,580,529,528,477,476,425,424,441,442,492,491,542,541,592,591,642,374,375,324,325,274,275,224,129,130,737,736];
const centerTileIndex = 433;

let toggled = false;
let isPointerVisible = true;

const hidePointer = async () => {
    anime({
        targets: "#pointerImage",
        opacity: 0,
        duration: 300,
        easing: "easeInQuint",
        complete: function(anim){
            let pointer = document.getElementById("pointerImage");
            pointer.style.display = "none";
        }
    })
    
}

const handleOnClick = index => {
    if(isPointerVisible){
        hidePointer();
        isPointerVisible = false;
    }

    toggled = !toggled;
    
    anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(10, {
            grid: [cols, rows],
            from: index
        }),
        easing: 'easeOutExpo',
        duration:400
      });
}

const animatePointer = () => {
    anime({
        targets: "#pointerImage",
        width: "200%",
        height: "200%",
        loop: true,
        duration: 1000,
        direction: "alternate",
        easing: "easeInElastic"
    })
}

const createTile = (index) => {
    // Generate single tile
    const tile = document.createElement("div");
    tile.classList.add("tile");

    // Create logo from tiles
    if(logoTiles.includes(index)){
        tile.classList.add("logoTile");
    }

    // Nest div inside a tile
    const nestedTile = document.createElement("div");
    nestedTile.classList.add("nestedTile");
    tile.appendChild(nestedTile);

    // Add animated pointer
    if(index == centerTileIndex){
        let pointerImage = document.createElement("img");
        pointerImage.src = "pointer.png";
        pointerImage.id = "pointerImage";
        nestedTile.appendChild(pointerImage);
    }

    nestedTile.onclick = e => handleOnClick(index);
    return tile;
}

const createTiles = (quantity) => {
    wrapper.style.height = rows * tileSize + "px";
    // Generate list of tile nodes
    Array.from(Array(quantity)).map((tile,index) => {
        wrapper.appendChild(createTile(index));
    })
}

const createGrid = () => {
    // Clear out the nodes
    wrapper.innerHTML = "";

    // Recalculate variables
    tileSize = document.body.clientWidth/cols; 
    toggled = false;
    isPointerVisible = true;

    createTiles(cols * rows);
    animatePointer();
}

window.onresize = () => createGrid();
createTiles(cols * rows);
animatePointer();