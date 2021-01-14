function esconder(tempo){
    $('.fg').fadeOut(tempo);
}
function exibir(quem){
    esconder(1000);
    legenda = $(quem).attr('title');
    fundo = $(quem).attr('src');
    $(quem).fadeIn(1000);
    $('#legenda').html(legenda);
    $('#legenda').fadeIn(1000);
    $('#fundo').attr('background',fundo);
}