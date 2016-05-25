angular.module('app', [])
  .controller('AppController', function($http) {
  	var app = this;
  	app.user = null;


  	$http({
  		method: 'GET',
  		url: 'https://api.cfp.io/api/users/me'
	}).then(function successCallback(response) {
    	app.user = reponse;
    	console.log(app.user)
  	});


  });

 