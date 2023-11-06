let tileSize = Math.floor(document.body.clientWidth / 50);
// TODO: make cols/rows const. derive tileSize from it
let cols = Math.floor(document.body.clientWidth / tileSize);
let rows = Math.ceil(cols/3);

const wrapper = document.getElementById("banner");
wrapper.style.setProperty("--columns", cols);
wrapper.style.setProperty("--rows", rows);

let toggled = false;

const handleOnClick = index => {
    toggled = !toggled;

    anime({
        targets: ".tile",
        opacity: toggled ? 0 : 1,
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

    // TODO: Based on tile size pick which tiles to mark as "not vanishing ones" to create a logo
    if(index%5==0){tile.classList.add("logoTile")}

    // Nest div inside a tile
    const nestedTile = document.createElement("div");
    nestedTile.classList.add("nestedTile");
    tile.appendChild(nestedTile);

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

    // Update variables
    tileSize = Math.floor(document.body.clientWidth / 50);
    cols = Math.floor(document.body.clientWidth / tileSize);
    rows = Math.ceil(cols/3); 
    toggled = false;

    // Update css vars
    wrapper.style.setProperty("--columns", cols);
    wrapper.style.setProperty("--rows", rows); 

    createTiles(cols * rows);
}


window.onresize = () => createGrid();
createTiles(cols * rows);