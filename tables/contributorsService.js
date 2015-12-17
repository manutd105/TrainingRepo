angular.module('indexApp').service('contributorsService', function($http) {
	var contributorsApi = "https://api.github.com/repos/angular/angular.js/contributors";

	this.getAngularContributors = function() {
		return	$http({
				  method: 'GET',
				  url: contributorsApi
				})
	}
});