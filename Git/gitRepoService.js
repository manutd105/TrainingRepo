angular.module('myRootApp').service('gitRepoService', function($http) {
	var rahulCommitApi = "https://api.github.com/repos/angular/angular.js/commits";

	this.getRahulCommits = function() {
		return	$http({
				  method: 'GET',
				  url: rahulCommitApi
				})
	}
});