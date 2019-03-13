$(document).ready(function(){
  //obtener movimientos de todas las bitcoins
if(document.URL.indexOf("/consultar") >= 0){
  $.ajax({
    type: "get",
    url: "https://api.bitso.com/v3/ticker/",
    dataType: "json",
    success: function( response ) {
      $.each(response.payload, function(i,Object) {
        $(".consultar").append($('<div>'));
        $(".consultar").append($('<p for="book" class="col-md-2 col-form-label text-md-left">').text(Object.book).attr("id",Object.book+"1"));
        if (Object.change_24 > 0) {
          $(".consultar").append($('<p for="change_24" class="col-md-2 col-form-label text-md-left" style="background-color:#38c172;color:#ffff">').text(Object.change_24).attr("id",Object.book+"2"));
        }else if(Object.change_24 < 0){
          $(".consultar").append($('<p for="change_24" class="col-md-2 col-form-label text-md-left" style="background-color:#ff0000b3;color:#ffff">').text(Object.change_24).attr("id",Object.book+"2"));
        }
        else {
          $(".consultar").append($('<p for="change_24" class="col-md-2 col-form-label text-md-left">').text(Object.change_24).attr("id",Object.book+"2"));
        }
        $(".consultar").append($('<p for="created_at" class="col-md-2 col-form-label text-md-left">').text(Object.low).attr("id",Object.book+"3"));
        $(".consultar").append($('<p for="book" class="col-md-2 col-form-label text-md-left">').text(Object.ask).attr("id",Object.book+"4"));
        $(".consultar").append($('<p for="change_24" class="col-md-2 col-form-label text-md-left">').text(Object.bid).attr("id",Object.book+"5"));
        $(".consultar").append($('<a class="btn btn-success col-md-2 col-form-label text-md-center" style="color:#ffff;">').attr('href','/datosbitcoin/'+Object.book).attr("id",Object.book+"icon"));
        $("#"+Object.book+"icon").append($('<i class="fas fa-chart-line"></i>'));
      });
    },
    error: function(){
      console.log("error al actualizar");
    }
  });
  function getbitcoinsinfo(){
    $.ajax({
      type: "get",
      url: "https://api.bitso.com/v3/ticker/",
      dataType: "json",
      success: function( response ) {
        $.each(response.payload, function(i,Object) {
          $("#"+Object.book+"1").text(Object.book);
          $("#"+Object.book+"2").text(Object.change_24);
          $("#"+Object.book+"3").text(Object.low);
          $("#"+Object.book+"4").text(Object.ask);
          $("#"+Object.book+"5").text(Object.bid);
        });
      },
      error: function(){
        console.log("error al actualizar");
      }
    });
  }
  setInterval(function() {
            getbitcoinsinfo();
        }, 1000);
}







 if(document.URL.indexOf("/datosbitcoin") >= 0){
  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf('/')+1);
  obtenerultimoprecio();
  getbitcoinsinfo();
  obtenertransaciones();

  //obtiene el valor mas actualizado de la moneda
  function obtenerultimoprecio(){
    $.ajax({
      type: "get",
      url: "https://api.bitso.com/v3/trades/?book="+id,
      dataType: "json",
      success: function( response ) {
        $('#book').text(id);
          $('#ultimoprecio').text(response.payload[0].price);
      }
    });
  }


  //obtiene las transacciones de esta moneda
  function obtenertransaciones(){
    $.ajax({
      type: "get",
      url: "https://api.bitso.com/v3/trades/?book="+id,
      dataType: "json",
      success: function( response ) {
          $.each(response.payload, function(i,Object) {
            $(".transacciones").append($('<p  class="col-md-4 col-form-label text-md-center">').text("$"+Object.price+"MNX").attr("id",i+"a"));
            $(".transacciones").append($('<p  class="col-md-4 col-form-label text-md-center">').text(Object.amount).attr("id",i+"b"));
            if (Object.maker_side=="buy") {
              $(".transacciones").append($('<p  class="col-md-4 col-form-label text-md-center">').text("Compra").attr("id",i+"c"));
            }
            else {
              $(".transacciones").append($('<p  class="col-md-4 col-form-label text-md-center">').text("Venta").attr("id",i+"c"));
            }
          });
      }
    });
  }

  //actualiza las transacciones
  function actualizartransacciones(){
    $.ajax({
      type: "get",
      url: "https://api.bitso.com/v3/trades/?book="+id,
      dataType: "json",
      success: function( response ) {
        console.log(response.payload);
          $.each(response.payload, function(i,Object) {
            $("#"+i+"a").text("$"+Object.price+"MNX").attr("id",i+"a");
            $("#"+i+"b").text(Object.amount).attr("id",i+"b");
            if (Object.maker_side=="buy") {
              $("#"+i+"c").text("compra").attr("id",i+"c");
            }
            else {
              $("#"+i+"c").text("Venta").attr("id",i+"c");
            }
          });
      }
    });
  }

//actualiza el balance de la moenda
  function getbitcoinsinfo(){
    $.ajax({
      type: "get",
      url: "https://api.bitso.com/v3/ticker/?book="+id,
      dataType: "json",
      success: function( response ) {
        $('#change_24').text(response.payload.change_24);
        $('#low').text("$"+response.payload.low+"MNX");
        $('#ask').text("$"+response.payload.ask+"MNX");
        $('#bid').text("$"+response.payload.bid+"MNX");
      },
      error: function(){
        console.log("error al actualizar");
      }
    });
  }
  setInterval(function() {
    obtenerultimoprecio()
    getbitcoinsinfo()
    actualizartransacciones();
        }, 1000);

}
});
