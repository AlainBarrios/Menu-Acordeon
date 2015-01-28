$(document).on('ready', ini);
 
function ini(){
	$("#acordeon h3").on('click', acordeon);
}

function acordeon(){
	$("#acordeon ul ul").slideUp();	//Oculta todas las segundas listas desordenadas del elemento #acordeon.
	if(!$(this).next().is(":visible")){ //Valida si el elemento siguiente a h3 al que se hizo click no esta visible.
			$(this).next().slideDown(); //Abre los elementos siguientes del h3 al que se hizo click.
	}
}
