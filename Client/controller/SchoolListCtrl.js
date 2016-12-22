
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

app.controller('SchoolList',function($scope, $rootScope,$cookieStore, $window, schoollistFactory)
{
  //alert("School List");
  //$scope.schoolForm.instituteID = 2;

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
// alert($scope.schoolForm.InstituteID);
  $scope.schoolForm.ClassGroups = 1;
   $scope.schoolForm.Description = "1sdm";
   schoollistFactory.SaveSchoolInfo($scope.schoolForm).success(function (resultData) {
          //return resultData;   
          
          if(resultData != null)   

          $window.alert('Saved sucessfully.');
           $scope.schoolListView();
      }).error(function (errorData) { 
        console.log(errorData);
      });


  };


$scope.editDisplay=false; 
$scope.viewDisplay=false;

$scope.EditSchool=function(resultData) {

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
       $scope.schoolForm.InstituteID = resultData.InstituteID;
       $scope.schoolForm.FirstName =resultData.FirstName;
       $scope.schoolForm.LastName = resultData.LastName;
       $scope.schoolForm.CardNumber = resultData.CardNumber;
       $scope.schoolForm.CVV = resultData.CVV;
       $scope.schoolForm.ExpiryMonth = resultData.ExpiryMonth;
       $scope.schoolForm.ExpiryYear = resultData.ExpiryYear;
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
             $scope.schoolForm.InstituteID = resultData.InstituteID;
             
             $scope.editDisplay=false;
             $scope.viewDisplay=true;
             $scope.listDisplay=false;
       };

      

   (function () {
// ngDialog.open({
//     template: '<p>my template</p>',
//     plain: true
// });
 // $window.alert('Hi!! ');
    // $mdDialog.show(
    //               $mdDialog.alert()
    //                  .parent(angular.element(document.querySelector('#dialogContainer')))
    //                  .clickOutsideToClose(true)
    //                  .title('TutorialsPoint.com')
    //                  .textContent('Welcome to TutorialsPoint.com')
    //                  .ariaLabel('Welcome to TutorialsPoint.com')
    //                  .ok('Ok!')
    //                  .targetEvent(ev)
    //            );

   $scope.listDisplay=true;
   $scope.schoolListView();
   
   $rootScope.UserID = $cookieStore.get('UserID');
   //$rootScope.UserName = $cookieStore.get("UserName");
   // alert($scope.UserID);
   // alert("kali");
  	     })();
});
