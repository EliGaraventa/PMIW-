function pantallaMuerte() {
  muerte = true;

  // Botón de Créditos
  if (rama != 3 && ramaPos != 6) {
    dibujarBoton(height / 4, height - 75, 400, 50, "Ver créditos", 151, 48, 223, 200);
  }

  // Botón de Volver al Inicio
  dibujarBoton(height / 4, height - 150, 400, 50, "Volver al inicio", 48, 165, 223, 200);
}

function pantallaDecision() {
  decision = true;
  
  // Botón NO
  dibujarBoton(30, 350, 200, 100, "NO", 255, 0, 0, 150);

  // Botón SÍ
  dibujarBoton(410, 350, 200, 100, "SÍ", 0, 255, 0, 150);

  textAlign(LEFT, TOP);
  fill(0, 255, 0);
}

// Función para dibujar un botón
function dibujarBoton(x, y, w, h, texto, r, g, b, t) {
  fill(r, g, b, t);
  rect(x, y, w, h);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(texto, x + w / 2, y + h / 2);
}

// Función para verificar el botón SÍ
function botonSi() {
  return mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450;
}

// Función para verificar el botón NO
function botonNo() {
  return mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450;
}

// Botón Siguiente
function botonSiguiente() {
  if (siguiente) {
    fill(0, 0, 255);
    rect(width - 75, height - 75, 50, 50);
    fill(0);
    triangle(width - 65, height - 65, width - 65, height - 35, width - 35, height - 50);
    fill(255);
  }
}
