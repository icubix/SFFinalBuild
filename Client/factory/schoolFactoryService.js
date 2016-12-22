var app = angular.module('sfApp.sfFactory',['sfApp.myApp']);
app.factory('schoolFactory',function($http,urls){
var getSchools = function(callbackFn){
		$http.get('http://localhost:3000').success(function(data)
		{
			callbackFn(data);
		});
};

return{
	getschools: getSchools
};


});