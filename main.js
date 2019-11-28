'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');  

     ctx.beginPath();
     ctx.moveTo(0, 100);
     ctx.lineTo(canvas.width, 100);
     ctx.moveTo(100, 0);
     ctx.lineTo(100, canvas.height);
     ctx.stroke();

     ctx.font = 'bold 64px Verdana';
     ctx.textAlign = 'right'; //横方向を変更する場合
     ctx.textBaseline = 'top'; //縦方向を変更する場合
    //  ctx.fillText('Tokyo', 100, 100); //表示させたい文字列、表示させたい座標
    //  ctx.fillText('Tokyo', 100, 100, 100); //最後にテキストの最大幅を指定できる
    ctx.strokeText('Tokyo', 100, 100, 100); //枠線テキストの場合

  }

  draw();  
}

console.log(300 / 360 * 2 * Math.PI)