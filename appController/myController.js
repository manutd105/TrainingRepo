
angular.module('myRootApp').controller('myController',function($scope, movieService){

		$scope.loadMovies = function() {
			$scope.movies = movieService.get2015ActionMovies();
		}
});

