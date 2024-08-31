let cuadradoGrande = 50;
let cuadradoChico = 25;
let cambioColor = false;  // Variable para controlar el color
let foto;

function preload() {
  foto = loadImage('/data/imagen.jpeg');
}

function setup(){
  createCanvas(800, 400);
  background(255);
  noStroke();
}


function draw(){
  background(255);  

  let columnas = width / cuadradoGrande;
  let filas = height / cuadradoGrande;

  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      let x = i * cuadradoGrande;  // Coordenada x del cuadrado grande
      let y = j * cuadradoGrande;  // Coordenada y del cuadrado grande
      
      // Determinar el color de los cuadrados chicos segun el estado de cambio el color
      if (cambioColor && mouseSobreCuadradoGrande(x, y, cuadradoGrande, 20)) {
        fill(255);  // Color blanco para los cuadrados chicos
      } else {
        fill(0);    // Color negro para los cuadrados chicos
      }
      
      dibujarCuadradoGrande(x, y, cuadradoGrande);
      dibujarCuadradoChico(x, y, cuadradoGrande, cuadradoChico);
      dibujarTriangulos(x, y, cuadradoGrande);
    }
  }
image(foto, 0,0, 400,400);
}

// Función cuadrado grande
function dibujarCuadradoGrande( x,  y,  tam) {
  rect(x, y, tam, tam);
}

// Función cuadrado chico dentro del cuadrado grande
function dibujarCuadradoChico( x,  y,  tamGrande,  tamChico) {
  if (cambioColor && mouseSobreCuadradoGrande(x, y, tamGrande, 20)) {
    fill(0);    // Color negro
  } else {
    fill(255);  // Color blanco
  }
  rect(x + tamGrande - tamChico, y, tamChico, tamChico);
}

// Función triángulos en las esquinas del cuadrado grande
function dibujarTriangulos( x,  y,  tam) {
  fill(200);
  triangle(x, y, x + tam / 2, y, x, y + tam / 2);  // Triángulo arriba a la izquierda
  triangle(x + tam, y + tam, x + tam / 2, y + tam, x + tam, y + tam / 2);  // Triángulo abajo a la derecha
}

// Funcion booleana que verifica si el mouse está cerca del cuadrado grande
function mouseSobreCuadradoGrande(x,  y,  tam,  radio) {
  // Calculo el centro del cuadrado grande
  let centroX = x + tam / 2;
  let centroY = y + tam / 2;
  
  // Verifico si el mouse esta adentro del radio 
  return dist(mouseX, mouseY, centroX, centroY) < radio;
}

function mousePressed() {
  // Cambiar el estado de cambioColor al hacer clic
  cambioColor = !cambioColor;
  
  // Volver a dibujar la pantalla después de cambiar el estado
  redraw();
}
