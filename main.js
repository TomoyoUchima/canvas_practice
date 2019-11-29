'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');
     
     ctx.fillStyle = 'pink';
     ctx.fillRect(0, 0, 200, 200);

     ctx.beginPath();
     ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI); //2π = 360°
     ctx.fillStyle = 'black';
     ctx.fill();

     ctx.beginPath();
     ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI); 
     ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI); 
     ctx.fillStyle = 'skyblue';
     ctx.fill();

     ctx.save();

//同じキャラクターを描きたい場合、また座標を計算するのがめんどくさい場合
     ctx.scale(0.5, 0.5);  //xy方向の倍率を指定できる
     ctx.translate(400, 0);  //座標空間を移動させる
     ctx.rotate(45 /360 * Math.PI) //ラジアン
     console.log(45 /360 * Math.PI)

     ctx.fillStyle = 'olive';
     ctx.fillRect(0, 0, 200, 200);


     ctx.beginPath();
     ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
     ctx.fillStyle = 'black';
     ctx.fill();

     ctx.beginPath();
     ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI); 
     ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI); 
     ctx.fillStyle = 'skyblue';
     ctx.fill();

     ctx.restore();

     ctx.fillStyle = 'black';
     ctx.fillRect(80, 120, 40, 40);
  }

  draw();  
}

