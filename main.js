'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');  //絵筆のようなもの(色設定や、描画)

     //ctx.createLinearGradient(x0, y0, x1(終点), y1(終点));
     const g = ctx.createLinearGradient(0, 0, canvas.width,0);

     g.addColorStop(0, '#f00'); //始点(0)に赤色を配置
     g.addColorStop(0.3, '#0f0');
     g.addColorStop(1, '#00f'); //終点(1)に青色を配置

     ctx.fillStyle = g;

    //  ctx.fillRect(0, 0, 600, 240);
     ctx.fillRect(0, 0, canvas.width, canvas.height);

  }

  draw();  
}