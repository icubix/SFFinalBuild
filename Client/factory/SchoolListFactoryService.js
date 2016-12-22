var app = angular.module('sfApp.slFactory',['sfApp.myApp']);

app.factory('schoollistFactory',function($http,urls){
// GETSCHOOLS = FUNCTION(CALLBACKFN){
	//	$HTTP.GET('HTTP://LOCALHOST:3000').SUCCESS(FUNCTION(DATA)
	//	{
		//	CALLBACKFN(DATA);
		//});
//};
 //var serviceurl = 'http://localhost:3000/'
return{

	SaveSchoolInfo: function (data) {
	 	
            return $http({
                url: urls.apiUrl + 'schoolRoute/UpdateSchool',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data:data,
            })
        },

        GetSchools : function(){
        
        	var url = urls.apiUrl +'schoolRoute/getSchools';

            return $http.get(url);
        },

        GetSchl: function(data){
        	
        	// return $http({

        	//   url : serviceurl +'schoolRoute/getSchool' 
         //         method: "POST",
         //       data:data,
         //    //return $http.get(url);
         //    })

         var url = urls.apiUrl +'schoolRoute/getSchools/' + data;

            return $http.get(url);
        },

};


});