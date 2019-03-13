<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('trades', 'TradesController@index')->name('shaowalltrades');
Route::get('todaytradescompras', 'TradesController@index_hoy_compras')->name('index_hoy_compras');
Route::get('todaytradesventas', 'TradesController@index_hoy_ventas')->name('index_hoy_ventas');

Route::get('trades/{id}', 'TradesController@show')->name('showselectedtrade');
Route::post('trades_post', 'TradesController@store')->name('postrade');
Route::put('trades/{id}', 'TradesController@update')->name('editrade');
Route::delete('trades/{id}', 'TradesController@delete')->name('deletetrade');
