document.getElementById('info_card').style.display = 'none';
new Vue({
    el: '#cocciones',
    data: {
        legum_active: true,
        gral_legum: 'Conviene remojar las legumbres en agua hirviendo, así disminuye su tiempo de remojo.',
        legumbres: [
            ['Arvejas secas', 8, 4, 'Cambiar el agua del remojo y cocinar en cacerola tapada a fuego lento.', '1 hora', '../img/prods/arvejas.jpg'],
            ['Garbanzos', 8, 4, 'Cambiar el agua del remojo y cocinar en cacerola tapada a fuego lento.', '1 hora', '../img/prods/garbanzos.jpg'],
            ['Habas secas', 8, 4, 'Para disminuir el tiempo de cocción conviene pelarlas después de remojadas. Cambiar el agua del remojo y cocinar en cacerola tapada a fuego lento.', '1 hora', '../img/prods/habas.jpg'],
            ['Lentejas', 2, 4, 'Cambiar el agua del remojo y cocinar en cacerola tapada a fuego lento.', '30 minutos', '../img/prods/lentejas.jpg'],
            ['Porotos aduki', 2, 4, 'Cambiar el agua del remojo y cocinar en cacerola tapada a fuego lento.', '1 hora', '../img/prods/aduki.jpg'],
            ['Porotos alubia, pallares, negros, colorados o de manteca', 2, 4, 'Cambiar el agua del remojo y cocinar en cacerola tapada a fuego lento.', '1 hora', '../img/prods/porotos.jpg'],
            ['Porotos de soja', 8, 4, 'Cambiar el agua del remojo y cocinar en cacerola tapada a fuego lento.', '1 hora y media, o hasta que estén tiernos', '../img/prods/soja.jpg']
        ],
        gral_cereal: 'Todos los cereales deben ser enjuagados antes de usar.\nLos cereales que llevan remojo, se deben cocinar en su misma agua.',
        cereales: [
            ['Arroz integral', 0, 2, 'Llevar a fuego hasta que hierva. Llevar la llama a mínimo y tapar. Continuar con la cocción por unos 30 minutos, hasta que absorba todo el líquido. Dejar reposar tapado y con el fuuego apagado por 10 minutos.', ' ', '../img/prods/arroz.jpg'],
            ['Avena arrollada', 0, 0, 'Incorporar en el agua hirviendo en forma de lluvia. Cocinar a fuego mínimo durante 10 minutos.', '.', '../img/prods/avena.jpg'],
            ['Avena pelada en granos', 0, 1, 'Cocinar durante 30 minutos', ' ', '../img/prods/avena_grano.jpg'],
            ['Cebada perlada', 1, 4, 'Cocinar durante una hora aproximadamente', ' ', '../img/prods/cebada.jpg'],
            ['Harina de arroz', 0, 0, 'Agregar al caldo o agua hirviendo en foma de lluvia y cocinar a fuego lento durante 10 minutos.', ' ', '../img/prods/h_arroz.jpg'],
            ['Harina de maíz', 0, 3, 'Levar el agua al fuego. Cuando rompe el hervor, incorporar en forma de lluvia, revolviendo con cuchara de madera, hasta que retome el hervor. Bajar a mínimo, tapar y cocinar durante 10 minutos más. Apagar y dejar reposar unos minutos', ' ', '../img/prods/h_maiz.jpg'],
            ['Maíz entero', 8, 4, 'Cocinar durante 1 hora aproximadamente.', ' ', '../img/prods/maiz_entero.jpg'],
            ['Maíz partido', 8, 4, 'Cocinar durante 1 hora aproximadamente.', ' ', '../img/prods/maiz_partido.jpg'],
            ['Mijo pelado', 8, 2.5, 'Llevar el agua al fuego. Cuando rompe el hervor, incorporar en forma de lluvia, revolviendo con cuchara de madera, hasta que retome el hervor. Bajara a mínimo, tapar y cocinar durante 15 minutos más. Apagar y dejar reposar unos minutos', ' ', '../img/prods/mijo.jpg'],
            ['Quinoa o amaranto', 0, 3, 'Enjuagar varias veces. Llevar el agua al fuego. Cuando rompe el hervor, incorporar en forma de lluvia, revolviendo con cuchara de madera, hasta que retome el hervor. Bajara a mínimo, tapar y cocinar durante 15 minutos más.', ' ', '../img/prods/quinoa.jpg'],
            ['Trigo burgol', 0, 2.5, 'Este ceral tiene un tiempo de precocido, por lo tanto puede comerse crudo, remojándolo 1 ó 2 horas, o cocinarse durante 15 minutos.', ' ', '../img/prods/trigo_burgol.jpg'],
            ['Trigo candeal', 8, 4, 'Llevar el agua al fuego. Cuando rompe el hervor, bajar la llama al mínimo y continuar cocinando con la cacerola tapada durante una hora, agregando más agua si fuera necesario', ' ', '../img/prods/trigo_candeal.jpg'],
            ['Trigo integral', 2, 4, 'Llevar el agua al fuego. Cuando rompe el hervor, bajar la llama a mínimo y continuar cocinando con la cacerola tapada durante 45 minutos aproximadamente.', ' ', '../img/prods/trigo_integral.jpg'],
            ['Trigo sarraceno', 0, 3, 'Untar la cacerola con aceite y tostar ligeramente el trigo. Agregar el agua hirviendo y tapar. Bajar el fuego y cocinar durante 20 minutos.', ' ', '../img/prods/trigo_sarraceno.jpg']
        ]
    },
    methods: {
        mostrar: function (seleccion, lista) {
            var selected = document.getElementById(seleccion);
            document.getElementById('info_card').style.display = 'block';
            var donde = 0;
            for (var i = 0; i < lista.length; i++) {
                if (lista[i][0] == selected.value) {
                    donde = i;
                }
            }
            document.getElementById('img').innerHTML = '<img src="' + lista[donde][5] + '" alt="' + lista[donde][0] + '">';
            var rem = '<span class = "font-weight-bold">Remojo :</span> no precisa';
            if (lista[donde][1] != 0) {
                rem = '<span class = "font-weight-bold">Tiempo de remojo :</span> ' + lista[donde][1] + ' horas';
            }
            document.getElementById('nombre').innerHTML = lista[donde][0];
            document.getElementById('remojo').innerHTML = rem;
            document.getElementById('proporciones').innerHTML = '<span class = "font-weight-bold">Proporciones :</span> 1 parte de ' + lista[donde][0].toLowerCase() + ' en ' + lista[donde][2] + ' partes de agua';
            document.getElementById('i_coccion').innerHTML = '<span class = "font-weight-bold">Instrucciones :</span> ' + lista[donde][3];
            if (seleccion == 'legum_selector') {
                document.getElementById('t_coccion').innerHTML = '<span class = "font-weight-bold">Tiempo de cocción :</span> ' + lista[donde][4];
            }
        },
        change: function () {            
            document.getElementById('info_card').style.display = 'none';
            document.getElementById("default").selected = true;
            if (this.legum_active === true) {
                this.legum_active = false;
            } else {
                this.legum_active = true;
            }
        }
    }
});


