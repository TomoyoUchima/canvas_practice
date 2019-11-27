'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');  

     ctx.beginPath();
     ctx.moveTo(50, 50);  //開始位置
     ctx.lineTo(100, 50); //線を引く命令(真横に線を弾きたいのでx方向だけ大きく
     ctx.lineTo(100, 100); //線を引く命令
     ctx.closePath(); //線を閉じる
     ctx.fill(); //塗りつぶし
    //  ctx.stroke();  //描画

  }

  draw();  
}