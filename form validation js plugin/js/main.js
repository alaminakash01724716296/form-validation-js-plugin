$(document).ready(function(){
    $("#form").validate({
        rules: {
            First_Name: "required",
            Last_Name: "required",
            Email: "required",
            Message: "required",
            Password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#conform_password"
            },
        },
        messages: {
            First_Name: "Please enter your firstname",
            Last_Name: "Please enter your lastname",
            Email: "Please enter your Email Address",
            Message: "Please enter your Full message",
            Password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
        }
    });
})