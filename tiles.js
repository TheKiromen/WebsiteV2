const cols = 51;
const rows = 17;
let tileSize = document.body.clientWidth/cols;

const wrapper = document.getElementById("banner");
wrapper.style.setProperty("--columns", cols);
wrapper.style.setProperty("--rows", rows);

// TODO: Fill with apropriate indexes to create logo
// Middle of the canvas (25, 8), where 8 = index 433 ((51*8)+25)

// Smaller Version
// const logoTiles = [433,432,381,483,330,534,279,585,278,277,276,584,583,582,531,327,326,377,428,479,530,273,324,579,528,527,323,374,373,476,475,424,423];

// Larger Version 
const logoTiles = [433,432,381,330,279,228,483,534,585,636,227,226,635,634,633,582,225,276,275,326,376,530,581,529,478,427,325,221,272,629,578,577,526,525,474,473,271,322,321,372,371,422,421];
let logoIndexes = [];

let toggled = false;

const handleOnClick = (index, e) => {
    // toggled = !toggled;

    if(e.target.classList.contains("nestedTile")){
        let opacity = 0;

        if(logoIndexes.includes(index)){
            logoIndexes.splice(logoIndexes.indexOf(index),1);
        }else{
            opacity = 1;
            logoIndexes.push(index);
        }

        e.target.style.opacity = opacity;
        console.log(logoIndexes.toString());
    }
    
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

    nestedTile.onclick = e => handleOnClick(index, e);
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