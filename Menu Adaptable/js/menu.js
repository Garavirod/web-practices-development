// cuando el documnto esté listo ejejcuta la funcion main
$(document).ready(main);
var contador = 1;
function main(){
    $('.menu_bar').click(function(){
        // $('nav').toggle();
        if(contador){
            $('nav').animate({
                left:'0'
            });
            contador = 0;
        }else{
            $('nav').animate({
                left:'-100%'
            });
            contador = 1;   
        }
    });
};