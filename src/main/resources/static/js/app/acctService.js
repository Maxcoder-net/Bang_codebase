
var applicationContextURL = "http://localhost:8080";

accapp.service('createAccountService', function($http,$q) {
	
	return {
		
				
		createCustomerAccount : function(testform) {
			debugger;
			alert('3...' + testform);
			//var def = $q.defer();
			return $http.post(applicationContextURL + '/createCustomerAccount',testform).then(function(response) {
			
				return response;
			}, function(errResponse) {
				
				return errResponse;
			});
			//return def.promise;
		}
			
	};
});