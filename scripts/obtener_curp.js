
function sacar_curp(){

  var nombre = document.getElementById("caja_nombre").value.toUpperCase();
  var primer_apellido = document.getElementById("caja_primerApellido").value.toUpperCase();
  var segundo_apellido = document.getElementById("caja_segundoApellido").value.toUpperCase();
  var año = document.getElementById("comboBox_año").options[document.getElementById("comboBox_año").selectedIndex].value;
  var mes = document.getElementById("comboBox_mes").options[document.getElementById("comboBox_mes").selectedIndex].value;
  var dia = document.getElementById("comboBox_dia").options[document.getElementById("comboBox_dia").selectedIndex].value;
  var sexo =  document.getElementById("comboBox_sexo").options[document.getElementById("comboBox_sexo").selectedIndex].value;
  var estado =  document.getElementById("comboBox_estado").options[document.getElementById("comboBox_estado").selectedIndex].value;

  var curp;

  curp = primer_apellido.charAt(0);

  for (var i = 1; i < primer_apellido.length; i++) {
    if(primer_apellido.charAt(i) == 'A' || primer_apellido.charAt(i) == 'E' ||
    primer_apellido.charAt(i) == 'I' || primer_apellido.charAt(i) == 'O' ||
    primer_apellido.charAt(i) == 'U'){

      curp += primer_apellido.charAt(i);
      i=primer_apellido.length;

    }
  }

  curp += segundo_apellido.charAt(0);
  curp += nombre.charAt(0);
  curp += año;
  curp += mes;
  curp += dia;
  curp += sexo;
  curp += estado;

  for (var i = 1; i < primer_apellido.length; i++) {
    if(primer_apellido.charAt(i) == 'B' || primer_apellido.charAt(i) == 'C' ||
    primer_apellido.charAt(i) == 'D'|| primer_apellido.charAt(i) == 'F'||
    primer_apellido.charAt(i) == 'G'|| primer_apellido.charAt(i) == 'H'||
    primer_apellido.charAt(i) == 'J'|| primer_apellido.charAt(i) == 'K'||
    primer_apellido.charAt(i) == 'L'|| primer_apellido.charAt(i) == 'M'||
    primer_apellido.charAt(i) == 'N'|| primer_apellido.charAt(i) == 'Ñ'||
    primer_apellido.charAt(i) == 'P'|| primer_apellido.charAt(i) == 'Q'||
    primer_apellido.charAt(i) == 'R'|| primer_apellido.charAt(i) == 'S'||
    primer_apellido.charAt(i) == 'T'|| primer_apellido.charAt(i) == 'V'||
    primer_apellido.charAt(i) == 'W'|| primer_apellido.charAt(i) == 'X'||
    primer_apellido.charAt(i) == 'Y'|| primer_apellido.charAt(i) == 'Z'){

      curp += primer_apellido.charAt(i);
      i=primer_apellido.length;

    }
  }

  for (var i = 1; i < segundo_apellido.length; i++) {
    if(primer_apellido.charAt(i) == 'B' || segundo_apellido.charAt(i) == 'C' ||
    segundo_apellido.charAt(i) == 'D'|| segundo_apellido.charAt(i) == 'F'||
    segundo_apellido.charAt(i) == 'G'|| segundo_apellido.charAt(i) == 'H'||
    segundo_apellido.charAt(i) == 'J'|| segundo_apellido.charAt(i) == 'K'||
    segundo_apellido.charAt(i) == 'L'|| segundo_apellido.charAt(i) == 'M'||
    segundo_apellido.charAt(i) == 'N'|| segundo_apellido.charAt(i) == 'Ñ'||
    segundo_apellido.charAt(i) == 'P'|| segundo_apellido.charAt(i) == 'Q'||
    segundo_apellido.charAt(i) == 'R'|| segundo_apellido.charAt(i) == 'S'||
    segundo_apellido.charAt(i) == 'T'|| segundo_apellido.charAt(i) == 'V'||
    segundo_apellido.charAt(i) == 'W'|| segundo_apellido.charAt(i) == 'X'||
    segundo_apellido.charAt(i) == 'Y'|| segundo_apellido.charAt(i) == 'Z'){

      curp += segundo_apellido.charAt(i);
      i=segundo_apellido.length;

    }
  }

  for (var i = 1; i < nombre.length; i++) {
    if(nombre.charAt(i) == 'B' || nombre.charAt(i) == 'C' ||
    nombre.charAt(i) == 'D'|| nombre.charAt(i) == 'F'||
    nombre.charAt(i) == 'G'|| nombre.charAt(i) == 'H'||
    nombre.charAt(i) == 'J'|| nombre.charAt(i) == 'K'||
    nombre.charAt(i) == 'L'|| nombre.charAt(i) == 'M'||
    nombre.charAt(i) == 'N'|| nombre.charAt(i) == 'Ñ'||
    nombre.charAt(i) == 'P'|| nombre.charAt(i) == 'Q'||
    nombre.charAt(i) == 'R'|| nombre.charAt(i) == 'S'||
    nombre.charAt(i) == 'T'|| nombre.charAt(i) == 'V'||
    nombre.charAt(i) == 'W'|| nombre.charAt(i) == 'X'||
    nombre.charAt(i) == 'Y'|| nombre.charAt(i) == 'Z'){

      curp += nombre.charAt(i);
      i=nombre.length;

    }
  }

document.getElementById("caja_curp").value=curp;

}
