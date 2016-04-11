var app = angular.module('training', []);

app.controller("trainingController",function($scope){
	$scope.people = [
	{
	firstname: "Srini",
	lastname: "Kusunam",
	dob: "07/07/1950",
	hourlyRate: "30"
	}, 
	{
	firstname: "Rahul",
	lastname: "Kulkarni",
	dob: "12/04/1962", 
	hourlyRate: "50"
	}, 
	{
	firstname: "Charan",
	lastname: "Eleti",
	dob: "01/18/1975",
	hourlyRate: "100"
	}
	]
});

app.filter('capitilize', function() {
	return function(input) {
		var firstLetter = input[0];
		//return firstLetter.toUpperCase()
		return firstLetter.toUpperCase() + input.slice(1);
		//return "Rahul";
	}
});

app.filter('newCurrency', function() {
	return function(input, param1) {
		var number = input;
		return number + " " + param1;
	}
});

app.filter('reverseLn', function(){
	return function(input){
		var last = input;		
		for(var i=last.length-1; i>=0;i--){
			return last.charAt(i) + last.charAt(i-1) + last.charAt(i-2) + last.charAt(i-3) + last.charAt(i-4) + last.charAt(i-5) + last.charAt(i-6) + last.charAt(i-7);
		}

	}
})

