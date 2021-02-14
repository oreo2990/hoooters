<?php

namespace App\Http\Controllers;
use App\Corp;
use Log;
use Illuminate\Http\Request;

class CorpController extends Controller
{
    //企業登録
    public function register(Request $request){

        //バリデーション
        // $validator = $request->validate([
        //     'cname' => 'required|max:255',
        //     'curl' => 'required|max:255',
        // ]);

        // //バリデーション:エラー
        // if ($validator->fails()) {
        //     return redirect('/edit')
        //         ->withInput()
        //         ->withErrors($validator);
        // }

        // Eloquentモデル
        $corp = new Corp;
        $corp->cname = $request->cname;
        $corp->curl = $request->curl;
        $corp->save();
        $cinfo = array('cid'=>$corp->id,'cname'=>$corp->cname);
        return response()->json($cinfo);

    }
}
