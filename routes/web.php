<?php
use App\Art;
use App\Corp;
use App\Gyo;
use App\Like;
use App\Text;
use App\User;
use Illuminate\Http\Request;



// 一覧ページ（後藤田担当）
Route::get('/', 'IndexController@top');
Route::get('/latest', 'IndexController@latest');

// ajaxの検索機能
Route::get('/kensaku','IndexController@kensaku');

// 記事登録ページ（風太担当）
    // ↓とりあえず
    // Route::get('/article', 'ArticleController@article');
    // ↓こっち完成形
    Route::get('/article/{aid}', 'ArticleController@article');

Route::delete('/article/{art}',  'ArticleController@articledel');

Route::get('/edit', 'EditController@edit');

//投稿ページ
Route::post('/edit', 'EditController@register');
Route::post('/edit/update', 'EditController@update');

//編集ページ
Route::get('/postedit/{id}', 'EditController@postedit');

Route::post('/corp', 'CorpController@register');

Route::post('/csearch', 'CsearchController@search');

// マイページ（丹羽担当）
Route::get('/mypage', 'MypageController@mypage');

Route::get('/othersmypage/{othersid}', 'MypageController@othersmypage');

Route::get('/profile', 'ProfileController@profile');

Route::post('/profile', 'ProfileController@update');

// ログイン、認証ページ（田代担当）

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


// like関係
Route::post('/like_product', 'LikeController@like_product');


// テキスト投稿用
Route::post('/text', 'TextContoroller@text');

// ウェルカムページ
Route::get('/welcome', function () { return view('welcome');
});

// Route::get('/login', function () { return view('auth.login');
// });

// Route::get('/register', function () { return view('auth.register');
// });