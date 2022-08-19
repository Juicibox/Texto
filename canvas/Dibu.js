var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;



function dibujoPorClick()
{

  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var espacio = ancho / lineas;



  while( l < lineas)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("red", yi, 0, 300, xf);
    l = l + 1; " se puede usar l++"
  }

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("red", 0, yi, xf, 299);

  }

  dibujarLinea("grey", 1, 1, 1, 299);
  dibujarLinea("black", 1, 299, 299, 299);
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
