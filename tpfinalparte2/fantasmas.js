class Fantasma {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamano = 30;
    this.velocidad = 1;
    this.direccionX = 1;
    this.direccionY = 0;
    
  }

  mover() {
    let direccion = int(random(200));

    if (direccion === 0) { 
      this.direccionX = 0;
      this.direccionY = -3;
    } else if (direccion === 1) {
      this.direccionX = 0;
      this.direccionY = 3;
    } else if (direccion === 2) { 
      this.direccionX = -3;
      this.direccionY = 0;
    } else if (direccion === 3) {
      this.direccionX = 3;
      this.direccionY = 0;
    }

    let nuevaX = this.x + this.direccionX * this.velocidad;
    let nuevaY = this.y + this.direccionY * this.velocidad;

    if (!juegoPacman.nivel.colisionFantasma(nuevaX, nuevaY, 30)) {
      this.x = nuevaX;
      this.y = nuevaY;
    } else {
      this.direccionX = 0;
      this.direccionY = 0;
    }
  }

  dibujar() {
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x, this.y, 30, 30);
  }
}
