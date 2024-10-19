let siguiente = false;
let inicio = [];
let inicioPos = 0;
let fin1;
let decision = false;
let muerte = false;
let rama1_1;
let rama1 = [];
let rama1Pos = 0;
let rama1Activa = false;
let rama1_2 = [];
let rama1_2Pos = 0;
let rama1_2Activa = false;
let rama1_3 = [];
let rama1_3Pos = 0;
let rama1_3Activa = false;
let rama2a = [];
let rama2aPos = 0;
let rama2aActiva = false;
let rama2_1 = [];
let rama2_1Pos = 0;
let rama2_1Activa = false;
let rama2_2 = [];
let rama2_2Pos = 0;
let rama2_2Activa = false;
let rama3 = [];
let rama3Pos = 0;
let rama3Activa = false;
let rama4 = [];
let rama4Pos = 0;
let rama4Activa = false;
let rama5 = [];
let rama5Pos = 0;
let rama5Activa = false;

function setup() {
  createCanvas(640, 480);
  textSize(32);
  fill(255);
  stroke(0);
  textAlign(CENTER, TOP);
}

function draw() {
  if (muerte && inicioPos > 1 && inicioPos < 5) {
    image(fin1, 0, 0, width, height);
    pantallaMuerte();
    return;
  }
  
  if (rama1Activa) {
    image(rama1[rama1Pos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama1[rama1Pos].text, 0, 50, width);
    if (rama1Pos === 3) {
      decision = true;
      pantallaDecision();
    } else {
      botonSiguiente();
    }
    console.log(rama1Pos);
    if (rama1Pos === 9) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

  if (rama1_2Activa) {
    image(rama1_2[rama1_2Pos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama1_2[rama1_2Pos].text, 0, 50, width);
    console.log(rama1_2Pos);
    botonSiguiente();

    if (rama1_2Pos === 3) {
      decision = true;
      pantallaDecision();
    }
    if (rama1_2Pos === 6) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }
  if (rama1_3Activa) {
    image(rama1_3[rama1_3Pos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama1_3[rama1_3Pos].text, 0, 50, width);
    console.log(rama1_3Pos);
    botonSiguiente();
    if (rama1_3Pos === 5) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }
  
  if (rama2aActiva) {
    image(rama2a[rama2aPos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama2a[rama2aPos].text, 0, 50, width);
    console.log(rama2aPos);
    botonSiguiente();

    if (rama2aPos === 4) {
      decision = true;
      pantallaDecision();
      siguiente = false;
    }
    if (rama2aPos === 10) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

  if (rama2_1Activa) {
    image(rama2_1[rama2_1Pos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama2_1[rama2_1Pos].text, 0, 50, width);
    botonSiguiente();
    if (rama2_1Pos !== 5 && rama2_1Pos !== 9) {
    siguiente = true;
    botonSiguiente();
  } else {
    siguiente = false;
  }
    if (rama2_1Pos === 5) {
      decision = true;
      pantallaDecision();
    }
    if (rama2_1Pos === 9) {
      muerte = true;
      pantallaMuerte();
    }
    console.log(rama1_2Pos);
    return;
  }
  if (rama2_2Activa) {
    image(rama2_2[rama2_2Pos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama2_2[rama2_2Pos].text, 0, 50, width);
    botonSiguiente();
    console.log(rama2_2Pos);
    if (rama2_2Pos === 5) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }
  if (rama3Activa) {
    image(rama3[rama3Pos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama3[rama3Pos].text, 0, 50, width);
    botonSiguiente();
    console.log(rama3Pos);
    if (rama3Pos === 2) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }
  if (rama4Activa) {
    image(rama4[rama4Pos].image, 0, 0, width, height);
    textAlign(CENTER, TOP);
    text(rama4[rama4Pos].text, 0, 50, width);
    botonSiguiente();
    console.log(rama4Pos);
    if (rama4Pos === 2) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

  if (rama5Activa) {
    image(rama5[rama5Pos].image, 0, 0, width, height);
    console.log(rama5Pos);
    textAlign(CENTER, TOP);
    text(rama5[rama5Pos].text, 0, 50, width);
    botonSiguiente();
    if (rama5Pos === 3) {
      muerte = true;
      pantallaMuerte();
      siguiente = false;
    }
    return;
  }

  image(inicio[inicioPos].image, 0, 0, width, height);
  console.log(inicioPos);
  textAlign(CENTER, TOP);
  text(inicio[inicioPos].text, 0, 50, width);


  if (inicioPos === 2 || inicioPos === 6 || inicioPos === 9 || inicioPos === 13 || inicioPos === 17 || inicioPos === 24 || inicioPos === 27) {
    decision = true;
    pantallaDecision();
  } else if (inicioPos === 30) {
    muerte = true;
    pantallaMuerte();
    siguiente = false;
  } else {
    botonSiguiente();
  }
}

function botonSiguiente() {
  if (siguiente) {
    fill(0, 0, 255);
    rect(width - 75, height - 75, 50, 50);
    fill(0);
    triangle(width - 65, height - 65,  // Vértice izquierdo
             width - 65, height - 35,  // Vértice derecho
             width - 35, height - 50);  // Vértice superior
    fill(255);
  }
}


if (decision || muerte) {
  siguiente = false;
} else {
  siguiente = true;
}

function mouseClicked() {
  if (muerte) {
    if (mouseX > 160 && mouseX < 560 && mouseY > 405 && mouseY < 455) {
      console.log("Ver créditos");
    } else if (mouseX > 160 && mouseX < 560 && mouseY > 330 && mouseY < 380) {
      inicioPos = 0;
      rama1Activa = false;
      rama1_2Activa = false;
      rama1_3Activa = false;
      rama2aActiva = false;
      rama2_1Activa = false;
      rama2_2Activa = false;
      rama3Activa = false;
      rama4Activa = false;
      rama5Activa = false;
      decision = false;
      muerte = false;
      siguiente = true;
      return;
    }
  }


  if (decision && inicioPos === 2) {
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      muerte = true;
    } else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      inicioPos = 3;
      decision = false;
    }
  }

  if (decision && inicioPos === 27) {
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      rama5Activa = true;
      rama5Pos = 0;
      rama4 = false;
      decision = false;
    } else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      inicioPos++;
      decision = false;
    }
  }

  if (decision && inicioPos === 24) {
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      inicioPos++;
      decision = false;
    } else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      rama4Activa = true;
      rama4Pos = 0;
      rama3 = false;
      decision = false;
    }
  }

  if (decision && inicioPos === 9) {
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      inicioPos = 0;
      rama2aPos = 0;
      rama2aActiva = true
    } else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      inicioPos++;
      decision = false;
    }
  }

  if (inicioPos === 17) {
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      inicioPos++;
      decision = false;
    } else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      decision = false;
      inicioPos = 0;
      rama1_2Activa = true;
      rama1_2Pos = 3;
      rama2aActiva = false;
    }
  }

  if (rama1_2Pos === 3) {
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      rama1_2Pos = 0;
      rama1_2Activa = false;
      rama1_3Activa = true;
      decision = false;
    } else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      rama1_2Pos++;
      decision = false;
    }
  }

  if (rama2_1Pos === 5 && decision) {
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      rama2_1Pos = 0;
      rama2_1Activa = false;
      rama2_2Activa = true;
      siguiente = true;
    } else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      rama2_1Pos = 6;
      siguiente = true;
    }
  }

  if (rama2aPos === 4 && decision) {
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      rama2aActiva = false;
      rama2_1Pos = 0;
      rama2_1Activa = true;
    } else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      rama2aPos++;
    }
  }

  if (decision && rama1Pos === 3 && rama1Activa) {
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      decision = false;
      rama1Activa = false;
      rama1_2Pos = 0;
      rama1_2Activa = true;
    } else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      rama1Pos++;
    }
  }
  
  if (decision && inicioPos === 13) {
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      rama3Activa = true;
      decision = false;
    } else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      inicioPos++;
      decision = false;
    }
  }

  if (decision && inicioPos === 6) {
    if (mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450) {
      decision = false;
      rama1Pos = 0;
      rama1Activa = true;
    } else if (mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450) {
      inicioPos = inicioPos + 1;
    }
  }

  if (mouseX > width - 75 && mouseX < width - 25 && mouseY > height - 75 && mouseY < height - 25 && siguiente) {
    if (rama1Activa) {
      rama1Pos++;
    } else if (rama1_2Activa) {
      rama1_2Pos++;
    } else if (rama1_3Activa) {
      rama1_3Pos++;
    } else if (rama2aActiva) {
      rama2aPos++;
    } else if (rama2_1Activa) {
      rama2_1Pos++;
    } else if (rama2_2Activa) {
      rama2_2Pos++;
    } else if (rama3Activa) {
      rama3Pos++;
    } else if (rama4Activa) {
      rama4Pos++;
    } else if (rama5Activa) {
      rama5Pos++;
    } else {
      inicioPos++;
    }
  }
}
