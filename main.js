'use strict';

{
let t = 0;

  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
     const ctx = canvas.getContext('2d');

    //  解像度の密度に応じて、いったん大きな領域に描画したあとに、それをぎゅっと縮小してきれいな表示にさせる。

    const CANVAS_WIDTH = 600;
    const CANVAS_HEIGHT = 240;
    //devicePixelRatio → ディスプレイの密度を取得。描画するときの 1px が物理ピクセルいくつ分かを取得できる(現在のディスプレイにおけるCSS解像度と物理解像度の比を返す)。
    //※ ||1 → devicePixelRatioが取得できなかった場合は等倍である 1 を返しなさい、という命令。
    const dpr = window.devicePixelRatio || 1; 
    //Canvas の領域をいったん拡大。(倍の密度だったらCanvasが2倍になるという意味)
    canvas.width = CANVAS_WIDTH * dpr; 
    canvas.height = CANVAS_HEIGHT * dpr;
     // Canvas を大きくしただけだと図形は大きくならないので、ここで変形のための scale() を使う。
    ctx.scale(dpr, dpr);
    //表示上の大きさを変えるには canvas の style プロパティの width などを変えてあげる。そうすると密度はそのままに半分の大きさにしてくれる。
    canvas.style.width = CANVAS_WIDTH + 'px'; 
    canvas.style.height = CANVAS_HEIGHT + 'px';

    ctx.font = 'bold 48px Verdana';
    ctx.strokeText('Tokyo', 100, 100); 

  }

  draw();  
}

