<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hootersのトップページ</title>
  <!-- リセットcss -->
  <link href="{{asset('/css/reset.css')}}" rel="stylesheet">
  <!-- 後藤田用css -->
  <link href="{{asset('/css/index.css')}}" rel="stylesheet">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">

</head>
<body>

<!-- HEADER -->
<header class="header">
    <div class="header-container">
        <a href="{{url('/')}}" class="header-left">
            <img src="pic/logo.png" alt="Hoooters">
        </a>
        <div class="header-right">
            <a href="edit" class="edit-btn">
                <i class="fas fa-edit"></i>
                <p>投稿する</p>
            </a>
            <div class="icon-wrapper">
                <div class="myicon">
                    <!-- アイコン -->
                    <img src="{{$usericon}}">
                </div>
                <i class="fas fa-sort-down"></i>
                <div class="mypage-list none">
                    <a href="{{url('/mypage')}}" id="mypage-btn">マイページ</a>
                    <div id="logout-btn">ログアウト</div>
                    <form id='logout-form' action="{{ route('logout')}}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                    </form>
                </div>
            </div>
        </div>
    </div>
</header>

<main>
    <div class="left-content">
        <div class="searchform">
                <i class="fas fa-search"></i>
                <input type="text" id="key" class="kensaku" placeholder="キーワードを入力">
        </div>
        <div class="left-box">
            <h2 class="left-title">記事フィード</h2>
            <ul class="menu-list">
                <li class="menu-item actmenu" id="timeline">
                    <i class="fas fa-clock"></i>
                    <p class="list-name">タイムライン</p>
                </li>
                <li class="menu-item" id="popular">
                    <i class="fas fa-fire-alt"></i>
                    <p class="list-name">人気記事</p>
                </li>
                <li class="menu-item" id="favorite">
                    <i class="fas fa-heart"></i>
                    <p class="list-name">お気に入り</p>
                </li>
                <li class="menu-item" id="gyo-btn">
                    <i class="fas fa-object-ungroup"></i>
                    <p class="list-name">業態別</p>
                    <div class="gyo-list-box">
                        <ul class="gyo-list">
                            <!-- gyo-listにclass"act"追加で以下表示-->
                            <li class="gyo-item" id="news">新規事業</li>
                            <li class="gyo-item" id="webservice">Webサービス</li>
                            <li class="gyo-item" id="production">Webプロダクション</li>
                            <li class="gyo-item" id="marketing">Webマーケティング</li>
                            <li class="gyo-item" id="other">その他</li>
                            <li class="gyo-item" id="sier">Sier系</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>


    <div class="right-content">
        <!-- データを引っ張ってくる -->
        <div class="right-title">
            <i class="fas fa-clock" id="right-title-icon"></i>
            <h2 id="right-theme">タイムライン</h2>
        </div>
        <div class="right-content">
            <ul class="tab-wrap">
                <!-- 記事 -->
            </ul>
        </div>
    </div>
</main>




<footer>
    <p>@G's Academy TOKYO Lab10_Hooters</p>
</footer>



<!-- ajax用jquery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="{{ asset('js/index.js') }}"></script>
<script src="{{ asset('js/header.js') }}"></script>
</body>

</html>