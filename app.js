//setup app
var myApp = angular.module('portal',[]);

//main service
myApp.service('mainService', function($scope) {
	
});

//main controller
myApp.controller('main', function($scope) {    

	/* CONFIG EXPLANATION
	   
	    name: 			(String) name of the page
	    destination : 	(String) url destination of the page
	    template : 		(boolean) whether is from html page or done via json  
	    type: (String) (one of..)

	    	template : html added in, is just a url (String)
	    	overview : an overview of pages that can each be the above types 
 	 		info : contains one or more pieces of information (image or header/ text)
 	 		form : a form with an add/edit/view modes
 	 		report : a graph or multiple graphs
 	 		
 	 	options: (Array of String)
 	 		paginated : content is split into multiple pages
 	 		add: has an add mode
 	 		edit: has an edit mode

	*/


    //config items are going to be listed in an object here
    $scope.config = {
    	navOptions: [
			{
				name:'Page 1', 
				dest: '',
				type: 'form'
			},
			{
				name:'Page 2', 
				dest: ''
			},
			{
				name:'Page 3', 
				dest: ''
			},
			{
				name:'Page 4', 
				dest: ''
			},
			{
				name:'Page 5', 
				dest: ''
			}
		]
    };
});
