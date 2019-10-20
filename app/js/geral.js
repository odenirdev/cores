$('#semCor').change(function() {
    $('label[for=semCor]').css('background-color', $(this).val());
    $('body').css('background-color', $(this).val());
});