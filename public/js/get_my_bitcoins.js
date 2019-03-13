$(document).ready(function(){
  //obtener movimientos de todas las bitcoins
if(document.URL.indexOf("/datosbitcoin/btc_mxn") >= 0){
  todaytrades();
  set_body();
  function set_body(){
        $(".hoy").append($('<div  class="form-group form col-md-6">').attr("id","compras"));
        $(".hoy").append($('<div  class="form-group form col-md-6">').attr("id","ventas"));
        $("#compras").append($('<div class="form-grup row">').attr("id","compras_hoy"));
        $("#ventas").append($('<div class="form-grup row">').attr("id","ventas_hoy"));
        $("#ventas_hoy").append($('<label class="col-md-6 col-form-label text-md-center white" style="background-color:deepskyblue;">').text("Ventas"));
        $("#compras_hoy").append($('<label class="col-md-6 col-form-label text-md-center white" style="background-color:deepskyblue;">').text("Compras"));
        $("#compras_hoy").append($('<select class="col-md-6 form-control">').attr("id","date_compras"));
        $('#date_compras').append($('<option>', {value:1, text:'Hoy'}));
        $('#date_compras').append($('<option>', {value:2, text:'Ayer'}));
        $('#date_compras').append($('<option>', {value:3, text:'Mes'}));
        $('#date_compras').append($('<option>', {value:4, text:'Año'}));
        $("#ventas_hoy").append($('<select class="col-md-6 form-control">').attr("id","date_ventas"));
        $('#date_ventas').append($('<option>', {value:1, text:'Hoy'}));
        $('#date_ventas').append($('<option>', {value:2, text:'Ayer'}));
        $('#date_ventas').append($('<option>', {value:3, text:'Mes'}));
        $('#date_ventas').append($('<option>', {value:4, text:'Año'}));
        $("#compras_hoy").append($('<label class="col-md-4 col-form-label text-md-center deepskyblue">').text("Precio"));
        $("#compras_hoy").append($('<label class="col-md-4 col-form-label text-md-center deepskyblue">').text("Cantidad"));
        $("#compras_hoy").append($('<label class="col-md-4 col-form-label text-md-center deepskyblue">').text("Operación"));
        $("#ventas_hoy").append($('<label class="col-md-4 col-form-label text-md-center deepskyblue">').text("Precio"));
        $("#ventas_hoy").append($('<label class="col-md-4 col-form-label text-md-center deepskyblue">').text("Cantidad"));
        $("#ventas_hoy").append($('<label class="col-md-4 col-form-label text-md-center deepskyblue">').text("Operación"));

  }

  function todaytrades(){
    $.ajax({
      type: "get",
      url: "/api/todaytradescompras",
      dataType: "json",
      success: function( response ) {
        $.each(response, function(i,Object) {
          $("#compras_hoy").append($('<label class="col-md-4 col-form-label text-md-center">').text("$"+Object.price+"MNX").attr("id",i+"compra"));
          $("#compras_hoy").append($('<label class="col-md-4 col-form-label text-md-center">').text(Object.price).attr("id",i+"compra"));
          $("#compras_hoy").append($('<label class="col-md-4 col-form-label text-md-center">').text("Compra").attr("id",i+"compra"));

        });
      },
      error: function(){
        console.log("error al actualizar");
      }
    });

    $.ajax({
      type: "get",
      url: "/api/todaytradesventas",
      dataType: "json",
      success: function( response ) {
        $.each(response, function(i,Object) {
          $("#ventas_hoy").append($('<label class="col-md-4 col-form-label text-md-center">').text("$"+Object.price+"MNX").attr("id",i+"venta"));
          $("#ventas_hoy").append($('<label class="col-md-4 col-form-label text-md-center">').text(Object.price).attr("id",i+"venta"));
          $("#ventas_hoy").append($('<label class="col-md-4 col-form-label text-md-center">').text("venta").attr("id",i+"venta"));
        });
      },
      error: function(){
        console.log("error al actualizar");
      }
    });
  }

  setInterval(function() {
        }, 1000);
}

});
