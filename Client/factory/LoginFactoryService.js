
var app = angular.module('sfApp.logFactory',['sfApp.myApp']);
app.factory('loginFactory', function($http,urls){
return{
	 SaveLogin: function (data) {
            return $http({
                url: urls.apiUrl +'authRoute/validateLogin',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data
            })
        },

};


});