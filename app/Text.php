<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Text extends Model
{
    protected $dates = [
        'textscreated_at', //モデルに、使いたいカラムの追加
        'created_at',
        'updated_at',
        'deleted_at'
    ];

}
