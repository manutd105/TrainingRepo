angular.module('myRootApp').controller('appController',function($scope, gitRepoService){

	$scope.showCommits = false;

	$scope.loadCommits = function() {
		var commitPromise = gitRepoService.getRahulCommits();
		console.log("controller printing " , commitPromise);
		$scope.showCommits = true;

		commitPromise.then(function successCallback(response) {
		    console.log("success = " , response);
		    $scope.commits = response;
		  }, function errorCallback(response) {
		     console.log("error = " , response);
		  });
	}
});