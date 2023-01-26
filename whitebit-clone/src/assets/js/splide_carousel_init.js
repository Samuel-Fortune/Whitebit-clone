$(document).ready(function () {
    let __slide = $(".splide");

    // configure splide js 
    var splide = new Splide( '.splide', {
        perPage: 3,
        rewind : true,
        } );
        
        splide.mount();

        document.addEventListener( 'DOMContentLoaded', function () {
        new Splide('#splide', {
            type: 'loop',
            perPage: 3,
            focus: 'center',
            autoplay: true,
            interval: 8000,
            flickMaxPages: 1,
            updateOnMove: true,
            pagination: false,
            padding: '5%',
            throttle: 300,
            breakpoints: {
            1440: {
                perPage: 1,
                padding: '20%'
            }
            }
        }).mount();
        });
});