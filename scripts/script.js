document.addEventListener( 'DOMContentLoaded', function() {
  var glide1 =  new Glide('.glide1', {
    type: 'carousel',
    perView: 1.3,
    gap: '30',
    breakpoints: {
      768: {
          perView: 1
        }
      }
  });

  var glide2 =  new Glide('.glide2', {
    type: 'slide',
    perView: 1,
    gap: '30',
  });

  
  let playButton = document.querySelector('.slider__playBtn > img');
  // activeSLide = document.querySelector('glide__slide--active');

  glide1.on('build.after', function() {
    playButton.style.display = 'block';
    playButton.style.opacity = '1';
  });

  //hide play icon when swiping the slides
  glide1.on('swipe.start', function() {
    playButton.style.transitionDuration = '0s';
    playButton.style.opacity = '0';
  });

  
  // //add same behavior as previous one but on nav buttons click
  //   document.querySelectorAll('glide__arrow', ).forEach((arrow)=>{
  //     arrow.addEventListener('click', ()=>{
  //       playButton.style.display = 'none';
  //     });
  // });

  glide1.on('swipe.end', function() {
    // console.log('another move ended');
    playButton.style.transitionDuration = '1s';
    playButton.style.opacity = '1'; 

  });

 glide1.mount()
 glide2.mount()

});