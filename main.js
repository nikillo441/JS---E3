let Pizzas = [
    {
      id: 1,
      nombre: 'Fugazzeta',
      ingrendientes: ["Cebolla", "Queso"],
      precio: 900,
      img: "assets/fugazzeta.jpeg",
    },
    
    {
      id: 2,
      nombre: 'Napolitana',
      ingrendientes: ["Tomate", "Queso", "Salsa de tomate"],
      precio: 1000,
      img: "assets/napolitana.jpg"
    },

    {
      id: 3,
      nombre: 'Margarita',
      ingrendientes: ["Tomate", "Queso", "Albahaca", "Aceite de oliva"],
      precio: 1100,
      img:"assets/margarita.jpg"
    },

    {
      id: 4,
      nombre: 'Rucula',
      ingrendientes: ["Rucula", "Queso", "Salsa de tomate"],
      precio: 1200,
      img:"assets/rucula.jpg"
    },
  
    {
      id: 5,
      nombre: 'CuatroQuesos',
      ingrendientes: ["Mozzarella", "Parmesano", "Provolone", "Roquefort"],
      precio: 1100,
      img: "assets/cuatroQuesos.jpg",

    },

    {
      id: 6,
      nombre: 'Hawaiana',
      ingrendientes: ["Anana", "Queso", "Jamon", "Tomate"],
      precio: 1100,
      img:"assets/hawaiana.jpg"
    }
    ]

let nombre = document.getElementById("pizzaNombre");
let precio = document.getElementById("pizzaPrecio");
let form = document.getElementById("formulario");
let input = document.getElementById("inputNumber");
let error = document.getElementById("error");
let fotoPizza = document.getElementById("pizzaPic");
let boton = document.getElementById("btn");
let ingredientes = document.getElementById("ingredientes")

function submit(e) {
  e.preventDefault();

  let toFind = parseInt(input.value);
  const found = Pizzas.find(pizza => pizza.id === toFind)

  if (found) {
      nombre.innerHTML = found.nombre
      precio.innerHTML = `$  ${found.precio}`
      ingredientes.innerHTML = `ingredientes:  ${found.ingrendientes}`
      error.innerHTML = ""
      fotoPizza.src = found.img
  } else {
      error.innerHTML = "Opción invalida";
      nombre.innerHTML = ""
      precio.innerHTML = ""
      fotoPizza.src = ""
  }
  input.value = ""
}

form.addEventListener("submit", submit)

localStorage. setItem("Pizza", JSON.stringify(Pizzas));
let pizzitasRikas = localStorage.getItem("Pizza");