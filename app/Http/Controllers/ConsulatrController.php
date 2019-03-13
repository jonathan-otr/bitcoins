<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ConsulatrController extends Controller
{
    public function consultar(){
      return view('consultar');
    }

    public function datosbitcoin(){
      return view('datos_especificos');
    }

    public function guardartrades(){
    }
}
