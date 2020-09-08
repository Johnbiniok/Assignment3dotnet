$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');
   /* var allAnimations = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'];
    var animationToUse = Math.floor(Math.random() * 11);
    $('#randomAnimate').replaceWith(`'<h1 id="randomAnimate" class="animated ${allAnimations[animationToUse]} ">Happy Birthday!</h1><hr />'`);*/


    $('.code').on('click', function(e) {

        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#code').data('data-code');
        $('#toast').toast({ autohide: false }).toast('show');

    });
});
$(document).on('keyup', function (e) {
    if(e.key === "Escape"){
        $('#toast').toast({ autohide: false }).toast('hide');
    }
});
