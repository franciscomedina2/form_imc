function hola(){

	alert("Hola mundo");
}

//hola();



function valida(e){//solo numeros
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }
        
    // Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}


function calculoIMC()
{
  var altura=document.getElementById("altura").value;
  altura=altura.toString().replace(',','.');
  var alturaMetro=altura/100;
  var peso=document.getElementById("peso").value;
   
  if(altura==""){
      document.getElementById("error_form").innerHTML="Por favor, introduce tu altura.";
  }
  else if(altura<0){
      document.getElementById("error_form").innerHTML="La altura que ingrese debe ser positiva.";
  }
  else if(altura<20){
      document.getElementById("error_form").innerHTML="Ha introducido la altura en metros.Por favor, multipliquela por 100 para introducirla en centimetros.";
  }
  else{
      document.getElementById("error_form").innerHTML="";
      if(peso==""){
        document.getElementById("error_form").innerHTML="Por favor, introduce tu peso.";
      }
      else if(peso<0){
          document.getElementById("error_form").innerHTML="El peso que ingrese debe ser positivo.";
      }
      else{
        document.getElementById("error_form").innerHTML="";
         
        /*CALCULO IMC*/
        var alturaCuadrado=alturaMetro*alturaMetro;
        var imc=peso/alturaCuadrado;
        document.getElementById("res_imc").value=Math.round(imc*100)/100;     
        /*CALCULO DESCRIPCION IMC*/
        if(imc<16){
          document.getElementById("res_estado").value="Delgadez Severa";    
        }
        else if(imc<17){
          document.getElementById("res_estado").value="Delgadez Moderada";    
        }
        else if(imc<18.5){
          document.getElementById("res_estado").value="Delgadez Aceptable";   
        }
        else if(imc<25){
          document.getElementById("res_estado").value="Peso Normal";    
        }
        else if(imc<30){
          document.getElementById("res_estado").value="Sobrepeso";    
        }
        else if(imc<35){
          document.getElementById("res_estado").value="Obeso: Tipo I";    
        }
        else if(imc<40){
          document.getElementById("res_estado").value="Obeso: Tipo II";   
        }
        else if(imc>=40){
          document.getElementById("res_estado").value="Obeso: Tipo III";    
        }
      }
  }
}


function limpiar(){

	document.getElementById("altura").value="";
	document.getElementById("peso").value="";
	document.getElementById("res_imc").value="";
	document.getElementById("res_estado").value="";
	document.getElementById("error_form").innerHTML="";
	


}