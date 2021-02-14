<?php
// 12/14 後藤田メモ：以下要変更
namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // 丹羽メモ
    // $fillableでホワイトリストの作成。ここで指定したカラムは、create()やfill()、update()で値を代入できる
    // 要は、書き換えることができるカラムをここで指定する。
    // 反対に$guardedで指定したカラムは、書き換えできなくなる（ブラックリスト化）。
    protected $fillable = [
        'name', 'email', 'password','uname','icon','intro','site',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    // 丹羽メモ
    // $hiddenに書き込むと、JSONに含まれなくなる(機密性の高い情報はここに書く)
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    // 丹羽メモ
    // データを時系列データに変換できる
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}


