$(document).ready(function()    {
	
	var $email = $('#email');
	var $passwordd = $('#passwordd');
	var $response_info = $('#response_info');
	
	var email = {
		email: $email.val(),
	};
	var passwordd = {
		passwordd: $passwordd.val(),
	};
	
    $("#request_login").click(function(e)    {
        $.ajax({
            type: 'GET',
            url:'http://localhost:8080/login',
			data: {email: $email.val(), passwordd: $passwordd.val()},			
			dataType: 'text',
            success: function(data){
				console.log(data);
				$response_info.append('<li>' + data + '</li>');
				if (data === "SUCCESS! V-ati logat drept client!") {
					window.location.href = "interfataClient.html";
				}
				if (data === "SUCCESS! V-ati logat drept Admin!") {
					window.location.href = "interfataAdmin.html";
				}if (data === "SUCCESS! V-ati logat drept instructor!") {
					window.location.href = "interfataInstructor.html";
				}
			},
            error: function(){
                $("#id").html("error")
            }
		
        });
    });


});