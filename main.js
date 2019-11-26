'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');  //絵筆のようなもの(色設定や、描画)

    //  ctx.fillRect(x, y, width, height);
    ctx.fillStyle = 'pink';  //塗りつぶしの色
     ctx.fillRect(50, 50, 50, 50);
     ctx.strokeStyle = '#f00';  //枠線の色
     ctx.lineWidth = 8; //線の太さ
    //  ctx.lineJoin = 'round';
     ctx.lineJoin = 'bevel';
     ctx.strokeRect(50, 50, 50, 50);
  }


  draw();  
}