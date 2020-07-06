let gridSize = 16;
let grid = [];
let gridWrapper = document.querySelector("#grid");
let brs = document.querySelectorAll("br");
let originalColour = 'black';
let colourPicker = document.querySelector(".jscolor");

let buttonColours = document.getElementById('colours').querySelectorAll('button');
buttonColours.forEach(function(button){
    button.style.borderColor = button.name;
    button.style.opacity = 0.7;
    button.addEventListener('click', function(){
        originalColour = this.name;
    })
})

let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', function(){
    gridSize = prompt("Please enter a grid size");
    grid.forEach(function(element){element.style.backgroundColor = 'white';});
    removeGrid();
    newGame();
});

let mouseDown = false;
gridWrapper.addEventListener('mousedown', function(){
    mouseDown = true;
})

gridWrapper.addEventListener('mouseup', function(){
    mouseDown = false;
})

function removeGrid(){
    grid.forEach(function(element){gridWrapper.removeChild(element);});
    for(let y=0; y<100; y++){gridWrapper.innerHTML = gridWrapper.innerHTML.replace('<br>','')}
    grid = [];
}

function createGrid(gridSize){
    for(let y=0; y<gridSize; y++){
        for(let x=0; x<gridSize; x++){
            let gridSquare = document.createElement("grid-square")
            gridWrapper.appendChild(gridSquare);
            grid.push(gridSquare);
        }
        gridWrapper.appendChild(document.createElement("br"));
    }
}

function newGame(){
    createGrid(gridSize);
    
    grid.forEach(function(element){
        element.addEventListener('mouseover', hover);
        element.addEventListener('mousedown', clicked);
        element.addEventListener('mouseout', original);
    })

    function hover(){
        this.style.opacity = 0.5;
        if(!this.style.backgroundColor){this.style.backgroundColor='grey'}
        if(mouseDown){
            return getColour(this);
        }
    }

    function clicked(){
        return getColour(this);
    };

    function original(){
        this.style.opacity = 1;
        if(this.style.backgroundColor==='grey'){this.style.backgroundColor=''}
        if(mouseDown){
            return getColour(this);
        }
    }

    function getColour(colour){
        return colour.style.backgroundColor = colourPicker.style.backgroundColor;
    }
    
}
newGame();