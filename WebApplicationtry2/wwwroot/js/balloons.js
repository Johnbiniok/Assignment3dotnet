$(function(){
    var allAnimations = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'];

    //$('#birthday').pickadate();
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
   // $(document).on('load', function(){

        $('#randomAnimate').replaceWith(`<h1 id="randomAnimate" class="animated ${allAnimations[Math.floor(Math.random() * 11)]} ">Happy Birthday!</h1>`);
   //});
    $('.form-check-input').on('mousedown', function () {
        var boolAdjuster = false;
        //$('#check').change(function(){
            $('#' + this.id + 'Img').css('visibility', 'visible');
            // animate balloon in/out based on checkbox
            $(this).is(':checked') ?
                $('#' + this.id + 'Img').removeClass().addClass('animated bounceOutUp') :
                $('#' + this.id + 'Img').addClass('animated bounceInDown');

        //if(boolAdjuster === false) {
              // }
        boolAdjuster = false;
           /*if($('#check').is('checked')){

               //red balloon
                $('#red').prop('checked', true);
               $('#redImg').css('visibility', 'visible');
               // animate balloon in/out based on checkbox
               $('#red').is(':checked') ?
                   $('#redImg').removeClass().addClass('animated bounceInDown') :
                   $('#redImg').addClass('animated bounceOutUp');

               //blue balloon
                $('#blue').prop('checked', true);
               $('#blueImg').css('visibility', 'visible');
               // animate balloon in/out based on checkbox
               $('#blue').is(':checked') ?
                   $('#blueImg').removeClass().addClass('animated bounceInDown') :
                   $('#blueImg').addClass('animated bounceOutUp');

                //green balloon
                $('#green').prop('checked', true);
               $('#greenImg').css('visibility', 'visible');
               // animate balloon in/out based on checkbox
               $('#green').is(':checked') ?
                   $('#greenImg').removeClass().addClass('animated bounceInDown') :
                   $('#greenImg').addClass('animated bounceOutUp');
            }else {*/
               //});
               // make the image visible

           //}
    });
    $('#check').on('change', function () {
        if($(this).is(':checked')){
            boolAdjuster = true;
            //red balloon
            $('#red').prop('checked', true);
            $('#redImg').css('visibility', 'visible');
            // animate balloon in/out based on checkbox
            $('#red').is(':checked') ?
                $('#redImg').removeClass().addClass('animated bounceInDown') :
                $('#redImg').addClass('animated bounceOutUp');

            //blue balloon
            $('#blue').prop('checked', true);
            $('#blueImg').css('visibility', 'visible');
            // animate balloon in/out based on checkbox
            $('#blue').is(':checked') ?
                $('#blueImg').removeClass().addClass('animated bounceInDown') :
                $('#blueImg').addClass('animated bounceOutUp');

            //green balloon
            $('#green').prop('checked', true);
            $('#greenImg').css('visibility', 'visible');
            // animate balloon in/out based on checkbox
            $('#green').is(':checked') ?
                $('#greenImg').removeClass().addClass('animated bounceInDown') :
                $('#greenImg').addClass('animated bounceOutUp');
        }else{
            boolAdjuster = true;
            //red balloon
            $('#red').prop('checked', false);
            $('#redImg').css('visibility', 'visible');
            // animate balloon in/out based on checkbox
            $('#red').is(':checked') ?
                $('#redImg').removeClass().addClass('animated bounceInDown') :
                $('#redImg').addClass('animated bounceOutUp');

            //blue balloon
            $('#blue').prop('checked', false);
            $('#blueImg').css('visibility', 'visible');
            // animate balloon in/out based on checkbox
            $('#blue').is(':checked') ?
                $('#blueImg').removeClass().addClass('animated bounceInDown') :
                $('#blueImg').addClass('animated bounceOutUp');

            //green balloon
            $('#green').prop('checked', false);
            $('#greenImg').css('visibility', 'visible');
            // animate balloon in/out based on checkbox
            $('#green').is(':checked') ?
                $('#greenImg').removeClass().addClass('animated bounceInDown') :
                $('#greenImg').addClass('animated bounceOutUp');
        }
    });
    $('#red').hover(function(){
        $('#randomAnimate').replaceWith(`<h1 id="randomAnimate" style="color: red" class="animated ${allAnimations[Math.floor(Math.random() * 11)]} ">Happy Birthday!</h1>`)
    });
    $('#blue').on('mouseover', function(){
        $('#randomAnimate').replaceWith(`<h1 id="randomAnimate" style="color: blue" class="animated ${allAnimations[Math.floor(Math.random() * 11)]} ">Happy Birthday!</h1>`)
    });
    $('#green').on('mouseover', function(){
        $('#randomAnimate').replaceWith(`<h1 id="randomAnimate" style="color: green" class="animated ${allAnimations[Math.floor(Math.random() * 11)]} ">Happy Birthday!</h1>`)
    });
    /*$('#check').change(function(){
        if(this.checked){
            $('#red').prop('checked', true);
            $('#blue').prop('checked', true);
            $('#green').prop('checked', true);
        }
    });*/
    $( '#submit' ).on('submit',function(e) {
        e.preventDefault();
        if ($("#birthdayForm input:checkbox:checked").length > 0)
        {
            // any one is checked
        }
        else
        {
            var toast = new Audio('media/toast.wav');
            // TODO: create toast when submitted

                e.preventDefault();
                // first pause the audio (in case it is still playing)
                toast.pause();
                // reset the audio
                toast.currentTime = 0;
                // play audio
                toast.play();
               // $('#code').data('data-code');
                $('#toast').toast({ autohide: false }).toast('show');

        }

    });
    $(document).on('keyup', function (e) {
        if(e.key === "Escape"){
            $('#toast').toast({ autohide: false }).toast('hide');
        }
    });
});