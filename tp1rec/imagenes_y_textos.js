function preload() {

  sound = loadSound('assets/musica.mp3');
  InicioTexto = loadStrings('dialogos/inicio_dialogos.txt');
  rama1dialogos = loadStrings('dialogos/rama1_dialogos.txt');
  rama1_2dialogos = loadStrings('dialogos/rama1_2dialogos.txt');
  rama1_3dialogos = loadStrings('dialogos/rama1_3dialogos.txt');
  rama2a_dialogos = loadStrings('dialogos/rama2a_dialogos.txt');
  rama2_1dialogo = loadStrings('dialogos/rama2_1dialogos.txt');
  rama2_2dialogo = loadStrings('dialogos/rama2_2dialogos.txt');
  rama3dialogo = loadStrings('dialogos/rama3_dialogos.txt');
  rama4dialogo = loadStrings('dialogos/rama4_dialogos.txt');
  rama5dialogo = loadStrings('dialogos/rama5_dialogos.txt');
  


  //Carga las imagenes de la rama principal
  for (let i = 0; i <= 30; i++) {
    inicio[i] = loadImage('assets/inicio/inicio' + i + '.jpeg');
  }

  //Carga las imagenes de la rama1
  for (let i = 0; i <= 9; i++) {
    rama1[i] = loadImage('assets/rama1/rama1_1_' + i + '.jpeg');
  }

  //Carga las imagenes de la rama 1_2
  for (let i = 0; i <= 6; i++) {
    rama1_2[i] = loadImage('assets/rama1_2/rama1_2_' + i + '.jpeg');
  }

  //Carga las imagenes de la rama1_3
  for (let i = 0; i <= 6; i++) {
    rama1_3[i] = loadImage('assets/rama1_3/rama1_3_' + i + '.jpeg');
  }

  //Carga las imagenes de la rama2
  for (let i = 0; i <= 10; i++) {
    rama2a[i] = loadImage('assets/rama2a/rama2a_' + i + '.jpeg');
  }

  //Carga las imagenes de la rama2_1
  for (let i = 0; i <= 9; i++) {
    rama2_1[i] = loadImage('assets/rama2_1/rama2_1_' + i + '.jpeg');
  }

  // Carga las imágenes de la rama2_2
  for (let i = 0; i <= 5; i++) {
    rama2_2[i] = loadImage('assets/rama2_2/rama2_2_' + i + '.jpeg');
  }

  // Carga las imágenes de la rama3
  for (let i = 0; i <= 2; i++) {
    rama3[i] = loadImage('assets/rama3/rama3_' + i + '.jpeg');
  }

  // Carga las imágenes de la rama4
  for (let i = 0; i <= 2; i++) {
    rama4[i] = loadImage('assets/rama4/rama4_' + i + '.jpeg');
  }

  // Carga las imágenes de la rama5
  for (let i = 0; i <= 3; i++) {
    rama5[i] = loadImage('assets/rama5/rama5_' + i + '.jpeg');
  }

  creditos = loadImage('assets/creditos.jpg');
  fin1 = loadImage('assets/fin1.png');
}
