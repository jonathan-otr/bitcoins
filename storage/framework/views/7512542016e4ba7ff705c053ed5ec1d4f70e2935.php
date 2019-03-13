<?php /* C:\Users\Armando\aplicaciones\pruebabitcoins\resources\views/api.blade.php */ ?>
<?php $__env->startSection('content'); ?>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header"><?php echo e(__('Se muestran las apis disponibles.')); ?></div>

                <div class="card-body">
                    <form method="POST" action="<?php echo e(route('login')); ?>">
                        <?php echo csrf_field(); ?>
                        <div class="form-group row">
                            <label for="email" class="col-md-12 col-form-label text-md-left">
                              <?php echo e(__('Trades:')); ?>Se muestran todas las transacciones guardadas en la base de datos en la siguiente dirección
                               <a href="<?php echo e(ROUTE('shaowalltrades')); ?>">Thisapp/api/trades</a> </label>
                        </div>
                        <div class="form-group row consultar">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>