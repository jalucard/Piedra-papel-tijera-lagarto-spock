/**********
	CREADO POR JAIRO RAMIREZ
	EJERCICIO NUM 1 PROGRAMACION  BASICA
	                         *********/

//variables necesarias
var botonpiedra;
var botonpapel;
var botontijera;
var botonlagarto;
var botonspock;
var jugadas= ["Piedra","Papel","Tijeras","Lagarto","Spock"];
var jugadausuario;
var jugadamaquina;

//funcion inicio para que primero cargue todo el html y asi poder tomar los elementos
function inicio()
{
	//Aqui tomo los botones y los asigno a las variables
	botonpiedra= document.getElementById("btnpiedra");
	botonpapel= document.getElementById("btnpapel");
	botontijera= document.getElementById("btntijera");
	botonlagarto= document.getElementById("btnlagarto");
	botonspock= document.getElementById("btnspock");

	//Aqui le añado un escuchador del evento clic a los botones
	botonpiedra.addEventListener("click",eligio_piedra);
	botonpapel.addEventListener("click",eligio_papel);
	botontijera.addEventListener("click",eligio_tijeras);
	botonlagarto.addEventListener("click",eligio_lagarto);
	botonspock.addEventListener("click",eligio_spock);
}

//función que genera numero aleatorio de 0 a 4
function numaleatorio()
{
	var num = Math.round(Math.random()*4);
	return num;
}

//funciones para elegir la opción del usuario
function eligio_piedra()
{
  jugadausuario= "Piedra";
  resultado();
}

function eligio_papel()
{
  jugadausuario= "Papel";
  resultado();
}

function eligio_tijeras()
{
  jugadausuario= "Tijeras";
  resultado();
}

function eligio_lagarto()
{
  jugadausuario= "Lagarto";
  resultado();
}

function eligio_spock()
{
  jugadausuario= "Spock";
  resultado();
}


//función para mostrar cual es el ganador
function resultado()
{
	jugadamaquina= jugadas[numaleatorio()]

	if(jugadausuario=="Piedra")
	{
		if(jugadamaquina=="Piedra")
		{
			document.getElementById('ganador').innerHTML="Empate! La maquina eligió "+jugadamaquina;
		}else if(jugadamaquina=="Papel"||jugadamaquina=="Spock")
		{
			document.getElementById('ganador').innerHTML="Perdiste! La maquina eligió "+jugadamaquina;
		}else if(jugadamaquina=="Tijeras"||jugadamaquina=="Lagarto")
		{
			document.getElementById('ganador').innerHTML="Ganaste! La maquina eligió "+jugadamaquina;
		}
	}
	else
	if(jugadausuario=="Papel")
	{
		if(jugadamaquina=="Piedra"||jugadamaquina=="Spock")
		{
			document.getElementById('ganador').innerHTML="Ganaste! La maquina eligió "+jugadamaquina;
		}else if(jugadamaquina=="Papel")
		{
			document.getElementById('ganador').innerHTML="Empate! La maquina eligió "+jugadamaquina;
		}else if(jugadamaquina=="Tijeras"||jugadamaquina=="Lagarto")
		{
			document.getElementById('ganador').innerHTML="Perdiste! La maquina eligió "+jugadamaquina;
		}
	}
	else
	if(jugadausuario=="Tijeras")
	{
		if(jugadamaquina=="Piedra"||jugadamaquina=="Spock")
		{
			document.getElementById('ganador').innerHTML="Perdiste! La maquina eligió "+jugadamaquina;
		}else if(jugadamaquina=="Papel"||jugadamaquina=="Lagarto")
		{
			document.getElementById('ganador').innerHTML="Ganaste! La maquina eligió "+jugadamaquina;
		}else if(jugadamaquina=="Tijeras")
		{
			document.getElementById('ganador').innerHTML="Empate! La maquina eligió "+jugadamaquina;
		}
	}
	else
	if(jugadausuario=="Lagarto")
	{
		if(jugadamaquina=="Piedra"||jugadamaquina=="Tijeras")
		{
			document.getElementById('ganador').innerHTML="Perdiste! La maquina eligió "+jugadamaquina;
		}else if(jugadamaquina=="Papel"||jugadamaquina=="Spock")
		{
			document.getElementById('ganador').innerHTML="Ganaste! La maquina eligió "+jugadamaquina;
		}else if(jugadamaquina=="Lagarto")
		{
			document.getElementById('ganador').innerHTML="Empate! La maquina eligió "+jugadamaquina;
		}
	}
	else
	if(jugadausuario=="Spock")
	{
		if(jugadamaquina=="Piedra"||jugadamaquina=="Tijeras")
		{
			document.getElementById('ganador').innerHTML="Ganaste! La maquina eligió "+jugadamaquina;
		}else if(jugadamaquina=="Papel"||jugadamaquina=="Lagarto")
		{
			document.getElementById('ganador').innerHTML="Perdiste! La maquina eligió "+jugadamaquina;
		}else if(jugadamaquina=="Spock")
		{
			document.getElementById('ganador').innerHTML="Empate! La maquina eligió "+jugadamaquina;
		}
	}
}