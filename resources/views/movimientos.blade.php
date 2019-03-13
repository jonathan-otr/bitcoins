@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Selecciona una bitcoin para ver sus movimientos en timepo real.') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group row">
                            <label for="email" class="col-md-3 col-form-label text-md-left">{{ __('Nombre') }}</label>
                            <label for="email" class="col-md-3 col-form-label text-md-left">{{ __('Precio mínimo') }}</label>
                            <label for="email" class="col-md-3 col-form-label text-md-left">{{ __('Preio máximo') }}</label>
                            <label for="email" class="col-md-3 col-form-label text-md-center">{{ __('Ver') }}</label>
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
