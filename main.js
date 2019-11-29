'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');  

     const img = document.createElement('img');
     img.src = 'img/sprite.png'

     img.addEventListener('load', () => {
       ctx.drawImage(img, 0, 0);
       ctx.drawImage(
        img, 
        //sx, sy, sw, wh → 描画元(source)
        //dx, dy, dw, dh → 表示先(destination)
        70 * 2, 70, 70, 70,
        0, 0, 35, 35
       )

     });
  }

  draw();  
}

