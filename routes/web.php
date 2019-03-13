<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/consultar', 'ConsulatrController@consultar')->name('consultar');

Route::get('/datosbitcoin/{id}', 'ConsulatrController@datosbitcoin')->name('datosbitcoin');

Route::get('/api', 'ApiController@api')->name('api');
