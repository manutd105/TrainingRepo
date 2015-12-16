angular.module('myRootApp').controller('appController',function($scope, gitRepoService){

	$scope.showCommits = false;

	$scope.loadCommits = function() {
		$scope.commits = gitRepoService.getRahulCommits();
		$scope.showCommits = true;
	}
});