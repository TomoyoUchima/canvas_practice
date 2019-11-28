'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');  

     // ctx.ellipse(x, r, rx, ry, rotation, start, end);
    //  x、y → 中心のxy座標、rx、ry → x、y各半径、 残りはそれぞれの角度
    //  beginPathは省略可能
    //  ctx.ellipse(100, 100, 50, 30, 0, 0, 2 * Math.PI);
    ctx.rect(50, 50, 50, 50);
    // ctx.fillRect(50, 50, 50, 50); ↑と同じ
     ctx.stroke();

  }

  draw();  
}

console.log(300 / 360 * 2 * Math.PI)