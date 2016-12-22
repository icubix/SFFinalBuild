var app = angular.module('sfApp.schoolRegister',['sfApp.regFactory']);

app.controller('register',function($scope,$rootScope, $location,$cookieStore,registerFactory)
{
   $scope.GetSignIn = function () {
   
    $scope.myForm.PersonTypeID=1;
   	$scope.myForm.isActive = 1;
    registerFactory.SaveRegister($scope.myForm).success(function (resultData) {
        //$scope.success = resultData; 
            $location.path('/Login');     
        })
        .error(function (errorData) { 
    	   console.log(errorData);
        });
    };

    $scope.GetRoles = function () {
            registerFactory.GetRoleDetails().success(function (resultData) {
            $scope.RoleListData = resultData;
        })
        .error(function (errorData) {
            console.log(errorData);
         });
    };

    (function () {
         $rootScope.disPage = false;
         $scope.GetRoles();
        
         })();

});
