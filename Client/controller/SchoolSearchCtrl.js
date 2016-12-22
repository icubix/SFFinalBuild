var app = angular.module('sfApp.schoolSrchCtrl',['sfApp.scSearchFactory']);

app.controller('SchoolSearch',function($scope,$rootScope, $location,$cookieStore,schoolSearchFactory)
{

	//alert("helo");

   $scope.GetSearch = function () {
   	//alert($scope.form);
     schoolSearchFactory.Searchresult($scope.searchForm).success(function (resultData) {
            //$scope.success = resultData; 
            $scope.data = resultData;
            $scope.listDisplay=true;
            $scope.viewDisplay=false;
            $scope.searchDisplay=false;         
        }).error(function (errorData) { });
  

    };

          $scope.GetSearchView = function(resultData){
          
             $scope.searchForm.InstituteName = resultData.InstituteName;
             $scope.searchForm.PhoneNumber =resultData.PhoneNumber;
             $scope.searchForm.EmailAddress =resultData.EmailAddress;
             $scope.searchForm.Website=resultData.Website;
             $scope.searchForm.NoOfStudents=resultData.NoOfStudents;
             $scope.searchForm.NoOfTeachers=resultData.NoOfTeachers;
             $scope.searchForm.SchoolChildrenRatio=resultData.SchoolChildrenRatio;
             $scope.searchForm.Latitude=resultData.Latitude;
             $scope.searchForm.Longitude=resultData.Longitude;
             $scope.searchForm.Street1=resultData.Street1;
             $scope.searchForm.Street2=resultData.Street2;
             $scope.searchForm.City=resultData.City;
             $scope.searchForm.ZipCode=resultData.ZipCode;
             $scope.searchForm.State=resultData.State;

             $scope.searchDisplay=false;
             $scope.viewDisplay=true;
             $scope.listDisplay=false;
       };

     (function () {

       $scope.listDisplay=false;
       $scope.viewDisplay=false;
       $scope.searchDisplay=true;     
  
     $scope.userID = $cookieStore.get('UserID');
     $rootScope.disPage = false;
     
     if($scope.UserID == undefined )
     {
     
             // $cookieStore.put("Search", "SearchPage");
              //$rootScope.Search = $cookieStore.get("Search");
              $rootScope.UserID = '';
              $rootScope.disPage = true;
     }
     // else
     // {
     //     //$cookieStore.remove("Search");
     //      $rootScope.disPage = false;
     // }
   //alert(userId);
  	     })();

});
