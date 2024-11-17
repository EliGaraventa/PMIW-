//Eliana Garaventa y Tobias Cisneros
// https://youtu.be/tRtVdvCNA3Q

let juegoPacman; 
let imagenPared; 
let musicaIniciada = false;
let sound;

function preload(){
    sound = loadSound('assets/jugar.mp3');
}
function setup() {
  createCanvas(640, 480);
  juegoPacman = new Juego();
  juegoPacman.nivel.cargarImagen();
}

function draw() {
  juegoPacman.dibujar();
}

function keyPressed() {
  juegoPacman.teclaPresionada();
}

function mousePressed() {
  juegoPacman.mousePressed();
}
