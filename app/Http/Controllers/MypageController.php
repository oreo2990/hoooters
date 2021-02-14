<?php

namespace App\Http\Controllers;

use App\Art;
use App\Corp;
use App\Gyo;
use App\Like;
use App\Text;
use App\User;
use Auth;
use Log;
use Illuminate\Http\Request;


class MypageController extends Controller
{
    public function mypage(){
        $user = Auth::user();
        $usersicon=$user->icon;
        // 上の$usersiconでassetヘルパー関数の引数に入れても画像は表示されない→{{asset('{{$usersicon}}')}}。''で囲むと文字列になって、ヘルパー関数使えないか?
        // $usersicon=asset($usersicon);
        // Log::debug($user);

        $artcount = Art::where('uid',$user->id)->where('life_flg',1)->count();
        $likecount = Like::where('uid',$user->id)->count();
        $likearts = Art::join('likes','arts.id','=','likes.aid')
            ->join('corps','arts.cid','=','corps.id')
            ->join('users','arts.uid', '=', 'users.id')
            ->select('arts.updated_at as adate','corps.cname','arts.service','arts.id','life_flg','likes.uid','users.name','like_product','users.icon')
            ->where('likes.uid',$user->id)
            ->where('life_flg',1)
            ->orderBy('adate','desc')
            ->limit(3)
            ->get();

        $postarts = Art::join('corps','arts.cid','=','corps.id')
            ->join('users','arts.uid', '=', 'users.id')
            ->select('arts.updated_at as adate','corps.cname','arts.service','arts.id','life_flg')
            ->where('arts.uid',$user->id)
            ->where('life_flg',1)
            ->orderBy('adate','desc')
            ->get();

        Log::debug($likearts);

        return view('mypage',[
            'users' => $user,
            'usersicon' => $usersicon,
            'artcount' => $artcount,
            'likecount' => $likecount,
            'likearts' => $likearts,
            'postarts' => $postarts
        ]);

    }

    public function othersmypage(User $othersid){
        $users = User::where('id',$othersid->id)->first();
        $usericon=Auth::user()->icon;

        $artcount = Art::where('uid',$othersid->id)->where('life_flg',1)->count();
        $likecount = Like::where('uid',$othersid->id)->count();
        $likearts = Art::join('likes','arts.id','=','likes.aid')
            ->join('corps','arts.cid','=','corps.id')
            ->join('users','arts.uid', '=', 'users.id')
            ->select('arts.updated_at as adate','corps.cname','arts.service','arts.id','life_flg','likes.uid','users.name','like_product','users.icon')
            ->where('likes.uid',$othersid->id)
            ->where('life_flg',1)
            ->orderBy('adate','desc')
            ->limit(3)
            ->get();

        $postarts = Art::join('corps','arts.cid','=','corps.id')
            ->join('users','arts.uid', '=', 'users.id')
            ->select('arts.updated_at as adate','corps.cname','arts.service','arts.id','life_flg')
            ->where('arts.uid',$othersid->id)
            ->where('life_flg',1)
            ->orderBy('adate','desc')
            ->get();

        //Log::debug($likearts);
        //Log::debug($othersid->id);
        Log::debug($users);

        return view('othersmypage',[
            'users' => $users,
            'usericon' => $usericon,
            'artcount' => $artcount,
            'likecount' => $likecount,
            'likearts' => $likearts,
            'postarts' => $postarts
        ]);

    }
}
