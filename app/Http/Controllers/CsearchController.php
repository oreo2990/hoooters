<?php

namespace App\Http\Controllers;
use App\Corp;
use Log;
use Illuminate\Http\Request;

class CsearchController extends Controller
{
    //企業検索
    public function search(Request $request){

        if($request->keyword=='null'){
            $result = Corp::all('cname','id');
            return response()->json($result);
        }else{
            $result = Corp::where('cname','like','%'.$request->keyword.'%')->select('id','cname')->get();
            // Log::debug($result);
            return response()->json($result);
        }
    }
}
