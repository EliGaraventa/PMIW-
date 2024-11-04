function pantallaDecision() {
  decision = true;
  fill(255, 0, 0, 150);
  rect(30, 350, 200, 100);
  
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("NO", 30 + 200 / 2, 350 + 100 / 2);

  fill(0, 255, 0, 150);
  rect(410, 350, 200, 100);

  fill(0);
  text("SÍ", 410 + 200 / 2, 350 + 100 / 2);
  
  textAlign(LEFT, TOP);
  fill(0,255,0);
}

function botonSi(){
   return mouseX > 410 && mouseX < 610 && mouseY > 350 && mouseY < 450
}

function botonNo(){
   return mouseX > 30 && mouseX < 230 && mouseY > 350 && mouseY < 450
}
