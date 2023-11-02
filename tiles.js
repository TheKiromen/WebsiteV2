let tileSize = Math.floor(document.body.clientWidth / 50);

let cols = Math.floor(document.body.clientWidth / tileSize);
let rows = Math.ceil(cols/3);

const wrapper = document.getElementById("banner");
wrapper.style.setProperty("--columns", cols);
wrapper.style.setProperty("--rows", rows);

let count = -1;
const colors = [
    "rgb(255,0,0)",
    "rgb(0,255,0)",
    "rgb(0,0,255)"
]

const handleOnClick = index => {
    count++;

    anime({
        targets: '.tile',
        backgroundColor: colors[count % colors.length],
        delay: anime.stagger(10, {
            grid: [cols, rows],
            from: index
        })
      });
}

const createTile = (index) => {
    // Generate single tile
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = e => handleOnClick(index);
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

    // Recalculate col and row count
    tileSize = Math.ceil(document.body.clientWidth / 50);
    cols = Math.floor(document.body.clientWidth / tileSize);
    rows = Math.ceil(cols/3); 

    // Update css vars
    wrapper.style.setProperty("--columns", cols);
    wrapper.style.setProperty("--rows", rows); 

    createTiles(cols * rows);
}


window.onresize = () => createGrid();
createTiles(cols * rows);

// TODO:
// Make banner background an animated gradient (angled 45deg?)
// Style the tiles as in video
// Figure out how to make them into a logo??