$(document).on('ready', ini);

function ini(){
	$('#acordeon h3').on('click', acordeon);
}

function acordeon(){
	$('#acordeon ul ul').slideUp();
  		if(!$(this).next().is(':visible')){
    			$(this).next().slideDown();
	 	}
}

