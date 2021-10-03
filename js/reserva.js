const btnEnviar = document.querySelector('#btnEnviar');
const formulario = document.getElementById('form-reserva');

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const personas = document.querySelector('#personas');
const fecha = document.querySelector('#fecha');
const hora = document.querySelector('#hora');
const mensaje = document.querySelector('#mensaje');



const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, puede llevar acentos
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Se valida que tenga la estructura de un email
	telefono: /^[0-9]{7,14}$/, //Solo numeros, de 7 a 14 dígitos
    personas: /^[0-9]{1,3}$/ // 
}


eventListeners();

function eventListeners(){

    //Cuando carga la página
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    nombre.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    telefono.addEventListener('blur', validarFormulario);
    personas.addEventListener('blur', validarFormulario);
    fecha.addEventListener('blur', validarFormulario);
    hora.addEventListener('blur', validarFormulario);

    //Enviar formulario
    formulario.addEventListener('submit', enviarEmail);
    
}

function iniciarApp(){

    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

}

function validarFormulario(e){

    //Validar que los campos esten llenos
    if(e.target.value.length > 0){

        //Elimina el mensaje de error
        const error = document.querySelector('.error');
        if(error){
            error.remove();
        }

        e.target.classList.remove('border-red-500');
        e.target.classList.add('border-green-500');

    }else{
        e.target.classList.remove('border-green-500');
        e.target.classList.add('border-red-500');
        mostrarError("Todos los campos son obligatorios");
    }

    //Validar que los campos tengan el formato correcto

    if(e.target.name === 'nombre'){

        if(expresiones.nombre.test(e.target.value)){
            //Elimina el mensaje de error
            const error = document.querySelector('.error');
            if(error){
                error.remove();
            }
            e.target.classList.remove('border-red-500');
            e.target.classList.add('border-green-500');

        }else{
            e.target.classList.remove('border-green-500');
            e.target.classList.add('border-red-500');
            mostrarError("El nombre sólo puede contener letras");
        }

    }

    if(e.target.type == 'email'){

        if(expresiones.email.test(e.target.value)){
            //Elimina el mensaje de error
            const error = document.querySelector('.error');
            if(error){
                error.remove();
            }
            e.target.classList.remove('border-red-500');
            e.target.classList.add('border-green-500');

        }else{
            e.target.classList.remove('border-green-500');
            e.target.classList.add('border-red-500');
            mostrarError("Email no válido");
        }
    }

    if(e.target.name === 'telefono'){

        if(expresiones.telefono.test(e.target.value)){
            //Elimina el mensaje de error
            const error = document.querySelector('.error');
            if(error){
                error.remove();
            }
            e.target.classList.remove('border-red-500');
            e.target.classList.add('border-green-500');

        }else{
            e.target.classList.remove('border-green-500');
            e.target.classList.add('border-red-500');
            mostrarError("Teléfono no válido");
        }

    }

    if(e.target.name === 'personas'){

        if(expresiones.personas.test(e.target.value)){
            //Elimina el mensaje de error
            const error = document.querySelector('.error');
            if(error){
                error.remove();
            }
            e.target.classList.remove('border-red-500');
            e.target.classList.add('border-green-500');

        }else{
            e.target.classList.remove('border-green-500');
            e.target.classList.add('border-red-500');
            mostrarError("Cantidad de personas no válida");
        }

    }


    if(expresiones.nombre.test(nombre.value) && expresiones.email.test(email.value) && expresiones.telefono.test(telefono.value)
    && expresiones.personas.test(personas.value)){

        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
        

}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('text-white', 'text-center', 'bg-red-600', 'mt-6', 'error', 'rounded-md', 'p-3');
    
    const errores = document.querySelectorAll('.error');

    if(errores.length == 0){
        formulario.appendChild(mensajeError);
    }

}

const estructuraEmailCliente = `
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-center text-2xl font-bold text-gray-800">Bienvenido/a a SalySalsa, nos alegra mucho tenerte con nosotros</h1>
        <p class="text-center text-gray-800">A continuación te compartimos los datos de tu reserva:</p>
        <p class="text-center text-gray-800">${nombre.value}</p>
        <p class="text-center text-gray-800">${email.value}</p>
        <p class="text-center text-gray-800">${telefono.value}</p>
        <p class="text-center text-gray-800">${personas.value}</p>
        <p class="text-center text-gray-800">${fecha.value}</p>
        <p class="text-center text-gray-800">${hora.value}</p>
    </div>
`;

function enviarEmail(e){
    e.preventDefault();

    //Crear mensaje de éxito
    const mensajeExito = document.createElement('p');
    mensajeExito.textContent = 'Reserva creada correctamente';
    mensajeExito.classList.add('text-center','text-white', 'bg-green-600', 'uppercase', 'rounded-md', 'font-bold', 'mt-6', 'mb-6', 'p-3');

    //Insertar el mensaje de éxito
    formulario.appendChild(mensajeExito);

    //Limpiar el formulario
    setTimeout(() => {
    mensajeExito.remove();
    formulario.reset();
    iniciarApp();
    }, 3000);

    Email.send({
        Host: "smtp.gmail.com",
        Username : "salysalsarestaurante@gmail.com",
        Password : "loquesea4321",
        To : email.value,
        From : "salysalsarestaurante@gmail.com",
        Subject : "Reserva creada exitosamente",
        Body : estructuraEmailCliente,
        }).then(
            message => alert("Email enviado correctamente")
        );
}