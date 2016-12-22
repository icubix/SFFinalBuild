var app = angular.module('sfApp.schoolLogin',['sfApp.logFactory']);
console.log('afasdf');
app.controller('Login',function($scope, $rootScope, $location,$cookieStore,loginFactory)
{
  $scope.Register = function(){
     $rootScope.disPage = false;
    $location.path('/Register');
  };

  $scope.LogIn = function(){
     // console.log("kali");
      var UserID;
      loginFactory.SaveLogin($scope.form).success(function (resultData) {
            if(resultData.length > 0)  
            {
              $cookieStore.put("UserID", resultData[0].UserID);
              $cookieStore.put("UserName",resultData[0].UserName);
              $rootScope.UserID = $cookieStore.get("UserID");
              $rootScope.UserName = $cookieStore.get("UserName");
              $rootScope.RoleID = 3;
              $rootScope.RoleName = "User";
            	$location.path('/SchoolList');
            } 
            else
            {
               $scope.message = "Invalid User name/ Password";
            }      
        }).error(function (errorData) { });
    };

    // $scope.LogOut = function() {
    //  alert("aa")
    // };
});