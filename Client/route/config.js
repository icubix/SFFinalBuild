var app = angular.module('sfApp.myApp', []);

app.constant('api', 'http://localhost:3000/')
app.service('urls', function(api){ this.apiUrl = api;})

