<?php /* C:\Users\Armando\aplicaciones\pruebabitcoins\resources\views/consultar.blade.php */ ?>
<?php $__env->startSection('content'); ?>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header"><?php echo e(__('Debajo se muestran los movimientos de las bitcoins actualmente.')); ?></div>

                <div class="card-body">
                    <form method="POST" action="<?php echo e(route('login')); ?>">
                        <?php echo csrf_field(); ?>
                        <div class="form-group row">
                            <label for="email" class="col-md-2 col-form-label text-md-left"><?php echo e(__('Libro')); ?></label>
                            <label for="email" class="col-md-2 col-form-label text-md-left"><?php echo e(__('Diferencia en las ultimas 24 horas')); ?></label>
                            <label for="email" class="col-md-2 col-form-label text-md-left"><?php echo e(__('Mínimo')); ?></label>
                            <label for="email" class="col-md-2 col-form-label text-md-left"><?php echo e(__('ASK')); ?></label>
                            <label for="email" class="col-md-2 col-form-label text-md-left"><?php echo e(__('Cierre')); ?></label>
                            <label for="email" class="col-md-2 col-form-label text-md-left"><?php echo e(__('Ver')); ?></label>
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