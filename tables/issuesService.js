angular.module('indexApp').service('issuesService', function($http) {
	var issuesApi = "https://api.github.com/repos/angular/angular.js/issues";

	this.getAngularIssues = function() {
		return	$http({
				  method: 'GET',
				  url: issuesApi
				})
	}
});