@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Debajo se muestran los movimientos de las bitcoins actualmente.') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group row">
                            <label for="email" class="col-md-2 col-form-label text-md-left">{{ __('Libro') }}</label>
                            <label for="email" class="col-md-2 col-form-label text-md-left">{{ __('Diferencia en las ultimas 24 horas') }}</label>
                            <label for="email" class="col-md-2 col-form-label text-md-left">{{ __('Mínimo') }}</label>
                            <label for="email" class="col-md-2 col-form-label text-md-left">{{ __('ASK') }}</label>
                            <label for="email" class="col-md-2 col-form-label text-md-left">{{ __('Cierre') }}</label>
                            <label for="email" class="col-md-2 col-form-label text-md-left">{{ __('Ver') }}</label>
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
