@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Se muestran todos los datos referentes a') }} <span id="book"></span> </div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group row">
                          <h2 class="col-md-12 col-form-h1 text-md-left">Mercado</h2>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-2 text-md-center">
                              <h6>DIF 24H</h6>
                              <span id="change_24"class="deepskyblue" ></span>
                            </div>
                            <div class="col-md-2 text-md-center">
                              <h6>ASK</h6>
                              <span id="low" class="deepskyblue"></span>
                            </div>
                            <div class="col-md-2 text-md-center">
                              <h6>Mínimo</h6>
                              <span id="ask" class="deepskyblue"></span>
                            </div>
                            <div class="col-md-2 text-md-center">
                              <h6>Cierre</h6>
                              <span id="bid"class="deepskyblue" ></span>
                            </div>
                          <div class="col-md-4 text-md-center" style="background-color:deepskyblue;">
                            <h2 class="white">Último precio <br> $<span id="ultimoprecio"></span>MNX </h2>
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-md-12 col-form-h1 text-md-left"><h2>Transacciónes</h2></div>
                        </div>
                        <div class="hoy">
                        </div>
                        <div class="form-group row">
                          <label for="" class="col-md-12 col-form-label text-md-center gray">Operaciones en general</label>
                        </div>
                        <div class="form-group row">
                          <label for="" class="col-md-4 col-form-label text-md-center">Precio</label>
                          <label for="" class="col-md-4 col-form-label text-md-center">Monto</label>
                          <label for="" class="col-md-4 col-form-label text-md-center">Opreación</label>
                        </div>
                        <div class="form-group row transacciones">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
