$(function(){
    //$('#birthday').pickadate();
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
   // $(document).on('load', function(){
        var allAnimations = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'];
        var animationToUse = Math.floor(Math.random() * 11);
        $('#randomAnimate').replaceWith(`<h1 id="randomAnimate" class="animated ${allAnimations[animationToUse]} ">Happy Birthday!</h1>`);
   //});
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });
    $( "#birthdayForm" ).on('submit',function(e) {
        if ($("#birthdayForm input:checkbox:checked").length > 0)
        {
            // any one is checked
        }
        else
        {
            // TODO: create toast when submitted
        }
        e.preventDefault();
    });
});