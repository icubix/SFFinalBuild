
var app = angular.module('sfApp.addschoolctrl',['sfApp.addSlFactory']);

app.controller('AddSchool',function($scope, $rootScope, $location,$cookieStore,addSchoolFactory)
{
	//alert("helo");
//$scope.addSchoolForm.NoOfStudents;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
       
        $scope.addSchoolForm.Longitude = position.coords.longitude; 
        $scope.addSchoolForm.Latitude = position.coords.latitude;
      });
    });
  }

 
   

  $scope.SaveAddSchool = function () {
    
var dataschool = {
                InstituteName : $scope.addSchoolForm.InstituteName,
                NoOfTeachers :$scope.addSchoolForm.NoOfTeachers,
                ClassGroups :1,
                Description :"abd",
                SchoolChildrenRatio:$scope.addSchoolForm.SchoolChildrenRatio,
                PhoneNumber: $scope.addSchoolForm.PhoneNumber,
                EmailAddress :$scope.addSchoolForm.EmailAddress,
                Website :$scope.addSchoolForm.Website,
                Latitude :$scope.addSchoolForm.Latitude,
                NoOfStudents: $scope.addSchoolForm.NoOfStudents,
                Longitude :$scope.addSchoolForm.Longitude,
                Street1:$scope.addSchoolForm.Street1,
                Street2:$scope.addSchoolForm.Street2,
                City:$scope.addSchoolForm.City,
                State:$scope.addSchoolForm.State,
                ZipCode:$scope.addSchoolForm.ZipCode,
};
    $scope.addSchoolForm.ClassGroups = 1;
     $scope.addSchoolForm.Description = "1sdm";
     $scope.addSchoolForm.UserID = 47;
     addSchoolFactory.SaveAddSchool($scope.addSchoolForm).success(function (resultData) {
            //$scope.success = resultData;  
            console.log(resultData);      
            return resultData;  

        }).error(function (errorData) { 
          console.log(errorData);
        });
  

    };






(function () {
  

   $scope.userID = $cookieStore.get('UserID');
    $rootScope.disPage = false;
         })();




});
