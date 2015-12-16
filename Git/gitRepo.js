console.log("controller heyy part");

angular.module('myRootApp').controller('appController',function($scope, gitRepoService){

	console.log("controller first part");
	// $scope.showCommits = true;

	$scope.loadCommits = function() {
		$scope.commits = gitRepoService.getRahulCommits();
		console.log("controller second part");
	}
	// $scope.showCommits = true;
});