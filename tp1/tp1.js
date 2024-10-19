// Eliana Garaventa 85259/1 y Tobias Cisneros 118995/3
// Video YT: https://youtu.be/MnKNgolYqEQ

let decision = false;
let muerte = false;
let siguiente = false;
let musicaIniciada = false;
let sound;

let rama = 0;
let ramaPos = 0;

let inicio = []; //Cuando es inicio, es 0
let rama1 = []; //Cuando es rama1, es 1
let rama1_2 = []; //Cuando es rama1_2, es 2
let rama1_3 = []; //Cuando es rama1_3, es 3
let rama2a = []; //Cuando es rama2a, es 4
let rama2_1 = []; //Cuando es rama2_1, es 5
let rama2_2 = []; //Cuando es rama2_2, es 6
let rama3 = []; //Cuando es rama3, es 7
let rama4 = []; //Cuando es rama4, es 8
let rama5 = []; //Cuando es rama5, es 9

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
    image(rama1[ramaPos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama1[ramaPos].text, 0, 50, width);
    if (ramaPos === 3) {
      decision = true;
      pantallaDecision();
    } else {
      botonSiguiente();
    }
    if (ramaPos === 9) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

  if (rama === 2) {
    image(rama1_2[ramaPos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama1_2[ramaPos].text, 0, 50, width);
    botonSiguiente();

    if (ramaPos === 3 && rama === 2) {
      decision = true;
      pantallaDecision();
    }
    if (ramaPos === 6 && rama === 2) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }
  if (rama === 3) {
    image(rama1_3[ramaPos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama1_3[ramaPos].text, 0, 50, width);
    botonSiguiente();
    if (ramaPos === 5 && rama === 3) {
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
    image(rama2a[ramaPos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama2a[ramaPos].text, 0, 50, width);
    botonSiguiente();

    if (ramaPos === 4 && rama === 4) {
      decision = true;
      pantallaDecision();
      siguiente = true;
    }
    if (ramaPos === 10 && rama === 4) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

  if (rama === 5) {
    image(rama2_1[ramaPos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama2_1[ramaPos].text, 0, 50, width);
    botonSiguiente();
    if (ramaPos !== 5 && ramaPos !== 9) {
      siguiente = true;
      botonSiguiente();
    } else {
      siguiente = false;
    }
    if (ramaPos === 5) {
      decision = true;
      pantallaDecision();
    }
    if (ramaPos === 9) {
      muerte = true;
      pantallaMuerte();
    }
    return;
  }
  if (rama === 6) {
    image(rama2_2[ramaPos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama2_2[ramaPos].text, 0, 50, width);
    botonSiguiente();
    if (ramaPos === 5) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }
  if (rama === 7) {
    image(rama3[ramaPos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama3[ramaPos].text, 0, 50, width);
    botonSiguiente();
    if (ramaPos === 2) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }
  if (rama === 8) {
    image(rama4[ramaPos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama4[ramaPos].text, 0, 50, width);
    botonSiguiente();
    if (ramaPos === 2) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

if (rama === 9) {
    image(rama5[ramaPos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama5[ramaPos].text, 0, 50, width);
    botonSiguiente();
    if (ramaPos === 3 && rama === 9) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

  if (rama === 0) {
  image(inicio[ramaPos].image, 0, 0, width, height);
  textAlign(CENTER, TOP);
  text(inicio[ramaPos].text, 0, 50, width);
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


function mouseClicked() {
  
  if (muerte) {
    if (mouseX > 160 && mouseX < 560 && mouseY > 405 && mouseY < 455) {
      decision = false;
      muerte = false;
      ramaPos = 6;
      rama = 3;

    } else if (mouseX > 160 && mouseX < 560 && mouseY > 330 && mouseY < 380) {
      rama = 0;
      ramaPos = 0;
      decision = false;
      muerte = false;
      siguiente = true;
      return;
    }
  }


  if (decision && ramaPos === 2 && rama === 0) {
    if (botonNo()) {
      muerte = true;
    } if (botonSi()) {
      ramaPos = 3;
      decision = false;
    }
  }

  if (decision && ramaPos === 27 && rama === 0) {
    if (botonNo()) {
      rama = 9 ;
      ramaPos = 0;
      decision = false;
    } else if (botonSi()) {
      ramaPos++;
      decision = false;
    }
  }

  if (decision && ramaPos === 24 && rama === 0) {
    if (botonNo()) {
      ramaPos++;
      decision = false;
    } else if (botonSi()) {
      rama = 8;
      ramaPos = 0;
      decision = false;
    }
  }

  if (decision && ramaPos === 9 && rama === 0) {
    if (botonNo()) {
      ramaPos = 0;
      rama = 4;
    } else if (botonSi()) {
      ramaPos++;
      decision = false;
    }
  }

  if (ramaPos === 17 && rama === 0) {
    if (botonNo()) {
      ramaPos++;
      decision = false;
    } else if (botonSi()) {
      decision = false;
      rama = 2;
      ramaPos = 3;
    }
  }

  if (ramaPos === 3 && rama === 2) {
    if (botonNo()) {
      ramaPos = 0;
      rama= 3;
      decision = false;
    } else if (botonSi()) {
      ramaPos++;
      decision = false;
    }
  }

  if (ramaPos === 5 && decision && rama === 5) {
    if (botonNo()) {
      ramaPos = 0;
      rama = 6;
      siguiente = true;
    } else if (botonSi()) {
      ramaPos = 6;
      siguiente = true;
    }
  }

  if (ramaPos === 4 && decision && rama === 4) {
    if (botonNo()) {
      ramaPos = 0;
      rama = 5;
    } else if (botonSi()) {
      ramaPos++;
    }
  }

  if (decision && ramaPos === 3 && rama === 1) {
    if (botonNo()) {
      decision = false;
      ramaPos = 0;
      rama= 2;
    } else if (botonSi()) {
      ramaPos++;
    }
  }
  
  if (decision && ramaPos === 13 && rama === 0) {
    if (botonNo()) {
      rama = 7;
      ramaPos = 0;
      decision = false;
    } else if (botonSi()) {
      ramaPos++;
      decision = false;
    }
  }

  if (decision && ramaPos === 6 && rama === 0) {
    if (botonNo()) {
      decision = false;
      ramaPos = 0;
      rama = 1;
    } else if (botonSi()) {
      ramaPos++;
    }
  }

  if (mouseX > width - 75 && mouseX < width - 25 && mouseY > height - 75 && mouseY < height - 25 && siguiente) {
  ramaPos++;
}
}
