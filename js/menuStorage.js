
// Aqui se corrige y cambia todo :D

//Seleccionamos todos los botones
const clickButton = document.querySelectorAll(".agregar-carrito");

//Seleccionamos el lugar donde se van a renderizar nuestros objetos almacenados en carrito
const tbody = document.querySelector('.tbody');

//Creamos una matriz donde se van a almacenar los datos
let carrito = [];

// Creamos el evento de click para cada botón 
clickButton.forEach(btn =>{
    btn.addEventListener('click', addToCarritoItem)
});

//Creamos la función en la cual se toman los datos del contenedor padre (.card) al cual pertenece el botón que pulsemos
//Además los añadimos a la matriz
function addToCarritoItem (e) {
    const button = e.target;
    //Tomamos el contenedor padre
    const item = button.closest('.card');
    //Ahora tomamos los datos de Titulo, precio y cantidad
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;
    const itemCantidad = 1;

    //Creamos el objeto con los datos obtenidos en la parte anterior
    const newItem = {
        title: itemTitle,
        price: itemPrice,
        img: itemImg,
        cantidad: itemCantidad
    };
    
    //Aqui llamamos a la funcion que va a tomar a nuestro objeto recien creado
    addItemCarrito(newItem);
}


function addItemCarrito(newItem){

    //Primero modificaremos el contador para que este pueda determinar cuantos productos se tienen

    const inputElemento = tbody.getElementsByClassName("input__element")
    //Aqui creamos una funcion en la cual al pulsar varias veces el mismo producto este no se añada y se siga añadiendo 
    //Lo puse porque me paso y dure dos horas en esta wea :((
    for(let i = 0; i < carrito.length; i++){
        if (carrito[i].title.trim() === newItem.title){
            carrito[i].cantidad ++;
            const inputVaule = inputElemento[i];
            inputVaule ++;
            console.log(carrito);
            return null;
        }
    }
    //Aqui hacemos un push del objeto al carrito y hacemos el renderizado
    carrito.push(newItem);
    renderCarrito();
}

function renderCarrito(){

    tbody.innerHTML= '';
    carrito.map(item => {
        const tr = document.createElement('tr');
        tr.classList.add('itemCarrito');

        const content = `
        <th scope="row">1</th>
        <td class="table__productos  mr-10">
          <img src= ${item.img} alt="">
          <h6 class="title">${item.title}</h6>
        </td>
        <td class="table__precio">
          <p>${item.price}</p>
        </td>
        <td class="table__cantidad">
          <input type="number" min="1" max="10" value=${item.cantidad} class="input__element">
          <button class="delete btn btn-danger btn-sm">X
          </button>
        </td>
    
        `

        tr.innerHTML = content;
        tbody.append(tr);
    })
}