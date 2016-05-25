angular.module('app', [])
  .controller('AppController', function($http) {
  	var app = this;
  	app.user = null;

  	$http({
      withCredentials: true,
  		method: 'GET',
  		url: 'https://api.cfp.io/api/users/me'
	  }).then(function successCallback(response) {
    	app.user = response.data;
    	console.log(app.user)
  	});


  });

 