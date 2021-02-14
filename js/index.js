//フリーワード検索
$('#key').on('keydown', function(e)
{
  if(e.key === 'Enter'){
      const key = $('#key').val(); //検索ワードを取得

      // 空欄だったらそのまま
      if(key==""){
        return;
      }else{
        document.getElementById('right-title-icon').setAttribute('class','fas fa-search');
        document.getElementById('right-theme').textContent = key;

        ajax('search',key);
        $('#key').val("");
        $('#key').blur();
        $('#key').attr('placeholder','キーワードを入力');
      }

}});

//メニュー検索
$('.menu-item').on('click',function(){
  const id = $(this).attr('id');
  if(id=='gyo-btn'){
    return false;
  }else{
    ajax(id);
  }
});

$('.gyo-item').on('click',function(){
  const id = $(this).attr('id');
  ajax(id);
});

//起動時タイムライン表示
$(window).on('load',function(){
  ajax('timeline');
});

//ajax関数
function ajax(id,key){
  $.ajax({
    type: 'get',
    // url: 'http://localhost/hoooters/public/kensaku' , //web.phpのURLと同じ形にする
    url: 'http://tealimpala23.sakura.ne.jp/hoooters/public/kensaku' , //web.phpのURLと同じ形にする
    data: {'id':id,'key': key},
  }).done(function(data){
    $('.tab-wrap').children().remove();
    console.log(data);
    let html;
    if(data==""){
      html = '<div class="error-wrapper"><div class="error-message">該当する記事はありません。</div></div>';
      $('.tab-wrap').append(html);
    }else{
      for(let i=0; i<data.length; i++){
        const year = data[i]['adate'].substr(0,4);
        const month = data[i]['adate'].substr(5,2);
        const date = data[i]['adate'].substr(8,2);
        html =  '<li class="feed">' +
                '<div class="feed-left">'+
                    '<a href="article/'+data[i]['id']+'" class="kigyo-name">'+data[i]['cname']+'</a>'+
                    '<p class="jigyo">'+data[i]['service']+'</p>'+
                    '<div class="gyoicon" id="gyoid'+data[i]['gid']+'">'+data[i]['gname']+'</div>'+
                    '<div class="kigyo-comme">'+data[i]['jcomme'].replace(/\r?\n/g, '<br>')+'</div></div>'+

                '<div class="feed-right">'+
                    '<img src="'+data[i]['art_img']+'" class="feed-pict">'+
                '</div>'+

                '<div class="feed-bottom">'+
                    '<div class="icon-img">'+
                        '<img src="'+data[i]['icon']+'"  class="float">'+
                    '</div>'+
                    '<p class="artuser">'+data[i]['name']+'さんが'+year+'年'+month+'月'+date+'日に投稿'+'</p>'+
                '</div>'+
            '</li>'

                ;
        $('.tab-wrap').append(html);
      };
    };
  }).fail(function(){
    alert('ajax失敗')
  });
};


//メニューバーの処理
const menus = document.querySelectorAll('.menu-item');
menus.forEach(menu=>{
  menu.addEventListener('click',function(){
    //actmenuクラス削除→クリックした要素にactmenuクラス追加
    document.querySelector('.actmenu').classList.remove('actmenu');
    menu.classList.add('actmenu');

    //right-title追加
    const children = menu.children;
    let icon,theme;
    for(let i = 0; i<children.length; i++){
      const child = children[i];
      if(child.classList.contains('fas')){
        icon = child.classList.value;
      }

      if(child.classList.contains('list-name')){
        theme = child.textContent;
      }
    }
    document.getElementById('right-title-icon').setAttribute('class',icon);
    document.getElementById('right-theme').textContent = theme;
  });
});


//業態リスト
let count = 0;
document.getElementById('gyo-btn').addEventListener('click',function(){
  switch(count%2){
    case 0:
      document.querySelector('.gyo-list').classList.add('act');
      count++;
      break;
      case 1:
      document.querySelector('.gyo-list').classList.remove('act');
      count++;
      break;
  }
});
