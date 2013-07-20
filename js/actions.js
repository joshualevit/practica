//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

$(document).ready(function() {
	var watchID=null;
	//Acelerometro
	$('#acelerometro .individual li').tap(function(){
			if($(this).index()==0){ //Boton de iniciar
				function onSuccess(acceleration) {
		$('#acelerometro h2').hmtl('Acceleration X: ' + acceleration.x + '<br>' +
			'Acceleration Y: ' + acceleration.y + '<br>' +
			'Acceleration Z: ' + acceleration.z + '<br>');
};

function onError() {
    alert('onError!');
};

var options = { frequency: 500 };  // Update every 3 seconds

watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
			}else{ // Boton Detener
				if (watchID) {
            	navigator.accelerometer.clearWatch(watchID);
            	watchID = null;
					$('#acelerometro h2').hmtl('Detenido');
        		}					
			 }
	});
});