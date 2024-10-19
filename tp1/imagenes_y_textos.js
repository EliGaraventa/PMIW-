function preload() {

  sound = loadSound('assets/musica.mp3');  
  
  //Carga las imagenes de la rama principal  
  for (let i = 0; i <= 30; i++) {
    inicio[i] = loadImage('assets/inicio/inicio' + i + '.jpeg');
  }
  
   //Carga las imagenes de la rama1  
  for (let i = 1; i <= 10; i++) {
    rama1[i] = loadImage('assets/rama1/rama1_1_' + i + '.jpeg');
  }
  
  //Carga las imagenes de la rama 1_2 
  for (let i = 1; i <= 7; i++) {
    rama1_2[i] = loadImage('assets/rama1_2/rama1_2_' + i + '.jpeg');
  }
  
  //Carga las imagenes de la rama1_3
  for (let i = 1; i <= 6; i++) {
  rama1_3[i] = loadImage('assets/rama1_3/rama1_3_' + i + '.jpeg');
}

  //Carga las imagenes de la rama2 
  for (let i = 1; i <= 11; i++) {
    rama2a[i] = loadImage('assets/rama2a/rama2a_' + i + '.jpeg');
  }
  
  //Carga las imagenes de la rama2_1
  for (let i = 1; i <= 10; i++) {
  rama2_1[i] = loadImage('assets/rama2_1/rama2_1_' + i + '.jpeg');
}

  // Carga las imágenes de la rama2_2
  for (let i = 1; i <= 6; i++) {
    rama2_2[i] = loadImage('assets/rama2_2/rama2_2_' + i + '.jpeg');
  }
  
  // Carga las imágenes de la rama3
  for (let i = 1; i <= 3; i++) {
    rama3[i] = loadImage('assets/rama3/rama3_' + i + '.jpeg');
  }

// Carga las imágenes de la rama4
  for (let i = 1; i <= 3; i++) {
  rama4[i] = loadImage('assets/rama4/rama4_' + i + '.jpeg');
}

// Carga las imágenes de la rama5
for (let i = 1; i <= 4; i++) {
  rama5[i] = loadImage('assets/rama5/rama5_' + i + '.jpeg');
}

creditos = loadImage('assets/creditos.jpg');
fin1 = loadImage('assets/fin1.png');
  
  
  inicio = [
    { image: inicio[0], text: "Death note \nLa libreta mortal" },
    { image: inicio[1], text: "Te llamas Light, tienes 17 años,\neres un nerd sin amigos" },
    { image: inicio[2], text: "Un día como cualquier otro,\nves una libreta cayendo desde el cielo \n¿la levantas?" },
    { image: inicio[3], text: "La levantas y lees que se llama \n'Death Note'" },
    { image: inicio[4], text: 'Lees las reglas de la libreta, descubriendo su poder mortal' },
    { image: inicio[5], text: 'Mas tarde ese mismo dia, te quedas solo en tu escuela estudiando, hasta que derrepente escuchas un ruido extraño' },
    { image: inicio[6], text: 'aaaaaaAparece un Shinigami, te incita a que uses la libreta para asesinar a tu bully que está en el patio, ¿lo haras?' },
    { image: inicio[7], text: "Quedas sorprendido del poder de la libreta, imaginandote lo que podrias hacer con esta" },
    { image: inicio[8], text: "Llegas a tu casa y empiezas a escribir nombres de criminales, decides autonombrarse como Kira" },
    { image: inicio[9], text: "Estas maravillado con esto, es tanta la ilusion, que estas pensando en contarselo a Mia, tu crush de secundaria, ¿Deberias?" },
    { image: inicio[10], text: "Se lo cuentas a Mia, despues de una demostracion de lo que hace la libreta, Mia queda enamorada de tu ideologia" },
    { image: inicio[11], text: "En la jefatura de policia, tu padre esta discutiendo con un nuevo detective en el caso de Kira, su nombre es L" },
    { image: inicio[12], text: "L es el mejor detective del mundo, con solo una jugada, descubrio que Kira es de Seattle, y que puede matar a distancia" },
    { image: inicio[13], text: "Le cuentas a Mia y ella te dice que amenaces a L, ¿Lo haces?" },
    { image: inicio[14], text: "Piensas en que podrias usar a Watari, el asistente y padre adoptivo de L, para que te diga su nombre real" },
    { image: inicio[15], text: "Watari, siendo controlado por la DN, dice no saber el nombre real de L, pero que ira al hogar adoptivo de L para buscarlo y decirtelo" },
    { image: inicio[16], text: "Al dia siguiente, L aparece en medio de la noche mientras cenas con tu padre, confiesa que esta seguro que tu eres Kira y secuestraste a Watari" },
    { image: inicio[17], text: "¿Confiesas?" },
    { image: inicio[18], text: "L se va escoltado por la policia, empiezas a dudar de tus propias decisiones" },
    { image: inicio[19], text: "Vas al baile de graduacion con Mia, pero Watari te llama, esta por descubrir el nombre de L, pero se oyen disparos al otro lado del telefono" },
    { image: inicio[20], text: "Escuchas el ultimo suspiro de Watari, estas frustado" },
    { image: inicio[21], text: "Cuando culpas a Mia, ella te muestra que escribio tu nombre tambien, y moriras si no le entregas la libreta en el parque de atracciones" },
    { image: inicio[22], text: "A todo esto, a L ya le informaron de la muerte de Watari, asi que va a buscarte para asesinarte" },
    { image: inicio[23], text: "Llega donde estas, exaltado y con un arma, tu lo ves a lo lejos mientras vas a buscar la Death Note" },
    { image: inicio[24], text: "¿Te frenas a hablar con el?" },
    { image: inicio[25], text: "Empiezas a huir, te encuentras con Mia, ambos suben a la rueda de la fortuna, intentas convencerla de que no la tome,pero no lo hace" },
    { image: inicio[26], text: "Se acerca la hora de tu muerte, confiesas haber escrito su nombre, si no te devuelve la DN, ambos moriran, la rueda de la fortuna empieza a desmoronarse" },
    { image: inicio[27], text: "Ambos quedan colgados de la rueda de la fortuna, tienes la opcion de soltar a mia, ¿La sueltas?" },
    { image: inicio[28], text: "Mia cae en el cemento del parque de atracciones, muriendo instantaneamente mientras que tu caes en el lago, salvando tu vida" },
    { image: inicio[29], text: "3 dias despues del coma, tu despiertas junto a tu padre, este te confiesa que L fue esposado por intento de homicidio y que no lo volveras a ver" },
    { image: inicio[30], text: "¿Sera este el final de L? \n\nCONTINUARA" }
];


  rama1 = [
  { image: rama1[1], text: "Light decide no hacerlo, no quiere estar involucrado en una escena del crimen tan rápido" },
  { image: rama1[2], text: "Light confía en la libreta, cuando llega a su casa, empieza a asesinar criminales buscados" },
  { image: rama1[3], text: "Decides no contárselo a nadie para no involucrar a algún ser querido, decides llamarte KIRA, pero 2 meses después..." },
  { image: rama1[4], text: "Descubres a L, un detective que trabaja con tu padre para descubrirte, utiliza a tu padre para amenazarte por televisión, ¿matas a tu padre?" },
  { image: rama1[5], text: "Decides asesinar a tu padre, L queda sorprendido al verlo en televisión, él tenía sospechas de ti, pero esto lo cambia todo" },
  { image: rama1[6], text: "NADIE AMENAZA A KIRA, tus seguidores están impactados pero a la vez contentos de que su Dios verdaderamente existe" },
  { image: rama1[7], text: "L queda en blanco, todas sus sospechas hacia ti se fueron en ese acto tan atroz, L se quedó sin sospechosos" },
  { image: rama1[8], text: "Quedas solo, sin ningún familiar o amigo cercano, solo tú y la libreta, tras la muerte de tu padre, la policía te deja en paz por un tiempo" },
  { image: rama1[9], text: "Tras tantos años de asesinatos a sangre fría, eres descubierto y Ryuk decide que no quiere pasar toda una vida en prisión atado a ti, y escribe tu nombre" },
  { image: rama1[10], text: "HAZ MUERTO" },
];
  
  rama1_2 = [
    { image: rama1_2[1], text: "Decides no matar a tu padre, incluso tú tienes un límite" },
    { image: rama1_2[2], text: "L mira las noticias, observando como la persona más egoísta del mundo, o sea Kira, no intentó asesinar a un simple policía" },
    { image: rama1_2[3], text: "Esto claramente levanta sospechas sobre ti, después de todo, es tu padre, tiene sentido que no lo mataras" },
    { image: rama1_2[4], text: "Tu padre viene esa noche a cenar, te pregunta, el por qué Kira puede matar a tantas personas, pero no puede a un simple policía, ¿te confiesas?" },
    { image: rama1_2[5], text: "Decides contarle, tu padre queda atónito ante tal noticia" },
    { image: rama1_2[6], text: "Aún con lágrimas en los ojos, decide esposarte y llevarte a prisión, Ryuk no va a querer estar atado a ti, así que escribe tu nombre y mueres" },
    { image: rama1_2[7], text: "TE ARRESTARON" },
  ];
    
  rama1_3 = [
  { image: rama1_3[1], text: "Decides quedarte en silencio escuchando a tu padre quejándose" },
  { image: rama1_3[2], text: "Sabes que esto es una prueba más que creíble para ser el primer candidato a ser Kira" },
  { image: rama1_3[3], text: "Tienes solo 17 años, empiezas a reflexionar y caes en cuenta de que no eres Dios, no decides quién vive y quién muere" },
  { image: rama1_3[4], text: "Tratas de olvidar la libreta, no es bueno para ti y lo sabes, intentas dar borrón y cuenta nueva" },
  { image: rama1_3[5], text: "Pasan 13 días sin escribir, y según las reglas de la DN, te olvidas de ella, Ryuk te deja y ahora te toca llevar un peso que ni tú recuerdas por qué" },
  { image: rama1_3[6], text: "PERDISTE LA MEMORIA" }, 
  { image: creditos, text: "Pelicula dirigida como Adam Wingard \n\n Programado por Eliana Garaventa 85259/1 y Tobias Cisneros 118995/3" }, 
];

  rama2a = [
  { image: rama2a[1], text: "Piensas que nadie debe saber de la libreta, si alguien más se enterara, tendrías que matarlo" },
  { image: rama2a[2], text: "Empiezas a escribir en la DN en la escuela para no perder el tiempo en limpiar el mundo" },
  { image: rama2a[3], text: "Mia empieza a notar que eres muy extraño y comienza a espiarte, y en un pequeño descuido, ella lee lo que dice en la libreta" },
  { image: rama2a[4], text: 'No sabes qué decir, ella está amenazando con decirle a la policía sobre tus fetiches raros de escritor' }, 
  { image: rama2a[5], text: 'Entras en pánico, ¿Escribes su nombre en la Death Note?' },
  { image: rama2a[6], text: 'Lo hiciste. De la nada, Mia se calla y se va en silencio, estás horrorizado por lo que hiciste' },
  { image: rama2a[7], text: 'Horas más tarde, aparece Mia en las noticias...' },
  { image: rama2a[8], text: 'Cuando pusiste "Aleatorio" como forma de muerte, no esperabas que saltara de un 8vo piso' },
  { image: rama2a[9], text: 'Sin emitir ruido, sin dejar ningún mensaje, solo silencio. Quedas traumado, decides tirar la libreta, nunca quisiste esto, el poder te cegó' },
  { image: rama2a[10], text: 'Ryuk se ríe de ti, le suplicas que se lleve la libreta, él acepta con disgusto, 13 días después no recuerdas nada, más que solo el sentimiento de culpa y de un vacío interminable' },
  { image: rama2a[11], text: 'PERDISTE LA MEMORIA' },
];
  
  rama2_1 = [
    { image: rama2_1[1], text: "NI EN BROMA, no se debe jugar con la Death Note, ni siquiera en casos extremos" },
    { image: rama2_1[2], text: "Mia te mira con cara de repulsión, ella sabe que ocultas algo pero no sabe el qué" },
    { image: rama2_1[3], text: "Te pregunta por última vez qué es ese cuaderno, tú te niegas a decirle así que decide irse, no sin antes decirte lo enfermizo que eres" },
    { image: rama2_1[4], text: 'Al día siguiente, todos en la escuela saben sobre tu "Diario enfermizo", la gente incluso te hace bromas sobre si vas a anotar sus nombres si te caen mal; a ti te da igual lo que opinen' }, 
    { image: rama2_1[5], text: 'Al volver a tu casillero, encuentras la Death Note con hojas arrancadas; ese mismo día, mientras dormías, se reportaron numerosos casos de muertes por ataques al corazón repentinamente; te hueles lo peor' },
    { image: rama2_1[6], text: '¿Enfrentas a Mia?' },
    { image: rama2_1[7], text: 'Vas con ella en el receso y le preguntas qué sabe sobre los asesinatos, ella sin dar tantas vueltas te dice la verdad; ella los escribió y ahora es consciente del poder de la libreta' },
    { image: rama2_1[8], text: 'Empiezan a trabajar juntos, no como uno superior al otro, sino como compañeros, cada uno con su parte de la libreta; mientras uno duerme, el otro asesina, haciéndole imposible a L encontrar un patrón' },
    { image: rama2_1[9], text: 'Juntos, logran derrotar a L en su propio juego, y tiempo después, se convierten en los dioses del nuevo mundo que ellos mismos crearon' },
    { image: rama2_1[10], text: 'ERES EL DIOS DEL NUEVO MUNDO' },
  ];
  
  rama2_2 = [
    { image: rama2_2[1], text: "Decides no enfrentar a Mia, ella es consciente de lo que está haciendo, escribe bajo su propia responsabilidad." },
    { image: rama2_2[2], text: "Cada vez Mia te está ganando terreno, cada vez que quieres escribir un nombre, ella ya lo escribió." },
    { image: rama2_2[3], text: "Esto no te molesta para nada, solo quieres un mundo mejor, seas tú quien lo cree o no." },
    { image: rama2_2[4], text: 'Ryuk habla contigo sobre que casi no escribes y que Mia es más interesante que tú, así que decide irse con ella llevándose la libreta.' }, 
    { image: rama2_2[5], text: 'Esto no te altera, es más, te pone feliz, para ti son como tomarte unas vacaciones; ahora puedes dormir contento porque sabes que se vendrá un mundo mejor gracias a Mia.' },
    { image: rama2_2[6], text: 'PANTALLA DE MUERTE.' },
  ];
    
  rama3 = [
    { image: rama3[1], text: 'Mia esta enojada contigo, "Si no atacamos, somos debiles" decia, pero tu crees que confrontar directamente a L es un mal plan no importa por donde lo veas' },
    { image: rama3[2], text: "Esto basicamente le deja el camino libre a L, sin un digno rival de su inteligencia, pudo llegar hasta el origen de Kira, descubriendo a Light y Mia en poco tiempo" },
    { image: rama3[3], text: "TE DESCUBRIERON" },
  ]
  
  rama4 = [
    { image: rama4[1], text: 'Intentas dialogar con L, tratando de hacerlo entrar en razon para que no cometa una locura' },
    { image: rama4[2], text: "L esta furioso, no quiere dialogar, me mira a los ojos por ultima vez y me dispara" },
    { image: rama4[3], text: "HAZ MUERTO" },
  ]
  
  rama5 = [
  { image: rama5[1], text: 'Sujetas fuerte a Mia, y empiezas a balancearla hacia el lago. Caen y sobreviven, pero quedan en coma.' },
  { image: rama5[2], text: "Despiertan 3 días después, junto al padre de Light. Este les dice que L fue arrestado por intento de homicidio y ya no les va a pasar nada." },
  { image: rama5[3], text: "Mia pierde la memoria de los últimos días con Light y no recuerda nada de lo sucedido. Light sonríe y se pregunta qué pasará ahora." },
  { image: rama5[4], text: "FIN \n\nCONTINUARA" },
];
}
  
