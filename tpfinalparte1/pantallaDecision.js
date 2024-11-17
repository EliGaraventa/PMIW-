function pantallaDecision() {
  decision = true;

  // Botón NO
  fill(255, 0, 0, 150);
  rect(30, 350, 200, 100);
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("NO", 30 + 200 / 2, 350 + 100 / 2);

  // Botón SÍ
  fill(0, 255, 0, 150);
  rect(410, 350, 200, 100);
  fill(0);
  text("SÍ", 410 + 200 / 2, 350 + 100 / 2);

  fill(0, 255, 0);
  textAlign(CENTER, TOP);
}

function continuarDecision(opcion) {
  if (opcion === "si") {
    if (ramaPos === 17) {
      ramaPos = 45;
    } else if (ramaPos === 24) {
      ramaPos = 85;
    }
    actualizarRama(1);
  } else if (opcion === "no") {
    if (ramaPos === 6) {
      ramaPos = 31;
    } else if (ramaPos === 44) {
      ramaPos = 48;
    } else if (ramaPos === 60) {
      ramaPos = 65;
    } else if (ramaPos === 9) {
      ramaPos = 71;
    } else if (ramaPos === 34) {
      ramaPos = 41;
    } else if (ramaPos === 75) {
      ramaPos = 55;
    } else if (ramaPos === 13) {
      ramaPos = 82;
    } else if (ramaPos === 17) {
      actualizarRama(1)
    } else if (ramaPos === 24) {
      actualizarRama(1)
    } else if (ramaPos === 27) {
      ramaPos = 88;
    }
  }
  decision = false;
}
