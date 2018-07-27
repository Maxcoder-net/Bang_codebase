
var applicationContextURL = "http://localhost:8080";

testapp.service('helloService', function($http,$q) {
	
	return {
		
				
		getPersonDataFromServer : function() {
			alert('3');
			//var def = $q.defer();
			return $http.get(applicationContextURL + '/createAccount').then(function(response) {
				return response;
			}, function(errResponse) {
				
				return errResponse;
			});
			//return def.promise;
		}
			
	};
});


