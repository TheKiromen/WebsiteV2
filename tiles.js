const cols = 51;
const rows = 17;
let tileSize = document.body.clientWidth/cols;

const wrapper = document.getElementById("banner");
wrapper.style.setProperty("--columns", cols);
wrapper.style.setProperty("--rows", rows);

// TODO: Fill with apropriate indexes to create logo
// Middle of the canvas (25, 8), where 8 = index 433 ((51*8)+25)
const logoTiles = [433];

let toggled = false;

const handleOnClick = (index, e) => {
    toggled = !toggled;

    console.log(e.target.childNodes[0]);
    e.target.style.opacity = 1;

    // anime({
    //     targets: ".tile",
    //     opacity: toggled ? 0 : 1,
    //     delay: anime.stagger(10, {
    //         grid: [cols, rows],
    //         from: index
    //     })
    //   });
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

    if(logoTiles.includes(index)){
        nestedTile.style.opacity = 1;
        nestedTile.style.background = "#f00"
    }

    tile.onclick = e => handleOnClick(index, e);
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

    // Recalculate tile size
    tileSize = document.body.clientWidth/cols; 
    toggled = false;

    createTiles(cols * rows);
}


window.onresize = () => createGrid();
createTiles(cols * rows);