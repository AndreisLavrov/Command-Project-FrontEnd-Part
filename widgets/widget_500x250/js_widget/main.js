$(document).ready(function(){
    var flag = 0;  
    $("input#slideThree").click(function(){
      if(flag == 0) {
        $("#widget").attr("src","https://test.ecom.raiffeisen.ru/api/sbp/v1/qr/ADC2BB6468604F1E854690448314DA3A/image");
        flag = 1;
      }
      else if(flag == 1) {
        $("#widget").attr("src","https://test.ecom.raiffeisen.ru/api/sbp/v1/qr/ASCC39EF9FD64A34B391722CA15A12DA/image");
        flag = 0;
      }
    });
  });
