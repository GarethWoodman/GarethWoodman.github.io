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
  $(button).click(function(){ originalColour = this.name })
})

$('#small').click(function() { reset(16) })
$('#medium').click(function(){ reset(20) })
$('#large').click(function() { reset(24) })

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
  $('grid-square').hover(function() {
    this.style.opacity = 0.5;
    if(!this.style.backgroundColor){ this.style.backgroundColor='grey' }
    if(mouseDown){ return getColour(this) }
  })

  $('grid-square').click(function() { return getColour(this) })

  $('grid-square').mouseout(function() {
    this.style.opacity = 1;
    if(this.style.backgroundColor==='grey'){ this.style.backgroundColor='' }
    if(mouseDown){ return getColour(this) }
  })

  function getColour(colour){
    return colour.style.backgroundColor = colourPicker.style.backgroundColor;
  }

  document.querySelector("#left-bar").style.height = gridWrapper.style.height
}

createGrid(16)
newGame()
