
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
  
            },
            error: function(){
                $("#clients").html("error")
            }

        });
    });


});