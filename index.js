let libros=[
    {
        titulo: "El resplandor",
        autor: "Stephen King",
        genero: "Terror",
        idioma: "Español",
        precio: 45000,
        formato: "Tapa dura",
        isbn: "978-8497594740",
        descripcion: "Un hombre acepta un trabajo como cuidador de un hotel en invierno, pero el aislamiento y la presencia sobrenatural del lugar comienzan a afectar su cordura.",
        estado: "Nuevo",
        ubicacion: "Sección de Terror",
        fecha_publicacion: "1977",
        editorial: "Debolsillo",
        paginas: 512,
        dimensiones: "14 x 21 cm",
        peso: "700 g"
    },
    {
        titulo: "It",
        autor: "Stephen King",
        genero: "Terror",
        idioma: "Español",
        precio: 55000,
        formato: "Tapa blanda",
        isbn: "978-0451169518",
        descripcion: "Un grupo de amigos se enfrenta a un ser maligno que toma la forma de sus peores miedos, resurgiendo cada 27 años en el pequeño pueblo de Derry.",
        estado: "Usado - Buen estado",
        ubicacion: "Sección de Terror",
        fecha_publicacion: "1986",
        editorial: "Debolsillo",
        paginas: 1376,
        dimensiones: "13.5 x 20 cm",
        peso: "900 g"
    },
    {
        titulo: "El psicoanalista",
        autor: "John Katzenbach",
        genero: "Suspenso",
        idioma: "Español",
        precio: 48000,
        formato: "Ebook",
        isbn: "978-0307275422",
        descripcion: "Un psicoanalista recibe una carta anónima que lo reta a jugar un peligroso juego psicológico, llevándolo al borde de la locura mientras intenta descubrir al remitente.",
        estado: "Nuevo",
        ubicacion: "Sección de Suspenso",
        fecha_publicacion: "2002",
        editorial: "Debolsillo",
        paginas: 560,
        dimensiones: "Variable",
        peso: "300 g"
    },
    {
        titulo: "Veronika decide morir",
        autor: "Paulo Coelho",
        genero: "Superación personal",
        idioma: "Español",
        precio: 35000,
        formato: "Tapa blanda",
        isbn: "978-0061124266",
        descripcion: "Una joven decide quitarse la vida, pero termina internada en un hospital psiquiátrico donde descubre un nuevo sentido para su existencia.",
        estado: "Nuevo",
        ubicacion: "Sección de Desarrollo Personal",
        fecha_publicacion: "1998",
        editorial: "Debolsillo",
        paginas: 240,
        dimensiones: "13.5 x 20.5 cm",
        peso: "250 g"
      },
      {
        titulo: "La casa de los espíritus",
        autor: "Isabel Allende",
        genero: "Terror",
        idioma: "Español",
        precio: 39000,
        formato: "Bolsillo",
        isbn: "978-8401378092",
        descripcion: "La historia de la familia Trueba en un país latinoamericano imaginario, marcada por el amor y la tragedia.",
        estado: "Usado - Buen estado",
        ubicacion: "Sección de Ficción Latinoamericana",
        fecha_publicacion: "1982",
        editorial: "Debolsillo",
        paginas: 520,
        dimensiones: "11 x 17.5 cm",
        peso: "400 g"
      },
      {
        titulo: "El túnel",
        autor: "Ernesto Sabato",
        genero: "Suspenso",
        idioma: "Español",
        precio: 42000,
        formato: "Tapa blanda",
        isbn: "978-8432211671",
        descripcion: "Un hombre se obsesiona con una mujer y comete un crimen, desencadenando una espiral de paranoia y culpa.",
        estado: "Nuevo",
        ubicacion: "Sección de Suspenso",
        fecha_publicacion: "1948",
        editorial: "HarperCollins",
        paginas: 144,
        dimensiones: "13 x 20 cm",
        peso: "200 g"
      },
      {
        titulo: "El monje que vendió su Ferrari",
        autor: "Robin Sharma",
        genero: "Superación personal",
        idioma: "Español",
        precio: 46000,
        formato: "Tapa dura",
        isbn: "978-0062515674",
        descripcion: "Un abogado exitoso abandona su carrera y se embarca en un viaje espiritual en el Himalaya, aprendiendo lecciones sobre felicidad y realización personal.",
        estado: "Nuevo",
        ubicacion: "Sección de Desarrollo Personal",
        fecha_publicacion: "1997",
        editorial: "HarperCollins",
        paginas: 224,
        dimensiones: "14 x 21 cm",
        peso: "350 g"
      },
      {
        titulo: "El Exorcista",
        autor: "William Peter Blatty",
        genero: "Terror",
        idioma: "Español",
        precio: 50000,
        formato: "Tapa blanda",
        isbn: "978-8497597970",
        descripcion: "Una niña es poseída por una entidad demoníaca, y dos sacerdotes realizan un exorcismo para salvarla, enfrentándose a fuerzas oscuras y a su propia fe.",
        estado: "Nuevo",
        ubicacion: "Sección de Terror",
        fecha_publicacion: "1971",
        editorial: "HarperCollins",
        paginas: 400,
        dimensiones: "14 x 21 cm",
        peso: "600 g"
      },
      {
        titulo: "La mujer en la ventana",
        autor: "A.J. Finn",
        genero: "Suspenso",
        idioma: "Español",
        precio: 46000,
        formato: "Ebook",
        isbn: "978-8401021203",
        descripcion: "Una mujer agorafóbica, que pasa sus días observando a sus vecinos a través de la ventana, presencia un crimen que desencadena una serie de giros inesperados.",
        estado: "Nuevo",
        ubicacion: "Sección de Suspenso",
        fecha_publicacion: "2018",
        editorial: "HarperCollins",
        paginas: 544,
        dimensiones: "Variable",
        peso: "400 g"
      },
      {
        titulo: "El alquimista",
        autor: "Paulo Coelho",
        genero: "Superación personal",
        idioma: "Español",
        precio: 38000,
        formato: "Tapa blanda",
        isbn: "978-0062502179",
        descripcion: "Un joven pastor emprende un viaje en busca de un tesoro oculto, descubriendo en el camino lecciones sobre el destino y la realización personal.",
        estado: "Nuevo",
        ubicacion: "Sección de Desarrollo Personal",
        fecha_publicacion: "1988",
        editorial: "HarperCollins",
        paginas: 208,
        dimensiones: "13.5 x 20.5 cm",
        peso: "250 g"
      },
      {
        titulo: "El silencio de los corderos",
        autor: "Thomas Harris",
        genero: "Terror",
        idioma: "Español",
        precio: 54000,
        formato: "Tapa dura",
        isbn: "978-8497591657",
        descripcion: "Un agente del FBI busca la ayuda de un brillante psicópata encarcelado para capturar a otro asesino en serie, desencadenando un juego mortal de ingenio.",
        estado: "Nuevo",
        ubicacion: "Sección de Terror",
        fecha_publicacion: "1988",
        editorial: "Urano",
        paginas: 384,
        dimensiones: "14 x 22 cm",
        peso: "600 g"
      },
      {
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        genero: "Suspenso",
        idioma: "Español",
        precio: 47000,
        formato: "Bolsillo",
        isbn: "978-8408180630",
        descripcion: "Un joven encuentra un libro maldito en el Cementerio de los Libros Olvidados, desencadenando una intrincada historia de amor, misterio y tragedia.",
        estado: "Nuevo",
        ubicacion: "Sección de Suspenso",
        fecha_publicacion: "2001",
        editorial: "Urano",
        paginas: 552,
        dimensiones: "11 x 17.5 cm",
        peso: "450 g"
      },
      {
        titulo: "Mujeres que corren con los lobos",
        autor: "Clarissa Pinkola Estés",
        genero: "Superación personal",
        idioma: "Español",
        precio: 42000,
        formato: "Tapa blanda",
        isbn: "978-8498720778",
        descripcion: "Una exploración de los cuentos de hadas y las leyendas para revelar el arquetipo femenino y recuperar el poder personal de las mujeres.",
        estado: "Nuevo",
        ubicacion: "Sección de Desarrollo Personal",
        fecha_publicacion: "1992",
        editorial: "Urano",
        paginas: 752,
        dimensiones: "15 x 23 cm",
        peso: "800 g"
      },
      {
        titulo: "El retrato de Dorian Gray",
        autor: "Oscar Wilde",
        genero: "Terror",
        idioma: "Español",
        precio: 49000,
        formato: "Tapa dura",
        isbn: "978-6074500395",
        descripcion: "Un retrato misterioso envejece mientras su sujeto permanece joven, llevando a un hombre por un camino de decadencia moral y autodestrucción.",
        estado: "Nuevo",
        ubicacion: "Sección de Terror",
        fecha_publicacion: "1890",
        editorial: "Urano",
        paginas: 256,
        dimensiones: "14 x 21 cm",
        peso: "500 g"
      },
      {
        titulo: "La chica del tren",
        autor: "Paula Hawkins",
        genero: "Suspenso",
        idioma: "Español",
        precio: 48000,
        formato: "Tapa blanda",
        isbn: "978-1941999690",
        descripcion: "Una mujer obsesionada con una pareja que ve desde el tren se ve envuelta en un misterio de desaparición y asesinato.",
        estado: "Nuevo",
        ubicacion: "Sección de Suspenso",
        fecha_publicacion: "2015",
        editorial: "Urano",
        paginas: 480,
        dimensiones: "13.5 x 21 cm",
        peso: "400 g"
      },
      {
        titulo: "El poder del ahora",
        autor: "Eckhart Tolle",
        genero: "Superación personal",
        idioma: "Español",
        precio: 42000,
        formato: "Tapa blanda",
        isbn: "978-8478085301",
        descripcion: "Un guía espiritual que enseña a vivir en el momento presente, liberando la mente de la ansiedad y el sufrimiento.",
        estado: "Nuevo",
        ubicacion: "Sección de Desarrollo Personal",
        fecha_publicacion: "1997",
        editorial: "Salamandra",
        paginas: 224,
        dimensiones: "13.5 x 21 cm",
        peso: "300 g"
      },
      {
        titulo: "El cuervo",
        autor: "Edgar Allan Poe",
        genero: "Terror",
        idioma: "Español",
        precio: 46000,
        formato: "Tapa blanda",
        isbn: "978-8497646549",
        descripcion: "Un poema macabro sobre un hombre afligido por la pérdida de su amada, acosado por un cuervo que le recuerda su dolor.",
        estado: "Nuevo",
        ubicacion: "Sección de Terror",
        fecha_publicacion: "1845",
        editorial: "Salamandra",
        paginas: 64,
        dimensiones: "12 x 18 cm",
        peso: "100 g"
      },
      {
        titulo: "La esposa entre nosotros",
        autor: "Greer Hendricks, Sarah Pekkanen",
        genero: "Suspenso",
        idioma: "Español",
        precio: 49000,
        formato: "Tapa dura",
        isbn: "978-8466346487",
        descripcion: "La vida de una mujer se entrelaza con su nueva y enigmática esposa, revelando secretos oscuros y giros sorprendentes.",
        estado: "Nuevo",
        ubicacion: "Sección de Suspenso",
        fecha_publicacion: "2018",
        editorial: "Salamandra",
        paginas: 448,
        dimensiones: "15 x 23 cm",
        peso: "600 g"
      },
      {
        titulo: "El hombre en busca de sentido",
        autor: "Viktor Frankl",
        genero: "Superación personal",
        idioma: "Español",
        precio: 40000,
        formato: "Tapa blanda",
        isbn: "978-8497594603",
        descripcion: "Un psiquiatra que sobrevivió al Holocausto reflexiona sobre la importancia de encontrar significado en la vida, incluso en las circunstancias más extremas.",
        estado: "Nuevo",
        ubicacion: "Sección de Desarrollo Personal",
        fecha_publicacion: "1946",
        editorial: "Salamandra",
        paginas: 184,
        dimensiones: "13.5 x 20.5 cm",
        peso: "200 g"
      },
      {
        titulo: "Misery",
        autor: "Stephen King",
        genero: "Terror",
        idioma: "Español",
        precio: 48000,
        formato: "Ebook",
        isbn: "978-0451169525",
        descripcion: "Un escritor es secuestrado por una fanática obsesionada con su serie de novelas, llevándolo a una pesadilla de tortura psicológica.",
        estado: "Nuevo",
        ubicacion: "Sección de Terror",
        fecha_publicacion: "1987",
        editorial: "Salamandra",
        paginas: 352,
        dimensiones: "Variable",
        peso: "300 g"
      }
]

function agregar(libros) {
  titulo=prompt("Ingrese un titulo")
  autor=prompt("Ingrese un autor")
  genero=prompt("Ingrese un genero")
  idioma=prompt("Ingrese un idioma")
  precio=prompt("Ingrese un precio")
  formato=prompt("Ingrese un formato")
  isbn=prompt("Ingrese un isbn")
  descripcion=prompt("Ingrese una descripcion")
  estado=prompt("Ingrese un estado")
  ubicacion=prompt("Ingrese una ubicacion")
  fecha_publicacion=prompt("Ingrese una fecha de publicacion")
  editorial=prompt("Ingrese una editorial")
  paginas=prompt("Ingrese las paginas")
  dimensiones=prompt("Ingrese las dimensiones")
  peso=prompt("Ingrese el peso")
  libros.push({titulo,autor,genero,idioma,precio,formato,isbn,descripcion,estado,ubicacion,fecha_publicacion,editorial,paginas,dimensiones,peso})
  console.log(libros)
}

function mostrar(libros) {
  console.log(libros)
}
function eliminar(libros) {
  libros.pop()
  console.log(libros)
}
let lista1 =libros.map(function titulo(libros){
    return{
      titulo:libros.titulo,
      autor: libros.autor,
      editorial: libros.editorial,
      precio: libros.precio,
    }
})
console.table(lista1)

let lista2 =libros.map(function titulo(libros){
  return{
    titulo:libros.titulo,
    genero: libros.genero,
    idioma: libros.idioma,
  }
})
console.table(lista2)
let lista3 =libros.map(function titulo(libros){
  return{
    titulo:libros.titulo,
    formato: libros.formato,
    estado: libros.estado,
  }
})
console.table(lista3)
let lista4 =libros.map(function titulo(libros){
  return{
    titulo:libros.titulo,
    isbn: libros.isbn,
    ubicacion: libros.ubicacion,
  }
})
console.table(lista4)
let lista5 =libros.map(function titulo(libros){
  return{
    titulo:libros.titulo,
    estado: libros.estado,
    fecha_publicacion: libros.fecha_publicacion,
  }
})
console.table(lista5)
let lista6 =libros.map(function titulo(libros){
  return{
    titulo:libros.titulo,
    paginas: libros.paginas,
    dimensiones: libros.dimensiones,
  }
})
console.table(lista6)
let lista7 =libros.map(function titulo(libros){
  return{
    titulo:libros.titulo,
    descripcion: libros.descripcion,
    peso: libros.peso,
  }
})
console.table(lista7)
let lista8 =libros.map(function titulo(libros){
  return{
    titulo:libros.titulo,
    formato: libros.formato,
    precio: libros.precio,
  }
})
console.table(lista8)
let lista9 =libros.map(function titulo(libros){
  return{
    titulo:libros.titulo,
    editorial: libros.editorial,
    dimensiones: libros.dimensiones,
  }
})
console.table(lista9)
let lista10 =libros.map(function titulo(libros){
  return{
    titulo:libros.titulo,
    idioma: libros.idioma,
    precio: libros.precio,
  }
})
console.table(lista10)



let opcion=0

function inicio() {
  libro=libros
  do {
    opcion=parseInt(prompt("Elija una opcion \n 1. Motrar libros \n 2. Eliminar libro \n 3.Agregar Libro"))
    switch (opcion) {
      case 1:
        mostrar(libro)
        break;
      case 2:
        eliminar(libro)
        break; 
      case 3:
        agregar(libro)
        break; 
      default:"Ingrese un dato valido"
        break;
    }
  } while (opcion = 0);
  
}
do {
  inicio()
  continuar=prompt("Desea realizar otra accion")
} while (continuar ==="si");
