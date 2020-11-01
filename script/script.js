document.getElementById('cocciones').style.display = 'none';
document.getElementById('recetas').style.display = 'none';

const buttonc = document.querySelector('#c');
buttonc.addEventListener('click', function (event) {
    document.getElementById('cocciones').style.display = 'block';
    document.getElementById('recetas').style.display = 'none';
    document.getElementById('c').disabled = true;
    document.getElementById('r').disabled = false;
    document.getElementById('cooking_cat').style.display = 'none';
});

const buttonr = document.querySelector('#r');
buttonr.addEventListener('click', function (event) {
    document.getElementById('cocciones').style.display = 'none';
    document.getElementById('recetas').style.display = 'block';
    document.getElementById('c').disabled = false;
    document.getElementById('r').disabled = true;
    document.getElementById('cooking_cat').style.display = 'none';
});