angular.module('indexApp').service('commitsService', function($http) {
	var commitsApi = "https://api.github.com/repos/angular/angular.js/commits";

	this.getAngularCommits = function() {
		return	$http({
				  method: 'GET',
				  url: commitsApi
				})
	}
});