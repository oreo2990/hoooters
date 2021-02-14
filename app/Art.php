<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Art extends Model
{
    protected $table = 'arts';

    protected $dates = [
        'adate', //モデルに、使いたいカラムの追加
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
