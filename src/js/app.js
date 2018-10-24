$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:1500,
        margin:15,
        dots:false,
        responsive:{
            0:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:8
            }
        }
    })

});