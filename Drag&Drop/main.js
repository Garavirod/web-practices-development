var destino;
var isIn=false;
function comenzar(){
    // Identifia a todas la images dentro del mazo
    var cartas = document.querySelectorAll("#mazo div");
    // A cad aimagen e asignamos ele evento dragstart
    for(var i =0; i<cartas.length; i++){
        cartas[i].addEventListener("dragstart",arrastra,false);        
        if(i!=1)    
            cartas[i].addEventListener("dragend",elimina,false);            
    }
    // selecionamos el obj de destino de las cartas
    destino = document.getElementById('destino');
    // Lo que hará la zona destino una vez entre la carta
    destino.addEventListener("dragenter",function(e){
        e.preventDefault();
        var id = e.dataTransfer.getData("text/html");
        console.log(id);
        isIn=true;
        if(id!="img2"){            
            destino.style.background="rgb(179, 248, 115)"; 
        } 
        else{
            destino.style.background="rgb(248, 115, 115)";   
        }
                    
            
                 
    },false);

    destino.addEventListener("dragleave",function(e){
        e.preventDefault();
        destino.style.background="#fff";        
        destino.style.border="1px deshed #000";
        isIn=false;
        
    },false);

    destino.addEventListener("dragover",function(e){
        e.preventDefault();
    },false);

    destino.addEventListener("drop",soltar,false);
}

function arrastra(e){
    var elem = e.target;
    // Establecemos la inoformacion a compratir a la zona destino, al info es la img
    e.dataTransfer.setData("Text",elem.getAttribute("id"));
}

function soltar(e){
    e.preventDefault();
    var id = e.dataTransfer.getData("Text");
    if(id=="img2"){
        destino.innerHTML="Movimiento invalido!!";
        destino.style.background="#fff";
    }else{
        var src = document.getElementById(id).src;
        destino.innerHTML="<img src='"+src+"'>";
        destino.style.background="#fff";
    }    
}


function elimina(e){
    var padre = document.getElementById('mazo');
    var card = e.target;
    if(isIn){
        padre.removeChild(card.parentNode);
        isIn=false;
    }
 
}
window.addEventListener("load",comenzar,false);
