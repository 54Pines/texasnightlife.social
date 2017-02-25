$(document).ready(function(){
//Add your images, we'll set the path in the next step
    var images = ['houstonskyline.jpg', 'houstonskyline.jpg', 'houstonskyline.jpg', 'houstonskyline.jpg'];
    
//Build the img, then do a bit of maths to randomize load and append to a div. Add a touch off css to fade them badboys in all sexy like.
//    $('<img class="fade-in" src="' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#banner-load');
    $('#banner-load').css({'background': 'linear-gradient(rgba(0, 0, 0, 0.41), rgba(0, 0, 0, 0.72)), url(img/background/houston/' + images[Math.floor(Math.random() * images.length)] + ') center/cover'});
});