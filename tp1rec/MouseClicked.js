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
    }
    if (botonSi()) {
      ramaPos = 3;
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


  if (decision && ramaPos === 9 && rama === 0) {
    if (botonNo()) {
      ramaPos = 0;
      rama = 4;
    } else if (botonSi()) {
      ramaPos++;
      decision = false;
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

  if (decision && ramaPos === 3 && rama === 1) {
    if (botonNo()) {
      decision = false;
      ramaPos = 0;
      rama= 2;
    } else if (botonSi()) {
      ramaPos++;
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

  if (ramaPos === 3 && decision && rama === 4) {
    if (botonNo()) {
      ramaPos = 0;
      rama = 5;
    } else if (botonSi()) {
      ramaPos++;
    }
  }

  if (ramaPos === 5 && decision && rama === 5) {
    if (botonNo()) {
      ramaPos = 0;
      rama = 6;
      siguiente = true;
    } else if (botonSi()) {
      ramaPos = 5;
      siguiente = true;
    }
  }

  if (mouseX > width - 75 && mouseX < width - 25 && mouseY > height - 75 && mouseY < height - 25 && siguiente) {
    ramaPos++;
  }
}
function mousePressed() {

  if (!musicaIniciada) {
    sound.loop();
    musicaIniciada = true;
  }
}
