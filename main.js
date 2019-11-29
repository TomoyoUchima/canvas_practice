'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');  

     ctx.beginPath();
     ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI); //2π = 360°
     ctx.fillStyle = 'black';
     ctx.fill();

     ctx.beginPath();
     ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI); //2π = 360°
     ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI); //2π = 360°
     ctx.fillStyle = 'skyblue';
     ctx.fill();

//同じキャラクターを描きたい場合、また座標を計算するのがめんどくさい場合
     ctx.scale(0.5, 0.5);  //xy方向の倍率を指定できる


     ctx.beginPath();
     ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI); //2π = 360°
     ctx.fillStyle = 'black';
     ctx.fill();

     ctx.beginPath();
     ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI); //2π = 360°
     ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI); //2π = 360°
     ctx.fillStyle = 'skyblue';
     ctx.fill();

  }

  draw();  
}

