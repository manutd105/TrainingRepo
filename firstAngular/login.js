var app = angular.module('loginApp', []);

app.controller('loginController',function($scope){
	$scope.userName = "JS";
	$scope.showLogin = true;
	$scope.today = new Date();
	
	$scope.login = function (){
	 	console.log("this is running " + $scope.userName);
	 	if($scope.userName === "JS" && $scope.password === "Javascript"){
	 		console.log("Success");
	 		$scope.showLogin = false;
	 		$scope.message = "Success";
	 	} else{
	 		console.log("Failure");
	 		$scope.message = "Failure";
	 	}
  
	 }
 
});