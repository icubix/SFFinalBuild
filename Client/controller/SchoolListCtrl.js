
var app = angular.module('sfApp.schoolListRegister',['sfApp.slFactory','ngCookies']);
//alert("1");

// app.directive('UserInfo',function(){
//   return{
//     restrict:'A',
//     scope:{
//       UserID : $cookieStore.get("UserID")
//     }
//   }
// });

app.controller('SchoolList',function($scope, $rootScope,$cookieStore, schoollistFactory)
{
  //alert("School List");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
        $scope.position = position;
        $scope.schoolForm.Longitude = position.coords.latitude; 
        $scope.schoolForm.Latitude = position.coords.longitude;
      });
    });
  }

$scope.SaveSchoolInfo = function () {
 
  $scope.schoolForm.ClassGroups = 1;
   $scope.schoolForm.Description = "1sdm";
   schoollistFactory.SaveSchoolInfo($scope.schoolForm).success(function (resultData) {
          return resultData;      
      }).error(function (errorData) { 
        console.log(errorData);
      });


  };


$scope.editDisplay=false; 
$scope.viewDisplay=false;

$scope.EditSchool=function(resultData) {
alert(resultData.InstituteID);
           
       $scope.schoolForm.InstituteName = resultData.InstituteName;
       $scope.schoolForm.PhoneNumber =resultData.PhoneNumber;
       $scope.schoolForm.EmailAddress =resultData.EmailAddress;
       $scope.schoolForm.Website=resultData.Website;
       $scope.schoolForm.NoOfStudents=resultData.NoOfStudents;
       $scope.schoolForm.NoOfTeachers=resultData.NoOfTeachers;
       $scope.schoolForm.SchoolChildrenRatio=resultData.SchoolChildrenRatio;
       $scope.schoolForm.Latitude=resultData.Latitude;
       $scope.schoolForm.Longitude=resultData.Longitude;
       $scope.schoolForm.Street1=resultData.Street1;
       $scope.schoolForm.Street2=resultData.Street2;
       $scope.schoolForm.City=resultData.City;
       $scope.schoolForm.ZipCode=resultData.ZipCode;
       $scope.schoolForm.State=resultData.State;

      $scope.editDisplay=true;
      $scope.viewDisplay=false;
            $scope.listDisplay=false;
      
};

$scope.cancelSchool =function() {
      $scope.editDisplay=false;
      $scope.viewDisplay=false;
      $scope.listDisplay=true;
};

   $scope.schoolListView = function(){
     schoollistFactory.GetSchools().success(function (resultData) {
         
            $scope.data = resultData;
            $scope.editDisplay=false;
            $scope.viewDisplay=false;
            $scope.listDisplay=true;
        }).error(function (errorData) { });

       };


       $scope.ViewSchool = function(resultData){
          
             $scope.schoolForm.InstituteName = resultData.InstituteName;
             $scope.schoolForm.PhoneNumber =resultData.PhoneNumber;
             $scope.schoolForm.EmailAddress =resultData.EmailAddress;
             $scope.schoolForm.Website=resultData.Website;
             $scope.schoolForm.NoOfStudents=resultData.NoOfStudents;
             $scope.schoolForm.NoOfTeachers=resultData.NoOfTeachers;
             $scope.schoolForm.SchoolChildrenRatio=resultData.SchoolChildrenRatio;
             $scope.schoolForm.Latitude=resultData.Latitude;
             $scope.schoolForm.Longitude=resultData.Longitude;
             $scope.schoolForm.Street1=resultData.Street1;
             $scope.schoolForm.Street2=resultData.Street2;
             $scope.schoolForm.City=resultData.City;
             $scope.schoolForm.ZipCode=resultData.ZipCode;
             $scope.schoolForm.State=resultData.State;

             $scope.editDisplay=false;
             $scope.viewDisplay=true;
             $scope.listDisplay=false;
       };

      

   (function () {
   $scope.listDisplay=true;
   $scope.schoolListView();
    $rootScope.disPage = false;
   $rootScope.UserID = $cookieStore.get('UserID');
   //$rootScope.UserName = $cookieStore.get("UserName");
   // alert($scope.UserID);
   // alert("kali");
  	     })();
});
