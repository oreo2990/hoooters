<?php

namespace App\Http\Controllers;
use App\Art;
use App\Corp;
use App\Gyo;
use App\Like;
use App\Text;
use App\User;
use Illuminate\Http\Request;
use Auth;
use Log;

class ArticleController extends Controller
{
    public function article(Art $aid){
        //Log::debug($aid);

        //飛ぶ記事に紐づくコメントの情報 (ページ遷移時表示用)
        $texts = Text::join('users','texts.uid','=','users.id')->select('texts.created_at as textscreated_at','texts.txt','texts.uid','users.name','users.icon')->orderBy('textscreated_at', 'asc')->where('aid',$aid->id)->get();

        // 飛ぶ記事に紐づくコメントの情報 (カウント用)
        $textsnums =  Text::where('aid',$aid->id)->get();

        // ユーザーのアイコン情報
        $usersicon=Auth::user()->icon;

        //飛ぶ記事に紐づくライクの情報 (ページ遷移時表示用)
        $likesnums =  Like::where('aid',$aid->id)->get();

        // 飛ぶ記事に紐づくライクの情報 (カウント用)
        $likescon =  Like::where('uid',Auth::user()->id)->where('aid',$aid->id)->get();

        $art = Art::join('corps','arts.cid', '=', 'corps.id')->join('gyos','arts.gid', '=', 'gyos.id')
        ->join('users','arts.uid', '=', 'users.id')->select('arts.updated_at as adate','corps.cname','arts.service','gid','gyos.gname','arts.jcomme','arts.zcomme','arts.art_img','users.icon','users.name','users.icon','arts.id','arts.uid','corps.curl')->where('arts.life_flg', '=', 1)->where('arts.id',$aid->id)->first();

        Log::debug($art);
        // 「article.blade.php」に遷移 & データを渡す
        return view('article',[
            
            'aid' => $aid,
            'texts' => $texts,
            'usersicon' => $usersicon,
            'textsnums' => $textsnums,
            'likesnums' => $likesnums,
            'likescon' => $likescon,
            'art'=> $art,
             ]);
    }

    public function articledel(Art $art){
        //Log::debug($art);
        $art->delete();
        return redirect('/');
    }

}
