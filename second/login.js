function login(){
	var username = document.getElementById("username").value;
	var pswrd = document.getElementById("pswrd").value;
	
	var yesElement = document.getElementById("yes");
	var noElement = document.getElementById("no");

	var yes = " JS successfully logged in!!!!!!!!";
	var no = "Invalid Username and/or Password";

	if(username === "JS" && pswrd === "Javascript"){
		yesElement.innerHTML = yes;
		console.log(yesElement.innerHTML);
	} else {
		noElement.innerHTML = no;
		
	}
}