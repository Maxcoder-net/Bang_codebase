 <!DOCTYPE html>
<html lang="en">
<head>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
</head>
<body>
<div ng-app="Accapp" ng-controller="formController">
  <form novalidate>
	Account Name:
    <input type="text" ng-model="Accname">
    Ac type:
    <input type="text" ng-model="Acctype">
    <br><br>
    <button type ="submit" ng-click="saveData()">SUBMIT</button>
  </form>
  <p>form = {{user }}</p>
  <p>master = {{master}}</p>
</div>
<script>
var acapp=angular.module("Accapp",[]);
acapp.controller('formController',function($scope){
	$scope.Accname="New test ac";
	$scope.Acctype="Test ac";
});
function formController ($scope) {
    $scope.master = {Website:"Concretepage.com", Topic:"AngulatJS Form"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
}
</script>
</body>
</html>