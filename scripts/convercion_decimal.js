
function conversion(){

  var num = document.getElementById("caja_decimal").value;

  document.getElementById("caja_binario").value = parseFloat(num).toString(2);
  document.getElementById("caja_octal").value = parseFloat(num).toString(8);
  document.getElementById("caja_hexadecimal").value = parseFloat(num).toString(16).toUpperCase();

}
