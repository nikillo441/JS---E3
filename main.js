let Pizzas = [
    {
      id: 1,
      nombre: 'Fugazzeta',
      ingrendientes: ["Cebolla", "Queso"],
      precio: 900
    },
    
    {
      id: 2,
      nombre: 'Napolitana',
      ingrendientes: ["Tomate", "Queso", "Salsa de tomate"],
      precio: 1000
    },

    {
      id: 3,
      nombre: 'Margarita',
      ingrendientes: ["Tomate", "Queso", "Albahaca", "Aceite de oliva"],
      precio: 1100
    },

    {
      id: 4,
      nombre: 'Rucula',
      ingrendientes: ["Rucula", "Queso", "Jamon crudo"],
      precio: 1200
    },
  
    {
      id: 5,
      nombre: 'CuatroQuesos',
      ingrendientes: ["Mozzarella", "Parmesano", "Provolone", "Roquefort"],
      precio: 1100
    },

    {
      id: 6,
      nombre: 'Hawaiana',
      ingrendientes: ["Anana", "Queso", "Jamon", "Tomate"],
      precio: 1100
    }
    ]

let nombre = document.getElementById("pizzaNombre");
let precio = document.getElementById("pizzaPrecio");
let form = document.getElementById("formulario");
let input = document.getElementById("inputNumber");
let error = document.getElementById("error");
// let fotoPizza = document.getElementById("pizzaPic");
let boton = document.getElementById("btn");

function submit(e) {
  e.preventDefault();

  let toFind = parseInt(input.value);
  const found = Pizzas.find(pizza => pizza.id === toFind)

  if (found) {
      nombre.innerHTML = found.nombre
      precio.innerHTML = `$  ${found.precio}`
      error.innerHTML = ""
      // fotoPizza.src = found.img
  } else {
      error.innerHTML = "Opción invalida";
      nombre.innerHTML = ""
      precio.innerHTML = ""
      fotoPizza.src = ""
  }
  input.value = ""
}

form.addEventListener("submit", submit)