let ramaPos = 0;
let dialogos;
let imagen = [];
let muerte = false;
let decision = false;
let musicaIniciada = false;
let sound;

function preload() {
  dialogos = loadStrings('assets/dialogos.txt');

  for (let i = 0; i <= 91; i++) {
    imagen[i] = loadImage('assets/imagenes/imagen' + i + '.jpeg');
  }
  
  sound = loadSound('assets/musica.mp3');
}

function setup() {
  createCanvas(640, 480);
  textSize(32);
  fill(255);
  stroke(0);
  textAlign(CENTER, TOP);
}

function draw() {
  image(imagen[ramaPos], 0, 0, width, height);
  text(dialogos[ramaPos], 0, 50, width);
  console.log("Esta imagen es la " + ramaPos);

  if (muerte) {
    pantallaMuerte();
  } else if (decision) {
    pantallaDecision();
  } else {
    botonSiguiente();
  }
}

function esPantallaDecision(pos) {
  return pos === 6 || pos === 9 || pos === 13 || pos === 17 || pos === 24 || pos === 27 || pos === 34 || pos === 44 || pos === 60 || pos === 75;
}

function esPantallaMuerte(pos) {
  return pos === 30 || pos === 40 || pos === 47 || pos === 53 || pos === 64 || pos === 70 || pos === 81 || pos === 84 || pos === 87 || pos === 91;
}

function mouseClicked() {
  if (muerte) {
    if (botonCreditos()) {
      ramaPos = 54;
    } else if (botonInicio()) {
      ramaPos = 0;
      muerte = false;
    }
  } else if (decision) {
    if (botonSi()) {
      continuarDecision("si");
    } else if (botonNo()) {
      continuarDecision("no");
    }
  } else if (botonSiguiente()) {
    actualizarRama(1);
  }
}

function actualizarRama(cambio) {
  ramaPos += cambio;
}

function mousePressed() {

  if (!musicaIniciada) {
    sound.loop();
    musicaIniciada = true;
  }
}
