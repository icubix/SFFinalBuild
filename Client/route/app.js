var app = angular.module('sfApp',['ngRoute','sfApp.schoolLogin', 
                                  'sfApp.schoolListRegister',
                                  'sfApp.schoolInfoRegister','sfApp.addschoolctrl',
                                  'sfApp.schoolLogout',
                                  'sfApp.schoolRegister',
                                  'sfApp.schoolSrchCtrl',
                                  'sfApp.genSchoolSrchCtrl'
                                  ]);
console.log('test');
app.config(function($routeProvider) {
  $routeProvider
  .when('/Register',{
  	templateUrl:'views/register.html',
  	controller:'register'
  })
  .when('/Login',{
  	templateUrl:'views/Login.html',
  	controller:'Login'
  })
  .when('/SchoolList',{
    templateUrl:'views/SchoolList.html',
    controller:'SchoolList'
  })
  .when('/SchoolInfo',{
    templateUrl:'views/SchoolInfo.html',
    controller:'SchoolInfo'
  })
   .when('/AddSchool',{
    templateUrl:'views/AddSchool.html',
    controller:'AddSchool'
  })

  .when('/Login',{
      templateUrl:'views/Login.html',
      controller:'Login'
   })
  .when('/GenSchoolSearch',{
    templateUrl:'views/GenSchoolSearch.html',
    controller:'GenSchoolSearch'
  })
  .when('/',{
    templateUrl:'views/SchoolSearch.html',
    controller:'SchoolSearch'
  })
   .when('/Logout',{
     templateUrl:'views/Login.html',
    controller: 'Logout'
   })
  .otherwise({redirectTo: '/'});
});


