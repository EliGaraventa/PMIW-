function pantallaMuerte() {
  muerte = true;

  if (ramaPos != 54){
  fill(0);
  rect(height / 4, height - 75, 400, 50);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Ver créditos", height / 4 + 200, height - 50);
  }
  
  textAlign(CENTER, CENTER);
  fill(0, 255, 0);
  rect(height / 4, height - 150, 400, 50);
  fill(255);
  text("Volver al inicio", height / 4 + 200, height - 125);
  textAlign(CENTER, TOP);
}

function botonCreditos() {
  return mouseX > height / 4 && mouseX < height / 4 + 400 && mouseY > height - 75 && mouseY < height - 25;
}

function botonInicio() {
  return mouseX > height / 4 && mouseX < height / 4 + 400 && mouseY > height - 150 && mouseY < height - 100;
}
