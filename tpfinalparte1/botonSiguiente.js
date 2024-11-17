function botonSiguiente() {
  if (esPantallaMuerte(ramaPos)) { // Llama a pantallaMuerte si es una pantalla de muerte
    pantallaMuerte();
  } else if (esPantallaDecision(ramaPos)) { // Llama a pantallaDecision si es una pantalla de decisión
    pantallaDecision();
  }

  if (!decision && !muerte) {
    fill(0, 0, 255);
    rect(width - 75, height - 75, 50, 50);
    fill(0);
    triangle(width - 65, height - 65, width - 65, height - 35, width - 35, height - 50);
    fill(255);
    return mouseX > width - 75 && mouseX < width - 25 && mouseY > height - 75 && mouseY < height - 25;
  }
}

function botonSi() {
  return mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450;
}

function botonNo() {
  return mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450;
}
