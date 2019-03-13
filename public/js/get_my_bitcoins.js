$(document).ready(function(){
  //obtener movimientos de todas las bitcoins
if(document.URL.indexOf("/datosbitcoin/btc_mxn") >= 0){
  todaytrades_compras();
  todaytrades_ventas();
  set_body();
  function set_body(){
        $(".hoy").append($('<div  class="form-group form col-md-6">').attr("id","compras"));
        $(".hoy").append($('<div  class="form-group form col-md-6">').attr("id","ventas"));
        $("#compras").append($('<div class="form-grup row">').attr("id","compras_hoy"));
        $("#ventas").append($('<div class="form-grup row">').attr("id","ventas_hoy"));
        $("#ventas_hoy").append($('<label class="col-md-6 col-form-label text-md-center white" style="background-color:deepskyblue;">').text("Ventas"));
        $("#compras_hoy").append($('<label class="col-md-6 col-form-label text-md-center white" style="background-color:deepskyblue;">').text("Compras"));
        $("#compras_hoy").append($('<select class="col-md-6 form-control">').attr("id","date_compras"));
        $('#date_compras').append($('<option>').attr('value','1').text('Hoy').attr('selected','selected'));
        $('#date_compras').append($('<option>').attr('value','2').text('Ayer'));
        $('#date_compras').append($('<option>').attr('value','3').text('Mes'));
        $('#date_compras').append($('<option>').attr('value','4').text('Año'));
        $("#ventas_hoy").append($('<select class="col-md-6 form-control">').attr("id","date_ventas"));
        $('#date_ventas').append($('<option>').attr('value','1').text('Hoy').attr('selected','selected'));
        $('#date_ventas').append($('<option>').attr('value','2').text('Ayer'));
        $('#date_ventas').append($('<option>').attr('value','3').text('Mes'));
        $('#date_ventas').append($('<option>').attr('value','4').text('Año'));
        $("#compras_hoy").append($('<label class="col-md-4 col-form-label text-md-center deepskyblue">').text("Precio"));
        $("#compras_hoy").append($('<label class="col-md-4 col-form-label text-md-center deepskyblue">').text("Cantidad"));
        $("#compras_hoy").append($('<label class="col-md-4 col-form-label text-md-center deepskyblue">').text("Operación"));
        $("#ventas_hoy").append($('<label class="col-md-4 col-form-label text-md-center deepskyblue">').text("Precio"));
        $("#ventas_hoy").append($('<label class="col-md-4 col-form-label text-md-center deepskyblue">').text("Cantidad"));
        $("#ventas_hoy").append($('<label class="col-md-4 col-form-label text-md-center deepskyblue">').text("Operación"));
  }

  $('#date_compras').on('change', function() {
    var jsLang = $(this).val();
    switch (jsLang) {
	case '1':
		todaytrades_compras_update();
		break;
	case '2':
		yesterdaytrades_compras_update();
		break;
	case '3':
		monthtrades_compras_update();
		break;
	case '4':
		yeartrades_compras_update();
		break;
	default:
}
  });



  $('#date_ventas').on('change', function() {
    var jsLang = $(this).val();
    switch (jsLang) {
	case '1':
		todaytrades_ventas_update();
		break;
	case '2':
		yesterdaytrades_ventas_update();
		break;
	case '3':
		monthtrades_ventas_update();
		break;
	case '4':
		yeartrades_ventas_update();
		break;
	default:
}
  });



  function todaytrades_compras(){
        $.ajax({
          type: "get",
          url: "/api/todaytradescompras",
          dataType: "json",
          success: function( response ) {
            $.each(response, function(i,Object) {
              $("#compras_hoy").append($('<label class="col-md-4 col-form-label text-md-center">').text("$"+Object.price+"MNX").attr("id",i+"compraa"));
              $("#compras_hoy").append($('<label class="col-md-4 col-form-label text-md-center">').text(Object.price).attr("id",i+"comprab"));
              $("#compras_hoy").append($('<label class="col-md-4 col-form-label text-md-center">').text("Compra").attr("id",i+"comprac"));

            });
          },
          error: function(){
            console.log("error al actualizar");
          }
        });
  }

  function todaytrades_compras_update(){
        $.ajax({
          type: "get",
          url: "/api/todaytradescompras",
          dataType: "json",
          success: function( response ) {
            $.each(response, function(i,Object) {
              $("#"+i+"compraa").text("$"+Object.price+"MNX");
              $("#"+i+"comprab").text(Object.price);
              $("#"+i+"comprac").text("Compra");

            });
          },
          error: function(){
            console.log("error al actualizar");
          }
        });
  }

  function yesterdaytrades_compras_update(){
        $.ajax({
          type: "get",
          url: "/api/yesterdaytradescompras",
          dataType: "json",
          success: function( response ) {
            $.each(response, function(i,Object) {
              $("#"+i+"compraa").text("$"+Object.price+"MNX");
              $("#"+i+"comprab").text(Object.price);
              $("#"+i+"comprac").text("Compra");

            });
          },
          error: function(){
            console.log("error al actualizar");
          }
        });
  }
  function monthtrades_compras_update(){
        $.ajax({
          type: "get",
          url: "/api/monthtradescompras",
          dataType: "json",
          success: function( response ) {
            $.each(response, function(i,Object) {
              $("#"+i+"compraa").text("$"+Object.price+"MNX");
              $("#"+i+"comprab").text(Object.price);
              $("#"+i+"comprac").text("Compra");

            });
          },
          error: function(){
            console.log("error al actualizar");
          }
        });
  }
  function yeartrades_compras_update(){
        $.ajax({
          type: "get",
          url: "/api/yeartradescompras",
          dataType: "json",
          success: function( response ) {
            $.each(response, function(i,Object) {
              $("#"+i+"compraa").text("$"+Object.price+"MNX");
              $("#"+i+"comprab").text(Object.price);
              $("#"+i+"comprac").text("Compra");

            });
          },
          error: function(){
            console.log("error al actualizar");
          }
        });
  }


  function todaytrades_ventas(){
    $.ajax({
      type: "get",
      url: "/api/todaytradesventas",
      dataType: "json",
      success: function( response ) {
        $.each(response, function(i,Object) {
          $("#ventas_hoy").append($('<label class="col-md-4 col-form-label text-md-center">').text("$"+Object.price+"MNX").attr("id",i+"ventaa"));
          $("#ventas_hoy").append($('<label class="col-md-4 col-form-label text-md-center">').text(Object.price).attr("id",i+"ventab"));
          $("#ventas_hoy").append($('<label class="col-md-4 col-form-label text-md-center">').text("venta").attr("id",i+"ventac"));
        });
      },
      error: function(){
        console.log("error al actualizar");
      }
    });
  }

  function todaytrades_ventas_update(){
        $.ajax({
          type: "get",
          url: "/api/todaytradesventas",
          dataType: "json",
          success: function( response ) {
            $.each(response, function(i,Object) {
              $("#"+i+"ventaa").text("$"+Object.price+"MNX");
              $("#"+i+"ventab").text(Object.price);
              $("#"+i+"ventac").text("Compra");

            });
          },
          error: function(){
            console.log("error al actualizar");
          }
        });
  }

  function yesterdaytrades_ventas_update(){
        $.ajax({
          type: "get",
          url: "/api/yesterdaytradesventas",
          dataType: "json",
          success: function( response ) {
            $.each(response, function(i,Object) {
              $("#"+i+"ventaa").text("$"+Object.price+"MNX");
              $("#"+i+"ventab").text(Object.price);
              $("#"+i+"ventac").text("Compra");

            });
          },
          error: function(){
            console.log("error al actualizar");
          }
        });
  }

  function monthtrades_ventas_update(){
        $.ajax({
          type: "get",
          url: "/api/monthtradesventas",
          dataType: "json",
          success: function( response ) {
            $.each(response, function(i,Object) {
              $("#"+i+"ventaa").text("$"+Object.price+"MNX");
              $("#"+i+"ventab").text(Object.price);
              $("#"+i+"ventac").text("Compra");

            });
          },
          error: function(){
            console.log("error al actualizar");
          }
        });
  }

  function yeartrades_ventas_update(){
        $.ajax({
          type: "get",
          url: "/api/yeartradesventas",
          dataType: "json",
          success: function( response ) {
            $.each(response, function(i,Object) {
              $("#"+i+"ventaa").text("$"+Object.price+"MNX");
              $("#"+i+"ventab").text(Object.price);
              $("#"+i+"ventac").text("Compra");

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
