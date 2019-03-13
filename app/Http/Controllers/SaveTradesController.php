<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Trade;
use DB;

class SaveTradesController extends Controller
{
    public function savetrade(Request $request){
    $busqueda=\DB::table('trades')->Where('tid',$request['tid'])->count();
              if ($busqueda==0) {
                Trade::create($request->all());
              }

    }
}
