'use strict';

{
let t = 0;

  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');

//clearRectは、四角で領域をクリアすることができるので Canvas領域いっぱいを draw()関数を実行する度にクリアしてあげる。
     ctx.clearRect(0, 0, canvas.width, canvas.height);


     ctx.beginPath();
     ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI); //2π = 360°
     ctx.fillStyle = 'black';
     ctx.fill();

     ctx.beginPath();
    //  ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI); 
    //  ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI); 
    //三角関数を使えば -1 から 1 で変化する値を取得できるので、目の x 座標に足してあげる。(アニメーションをつける)
     ctx.ellipse(80 + Math.sin(t /30), 100, 8, 8, 0, 0, 2 * Math.PI); 
     ctx.ellipse(120 + Math.sin(t /30), 100, 8, 8, 0, 0, 2 * Math.PI); 
     ctx.fillStyle = 'skyblue';
     ctx.fill();

      t++;
      setTimeout(draw, 10); //draw関数を10mm秒後に呼び出してあげる

  }

  draw();  
}

