class Nivel {
  constructor() {
    this.mapa = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    this.tamanoCelda = 40;
    this.puntos = []; 
    this.agregarPuntos();
  }

  cargarImagen() {
    imagenPared = loadImage('assets/pared.jpg'); 
  }
  
   agregarPuntos() {
    for (let fila = 0; fila < this.mapa.length; fila++) {
      for (let columna = 0; columna < this.mapa[fila].length; columna++) {
        if (this.mapa[fila][columna] === 0) { 
          let x = columna * this.tamanoCelda + this.tamanoCelda / 2;
          let y = fila * this.tamanoCelda + this.tamanoCelda / 2;
          this.puntos.push( {
            x, y
          }
          ); 
        }
      }
    }
  }

  dibujar() {
    for (let fila = 0; fila < this.mapa.length; fila++) {
      for (let columna = 0; columna < this.mapa[fila].length; columna++) {
        let valorCelda = this.mapa[fila][columna];
        if (valorCelda === 1) {
          image(imagenPared, columna * this.tamanoCelda, fila * this.tamanoCelda, this.tamanoCelda, this.tamanoCelda);
        } else {
          fill(0);
          rect(columna * this.tamanoCelda, fila * this.tamanoCelda, this.tamanoCelda, this.tamanoCelda);
        }
      }
    }
     fill(255);
    for (let punto of this.puntos) {
      ellipse(punto.x, punto.y, 10);
    }
  }


  colision(x, y, tamano) {
    let radio = tamano / 2;
    let filaInicio = Math.floor((y - radio) / this.tamanoCelda); 
    let filaFin = Math.floor((y + radio) / this.tamanoCelda); 
    let columnaInicio = Math.floor((x - radio) / this.tamanoCelda); 
    let columnaFin = Math.floor((x + radio) / this.tamanoCelda); 


    for (let fila = filaInicio; fila <= filaFin; fila++) {
      for (let columna = columnaInicio; columna <= columnaFin; columna++) {
        if (this.mapa[fila] && this.mapa[fila][columna] === 1) {
          return true; 
        }
      }
    }
    return false; 
  }

  colisionFantasma(x, y, tamano) {
    let radio = tamano / 2;
    let filaInicio = Math.floor((y - radio) / this.tamanoCelda); 
    let filaFin = Math.floor((y + radio) / this.tamanoCelda);
    let columnaInicio = Math.floor((x - radio) / this.tamanoCelda);
    let columnaFin = Math.floor((x + radio) / this.tamanoCelda); 

    for (let fila = filaInicio; fila <= filaFin; fila++) {
      for (let columna = columnaInicio; columna <= columnaFin; columna++) {
        if (this.mapa[fila] && this.mapa[fila][columna] === 1) {
          return true; 
        }
      }
    }
    return false; 
  }
}
