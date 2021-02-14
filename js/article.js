// 以下、いいね機能の処理--------------------------
$(function ()
{
    //「iine」というクラスを持つタグがクリックされたときに以下の処理が走る
    $('.iine').on('click', function ()
    {
        //表示しているaidといいねの状態、押したボタンの情報を取得
        aid = $(this).attr("aid");
        like_product = $(this).attr("like_product");
        click_button = $(this);

        $.ajax({
            headers: {
                // csrf対策、「article.blade.php」のheadにcsrf対策のmetaタグも追記
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: 'http://tealimpala23.sakura.ne.jp/hoooters/public/like_product',  //route.phpで指定したコントローラーのメソッドURLを指定
            //url: 'http://localhost/hoooters/public/like_product',  //route.phpで指定したコントローラーのメソッドURLを指定
            type: 'POST',   //GETかPOSTメソットを選択
            data: { 'aid': aid, 'like_product': like_product, }, //コントローラーに送るに名称をつけてデータを指定
                })
            //正常にコントローラーの処理が完了した場合
            .done(function (data) //コントローラーからのリターンされた値(like_product、つまりクリックした時の状態)をdataとして指定
            {
                console.log(data);

                console.log(data[0]);

                if ( data[0] == 0 ) //like_product=0 いいね押してない状態
                {
                    //クリックしたタグをいいね押している状態（like_product=1）に変更
                    click_button.attr("like_product", "1");
                    //クリックしたタグの子の要素を変更(ハートをいいね状態に)
                    click_button.children().attr("class", "fas fa-heart fa-3x");
                }
                if ( data[0] == 1 ) //like_product=1 いいね押しnない状態
                {
                    //クリックしたタグをいいね押してない状態（like_product=0）に変更
                    click_button.attr("like_product", "0");
                    //クリックしたタグの子の要素を変更(ハートをいいね押してない状態に)
                    click_button.children().attr("class", "far fa-heart fa-3x");
                }
                //like数の対応
                $('.like-num1').html(data[1].length);
            })
            ////正常に処理が完了しなかった場合
            .fail(function (data)
            {
                alert('いいね処理失敗');
                //alert(JSON.stringify(data));
            });
    });
});
// 以上、いいね機能の処理--------------------------


// 以下、コメント機能の処理--------------------------
$(function ()
{
    //「txtbtn」というidを持つタグがクリックされたときに以下の処理が走る
    $('#txtbtn').on('click', function ()
    {
        // 送られてきたデータの取得
        let id = $('#id').val();
        let aid = $('#aid').val();
        let txt = $('#txt').val();
        txtbtn = $(this);
            // 情報確認用
            console.log(id);
            console.log(aid);
            console.log(txt);
            //console.log(txtbtn);

        $.ajax({
            headers: {
                // csrf対策、「article.blade.php」のheadにcsrf対策のmetaタグも追記
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            //url: 'http://localhost/hoooters/public/text',  //route.phpで指定したコントローラーのメソッドURLを指定
             url: 'http://tealimpala23.sakura.ne.jp/hoooters/public/text',  //route.phpで指定したコントローラーのメソッドURLを指定
            type: 'POST',   //GETかPOSTメソットを選択
            data: { 'id': id, 'aid': aid, 'txt': txt,}, //コントローラーに送るに名称をつけてデータを指定
                })
            //正常にコントローラーの処理が完了した場合
            .done(function (data) //コントローラーからのリターンされた値(like_product、つまりクリックした時の状態)をdataとして指定
            {
                // 確認用
                // console.log(data);
                // console.log(data[0].icon);

                //①コメント覧の対応
                    // コメントがない場合のhtmlを消去
                    $('#comme3').remove();

                    //挿入するhtmlを作成
                    let html = '<li><div class="comme1">';
                    html += '<div class="comme1_1">';
                    // html +='<div><img src="http://localhost/hoooters/public/'+data[0].icon+'" alt=""></div>';
                    html +='<div><img src="http://tealimpala23.sakura.ne.jp/hoooters/public/'+data[0].icon+'" alt=""></div>';
                    //html +='<a href="http://localhost/hoooters/public/othersmypage/'+data[0].uid+'" style="color: black;">';
                    html +='<a href="http://tealimpala23.sakura.ne.jp/hoooters/public/othersmypage/'+data[0].uid+'">';
                    html +='<div>＠'+data[0].name+'</div>';
                    html +='</a>';
                    html +='</div>';
                    html +='<div class="comme1_2">'+data[2]+'に投稿</div>';
                    html +='</div>';
                    html +='<br>';
                    html +='<div class="comme2">'+data[0].txt+'</div></li>';
                    // console.log(html);
                    //console.log(data.icon);

                    //htmlを挿入
                    $(newtext).append(html);

                    // 入力フォームのデータを空にする
                    $('#txt').val("");

                //②コメント数の対応
                $('.like-num2').html(data[1].length);

                // ajax成功アラート
                // alert('コメント投稿成功')
            })
            ////正常に処理が完了しなかった場合
            .fail(function (data)
            {
                alert('コメント投稿処理失敗');
                // alert(JSON.stringify(data));
            });

    });
});
// 以上、コメント機能の処理--------------------------

// 以下、記事削除の処理--------------------------

document.getElementById("deletebtn").onclick = function (event){
    event.preventDefault();
    var check = confirm("この記事を削除しますか?");
    if(check){
        document.getElementById('delete_form').submit();
    }
};


// 以上、記事削除の処理--------------------------