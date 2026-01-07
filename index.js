$(document).ready(function(){

    $('#productshow').hide();
    $('#home').click(function(){
      
        $('#home').css('color','#f57c0091');
        $('#main').hide();
        $('#main').show(50);

    })
    $('#product').click(function(){
        $('#main').hide();
        $('#productshow').show();
    })

})