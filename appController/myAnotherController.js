
angular.module('myRootApp').controller('myAnotherController', function($scope, movieService){

	$scope.myAnotherControllerMovies = movieService.get2015ActionMovies();

});