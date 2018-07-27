
var testapp = angular.module('testapp',[]);

testapp.controller('namesCtrl', function($scope, helloService) {
	
	$scope.getPersonDataFromServer = function(){
	alert('1');
	
	/*helloService.getUserDetails().then(function(responseStuts) {
		
		$scope.person = responseStuts.data;
		
	}, function(errResponse) {
		console.error('Error while getting Verticals Details');
	});*/
	
	//helloService.getPersonDataFromServer().then(function(responseStuts) {

		 helloService.getPersonDataFromServer().then(function(responseStuts) {
		$scope.person = responseStuts.data;
		
	}, function(errResponse) {
		console.error('Error while getting Verticals Details');

	 });
	}
});