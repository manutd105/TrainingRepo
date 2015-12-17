angular.module('indexApp').service('branchesService', function($http) {
	var branchesApi = "https://api.github.com/repos/angular/angular.js/branches";

	this.getAngularBranches = function() {
		return	$http({
				  method: 'GET',
				  url: branchesApi
				})
	}
});