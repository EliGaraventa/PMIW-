function pantallaMuerte() {
  muerte = true;
  fill(0);
  rect(height / 4, height - 75, 400, 50);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Ver creditos", height / 4 + 200, height - 50);

  fill(0, 255, 0);
  rect(height / 4, height - 150, 400, 50);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Volver al inicio", height / 4 + 200, height - 125);
}
