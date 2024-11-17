class Pacman {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direccionX = 0;
    this.direccionY = 0;
    this.tamano = 30;
    this.velocidad = 2;
    this.vidas = 3;
    this.colisionado = false;
  }
  
  actualizar() {
  if (!this.colisionado) {
    this.colisionado = false;
  }
}


  mover() {
    let nuevaX = this.x + this.direccionX * this.velocidad;
    let nuevaY = this.y + this.direccionY * this.velocidad;
    
    if (!juegoPacman.nivel.colision(nuevaX, nuevaY, this.tamano)) {
      this.x = nuevaX;
      this.y = nuevaY;
    }
  }

  dibujar() {
    fill(255, 255, 0); 
    noStroke();
    ellipse(this.x, this.y, this.tamano, this.tamano);
  }

  setDireccion(dx, dy) {
    this.direccionX = dx;
    this.direccionY = dy;
  }
comerPuntos(puntos) {
  for (let i = puntos.length - 1; i >= 0; i--) {
    let punto = puntos[i];
    let distancia = dist(this.x, this.y, punto.x, punto.y);
    if (distancia < this.tamano / 2) {
      puntos.splice(i, 1);
    }
  }
}
}
