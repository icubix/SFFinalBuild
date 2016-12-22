var app = angular.module('sfApp.addSlFactory',['sfApp.myApp']);

app.factory('addSchoolFactory',function($http,urls){
// GETSCHOOLS = FUNCTION(CALLBACKFN){
	//	$HTTP.GET('HTTP://LOCALHOST:3000').SUCCESS(FUNCTION(DATA)
	//	{
		//	CALLBACKFN(DATA);
		//});
//};
// var serviceurl = 'http://localhost:3000/'
return{

	SaveAddSchool: function (data) {
	 
	 	//alert(data);
            return $http({
                url: urls.apiUrl + 'schoolRoute/AddSchool',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data:data,
            })
        },

};


});