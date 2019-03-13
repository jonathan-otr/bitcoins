@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Se muestran las apis disponibles.') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group row">
                            <label for="email" class="col-md-12 col-form-label text-md-left">
                              {{ __('Trades:') }}Se muestran todas las transacciones guardadas en la base de datos en la siguiente dirección
                               <a href="{{ ROUTE('shaowalltrades')}}">Thisapp/api/trades</a> </label>
                        </div>
                        <div class="form-group row consultar">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
