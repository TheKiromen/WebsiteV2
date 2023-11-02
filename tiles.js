let cols = Math.floor(document.body.clientWidth / 50);
let rows = Math.ceil(cols/3);

const wrapper = document.getElementById("banner");
wrapper.style.setProperty("--columns", cols);
wrapper.style.setProperty("--rows", rows);
wrapper.onclick = e => {
    anime({
        targets: '.tile',
        rotate: '1turn',
        duration: 1000,
      });
}

const createTile = (index) => {
    // Generate single tile
    const tile = document.createElement("div");
    tile.classList.add("tile");
    return tile;
}

const createTiles = (quantity) => {
    // Generate list of tile nodes
    Array.from(Array(quantity)).map((tile,index) => {
        wrapper.appendChild(createTile(index));
    })
}

const createGrid = () => {
    // Clear out the nodes
    wrapper.innerHTML = "";

    // Recalculate col and row count
    cols = Math.floor(document.body.clientWidth / 50);
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
// Make them interactive
// Figure out how to make them into a logo??
// Try to not break up animation when clicking multiple times??