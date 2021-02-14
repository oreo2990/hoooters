<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Like;
use App\User;
use App\Text;
use Auth;
use Log;

class TextContoroller extends Controller
{
    public function text(Request $request){
        // デバック部分
        Log::debug($request);

        // 「text.js」から、ajaxで、「web.php」経由で、情報を取得し、textテーブルにデータ登録
        $texts = new Text;
        $texts->uid = Auth::user()->id;
        $texts->aid = $request->aid;
        $texts->txt = $request->txt;
        $texts->save();

        // textテーブルから情報取得
        // テキストテーブルからデータ取得(joinを使って、usersテーブルと結合)
        // created_atのカラム名が被っているので、selectを使って、textsテーブルのcreated_atを「textscreated_at」に変更
        // また、selectで結合したテーブルから、必要なカラムのみ、抽出する。ここでは、①textsテーブルの「textscreated_at(※上で名前変えたやつ！！)」、②textsテーブルの「txt」、③usersテーブルの「name」
        // orderByで、textsテーブルの「textscreated_at」で並び替え。最後にfirstで一番上のデータだけとってくる
        $texts = Text::join('users','texts.uid','=','users.id')->select('texts.created_at as textscreated_at','texts.txt','users.name','users.icon','texts.uid')->orderBy('textscreated_at', 'desc')->first();

        
        // 対応するaidのデータのみとってくる。ここの「1」を変更！
        // $textsnums =  Text::where('aid',1)->get();
        $textsnums =  Text::where('aid',$request->aid)->get();

        $textdate = $texts->textscreated_at->format('Y年m月d日');

        // 「text.js」に、情報返す
        return  [$texts,$textsnums,$textdate];

    }
}
