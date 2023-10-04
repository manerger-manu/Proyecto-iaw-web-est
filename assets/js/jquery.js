$(function(){
    $('#events').hide();/*oculta envents*/
    $('#contacto').hide();/*oculta envents*/
    $('#form').hide();/*oculta envents*/
    $('.index').on('click',function(event){
        event.preventDefault();
        /*$(this).parent().parent().parent().next().toggle();oculta index */
        $('#index').show();/*oculta envents*/
        $('#events').hide();/*oculta envents*/
        $('#contacto').hide();/*oculta envents*/
        $('#form').hide();/*oculta envents*/
    });
    $('.events').on('click',function(event){
        event.preventDefault();
        /*$(this).parent().parent().parent().next().toggle();oculta index */
        $('#index').hide();/*oculta envents*/
        $('#events').show();/*oculta envents*/
        $('#contacto').hide();/*oculta envents*/
        $('#form').hide();/*oculta envents*/
    });
    $('.contacto').on('click',function(event){
        event.preventDefault();
        /*$(this).parent().parent().parent().next().toggle();oculta index */
        $('#index').hide();/*oculta envents*/
        $('#events').hide();/*oculta envents*/
        $('#contacto').show();/*oculta envents*/
        $('#form').hide();/*oculta envents*/
    });
    $('.form').on('click',function(event){
        event.preventDefault();
        /*$(this).parent().parent().parent().next().toggle();oculta index */
        $('#index').hide();/*oculta envents*/
        $('#events').hide();/*oculta envents*/
        $('#contacto').hide();/*oculta envents*/
        $('#form').show();/*oculta envents*/
    });
})
