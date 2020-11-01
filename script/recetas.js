document.getElementById('info_receta').style.display = 'none';
new Vue({
    el: '#recetas',
    data: {
        activo: true,
        recetas: [
            [
                'Pan de avena',
                ['pan', 'trigo', 'avena'],
                [
                    ['Avena arrollada', 2, 'tazas'],
                    ['Harina de trigo integral superfina', 3, 'tazas'],
                    ['Sal marina', 1, 'cucharada'],
                    ['Nuez moscada', 1, 'pizca'],
                    ['Queso rallado', 1, 'taza'],
                    ['Levadura de cerveza', 1, 'cucharada'],
                    ['Aceite', 1, 'cucharada'],
                    ['Agua tibia', 700, 'cc.']
                ],
                [
                    'Mezclar en un bowl la avena, la harina, la sal, la nuez moscada y el queso rallado.',
                    'Aparte, disolver la levadura en un poco de agua tibia junto con el aceite. Incorporar a la preparación anterior, añadiendo el agua necesaria hasta formar una masa de consistencia mediana. Dejar descansar en lugar cálido por 30 minutos.',
                    'Formar los panes con las manos humedecidas y colocarlos en moldes aceitados. Dejar leudar en horno precalentado por 30 minutos.',
                    'Llevar a horno a temperatura media durante 30 minutos. Retirar y desmoldar sobre rejilla.'
                ], '../img/recetas/pan_avena.jpg'
            ],
            [
                'Bollos de quinoa',
                ['pan', 'trigo', 'quinoa'],
                [
                    ['Harina de trigo integral superfina', 0.5, 'kg.'],
                    ['Semillas de quinoa', 0.5, 'kg.'],
                    ['Agua', 250, 'cc.'],
                    ['Levadura de cerveza', 1, 'cucharada'],
                    ['Aceite', 2, 'cucharadas'],
                    ['Miel', 1, 'cucharadita'],
                    ['Sal marina', 1, 'pizca'],
                    ['Huevo', 1, 'unidad']
                ], [
                    'Lavar la quinoa y remojarla durante 15 minutos.',
                    'Colocar en un bowl la harina y la sal. Agregar la quinoa remojada, mezclando bien.',
                    'Aparte, disolver la levadura en media taza de agua tibia con la miel y el aceite. Incorporar a la preparación anterior y unir bien, añadiendo el agua tibia necesaria hasta formar un bollo homogéneo y tierno. Dejar descansar durante 30 minutos.',
                    'Separar en 4 porciones, formar bollos y colocarlos sobre la placa aceitada. Pintar con huevo batido y decorar con semillas de quinoa secas. Dejar leudar en horno precalentado durante 30 minutos.',
                    'Cocinar en el horno a temperatura media por 20 minutos. Retirar y dejar enfriar sobre rejilla.'
                ], '../img/recetas/bollos_quinoa.jpg'
            ], [
                'Tabulee',
                ['quinoa', 'ensalada'],
                [
                    ['Quinoa cocida', 2, 'tazas'],
                    ['Perejil picado', 1, 'taza'],
                    ['Cebolla', 1, 'unidad'],
                    ['Cebolla de verdeo', 1, 'unidad'],
                    ['Ají rojo', 1, 'unidad'],
                    ['Menta', 1, 'cucharada'],
                    ['Lechuga', 1, 'planta'],
                    ['Tomates', 3, 'unidades'],
                    ['Aceite, sal marina y jugo de limón', 0, 'c.n.']
                ], [
                    'Cortar bien los vegetales, mezclar con la quinoa y condimentar (debe quedar crocante). En lugar de menta se puede variar con albahaca o apio.'
                ], '../img/recetas/tabule.jpg'
            ]
        ],

    },
    methods: {
        desplegar: function () {
            var selecto = document.getElementById('recet_selector');
            document.getElementById('info_receta').style.display = 'block';

            listado_p = document.getElementById('ol');
            var donde = 0;

            var contenido_i = '';
            var contenido_p = '';
            for (var i = 0; i < this.recetas.length; i++) {
                if (this.recetas[i][0] == selecto.value) {
                    donde = i;
                }
            }

            document.getElementById('receta_nom').innerHTML = this.recetas[donde][0];
            document.getElementById('receta_foto').innerHTML = '<img src="' + this.recetas[donde][4] + '" id="fr" alt="' + this.recetas[donde][0] + '">';

            for (let i = 0; i < this.recetas[donde][2].length; i++) {
                contenido_i += '<li id="ingr">' + this.recetas[donde][2][i][0] + ', ' + this.recetas[donde][2][i][1] + ' ' + this.recetas[donde][2][i][2] + '</li>';
            }

            for (i = 0; i < this.recetas[donde][3].length; i++) {
                contenido_p += '<li id="ingr">' + this.recetas[donde][3][i] + '</li>';
            }

            document.getElementById('ul').innerHTML = contenido_i;
            document.getElementById('ol').innerHTML = contenido_p;
        }
    }
})
