let decision = false;
let muerte = false;
let siguiente = false;
let musicaIniciada = false;
let sound;

let rama = 0;
let ramaPos = 0;

let inicio = []; //Cuando es inicio, es 0
let InicioTextos;

let rama1 = []; //Cuando es rama1, es 1
let rama1dialogos;

let rama1_2 = []; //Cuando es rama1_2, es 2
let rama1_2dialogos;

let rama1_3 = []; //Cuando es rama1_3, es 3
let rama1_3dialogos;

let rama2a = []; //Cuando es rama2a, es 4
let rama2a_dialogo;

let rama2_1 = []; //Cuando es rama2_1, es 5
let rama2_1dialogo;

let rama2_2 = []; //Cuando es rama2_2, es 6
let rama2_2dialogo;

let rama3 = []; //Cuando es rama3, es 7
let rama3dialogo;

let rama4 = []; //Cuando es rama4, es 8
let rama4dialogo;

let rama5 = []; //Cuando es rama5, es 9
let rama5dialogo;

function setup() {
  createCanvas(640, 480);
  textSize(32);
  fill(255);
  stroke(0);
  textAlign(CENTER, TOP);
}

function draw() {
  if (muerte && ramaPos > 1 && ramaPos < 5 && rama === 0) {
    image(fin1, 0, 0, width, height);
    pantallaMuerte();
    return;
  }
  
  if (rama === 1) {
    image(rama1[ramaPos], 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama1dialogos[ramaPos], 0, 50, width);
    if (ramaPos === 3) {
      decision = true;
      pantallaDecision();
    } else {
      botonSiguiente();
    }
    if (ramaPos === 8) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

  if (rama === 2) {
    image(rama1_2[ramaPos], 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama1_2dialogos[ramaPos], 0, 50, width);
    botonSiguiente();

    if (ramaPos === 2 && rama === 2) {
      decision = true;
      pantallaDecision();
    }
    if (ramaPos === 5 && rama === 2) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }
  if (rama === 3) {
    image(rama1_3[ramaPos], 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama1_3dialogos[ramaPos], 0, 50, width);
    botonSiguiente();
    if (ramaPos === 4 && rama === 3) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    } if ( ramaPos === 6){
      pantallaMuerte();
      siguiente = false;
      
    }
    return;
  }
  
  if (rama === 4) {
    image(rama2a[ramaPos], 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama2a_dialogos[ramaPos], 0, 50, width);
    botonSiguiente();

    if (ramaPos === 3 && rama === 4) {
      decision = true;
      pantallaDecision();
      siguiente = true;
    }
    if (ramaPos === 9 && rama === 4) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

  if (rama === 5) {
    image(rama2_1[ramaPos], 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama2_1dialogo[ramaPos], 0, 50, width);
    botonSiguiente();
    if (ramaPos !== 4 && ramaPos !== 8) {
      siguiente = true;
      botonSiguiente();
    } else {
      siguiente = false;
    }
    if (ramaPos === 4) {
      decision = true;
      pantallaDecision();
    }
    if (ramaPos === 8) {
      muerte = true;
      pantallaMuerte();
    }
    return;
  }
  if (rama === 6) {
    image(rama2_2[ramaPos], 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama2_2dialogo[ramaPos], 0, 50, width);
    botonSiguiente();
    if (ramaPos === 4) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }
  if (rama === 7) {
    image(rama3[ramaPos], 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama3dialogo[ramaPos], 0, 50, width);
    botonSiguiente();
    if (ramaPos === 1) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }
  if (rama === 8) {
    image(rama4[ramaPos], 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama4dialogo[ramaPos], 0, 50, width);
    botonSiguiente();
    if (ramaPos === 1) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

if (rama === 9) {
    image(rama5[ramaPos], 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama5dialogo[ramaPos], 0, 50, width);
    botonSiguiente();
    if (ramaPos === 2 && rama === 9) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

  if (rama === 0) {
  image(inicio[ramaPos], 0, 0, width, height);
  textAlign(CENTER, TOP);
  text(InicioTexto[ramaPos], 0, 50, width);
  siguiente = true;

  if (ramaPos === 2 || ramaPos === 6 || ramaPos === 9 || ramaPos === 13 || ramaPos === 17 || ramaPos === 24 || ramaPos === 27) {
    decision = true;
    pantallaDecision();
  } else if (ramaPos === 30) {
    muerte = true;
    pantallaMuerte();
    siguiente = false;
  } else {
    botonSiguiente();
  }
}
}

function botonSiguiente() {
  if (siguiente) {
    fill(0, 0, 255);
    rect(width - 75, height - 75, 50, 50);
    fill(0);
    triangle(width - 65, height - 65, width - 65, height - 35, width - 35, height - 50);
    fill(255);
  }
}
  
function mousePressed() {
  
  if (!musicaIniciada) {
    sound.loop();  
    musicaIniciada = true;  
  }
}
