var app = angular.module('sfApp.SchoolService',[]);
app.service('schoolfinder',function($http)
{
	this.getSchools = function()
	{
		$http.get('http://localhost:3000').success(function(data)
		{
			var testdata = "kali rocks";
			return testdata;
		})
		.error(function(data,status,headers,config)
		{
			return data;
		});
	}
})