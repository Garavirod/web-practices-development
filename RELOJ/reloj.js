(function() {


    var actualiza_hora = function() {

        //obj tipo fecha
        var fecha = new Date();
        var horas = fecha.getHours();
        var ampm;
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        var Diasemana = fecha.getDay();
        var dia = fecha.getDate();
        var mes = fecha.getMonth();
        var año = fecha.getFullYear();


        var Phoras = document.getElementById('horas');
        var P_AMPM = document.getElementById('ampm');
        var Pminutos = document.getElementById('minutos');
        var Psegundos = document.getElementById('segundos');
        var PDiasemana = document.getElementById('diasemana');
        var PDia = document.getElementById('dia');
        var PMes = document.getElementById('mes');
        var Paño = document.getElementById('año');


        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        PDiasemana.textContent = semana[Diasemana];

        PDia.textContent = dia;

        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        PMes.textContent = meses[mes];

        Paño.textContent = año;

        if (horas >= 12) {
            horas = horas - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }

        if (horas == 0) {
            horas = 12;
        }

        if (minutos < 10) {
            minutos = "0" + minutos;
        }

        if (segundos < 10) {
            segundos = "0" + segundos;
        }

        Phoras.textContent = horas;
        P_AMPM.textContent = ampm;
        Pminutos.textContent = minutos;
        Psegundos.textContent = segundos;

    };

    actualiza_hora();

    var intervalo = setInterval(actualiza_hora, 1000)


}())