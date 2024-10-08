let pantallaActual = 0; 
let dialogos = [
  "diálogo 1", "diálogo 2", 
  "diálogo 3", "diálogo 4", 
  "diálogo 5", "diálogo 6", 
  "diálogo 7", "diálogo 8", 
  "diálogo 9", "diálogo 10", 
  "diálogo 11", "diálogo 12", 
  "diálogo 13"
];
let imagenes = [];
let pantallasFinSi = [2, 3, 5, 7, 9, 10, 11, 13]; 
let pantallasFinNo = [4, 6]; 
let botonSi, botonNo, botonReiniciar;
let fin = false; 



function preload() {
  for (let i = 0; i < dialogos.length; i++) {
    imagenes[0] = loadImage('imagenes/imagen1.jpg'); // Cambia la ruta según tus imágenes
  }
}

function setup() {
  createCanvas(640, 480);
  botonSi = { x: width / 4 - 75, y: height / 2 + 20, w: 150, h: 50 };
  botonNo = { x: 3 * width / 4 - 75, y: height / 2 + 20, w: 150, h: 50 };
  botonReiniciar = { x: width / 2 - 75, y: height - 80, w: 150, h: 50 };
}

function draw() {
  background(220);

  if (!fin && pantallaActual < imagenes.length) {
    image(imagenes[pantallaActual], 0, 0, width, height); // Ajusta la imagen al tamaño del canvas
  }
  fill(255);
  textSize(24);
  textAlign(CENTER);
  
  if (fin) {
    text("Fin", width / 2, height / 2 - 50); 
  } else {
    text(dialogos[pantallaActual], width / 2, height / 2 - 50);
  }

  
  if (!fin && pantallaActual < dialogos.length) {
    fill(100, 200, 100);
    rect(botonSi.x, botonSi.y, botonSi.w, botonSi.h);
    fill(0);
    textSize(18);
    text("Sí", width / 4, height / 2 + 50);

   
    fill(200, 100, 100);
    rect(botonNo.x, botonNo.y, botonNo.w, botonNo.h);
    fill(0);
    text("No", 3 * width / 4, height / 2 + 50);
  }

  
  if (fin || pantallaActual >= dialogos.length) {
    fill(100, 150, 250);
    rect(botonReiniciar.x, botonReiniciar.y, botonReiniciar.w, botonReiniciar.h);
    fill(0);
    text("Reiniciar", width / 2, height - 48);
  }
}

function mousePressed() {
  
  if (!fin && boton(botonSi)) {
    
    if (pantallasFinSi.includes(pantallaActual)) {
      fin = true; 
    } else {
      
      if (pantallaActual < dialogos.length - 1) {
        pantallaActual++;
      } else {
        pantallaActual = dialogos.length; 
      }
    }
  }

  
  if (!fin && boton(botonNo)) {
    if (pantallasFinNo.includes(pantallaActual)) {
      fin = true;
    } else {
      
      if (pantallaActual < dialogos.length - 1) {
        pantallaActual++;
      } else {
        pantallaActual = dialogos.length; 
      }
    }
  }

  if ((fin || pantallaActual >= dialogos.length) && boton(botonReiniciar)) {
    pantallaActual = 0; 
    fin = false; 
  }
}

function boton(rectangulo) {
  return mouseX > rectangulo.x && mouseX < rectangulo.x + rectangulo.w && mouseY > rectangulo.y && mouseY < rectangulo.y + rectangulo.h;
}
