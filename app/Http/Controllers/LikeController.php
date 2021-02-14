<?php

namespace App\Http\Controllers;

use App\Like;
use App\User;
use Auth;
use Illuminate\Http\Request;
use Log;



class LikeController extends Controller
{
    public function like_product(Request $request)
    {
        Log::debug($request);
        Log::debug($request->aid);
        Log::debug($request->like_product);

         if ( $request->input('like_product') == 0) {
            //like_product=0(いいね押してない状態)のときはデータベースに情報を保存
             $likes = new Like;
             $likes->aid = $request->aid;
             $likes->uid = Auth::user()->id;
             $likes->like_product = $request->like_product;
             $likes->save();

            //  $count = $likes->like_product->count();

         } elseif ( $request->input('like_product')  == 1 ) {
            //like_product=1(いいね押してる状態)のときはデータベースに情報を削除
            $likes = Like::where('aid', $request->aid)->where('uid', Auth::user()->id)->delete();

            // $count = $likes->like_product->count();
        }

         // 対応するaidのデータのみとってくる。ここの「1」を変更！
        $likesnums =  Like::where('aid',$request->aid)->get();


         return  [$request->input('like_product'),$likesnums];
         //return  $request;
    }
}


