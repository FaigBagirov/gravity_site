document.addEventListener( 'DOMContentLoaded', function() {
  var glide =  new Glide('.glide', {
    type: 'carousel',
    perView: 1.3,
    gap: '30',
  });

  
  let playButton = document.querySelector('.slider__playBtn > img');
  // activeSLide = document.querySelector('glide__slide--active');

  glide.on('build.after', function() {
    playButton.style.display = 'block';
    playButton.style.opacity = '1';
  });

  //hide play icon when swiping the slides
  glide.on('swipe.start', function() {
    playButton.style.transitionDuration = '0s';
    playButton.style.opacity = '0';
  });

  
  // //add same behavior as previous one but on nav buttons click
  //   document.querySelectorAll('glide__arrow', ).forEach((arrow)=>{
  //     arrow.addEventListener('click', ()=>{
  //       playButton.style.display = 'none';
  //     });
  // });

  glide.on('swipe.end', function() {
    // console.log('another move ended');
    playButton.style.transitionDuration = '1s';
    playButton.style.opacity = '1'; 

  });

 glide.mount()

});