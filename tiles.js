const cols = 51;
const rows = 17;
let tileSize = document.body.clientWidth/cols;

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

      anime({
        targets: "#logoImg",
        opacity: toggled ? 1 : 0,
        duration: 2000
      })
}

const createTile = (index) => {
    // Generate single tile
    const tile = document.createElement("div");
    tile.classList.add("tile");


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

    // Recalculate tile size
    tileSize = document.body.clientWidth/cols; 
    toggled = false;

    createTiles(cols * rows);
}


window.onresize = () => createGrid();
createTiles(cols * rows);