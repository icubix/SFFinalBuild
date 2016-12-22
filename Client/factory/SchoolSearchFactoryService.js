var app = angular.module('sfApp.scSearchFactory',['sfApp.myApp']);
app.factory('schoolSearchFactory',function($http,urls){
// GETSCHOOLS = FUNCTION(CALLBACKFN){
	//	$HTTP.GET('HTTP://LOCALHOST:3000').SUCCESS(FUNCTION(DATA)
	//	{
		//	CALLBACKFN(DATA);
		//});
//};

return{

	 Searchresult: function (data) {
	 	//alert(data);
            return $http({
                url:  urls.apiUrl +'schoolRoute/searchSchools',
                method: "POST",
                //data: '=' + encodeURIComponent(JSON.stringify(data)),
                 data:data,
            })
        },

};


});