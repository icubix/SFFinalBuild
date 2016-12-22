var app = angular.module('sfApp.regFactory',['sfApp.myApp']);
app.factory('registerFactory',function($http,urls){
// GETSCHOOLS = FUNCTION(CALLBACKFN){
	//	$HTTP.GET('HTTP://LOCALHOST:3000').SUCCESS(FUNCTION(DATA)
	//	{
		//	CALLBACKFN(DATA);
		//});
//};
//var serviceurl = 'http://localhost:3000/'
return{

	 SaveRegister: function (data) {
	 	
	 	//alert(data);
            return $http({
                url: urls.apiUrl +'authRoute/register',
                method: "POST",
               // data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data,
               
            })
        },

        GetRoleDetails : function(){
        	var url = urls.apiUrl +'authRoute/getRoles';

            return $http.get(url);
        },
};


});