class Juego {
  constructor() {
    this.nivel = new Nivel();
    this.pacman = new Pacman(55, 55);
    this.fantasmas = [
      new Fantasma(140, 100), 
      new Fantasma(540, 100), 
      new Fantasma(100, 420),
      new Fantasma(550, 420)  
    ]; 
    this.estadoJuego = "inicio";
    this.botonJugar = { x: 220, y: 320, ancho: 200, alto: 50 };
    this.botonCreditos = { x: 220, y: 400, ancho: 200, alto: 50 };
    this.botonReiniciar = { x: 220, y: 320, ancho: 200, alto: 50 };
    this.botonMenu = { x: 220, y: 400, ancho: 200, alto: 50 };
    this.vidas = 3; 
    this.colisiones = 0;
}

dibujar() {
  background(0);
  if (this.estadoJuego === "fin") {
    this.dibujarPantallaGameOver();
  } else if (this.estadoJuego === "inicio") {
    this.dibujarMenuInicio();
  } else if (this.estadoJuego === "creditos") {
    this.dibujarPantallaCreditos();
  } else if (this.estadoJuego === "victoria") {
    this.dibujarPantallaVictoria();
  } else {
    this.nivel.dibujar();
    this.pacman.mover();
    this.pacman.dibujar();
    this.pacman.comerPuntos(this.nivel.puntos);
    
    this.pacman.colisionado = false;

    for (let fantasma of this.fantasmas) {
      fantasma.mover();
      fantasma.dibujar();

      if (this.colisionConFantasma(fantasma)) {
        this.reducirVidas();
    }

    this.dibujarVidas();

    if (this.nivel.puntos.length === 0) {
      this.estadoJuego = "victoria";
    }
  }
}
}
reducirVidas() {
  if (this.colisiones < 3) {
    this.colisiones++; 
    this.vidas--;
  }

  if (this.vidas <= 0) {
    this.estadoJuego = "fin";
  }
}

  
  dibujarVidas() {
    fill(255);
    textSize(16);
    textAlign(LEFT, TOP);
    text("Vidas: " + this.vidas, 10, 10); 
  }

  colisionConFantasma(fantasma) {
    let distancia = dist(this.pacman.x, this.pacman.y, fantasma.x, fantasma.y);
    let radioTotal = this.pacman.tamano / 2 + fantasma.tamano / 2;

    if (distancia < radioTotal) {
      this.reiniciarPartida(); 
      this.reducirVidas(); 
      this.pacman.colisionado = true; 
    }
  }

 reiniciarPartida() {
    this.pacman.x = 55;
    this.pacman.y = 55;
    this.pacman.direccionX = 0; 
    this.pacman.direccionY = 0; 


    this.fantasmas[0].x = 140;
    this.fantasmas[0].y = 100;
    this.fantasmas[1].x = 540;
    this.fantasmas[1].y = 100;
    this.fantasmas[2].x = 100;
    this.fantasmas[2].y = 420;
    this.fantasmas[3].x = 550;
    this.fantasmas[3].y = 420;


    this.nivel.agregarPuntos(); 
  }

dibujarMenuInicio() {
   fill(0, 0, 0, 150);
    rect(0, 0, width, height);

    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Pac-Man Game", width / 2, height / 3);

    textSize(16);
    text("Usa las flechas del teclado para mover a Pac-Man", width / 2, height / 2);


    fill(255, 0, 0);
    rect(this.botonJugar.x, this.botonJugar.y, this.botonJugar.ancho, this.botonJugar.alto);
    fill(255);
    textSize(20);
    text("Jugar", this.botonJugar.x + this.botonJugar.ancho / 2, this.botonJugar.y + this.botonJugar.alto / 2);


    fill(0, 0, 255);
    rect(this.botonCreditos.x, this.botonCreditos.y, this.botonCreditos.ancho, this.botonCreditos.alto);
    fill(255);
    textSize(20);
    text("Créditos", this.botonCreditos.x + this.botonCreditos.ancho / 2, this.botonCreditos.y + this.botonCreditos.alto / 2);
}

    dibujarPantallaGameOver() {
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);

    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡Game Over!", width / 2, height / 3);

    textSize(16);
    text("Haz perdido todas tus vidas", width / 2, height / 2);


    fill(255, 0, 0);
    rect(this.botonReiniciar.x, this.botonReiniciar.y, this.botonReiniciar.ancho, this.botonReiniciar.alto);
    fill(255);
    textSize(20);
    text("Reiniciar", this.botonReiniciar.x + this.botonReiniciar.ancho / 2, this.botonReiniciar.y + this.botonReiniciar.alto / 2);


    fill(0, 0, 255);
    rect(this.botonMenu.x, this.botonMenu.y, this.botonMenu.ancho, this.botonMenu.alto);
    fill(255);
    textSize(20);
    text("Menu", this.botonMenu.x + this.botonMenu.ancho / 2, this.botonMenu.y + this.botonMenu.alto / 2);
  }

dibujarPantallaVictoria() {
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);

  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("¡Victoria!", width / 2, height / 3);

  textSize(16);
  text("¡Has comido todos los puntos!", width / 2, height / 2);


  fill(255, 0, 0);
  rect(this.botonReiniciar.x, this.botonReiniciar.y, this.botonReiniciar.ancho, this.botonReiniciar.alto);
  fill(255);
  textSize(20);
  text("Reiniciar", this.botonReiniciar.x + this.botonReiniciar.ancho / 2, this.botonReiniciar.y + this.botonReiniciar.alto / 2);
}


dibujarPantallaCreditos() {
    background(0);

    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Créditos", width / 2, height / 3);

    textSize(16);
    text("Desarrollado por Eliana Garaventa y Tobias Cisneros", width / 2, height / 2);


    fill(255, 0, 0);
    rect(this.botonJugar.x, this.botonCreditos.y, this.botonCreditos.ancho, this.botonCreditos.alto);
    fill(255);
    textSize(20);
    text("Volver", this.botonCreditos.x + this.botonCreditos.ancho / 2, this.botonCreditos.y + this.botonCreditos.alto / 2);
  }


teclaPresionada() {
  if (this.estadoJuego === "juego") {
    if (keyCode === UP_ARROW) {
      this.pacman.setDireccion(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      this.pacman.setDireccion(0, 1);
    } else if (keyCode === LEFT_ARROW) {
      this.pacman.setDireccion(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
      this.pacman.setDireccion(1, 0);
    }
  }
}


mousePressed() {
  if (this.estadoJuego === "inicio") {
    let dentroBotonJugar = this.estaEnBoton(mouseX, mouseY, this.botonJugar);
    if (dentroBotonJugar) {
      this.estadoJuego = "juego";
    }

    let dentroBotonCreditos = this.estaEnBoton(mouseX, mouseY, this.botonCreditos);
    if (dentroBotonCreditos) {
      this.estadoJuego = "creditos";
    }
  } else if (this.estadoJuego === "creditos") {
    let dentroBotonVolver = this.estaEnBoton(mouseX, mouseY, this.botonCreditos);
    if (dentroBotonVolver) {
      this.estadoJuego = "inicio";
    }
  } else if (this.estadoJuego === "fin") {
    let dentroBotonReiniciar = this.estaEnBoton(mouseX, mouseY, this.botonReiniciar);
    if (dentroBotonReiniciar) {
      this.estadoJuego = "juego";
      this.vidas = 3;
      this.colisiones = 0;
      this.reiniciarPartida();
    }

    let dentroBotonMenu = this.estaEnBoton(mouseX, mouseY, this.botonMenu);
    if (dentroBotonMenu) {
      this.estadoJuego = "inicio";
      this.vidas = 3;
      this.colisiones = 0;
    }
  } else if (this.estadoJuego === "victoria") {
    let dentroBotonReiniciar = this.estaEnBoton(mouseX, mouseY, this.botonReiniciar);
    if (dentroBotonReiniciar) {
      this.estadoJuego = "juego";
      this.vidas = 3;
      this.colisiones = 0;
      this.reiniciarPartida();
    }
  }
  if (!musicaIniciada) {
    sound.loop();
    musicaIniciada = true;
  }
}




  estaEnBoton(mx, my, boton) {
    return mx > boton.x && mx < boton.x + boton.ancho && my > boton.y && my < boton.y + boton.alto;
  }
}
