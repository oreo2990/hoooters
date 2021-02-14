const field = document.querySelector('.canvas-box');
//canvas-boxの座標を取得
const clientRect = field.getBoundingClientRect();
const divY = clientRect.top;
const divX = clientRect.left;
const divW = clientRect.right;
const divH = clientRect.bottom;
const centerX = (divW - divX)/2;
const centerY = (divH - divY)/2;

// const pass = 'http://localhost/hoooters/public';//ローカルホスト用
const pass = 'http://tealimpala23.sakura.ne.jp/hoooters/public';//ローカルホスト用

const imenu_items = document.querySelectorAll('.canicon');
imenu_items.forEach(imenu_item => {
  imenu_item.addEventListener('click',function(){
    const index = Array.from(imenu_items).indexOf(imenu_item);
    let item = document.createElement('div');
    item.className = 'canvas-item';
    item.innerHTML = '<img src="'+pass+'/pic/'+index+'.png" class="iconimg">';
    item.style.top = '30px';
    item.style.left = '30px';
    field.appendChild(item);
    itemmoves();
  });
});


function itemmoves(){
  const canvas_items = document.querySelectorAll('.canvas-item');

  canvas_items.forEach(canvas_item => {
    canvas_item.onmousedown = function(){
      canvas_item.classList.add('active');
      // ボールを（pageX、pageY）座標の中心に置く
      function moveAt(x, y) {
        canvas_item.style.left = x - canvas_item.offsetWidth / 2 + 'px';
        canvas_item.style.top = y - canvas_item.offsetHeight / 2 + 'px';
      }

      function onMouseMove(e) {
        canvas_item.style.zIndex = 9;
        moveAt(e.pageX-divX, e.pageY-divY);
        if(e.pageX < divX + canvas_item.offsetWidth/2 || e.pageY < divY + canvas_item.offsetHeight/2 || e.pageX > divW - canvas_item.offsetWidth/2 || e.pageY > divH - canvas_item.offsetHeight/2){
          canvas_item.onmouseup();
        }
      }

      // mousemove でボールを移動する
      document.addEventListener('mousemove', onMouseMove);

      // ボールをドロップする。不要なハンドラを削除する
      canvas_item.ondragstart = function() {
        return false;
      };

      canvas_item.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        canvas_item.classList.remove('active');
        canvas_item.style.zIndex = 0;
      };

      canvas_item.addEventListener('click',function(){
        document.removeEventListener('mousemove', onMouseMove);
        canvas_item.classList.remove('active');
      });

      field.addEventListener('click',function(){
        document.removeEventListener('mousemove', onMouseMove);
        canvas_item.classList.remove('active');
      });
    }

    //ダブルクリックで選択
    canvas_item.addEventListener('dblclick',function(){
      if(canvas_item.classList.contains('cantext')){
        canvas_item.firstElementChild.readOnly = false;
        canvas_item.firstElementChild.disabled = false;
        canvas_item.firstElementChild.focus();
      }
      canvas_item.classList.add('active');
    })


  });
};

//画面をクリックで選択解除
field.addEventListener('click', (e) => {
  if(!e.target.closest('.canvas-item')) {
    document.querySelectorAll('.canvas-item').forEach(item=>{
      item.onmouseup = null;
    });
    const actives = document.querySelectorAll('.active');
    actives.forEach(active=>{
      if(active.classList.contains('cantext')){
        active.firstElementChild.readOnly = true;
        active.firstElementChild.disabled = true;
      }
      active.classList.remove('active');
    });
  } else {
    return;
  }
});

//アイコン削除
document.querySelector('.fa-trash-alt').addEventListener('click',function(){
  const actives = document.querySelectorAll('.active');
    actives.forEach(active=>{
      active.remove();
    });
});

//文字
document.querySelector('.fa-font').addEventListener('click',function(){
  const font = document.createElement('div');
  font.className = 'canvas-item cantext';
  font.innerHTML = '<textarea rows="1" class="textcontent" readonly disabled>テキスト</textarea>';
  font.style.top = '30px';
  font.style.left = '30px';
  field.appendChild(font);
  itemmoves();
  textchange();
});

//文字変更
function textchange(){
  const textcontents = document.querySelectorAll('.textcontent');
  textcontents.forEach(textcontent=>{
    textcontent.addEventListener('change',function(){
      const content = textcontent.value;
      textcontent.textContent = content;
    });
  })
}


//テンプレート
//新規事業
const temp_new = '<div class="canvas-item" style="top: 171.609px; left: 589px; z-index: 0;"><img src="'+pass+'/pic/1.png" class="iconimg"></div><div class="canvas-item" style="top: 169.609px; left: 525.5px; z-index: 0;"><img src="'+pass+'/pic/0.png" class="iconimg"></div><div class="canvas-item" style="top: 173.609px; left: 305.5px; z-index: 0;"><img src="'+pass+'/pic/8.png" class="iconimg"></div><div class="canvas-item" style="top: 173.609px; left: 78px; z-index: 0;"><img src="'+pass+'/pic/1.png" class="iconimg"></div><div class="canvas-item" style="top: 184.609px; left: 157px; z-index: 0;"><img src="'+pass+'/pic/3.png" class="iconimg"></div><div class="canvas-item" style="top: 186.609px; left: 386px; z-index: 0;"><img src="'+pass+'/pic/3.png" class="iconimg"></div><div class="canvas-item" style="top: 242.609px; left: 159px; z-index: 0;"><img src="'+pass+'/pic/5.png" class="iconimg"></div><div class="canvas-item" style="top: 243.609px; left: 385px; z-index: 0;"><img src="'+pass+'/pic/5.png" class="iconimg"></div><div class="canvas-item" style="top: 227.109px; left: 430.5px; z-index: 0;"><img src="'+pass+'/pic/6.png" class="iconimg"></div><div class="canvas-item" style="top: 170.109px; left: 425.5px; z-index: 0;"><img src="'+pass+'/pic/7.png" class="iconimg"></div><div class="canvas-item" style="top: 230.109px; left: 203.5px; z-index: 0;"><img src="'+pass+'/pic/6.png" class="iconimg"></div><div class="canvas-item cantext" style="top: 123.109px; left: 150px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">予算・人材</textarea></div><div class="canvas-item cantext" style="top: 148.109px; left: 150px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">自社の強み</textarea></div><div class="canvas-item cantext" style="top: 288.109px; left: 39px; z-index: 0;"><textarea rows="1" class="textcontent">自社</textarea></div><div class="canvas-item cantext" style="top: 273.109px; left: 150px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">売上</textarea></div><div class="canvas-item cantext" style="top: 305.109px; left: 265px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">IT技術を用いた</textarea></div><div class="canvas-item cantext" style="top: 329.109px; left: 265px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">新規事業</textarea></div><div class="canvas-item cantext" style="top: 268.109px; left: 378px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">利用料</textarea></div><div class="canvas-item cantext" style="top: 139.109px; left: 379px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">サービス</textarea></div><div class="canvas-item cantext" style="top: 289.109px; left: 519px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">カスタマー</textarea></div>';

//Webサービス
const temp_webservice = '<div class="canvas-item" style="top: 177.609px; left: 506px; z-index: 0;"><img src="'+pass+'/pic/1.png" class="iconimg"></div><div class="canvas-item" style="top: 174.609px; left: 424.5px; z-index: 0;"><img src="'+pass+'/pic/0.png" class="iconimg"></div><div class="canvas-item" style="top: 177.609px; left: 148.5px; z-index: 0;"><img src="'+pass+'/pic/8.png" class="iconimg"></div><div class="canvas-item" style="top: 199.609px; left: 260px; z-index: 0;"><img src="'+pass+'/pic/3.png" class="iconimg"></div><div class="canvas-item" style="top: 250.609px; left: 260px; z-index: 0;"><img src="'+pass+'/pic/5.png" class="iconimg"></div><div class="canvas-item" style="top: 237.109px; left: 303.5px; z-index: 0;"><img src="'+pass+'/pic/6.png" class="iconimg"></div><div class="canvas-item" style="top: 180.109px; left: 298.5px; z-index: 0;"><img src="'+pass+'/pic/7.png" class="iconimg"></div><div class="canvas-item cantext" style="top: 287.109px; left: 106px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">自社サービス</textarea></div><div class="canvas-item cantext" style="top: 153.109px; left: 255px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">サービス</textarea></div><div class="canvas-item cantext" style="top: 280.109px; left: 253px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">利用料</textarea></div><div class="canvas-item cantext" style="top: 294.109px; left: 432px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">ユーザー</textarea></div>';

//Webプロダクション
const temp_production = '<div class="canvas-item" style="top: 195.609px; left: 331px; z-index: 0;"><img src="'+pass+'/pic/1.png" class="iconimg"></div><div class="canvas-item" style="top: 195.609px; left: 118px; z-index: 0;"><img src="'+pass+'/pic/1.png" class="iconimg"></div><div class="canvas-item" style="top: 191.609px; left: 537.5px; z-index: 0;"><img src="'+pass+'/pic/0.png" class="iconimg"></div><div class="canvas-item" style="top: 194.609px; left: 600px; z-index: 0;"><img src="'+pass+'/pic/1.png" class="iconimg"></div><div class="canvas-item cantext" style="top: 313.109px; left: 537px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">ユーザー</textarea></div><div class="canvas-item" style="top: 217.609px; left: 401px; z-index: 0;"><img src="'+pass+'/pic/3.png" class="iconimg"></div><div class="canvas-item" style="top: 198.109px; left: 444.5px; z-index: 0;"><img src="'+pass+'/pic/7.png" class="iconimg"></div><div class="canvas-item" style="top: 276.609px; left: 401px; z-index: 0;"><img src="'+pass+'/pic/5.png" class="iconimg"></div><div class="canvas-item" style="top: 259.109px; left: 449.5px; z-index: 0;"><img src="'+pass+'/pic/6.png" class="iconimg"></div><div class="canvas-item" style="top: 217.609px; left: 185px; z-index: 0;"><img src="'+pass+'/pic/3.png" class="iconimg"></div><div class="canvas-item" style="top: 276.609px; left: 186px; z-index: 0;"><img src="'+pass+'/pic/5.png" class="iconimg"></div><div class="canvas-item" style="top: 258.109px; left: 230.5px; z-index: 0;"><img src="'+pass+'/pic/6.png" class="iconimg"></div><div class="canvas-item cantext" style="top: 314.109px; left: 293px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">クライアント</textarea></div><div class="canvas-item cantext" style="top: 311.109px; left: 77px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">自社</textarea></div><div class="canvas-item cantext" style="top: 167.109px; left: 398px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">サービス</textarea></div><div class="canvas-item cantext" style="top: 299.109px; left: 401px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">利用料</textarea></div><div class="canvas-item cantext" style="top: 189.109px; left: 177px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">技術提供</textarea></div><div class="canvas-item cantext" style="top: 300.109px; left: 181px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">開発依頼</textarea></div>';

//Webマーケティング
const temp_marketing = '<div class="canvas-item" style="top: 83.6094px; left: 202px; z-index: 0;"><img src="'+pass+'/pic/1.png" class="iconimg"></div><div class="canvas-item" style="top: 81.6094px; left: 449.5px; z-index: 0;"><img src="'+pass+'/pic/0.png" class="iconimg"></div><div class="canvas-item" style="top: 95.6094px; left: 294px; z-index: 0;"><img src="'+pass+'/pic/3.png" class="iconimg"></div><div class="canvas-item" style="top: 164.609px; left: 293px; z-index: 0;"><img src="'+pass+'/pic/5.png" class="iconimg"></div><div class="canvas-item" style="top: 76.1094px; left: 334.5px; z-index: 0;"><img src="'+pass+'/pic/7.png" class="iconimg"></div><div class="canvas-item" style="top: 150.109px; left: 338.5px; z-index: 0;"><img src="'+pass+'/pic/6.png" class="iconimg"></div><div class="canvas-item" style="top: 337.609px; left: 199px; z-index: 0;"><img src="'+pass+'/pic/1.png" class="iconimg"></div><div class="canvas-item" style="top: 200.609px; left: 228px; z-index: 0;"><img src="'+pass+'/pic/4.png" class="iconimg"></div><div class="canvas-item" style="top: 343.609px; left: 450.5px; z-index: 0;"><img src="'+pass+'/pic/8.png" class="iconimg"></div><div class="canvas-item" style="top: 229.109px; left: 212.5px; z-index: 0;"><img src="'+pass+'/pic/6.png" class="iconimg"></div><div class="canvas-item" style="top: 381.609px; left: 291px; z-index: 0;"><img src="'+pass+'/pic/3.png" class="iconimg"></div><div class="canvas-item" style="top: 364.109px; left: 336.5px; z-index: 0;"><img src="'+pass+'/pic/6.png" class="iconimg"></div><div class="canvas-item" style="top: 206.609px; left: 478px; z-index: 0;"><img src="'+pass+'/pic/4.png" class="iconimg"></div><div class="canvas-item cantext" style="top: 49.1094px; left: 164px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">顧客</textarea></div><div class="canvas-item cantext" style="top: 49.1094px; left: 410px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">ユーザー</textarea></div><div class="canvas-item cantext" style="top: 445.109px; left: 157px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">自社</textarea></div><div class="canvas-item cantext" style="top: 452.109px; left: 416px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">SNSなどの</textarea></div><div class="canvas-item cantext" style="top: 476.109px; left: 413px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">メディア</textarea></div><div class="canvas-item cantext" style="top: 51.1094px; left: 289px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">商品</textarea></div><div class="canvas-item cantext" style="top: 190.109px; left: 289px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">購入</textarea></div><div class="canvas-item cantext" style="top: 235.109px; left: 84px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">広告運用依頼</textarea></div><div class="canvas-item cantext" style="top: 401.109px; left: 285px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">広告枠買付</textarea></div><div class="canvas-item cantext" style="top: 243.109px; left: 446px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">閲覧</textarea></div>';

//その他
const temp_other = '<div class="canvas-item" style="top: 198.609px; left: 192px; z-index: 0;"><img src="'+pass+'/pic/1.png" class="iconimg"></div><div class="canvas-item" style="top: 196.609px; left: 443.5px; z-index: 0;"><img src="'+pass+'/pic/0.png" class="iconimg"></div><div class="canvas-item" style="top: 216.609px; left: 284px; z-index: 0;"><img src="'+pass+'/pic/3.png" class="iconimg"></div><div class="canvas-item" style="top: 273.609px; left: 286px; z-index: 0;"><img src="'+pass+'/pic/5.png" class="iconimg"></div><div class="canvas-item" style="top: 256.109px; left: 329.5px; z-index: 0;"><img src="'+pass+'/pic/6.png" class="iconimg"></div><div class="canvas-item" style="top: 196.109px; left: 325.5px; z-index: 0;"><img src="'+pass+'/pic/7.png" class="iconimg"></div><div class="canvas-item cantext" style="top: 311.109px; left: 151px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">自社</textarea></div><div class="canvas-item cantext" style="top: 311.109px; left: 410px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">ユーザー</textarea></div><div class="canvas-item cantext" style="top: 164.109px; left: 281px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">サービス</textarea></div><div class="canvas-item cantext" style="top: 302.109px; left: 279px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">利用料</textarea></div>';

//Sier系
const temp_sier = '<div class="canvas-item" style="top: 186.609px; left: 191px; z-index: 0;"><img src="'+pass+'/pic/1.png" class="iconimg"></div><div class="canvas-item" style="top: 186.609px; left: 460px; z-index: 0;"><img src="'+pass+'/pic/1.png" class="iconimg"></div><div class="canvas-item" style="top: 203.609px; left: 289px; z-index: 0;"><img src="'+pass+'/pic/3.png" class="iconimg"></div><div class="canvas-item" style="top: 257.609px; left: 290px; z-index: 0;"><img src="'+pass+'/pic/5.png" class="iconimg"></div><div class="canvas-item" style="top: 241.109px; left: 334.5px; z-index: 0;"><img src="'+pass+'/pic/6.png" class="iconimg"></div><div class="canvas-item cantext" style="top: 303.109px; left: 152px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">自社</textarea></div><div class="canvas-item cantext" style="top: 302.109px; left: 419px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">クライアント</textarea></div><div class="canvas-item cantext" style="top: 283.109px; left: 282px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">委託料</textarea></div><div class="canvas-item cantext" style="top: 138.109px; left: 281px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">保守・運用</textarea></div><div class="canvas-item cantext" style="top: 164.109px; left: 280px; z-index: 0;"><textarea rows="1" class="textcontent" readonly="" disabled="">サポート</textarea></div>';

const gyo_btns = document.querySelectorAll('.gyo-btn');
const canvas_box = document.querySelector('.canvas-box');
gyo_btns.forEach(gyo_btn => {
  gyo_btn.addEventListener('click',function(){
    const id = gyo_btn.getAttribute('id');
    const canvas_content = canvas_box.childElementCount;
    if(canvas_content==0){
      switch(id){
        case 'new':
          canvas_box.innerHTML = temp_new;
          itemmoves();
          textchange();
          break;
        case 'webservice':
          canvas_box.innerHTML = temp_webservice;
          itemmoves();
          textchange();
          break;
        case 'production':
          canvas_box.innerHTML = temp_production;
          itemmoves();
          textchange();
          break;
        case 'marketing':
          canvas_box.innerHTML = temp_marketing;
          itemmoves();
          textchange();
          break;
        case 'other':
          canvas_box.innerHTML = temp_other;
          itemmoves();
          textchange();
          break;
        case 'sier':
          canvas_box.innerHTML = temp_sier;
          itemmoves();
          textchange();
          break;
      }
    }else{
      if(confirm('モデル図をテンプレートに書き換えますか？')){
        switch(id){
          case 'new':
            canvas_box.innerHTML = temp_new;
            itemmoves();
            textchange();
            break;
          case 'webservice':
            canvas_box.innerHTML = temp_webservice;
            itemmoves();
            textchange();
            break;
          case 'production':
            canvas_box.innerHTML = temp_production;
            itemmoves();
            textchange();
            break;
          case 'marketing':
            canvas_box.innerHTML = temp_marketing;
            itemmoves();
            textchange();
            break;
          case 'other':
            canvas_box.innerHTML = temp_other;
            itemmoves();
            textchange();
            break;
          case 'sier':
            canvas_box.innerHTML = temp_sier;
            itemmoves();
            textchange();
            break;
        }
      }else{
        return;
      };
    }
  });
})

