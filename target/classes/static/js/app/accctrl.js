var accapp = angular.module('accapp',[]);

accapp.controller('formController', function($scope, createAccountService) {
	

	
	$scope.createCustomerAccount = function(testform){
	alert('1' );
	alert('123 .....' + testform);
		createAccountService.createCustomerAccount(testform).then(function(responseStuts) {
			console.log(responseStuts.data);
		$scope.account = responseStuts.data;
		
	}, function(errResponse) {
		console.error('Error while getting Verticals Details');

	 });
	}
});