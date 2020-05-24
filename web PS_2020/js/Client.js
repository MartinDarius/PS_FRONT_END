$(document).ready(function()    {
    $("#request_echipamente_disponibile").click(function(e)    {
        $.ajax({
            type: 'GET',
            url:'http://localhost:8080/EchipamenteDisponibile',
			dataType: 'json',
            success: function(data){
				
                var str="";
                $.each(data, function (i, echipament) {
                    str = str +echipament.id +" "+ echipament.nume + ", ";
                })
                $("#echipamente_disponibile").attr("placeholder", str); 
			},
            error: function(){
                $("#echipamente_disponibile").html("error")
            }

        });
    });


});


$(document).ready(function()    {
    $("#request_instructori").click(function(e)    {
        $.ajax({
            type: 'GET',
            url:'http://localhost:8080/allMonitors',
			dataType: 'json',
            success: function(data){
				
                var str="";
                $.each(data, function (i, monitor) {
                    str = str +monitor.id+" "+ monitor.nume + ", ";
                })
                $("#instructori").attr("placeholder", str); 
			},
            error: function(){
                $("#instructori").html("error")
            }

        });
    });


});


$(document).ready(function()    {
	
	var $idClient = $('#idClient');
	var $idEchip = $('#idEchip');
	var $response_info = $('#response_info_echipament');
	
	var idClient = {
		idClient: $idClient.val(),
	};
	var idEchip = {
		idEchip: $idEchip.val(),
	};
	
    $("#request_inchiriaza_echipament").click(function(e)    {
        $.ajax({
            type: 'POST',
            url:'http://localhost:8080/inchiriazaEchipament',
			data: {idClient: $idClient.val(), idEchip: $idEchip.val()},			
			dataType: 'text',
            success: function(data){
				console.log(data);
				$response_info.append('<li>' + data + '</li>');
			},
            error: function(){
                $("#id").html("error")
            }
		
        });
    });


});

$(document).ready(function()    {
	
	var $idClient = $('#idClient');
	var $idEchip = $('#idEchip');
	var $response_info = $('#response_info_echipament');
	
	var idClient = {
		idClient: $idClient.val(),
	};
	var idEchip = {
		idEchip: $idEchip.val(),
	};
	
    $("#request_restituie_echipament").click(function(e)    {
        $.ajax({
            type: 'POST',
            url:'http://localhost:8080/restituieEchipament',
			data: {idClient: $idClient.val(), idEchip: $idEchip.val()},			
			dataType: 'text',
            success: function(data){
				console.log(data);
				$response_info.append('<li>' + data + '</li>');
			},
            error: function(){
                $("#id").html("error")
            }
		
        });
    });


});


$(document).ready(function()    {
	
	var $idClient = $('#idClient2');
	var $idMonitor = $('#idMonitor');
	var $response_info = $('#response_info_instructor');
	
	var idClient = {
		idClient: $idClient.val(),
	};
	var idMonitor = {
		idMonitor: $idMonitor.val(),
	};
	
    $("#request_angajeaza_instructor").click(function(e)    {
        $.ajax({
            type: 'POST',
            url:'http://localhost:8080/angajeazaInstructor',
			data: {idClient: $idClient.val(), idMonitor: $idMonitor.val()},			
			dataType: 'text',
            success: function(data){
				console.log(data);
				$response_info.append('<li>' + data + '</li>');
			},
            error: function(){
                $("#id").html("error")
            }
		
        });
    });


});

$(document).ready(function()    {
	
	var $idClient = $('#idClient2');
	var $idMonitor = $('#idMonitor');
	var $response_info = $('#response_info_instructor');
	
	var idClient = {
		idClient: $idClient.val(),
	};
	var idMonitor = {
		idMonitor: $idMonitor.val(),
	};
	
    $("#request_concediaza_instructor").click(function(e)    {
        $.ajax({
            type: 'POST',
            url:'http://localhost:8080/concediazaInstructor',
			data: {idClient: $idClient.val(), idMonitor: $idMonitor.val()},			
			dataType: 'text',
            success: function(data){
				console.log(data);
				$response_info.append('<li>' + data + '</li>');
			},
            error: function(){
                $("#id").html("error")
            }
		
        });
    });


});


$(document).ready(function()    {
	
	var $idClient = $('#idClient3');
	var $response_info = $('#response_info_disponibile');
	
	var idClient = {
		idClient: $idClient.val(),
	};
	
    $("#request_vizualizeaza_echipamente").click(function(e)    {
        $.ajax({
            type: 'GET',
            url:'http://localhost:8080/echipamenteleClientului',
			data: {idClient: $idClient.val()},			
			dataType: 'text',
            success: function(data){
				
				console.log(data);
				$response_info.append('<li>' + data + '</li>');
			},
            error: function(){
                $("#id").html("error")
            }
		
        });
    });


});

$(document).ready(function()    {
	
	var $idClient = $('#idClient4');
	var $extensie = $('#extensie');
	var $response_info = $('#response_info_raport');
	
	var idClient = {
		idClient: $idClient.val(),
	};
	var extensie={
		extensie:$extensie.val(),
	};
	
    $("#request_generare_raport").click(function(e)    {
        $.ajax({
            type: 'POST',
            url:'http://localhost:8080/genereazaRaport',
			data: {idClient: $idClient.val(), extensie:$extensie.val()},			
			dataType: 'text',
            success: function(data){
				console.log(data);
				$response_info.append('<li>' + data + '</li>');
			},
            error: function(){
                $("#id").html("error")
            }
		
        });
    });


});