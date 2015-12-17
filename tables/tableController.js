angular.module('indexApp').controller('tableController',function($scope, commitsService, issuesService, contributorsService, branchesService){

	$scope.showCommits = false;
	$scope.showIssues = false;
	$scope.showContributors = false;
	$scope.showBranches = false;

	$scope.loadCommits = function() {
		var commitPromise = commitsService.getAngularCommits();
		console.log("controller printing " , commitPromise);

		$scope.showCommits = true;
		$scope.showIssues = false;
		$scope.showContributors = false;
		$scope.showBranches = false;

		commitPromise.then(function successCallback(response) {
		    console.log("success = " , response);
		    $scope.commits = response;
		  }, function errorCallback(response) {
		     console.log("error = " , response);
		  });
	}

	
	$scope.loadIssues = function() {
		var issuePromise = issuesService.getAngularIssues();
		console.log("controller printing " , issuePromise);

		$scope.showIssues = true;
		$scope.showCommits = false;
		$scope.showContributors = false;
		$scope.showBranches = false;
		
		issuePromise.then(function successCallback(response) {
		    console.log("success = " , response);
		    $scope.issues = response;
		  }, function errorCallback(response) {
		     console.log("error = " , response);
		  });
	}

	$scope.loadContributors = function() {
		var contributorPromise = contributorsService.getAngularContributors();
		console.log("controller printing " , contributorPromise);

		$scope.showCommits = false;
		$scope.showIssues = false;
		$scope.showContributors = true;
		$scope.showBranches = false;
		
		contributorPromise.then(function successCallback(response) {
		    console.log("success = " , response);
		    $scope.contributors = response;
		  }, function errorCallback(response) {
		     console.log("error = " , response);
		  });
	}

	$scope.loadBranches = function() {
		var branchPromise = branchesService.getAngularBranches();
		console.log("controller printing " , branchPromise);

		$scope.showCommits = false;
		$scope.showIssues = false;
		$scope.showContributors = false;
		$scope.showBranches = true;
		
		branchPromise.then(function successCallback(response) {
		    console.log("success = " , response);
		    $scope.branches = response;
		  }, function errorCallback(response) {
		     console.log("error = " , response);
		  });
	}

});