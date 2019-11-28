'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');  

    ctx.beginPath();
    // tx.arc(x, y, r, start, end);
    // x,y → 円の中心の位置、  r → 半径　　360° = 2π
    // 0°が右端、時計回りに角度が増えていく
    // ctx.arc(100, 100, 50, 0, 2 * Math.PI);　//円
    // ctx.arc(100, 100, 50, 0, 300 / 360 * 2 * Math.PI); //300°の場
    // ctx.arc(100, 100, 50, 0, 300 / 180 * Math.PI); //300°の場合(約分)
    ctx.moveTo(100, 100);
    ctx.arc(100, 100, 50, 0, 300 / 180 * Math.PI, true); //扇型
    

    //最後の引数に true を与えると反時計周りにしてくれる。
    // ctx.stroke(); 
    ctx.fill(); //塗りつぶしの場合

    

  }

  draw();  
}

console.log(300 / 360 * 2 * Math.PI)