var cores = [];
var LimparCores = 0;

function todasAsCores() {
    let coresString = ''
    cores.forEach(function(valor, chave, cores) {
        coresString += ', ' + valor;
    });

    let linearGradient = 'linear-gradient(' + $('#seletorAngulo').val() + 'deg' + coresString + ')';
    let radialGradient = 'radial-gradient( circle' + coresString + ')';

    $('body').css('background-image', linearGradient);
    $('.slider').css('background-image', linearGradient);
    $('label[for=todasAsCores]').css('background-image', radialGradient);
    $('.slidecontainer').css('visibility', 'visible');
}
var lista;
$('#todasAsCores').change(function() {
    cores.push($(this).val());
    $('#cores').html(listaDeCores())
    if (cores.length > 1) {
        todasAsCores();
    } else {
        $('body').css('background-image', '');
        $('body').css('background-color', $(this).val());
        $('label[for=todasAsCores]').css('background-image', '');
        $('label[for=todasAsCores]').css('background-color', $(this).val());
    }
});

$(document).on('click', 'label[for=semCor]', function() {
    cores = [];
    $('body').css('background-image', '');
    $('body').css('background-color', 'black');
    $('label[for=todasAsCores]').css('background-image', '');
    $('label[for=todasAsCores]').css('background-color', 'black');
    $('.slidecontainer').css('visibility', 'hidden');
});

$(document).on('change', '#seletorAngulo', function() {
    $('label[for=seletorAngulo]').html($(this).val() + '°');
    todasAsCores();
});

function listaDeCores() {
    let html = '<ul>';
    cores.forEach(function(valor, chave, cores) {
        html += '<li data-id="' + chave + '" class="cor" style="background-color:' + valor + '"></li>';
    });
    html += '</ul>';
    return html;
}