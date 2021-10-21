// import splide from '@splidejs/splide';

// window.addEventListener('load', function(){
//   new splide( '.splide' ).mount();
//   })

document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    type: 'loop',
    perPage: 1.3,
    gap: '30px',

  } );
  splide.mount();
} );