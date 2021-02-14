<?php

namespace App\Http\Controllers;

use App\User;
use Auth;
use Validator;
use Illuminate\Http\Request;
use Log;

class ProfileController extends Controller
{
    //画面繊維の処理
    public function profile(){
        return view('profile');
    }

    // データ更新の処理
    public function update(Request $request){
        Log::debug($request);

        //バリデーション
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            // 以下、nameとemailの条件は「RegisterController.php」と同じ
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            // 'icon' => '',
            'intro' => 'max:100',
            // 'site' => 'url',
         ]);

         //バリデーション:エラー
         if ($validator->fails()) {
            return redirect('mypage')
                    // withInput()でセッションに情報保存。inputのvalue注意。テキストp90
                    ->withInput()
                    ->withErrors($validator);
         }

         //アイコン 取得
        $file = $request->file('icon'); //file が空かチェック
        if( !empty($file) ){
            //アイコン名を取得
            $filename = './pic/'.date("YmdHis").$file->getClientOriginalName(); //AWSの場合どちらかになる事がある”../upload/” or “./upload/”
            $file->move('./pic/',$filename);
        }else{
            $filename = Auth::user()->icon;
        }

        //データ登録
        $users = User::find($request->id);
        $users->name = $request->name;
        $users->email = $request->email;
        //$users->icon = '/pic/icon.png';
        $users->icon = $filename;
        $users->intro = $request->intro;
        $users->site = $request->site;
        $users->fsite = $request->fsite;
        $users->tsite = $request->tsite;
        $users->save();
        // 下はエラーチェック用
        // return redirect('profile');
        return redirect('mypage');

    }

}
