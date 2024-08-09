

let puntosUsr=0;
let puntosPC=0;

let instrucciones= document.querySelector('#instrucciones');
let puntosJugador= document.querySelector('#puntosjugador');
let puntosmMaquina= document.querySelector('#puntospc');
let mensaje= document.querySelector('#mensaje');
let eleccionUsr= document.querySelector('#eleccionUsu');
let eleccionPC= document.querySelector('#eleccionmaquina');
let ganarPunto= document.querySelector('#gana-punto');
let elegirarma= document.querySelector('#eligearma');
let reiniciar= document.querySelector('#reiniciar');
let botonesArmas= document.querySelectorAll(".arma"); //elige un elemento html segun su clase

botonesArmas.forEach(boton=>{

    boton.addEventListener("click", iniciarjuego);
});

function iniciarjuego(e){

    let eleccionCompu= Math.floor(Math.random()*3);

    let eleccionUsu= e.currentTarget.id;

    if(eleccionCompu===0){

      eleccionCompu="piedra";
    } else if (eleccionCompu===1) {
      eleccionCompu="papel";
    } else {
      eleccionCompu="piedra";
    }

    mensaje.classList.remove("disabled");
    eleccionPC.innerText= eleccionCompu;
    eleccionUsr.innerText= eleccionUsu;

   
     if(
        (eleccionUsu==="piedra" && eleccionCompu==="tijera")||
        (eleccionUsu==="papel" && eleccionCompu==="piedra")||
        (eleccionUsu==="tijera" && eleccionCompu==="papel")
      
     ){
     ganausuario();
    
     
     }else if(
      (eleccionCompu==="piedra" && eleccionUsu==="tijera")||
      (eleccionCompu==="papel" && eleccionUsu==="piedra")||
      (eleccionCompu==="tijera" && eleccionUsu==="papel")

     ){
     ganaPC();
   
  
    }
     else
     empate();

    
    if(puntosUsr=== 5 || puntosPC===5){

        if(puntosUsr===5){
        instrucciones.innerText="Felicitaciones! has ganado el juego :D"
    
  }
        if(puntosPC===5){
          instrucciones.innerText="La Computadora ganó el juego :("

  }

  


        elegirarma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarjuego);

     }
  }
    function ganausuario(){
      puntosUsr++;
      puntosJugador.innerText= puntosUsr;
      ganarPunto.innerText="ganaste un punto";
      
     // 
    
    
    }
    function ganaPC(){
      puntosPC++;
      puntosmMaquina.innerText= puntosPC;
      ganarPunto.innerText="la computadora ganó un punto";
     // 
    
    }
    
    function empate(){
      ganarPunto.innerText="¡Empate!";
    
    }

    function reiniciarjuego(){

      reiniciar.classList.add("disabled");
      puntosPC = 0;
      puntosUsr = 0;
      puntosJugador.innerText= puntosUsr;
      puntosmMaquina.innerText= puntosPC;

      mensaje.classList.add("disabled");
      elegirarma.classList.remove("disabled");
      instrucciones.innerText= "Consigue 5 puntos para ganar!";
    }
    
 


    

