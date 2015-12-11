function login(){
	var field1 = document.getElementById("username").value;
	var field2 = document.getElementById("pswrd").value;
	var field3 = document.getElementById("result");

	var field4 = document.getElementById("para");
	var field5 = document.getElementById("lgdiv");

	var yes = " JS successfully logged in!!!!!!!!";
	var no = "Invalid Username and/or Password";

		if(field1 === "JS" && field2 === "Javascript"){
			field5.innerHTML = yes;
			console.log(field5.innerHTML);
		} else {
			field4.innerHTML = no;
			
		}
}