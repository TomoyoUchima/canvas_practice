'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');  

     const img = document.createElement('img');
     img.src = 'img/logo.png';　//ソース指定

     //画像の場合、読み込みが終わった場合に描画させたい
     img.addEventListener('load', () => {
      //  ctx.drawImage(img, 0, 0); //左上に表示
      //  ctx.drawImage(img, 0, 0, 40, 40); //幅指定可能
      //  const pattern = ctx.createPattern(img, 'repeat'); //cteatePattern → 画像を塗りに設定、　repeat → 縦横方向に画像を繰り返す形で敷き詰められる
      // 一部の方向だけ繰り返したい場合 → repeat-x, repeat-y, no-repeat  ↓例
      const pattern = ctx.createPattern(img, 'repeat-y');
       ctx.fillStyle = pattern;
       ctx.fillRect(0, 0, canvas.width, canvas.height);
     });

    //  fillRect
  }

  draw();  
}

