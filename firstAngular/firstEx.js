angular.module("firstEx" , []);
angular.contro

function parentController($scope){
	$scope.name = "PARENT";
	$scope.buttonFunction = function(){
		console.log("Rahul");
		$scope.name = "New Jersey";
	}
}

function childController($scope){
	$scope.name = "CHILD";
}