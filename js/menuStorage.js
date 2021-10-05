// Precio platos

var pr_plato1 = 13000;
var pr_plato2 = 14000;
var pr_plato3 = 11000;
var pr_plato4 = 9000;
var pr_plato5 = 20000;
var pr_plato6 = 14500;
var pr_plato7 = 18500;
var pr_plato8 = 25000;
var pr_plato9 = 10500;
var pr_plato10 = 15000;
var pr_plato11 = 8500;
var pr_plato12 = 17400;

// Cuentas de platos (Aqui empieza lo chido :D)

$(document).ready(function(){
    $("#guardar_1").click(function(){
        let total = document.getElementById("valor1").value;
        let precioPlato = total * pr_plato1;
        localStorage.setItem("cuenta_Plato1", precioPlato);
        localStorage.setItem("cantidad_Plato1", total);

        alert(`Usted agregó ${total} porciones del platillo 1`)
    })     


    $("#guardar_2").click(function(){
        let total = document.getElementById("valor2").value;
        let precioPlato = total * pr_plato2;
        localStorage.setItem("cuenta_Plato2", precioPlato);
        localStorage.setItem("cantidad_Plato2", total);

        alert(`Usted agregó ${total} porciones del platillo 2`)
    }) 
    
    $("#guardar_3").click(function(){
        let total = document.getElementById("valor3").value;
        let precioPlato = total * pr_plato3;
        localStorage.setItem("cuenta_Plato3", precioPlato);
        localStorage.setItem("cantidad_Plato3", total);

        alert(`Usted agregó ${total} porciones del platillo 3`)
    })
    
    $("#guardar_4").click(function(){
        let total = document.getElementById("valor4").value;
        let precioPlato = total * pr_plato4;
        localStorage.setItem("cuenta_Plato4", precioPlato);
        localStorage.setItem("cantidad_Plato4", total);

        alert(`Usted agregó ${total} porciones del platillo 4`)
    })  

    $("#guardar_5").click(function(){
        let total = document.getElementById("valor5").value;
        let precioPlato = total * pr_plato5;
        localStorage.setItem("cuenta_Plato5", precioPlato);
        localStorage.setItem("cantidad_Plato5", total);

        alert(`Usted agregó ${total} porciones del platillo 5`)
    })  

    $("#guardar_6").click(function(){
        let total = document.getElementById("valor6").value;
        let precioPlato = total * pr_plato6;
        localStorage.setItem("cuenta_Plato6", precioPlato);
        localStorage.setItem("cantidad_Plato6", total);

        alert(`Usted agregó ${total} porciones del platillo 6`)
    })
    
    $("#guardar_7").click(function(){
        let total = document.getElementById("valor7").value;
        let precioPlato = total * pr_plato7;
        localStorage.setItem("cuenta_Plato7", precioPlato);
        localStorage.setItem("cantidad_Plato7", total);

        alert(`Usted agregó ${total} porciones del platillo 7`)
    })  

    $("#guardar_8").click(function(){
        let total = document.getElementById("valor8").value;
        let precioPlato = total * pr_plato8;
        localStorage.setItem("cuenta_Plato8", precioPlato);
        localStorage.setItem("cantidad_Plato8", total);

        alert(`Usted agregó ${total} porciones del platillo 8`)
    })
    
    $("#guardar_9").click(function(){
        let total = document.getElementById("valor9").value;
        let precioPlato = total * pr_plato9;
        localStorage.setItem("cuenta_Plato9", precioPlato);
        localStorage.setItem("cantidad_Plato9", total);

        alert(`Usted agregó ${total} porciones del platillo 9`)
    })

    $("#guardar_10").click(function(){
        let total = document.getElementById("valor10").value;
        let precioPlato = total * pr_plato10;
        localStorage.setItem("cuenta_Plato10", precioPlato);
        localStorage.setItem("cantidad_Plato10", total);

        alert(`Usted agregó ${total} porciones del platillo 10`)
    })

    $("#guardar_11").click(function(){
        let total = document.getElementById("valor11").value;
        let precioPlato = total * pr_plato11;
        localStorage.setItem("cuenta_Plato11", precioPlato);
        localStorage.setItem("cantidad_Plato11", total);

        alert(`Usted agregó ${total} porciones del platillo 11`)
    })

    $("#guardar_12").click(function(){
        let total = document.getElementById("valor12").value;
        let precioPlato = total * pr_plato12;
        localStorage.setItem("cuenta_Plato12", precioPlato);
        localStorage.setItem("cantidad_Plato12", total);

        alert(`Usted agregó ${total} porciones del platillo 12`)
    })
     localStorage.clear()
});

// PASANDO DATOS DE LOCALSTORAGE (STRING TO NUMBER :(( )

    function pasandoString(valor){
        let numero = parseInt(valor).value
        return numero
    }

    pasandoString(localStorage.getItem("cantidad_plato12"))
// SUMANDO TODOS LOS VALORES 
