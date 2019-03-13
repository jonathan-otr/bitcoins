$(document).ready(function(){

  //guarda las transacciones nuevas en nuestra DB
  gettrades();

  function gettrades(){
    $.ajax({
      type: "get",
      url: "https://api.bitso.com/v3/trades/?book=btc_mxn",
      dataType: "json",
      success: function( response ) {
          $.each(response.payload, function(i,Object) {
            $.ajax({
              url: "/savetrade",
              data: {"tid":Object.tid,"book":Object.book,"amount":Object.amount,"maker_side":Object.maker_side,"price":Object.price},
              success: function(response) {

              },
              error: function(xhr) {
                console.log('error al guardar')
              }
            });
          });
      }
    });
  }

  setInterval(function() {
    gettrades();
  }, 5000);

});
