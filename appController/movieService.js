
angular.module('myRootApp').service('movieService', function() {
			var actionMovies2015 = [
				{name: 'Star Wars: The Force Awakens'},
				{name: 'The Martian'}
			];

		this.get2015ActionMovies = function() {
				return actionMovies2015;
		}

		this.addMovie = function(movieName) {
			actionMovies2015.
		}
});