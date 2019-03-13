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
Route::get('todaytrades', 'TradesController@indextoday')->name('shaowalltodaytrades');
Route::get('monthtrades', 'TradesController@indexmonth')->name('shaowallmonthtrades');
Route::get('yeartrades', 'TradesController@indexyear')->name('shaowalluyeartrades');
Route::get('todaytradescompras', 'TradesController@index_hoy_compras')->name('index_hoy_compras');
Route::get('yesterdaytradescompras', 'TradesController@index_ayer_compras')->name('index_ayer_compras');
Route::get('monthtradescompras', 'TradesController@index_mes_compras')->name('index_mes_compras');
Route::get('yeartradescompras', 'TradesController@index_año_compras')->name('index_año_compras');
Route::get('todaytradesventas', 'TradesController@index_hoy_ventas')->name('index_hoy_ventas');
Route::get('yesterdaytradesventas', 'TradesController@index_ayer_ventas')->name('index_ayer_ventas');
Route::get('monthtradesventas', 'TradesController@index_mes_ventas')->name('index_mes_ventas');
Route::get('yeartradesventas', 'TradesController@index_año_ventas')->name('index_año_ventas');

Route::get('trades/{id}', 'TradesController@show')->name('showselectedtrade');
Route::post('trades_post', 'TradesController@store')->name('postrade');
Route::put('trades/{id}', 'TradesController@update')->name('editrade');
Route::delete('trades/{id}', 'TradesController@delete')->name('deletetrade');
