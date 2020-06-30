function graficar(a, b, c) {
    Highcharts.chart('container', {

        title: {
            text: 'Punto de eqilibrio de la empresa A'
        },

        subtitle: {
            text: 'Subtitulo'
        },

        yAxis: {
            title: {
                text: 'Eje y'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2011 //Empezar a pinatr dese el origen es decir el origen sera apartorde 2011
            }
        },

        series: [{
            name: 'Installation',
            data: [a, b, c]
            

             }, {
                 name: 'Manufacturing',
                 data: [-c,-b,-a]
            // }, {
            //     name: 'Sales & Distribution',
            //     data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            // }, {
            //     name: 'Project Development',
            //     data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
            // }, {
            //     name: 'Other',
            //     data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111] 

        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}


$('document').ready(function () {
    var a = parseInt($('input[id=i1]').val());
    var b = parseInt($('input[id=i2]').val());
    var c = parseInt($('input[id=i3]').val());
    graficar(a,b,c);

    $('.miinput').keyup(function () {
        // console.log(parseInt($('input[id=miinput]').val()));
         a = parseInt($('input[id=i1]').val());
         b = parseInt($('input[id=i2]').val());
         c = parseInt($('input[id=i3]').val());
        graficar(a,b,c);

    });
});
