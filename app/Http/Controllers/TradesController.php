<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Trade;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class TradesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $Trades = Trade::all()->toarray();
      return response()->json($Trades);
    }
    public function index_hoy_compras()
    {
      $today = date('Y-m-d');
      $Trades =\DB::table('trades')->WhereDate('created_at',$today)->where('maker_side','buy')->OrderBy('created_at','DESC')->take('10')->get();
      return response()->json($Trades);
    }

    public function index_hoy_ventas()
    {
      $today = date('Y-m-d');
      $Trades =\DB::table('trades')->WhereDate('created_at',$today)->where('maker_side','sell')->OrderBy('created_at','DESC')->take('10')->get();
      return response()->json($Trades);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
