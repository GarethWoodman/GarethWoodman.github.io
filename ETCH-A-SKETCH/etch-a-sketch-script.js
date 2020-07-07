//let gridSize = 16;
let grid = [];
let mouseDown = false;
let originalColour = 'black';

let brs = document.querySelectorAll("br");
let gridWrapper = document.querySelector("#grid");
let colourPicker = document.querySelector(".jscolor");
let buttonColours = document.getElementById('colours').querySelectorAll('button');

buttonColours.forEach(function(button){
  button.style.borderColor = button.name;
  button.style.opacity = 0.7;
  button.addEventListener('click', function(){
    originalColour = this.name;
  })
})

let smallBtn = document.querySelector('#small')
smallBtn.addEventListener('click', function(){ reset(16) })

let mediumBtn = document.querySelector('#medium')
mediumBtn.addEventListener('click', function(){ reset(20) })

let largeBtn = document.querySelector('#large')
largeBtn.addEventListener('click', function(){ reset(24) })

function reset(size){
  grid.forEach(function(element){element.style.backgroundColor = 'white';});
  removeGrid();
  createGrid(size)
  newGame();
}


gridWrapper.addEventListener('mousedown', function(){ mouseDown = true })
gridWrapper.addEventListener('mouseup', function(){ mouseDown = false })

function removeGrid(){
  grid.forEach(function(element){gridWrapper.removeChild(element);});
  for (let y=0; y<100; y++){
    gridWrapper.innerHTML = gridWrapper.innerHTML.replace('<br>','')
  }
  grid = []
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
  grid.forEach(function(element){
    element.addEventListener('mouseover', hover);
    element.addEventListener('mousedown', clicked);
    element.addEventListener('mouseout', original);
  })

  function hover(){
    this.style.opacity = 0.5;
    if(!this.style.backgroundColor){ this.style.backgroundColor='grey' }
    if(mouseDown){ return getColour(this) }
  }

  function clicked(){
    return getColour(this);
  };

  function original(){
    this.style.opacity = 1;
    if(this.style.backgroundColor==='grey'){ this.style.backgroundColor='' }
    if(mouseDown){ return getColour(this) }
  }

  function getColour(colour){
    return colour.style.backgroundColor = colourPicker.style.backgroundColor;
  }

}

createGrid(16)
newGame()
