'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');  

     ctx.beginPath();
     ctx.moveTo(100, 50);
     ctx.lineTo(200, 50);
     ctx.setLineDash([5, 10]); //線を引く長さと空白を交互に指定
     ctx.stroke();

     ctx.beginPath();
     ctx.moveTo(100, 100);
     ctx.lineTo(200, 100);
     ctx.setLineDash([]);  //上の点線が引き継がれるため、実線にするには空の配列を指定
     ctx.stroke();


     ctx.beginPath();
     ctx.moveTo(100, 150);
     ctx.lineTo(200, 150);
     ctx.lineWidth = 16;
     ctx.lineCap = 'round';
     ctx.stroke();
  }

  draw();  
}