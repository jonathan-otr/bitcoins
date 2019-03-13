$(document).ready(function(){
  //obtener movimientos de todas las bitcoins
if(document.URL.indexOf("/datosbitcoin/btc_mxn") >= 0){
  todaytrades();
  set_body();
  function set_body(){
        $(".hoy").append($('<div  class="form-group form">').attr("id","compras"));
        $(".hoy").append($('<div  class="form-group form">').attr("id","ventas"));
        $("#compras").append($('<div class="form-grup row">').attr("id","compras_hoy"));
        $("#ventas").append($('<div class="form-grup row">').attr("id","ventas_hoy"));
        $("#ventas_hoy").append($('<label class="col-md-12 col-form-label text-md-center">').text("Ventas"));
        $("#compras_hoy").append($('<label class="col-md-12 col-form-label text-md-center">').text("Compras"));
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
