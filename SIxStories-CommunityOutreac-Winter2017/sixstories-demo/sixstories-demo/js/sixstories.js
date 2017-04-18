var app = angular.module('sixstories', ['ngCookies', 'ngSanitize']);



app.controller('sixstoriesCTRL', ["$scope", "$http", "$cookies", "$timeout", "$sce", function($scope, $http, $cookies, $timeout, $sce){
	
	$scope.title = "Six Stories WordPress REST API Demo";
	$scope.greeting = "Fuck you!";
	$scope.cpt = " ";
	$scope.feedback = "";
	$scope.content = "";
	$scope.temp="";
	$scope.routes = ["ch1", "ch2", "ch3", "ch4", "ch5", "ch6"];
	$scope.titles = ["", "", "", "", "", ""];
	$scope.content = ["", "", "", "", "", ""];
	$scope.query = "";
	
	
	$scope.getStory = function(test){
		
		//$scope.postType = $scope.selection;
		console.log($scope.cpt);
		$scope.url = "http://dev-sixstories.pantheonsite.io/wp-json/rest-routes/v2/" + test + "/";
		$scope.query = test;
		
		$http.get($scope.url)
			.then(
			
				function(response){
					
					$scope.data = response.data;
					$scope.status = response.status;
					
					//console.log($scope.data);
					
					if($scope.status == "200"){
						
						$scope.message_completed = "Completed!";
						$scope.feedback = $scope.data;
						//$scope.content = $sce.trustAsHtml($scope.feedback[0]['content']['rendered']);
						
						
						//character 1
						if($scope.query == "ch1"){ 
							
							$scope.titles[0] = $scope.feedback[0]['post_title'];
							
							
							if($scope.feedback[0]['format'] == "video"){
								
								$scope.temp = $scope.feedback[0]['post_content']
								var test = $scope.temp;
								var result = test.split(" ");
								var result2 = result[3].split("\"");
								$scope.temp = result2[1];
						
								//$scope.temp = $scope.temp.replace('\"',' ');
						
								$scope.content[0] = $sce.trustAsHtml("<video loop autoplay controls width=\"600\" height=\"200\" src=\"" +$scope.temp+ "\" type=\"video/mp4\"></video>");
								
							}
							
							else if($scope.feedback[0]['format'] == "audio"){
								
								$scope.temp = $scope.feedback[0]['post_content']
								var test = $scope.temp;
								var result = test.split(" ");
								var result2 = result[1].split("\"");
								$scope.temp = result2[1];
								
								//console.log($scope.temp);
								
								$scope.content[0] = $sce.trustAsHtml("<audio muted loop autoplay controls width=\"600\" height=\"200\" src=\"" +$scope.temp+ "\" type=\"audio/mpeg\"></audio>");
								//<source src="horse.mp3" type="audio/mpeg">
								
							}
							
							else{
								
								
								$scope.content[0] = $scope.feedback[0]['post_content']
								
							}
							
						}
						
						
						//character 2
						if($scope.query == "ch2"){ 
							
							$scope.titles[1] = $scope.feedback[0]['post_title'];
							
							
							if($scope.feedback[0]['format'] == "video"){
								
								$scope.temp = $scope.feedback[0]['post_content']
								var test = $scope.temp;
								var result = test.split(" ");
								var result2 = result[3].split("\"");
								$scope.temp = result2[1];
						
								//$scope.temp = $scope.temp.replace('\"',' ');
						
								$scope.content[1] = $sce.trustAsHtml("<video loop autoplay controls width=\"600\" height=\"200\" src=\"" +$scope.temp+ "\" type=\"video/mp4\"></video>");
								
							}
							
							else if($scope.feedback[0]['format'] == "audio"){
								
								$scope.temp = $scope.feedback[0]['post_content']
								var test = $scope.temp;
								var result = test.split(" ");
								var result2 = result[1].split("\"");
								$scope.temp = result2[1];
								
								//console.log($scope.temp);
								
								$scope.content[1] = $sce.trustAsHtml("<audio muted loop autoplay controls width=\"600\" height=\"200\" src=\"" +$scope.temp+ "\" type=\"audio/mpeg\"></audio>");
								//<source src="horse.mp3" type="audio/mpeg">
								
							}
							
							else{
								
								
								$scope.content[1] = $scope.feedback[0]['post_content']
								
							}
							
						}
						
						//character 3
						if($scope.query == "ch3"){ 
							
							$scope.titles[2] = $scope.feedback[0]['post_title'];
							
							
							if($scope.feedback[0]['format'] == "video"){
								
								$scope.temp = $scope.feedback[0]['post_content']
								var test = $scope.temp;
								var result = test.split(" ");
								var result2 = result[3].split("\"");
								$scope.temp = result2[1];
						
								//$scope.temp = $scope.temp.replace('\"',' ');
						
								$scope.content[2] = $sce.trustAsHtml("<video loop autoplay controls width=\"600\" height=\"200\" src=\"" +$scope.temp+ "\" type=\"video/mp4\"></video>");
								
							}
							
							else if($scope.feedback[0]['format'] == "audio"){
								
								$scope.temp = $scope.feedback[0]['post_content']
								var test = $scope.temp;
								var result = test.split(" ");
								var result2 = result[1].split("\"");
								$scope.temp = result2[1];
								
								//console.log($scope.temp);
								
								$scope.content[2] = $sce.trustAsHtml("<audio muted loop autoplay controls width=\"600\" height=\"200\" src=\"" +$scope.temp+ "\" type=\"audio/mpeg\"></audio>");
								//<source src="horse.mp3" type="audio/mpeg">
								
							}
							
							else{
								
								
								$scope.content[2] = $scope.feedback[0]['post_content']
								
							}
							
						}
						
						
						//character 4
						if($scope.query == "ch4"){ 
							
							$scope.titles[3] = $scope.feedback[0]['post_title'];
							
							
							if($scope.feedback[0]['format'] == "video"){
								
								$scope.temp = $scope.feedback[0]['post_content']
								var test = $scope.temp;
								var result = test.split(" ");
								var result2 = result[3].split("\"");
								$scope.temp = result2[1];
						
								//$scope.temp = $scope.temp.replace('\"',' ');
						
								$scope.content[3] = $sce.trustAsHtml("<video loop autoplay controls width=\"600\" height=\"200\" src=\"" +$scope.temp+ "\" type=\"video/mp4\"></video>");
								
							}
							
							else if($scope.feedback[0]['format'] == "audio"){
								
								$scope.temp = $scope.feedback[0]['post_content']
								var test = $scope.temp;
								var result = test.split(" ");
								var result2 = result[1].split("\"");
								$scope.temp = result2[1];
								
								//console.log($scope.temp);
								
								$scope.content[3] = $sce.trustAsHtml("<audio muted loop autoplay controls width=\"600\" height=\"200\" src=\"" +$scope.temp+ "\" type=\"audio/mpeg\"></audio>");
								//<source src="horse.mp3" type="audio/mpeg">
								
							}
							
							else{
								
								
								$scope.content[3] = $scope.feedback[0]['post_content']
								
							}
							
						}
						
						
						//character 5
						if($scope.query == "ch5"){ 
							
							$scope.titles[4] = $scope.feedback[0]['post_title'];
							
							
							if($scope.feedback[0]['format'] == "video"){
								
								$scope.temp = $scope.feedback[0]['post_content']
								var test = $scope.temp;
								var result = test.split(" ");
								var result2 = result[3].split("\"");
								$scope.temp = result2[1];
						
								//$scope.temp = $scope.temp.replace('\"',' ');
						
								$scope.content[4] = $sce.trustAsHtml("<video loop autoplay controls width=\"600\" height=\"200\" src=\"" +$scope.temp+ "\" type=\"video/mp4\"></video>");
								
							}
							
							else if($scope.feedback[0]['format'] == "audio"){
								
								$scope.temp = $scope.feedback[0]['post_content']
								var test = $scope.temp;
								var result = test.split(" ");
								var result2 = result[1].split("\"");
								$scope.temp = result2[1];
								
								//console.log($scope.temp);
								
								$scope.content[4] = $sce.trustAsHtml("<audio muted loop autoplay controls width=\"600\" height=\"200\" src=\"" +$scope.temp+ "\" type=\"audio/mpeg\"></audio>");
								//<source src="horse.mp3" type="audio/mpeg">
								
							}
							
							else{
								
								
								$scope.content[4] = $scope.feedback[0]['post_content']
								
							}
							
						}
						
						//character 6
						if($scope.query == "ch6"){ 
							
							$scope.titles[5] = $scope.feedback[0]['post_title'];
							
							
							if($scope.feedback[0]['format'] == "video"){
								
								$scope.temp = $scope.feedback[0]['post_content']
								var test = $scope.temp;
								var result = test.split(" ");
								var result2 = result[3].split("\"");
								$scope.temp = result2[1];
						
								//$scope.temp = $scope.temp.replace('\"',' ');
						
								$scope.content[5] = $sce.trustAsHtml("<video loop autoplay controls width=\"600\" height=\"200\" src=\"" +$scope.temp+ "\" type=\"video/mp4\"></video>");
								
							}
							
							else if($scope.feedback[0]['format'] == "audio"){
								
								
								$scope.temp = $scope.feedback[0]['post_content']
								var test = $scope.temp;
								var result = test.split(" ");
								var result2 = result[1].split("\"");
								$scope.temp = result2[1];
								
								//console.log($scope.temp);
								
								$scope.content[5] = $sce.trustAsHtml("<audio muted loop autoplay controls width=\"600\" height=\"200\" src=\"" +$scope.temp+ "\" type=\"audio/mpeg\"></audio>");
								//<source src="horse.mp3" type="audio/mpeg">
								
								
							}
							
							else{
								
								
								$scope.content[5] = $scope.feedback[0]['post_content']
								
							}
							
						}
						
						
						
						
						
						
						console.log($scope.data);
						
						
						console.log($scope.content);
						//console.log(result);
						//console.log(result2);
						//console.log(result3);
						
						
					}
					
				},
				function(response){
					
					$scope.data = response.data || "error";
					$scope.status = response.status;
					
					if($scope.status != "200"){
						
						$scope.message_error = "Error! Please try again!";
						
					}
					
					console.log($scope.data);
					
				}
			
			
			);
		
		
		console.log("Request received!");
		
		
	};
	
	
}]);

