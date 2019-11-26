'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');  //絵筆のようなもの(色設定や、描画)

    ctx.fillStyle = 'pink';  //塗りつぶしの色
    ctx.strokeStyle = '#f00';  //枠線の色

     ctx.fillRect(50, 50, 50, 50);
     ctx.strokeRect(50, 50, 50, 50);

    ctx.fillStyle = 'skyblue';
    ctx.strokeStyle = '#00b'

     ctx.fillRect(70, 70, 50, 50);
     ctx.strokeRect(70, 70, 50, 50);
  }

  draw();  
}