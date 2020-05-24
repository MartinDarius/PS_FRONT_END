
$(document).ready(function()    {
    $("#request_clienti").click(function(e)    {
        $.ajax({
            type: 'GET',
            url:'http://localhost:8080/allClients',
			dataType: 'json',
            success: function(data){

                var str="";
                $.each(data, function (i, client) {
                    str = str + client.nume + ", ";
                })
                $("#clienti").attr("placeholder", str); 
			},
            error: function(){
                $("#clienti").html("error")
            }

        });
    });


});

$(document).ready(function()    {
    $("#request_echip").click(function(e)    {
        $.ajax({
            type: 'GET',
            url:'http://localhost:8080/allEchipaments',
			dataType: 'json',
            success: function(data){
				console.log(data);
                var str="";
                $.each(data, function (i, echipament) {
                    str = str + echipament.nume + ", ";
                })
                $("#echipamente").attr("placeholder", str); 
			},
            error: function(){
                $("#echipamente").html("error")
            }

        });
    });


});


$(document).ready(function()    {
    $("#request_monitor").click(function(e)    {
        $.ajax({
            type: 'GET',
            url:'http://localhost:8080/allMonitors',
			dataType: 'json',
            success: function(data){
				
                var str="";
                $.each(data, function (i, monitor) {
                    str = str + monitor.nume + ", ";
                })
                $("#monitori").attr("placeholder", str); 
			},
            error: function(){
                $("#monitori").html("error")
            }

        });
    });


});



$(document).ready(function()    {
	
	var $name = $('#find_client_text');
	
    $("#find_client_buton").click(function(e)    {
		
		var ClientId = {
			id: $name.val(),
		};
		
        $.ajax({
            type: 'GET',
            url:'http://localhost:8080/findClient',
			data: ClientId,
			dataType: 'json',
            success: function(data){
				
              
                var str="";
                str=str+data.nume;
				console.log(str);
                $("#find_by_id").attr("placeholder", str); 
			},
            error: function(){
                $("#find_by_id").html("error")
            }
		
        });
    });


});

$(document).ready(function()    {
	
	var $name = $('#find_client_email_text');
	
    $("#find_client_email_buton").click(function(e)    {
		
		var ClientEmail = {
			email: $name.val(),
		};
		
        $.ajax({
            type: 'GET',
            url:'http://localhost:8080/findClientByEmail',
			data: ClientEmail,
			dataType: 'json',
            success: function(data){
              
                var str="";
                str=str+data.nume;
				console.log(str);
                $("#find_by_email").attr("placeholder", str); 
			},
            error: function(){
                $("#find_by_email").html("error")
            }
		
        });
    });


});


$(document).ready(function()    {

    
    var $nume = $('#nume');
    var $email = $('#email');
    var $password = $('#password');
    var $tip = $('#tip');
    

    

    $("#request_insert_client").click(function(e)    {

        var ClientObject = {
            
            nume: $nume.val(),
            email: $email.val(),
			password: $password.val(),
			tip: $tip.val(),

        };

        $.ajax({
            type: 'POST',
            url:'http://localhost:8080/insertClient',
            data: JSON.stringify(ClientObject),
            contentType: 'application/json',
            success: function(data){
                console.log("Am intrat pana aici :D");
                console.log(data);
				response_info_client.append(data);
  
            },
            error: function(){
                $("#clients").html("error")
            }

        });
    });


});

$(document).ready(function()    {

    
    var $nume = $('#nume_echipament');
    var $tip = $('#tip_echipament');
	var $stare = $('#stare_echipament');
    

    

    $("#request_insert_echipament").click(function(e)    {

        var EchipamentObject = {
            
			nume: $nume.val(),
            tip: $tip.val(),
			stare: $stare.val(),

        };

        $.ajax({
            type: 'POST',
            url:'http://localhost:8080/insertEchipament',
            data: JSON.stringify(EchipamentObject),
            contentType: 'application/json',
            success: function(data){
                console.log("Am intrat pana aici :D");
                console.log(data);
				response_info_echipament.append(data);
  
            },
            error: function(){
                $("#clients").html("error")
            }

        });
    });


});


$(document).ready(function()    {

    
    var $nume = $('#nume_instructor');
    var $email = $('#email_instructor');
    var $password = $('#password_instructor');
    var $disponibilitate = $('#disponibilitate_instructor');
    

    

    $("#request_insert_instructor").click(function(e)    {

        var InstructorObject = {
            
            nume: $nume.val(),
            email: $email.val(),
			password: $password.val(),
			disponibilitate: $disponibilitate.val(),

        };

        $.ajax({
            type: 'POST',
            url:'http://localhost:8080/insertMonitor',
            data: JSON.stringify(InstructorObject),
            contentType: 'application/json',
            success: function(data){
                console.log("Am intrat pana aici :D");
                console.log(data);
                response_info_instructor.append(data);
            },
            error: function(){
                $("#clients").html("error")
            }

        });
    });


});

$(document).ready(function()    {
	
	var $id = $('#id_client');
	var $response_info_client = $('#response_info_client');
	
    $("#request_delete_client").click(function(e)    {
		
		var ClientId = {
			id: $id.val(),
		};
		
        $.ajax({
            type: 'POST',
            url:'http://localhost:8080/deleteClient',
			data: ClientId,
			dataType: 'json',
            success: function(data){
				console.log("dasdsaa");
				console.log(data);
                $response_info_client.append(data);
			},
			error: function(){
                $("#clients").html("error")
            }
		
        });
    });


});


$(document).ready(function()    {
	
	var $id = $('#id_echipament');
	var $response_info_echipament = $('#response_info_echipament');
	
    $("#request_delete_echipament").click(function(e)    {
		
		var EchipamentId = {
			id: $id.val(),
		};
		
        $.ajax({
            type: 'POST',
            url:'http://localhost:8080/deleteEchipament',
			data: EchipamentId,
			dataType: 'json',
            success: function(data){
                $response_info_echipament.append(data);
			},
		
        });
    });


});

$(document).ready(function()    {
	
	var $id = $('#id_instructor');
	var $response_info_instructor = $('#response_info_instructor');
	
    $("#request_delete_instructor").click(function(e)    {
		
		var InstructorId = {
			id: $id.val(),
		};
		
        $.ajax({
            type: 'POST',
            url:'http://localhost:8080/deleteMonitor',
			data: InstructorId,
			dataType: 'json',
            success: function(data){
                $response_info_instructor.append(data);
			},
		
        });
    });


});