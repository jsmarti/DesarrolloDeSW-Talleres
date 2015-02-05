(function () {
  
	var app = angular.module('userModule', ['ui.bootstrap']);
 
	app.controller('userController', ['$scope', function ($scope) {
			$scope.user = {};
			$scope.showForm = false;
                        $scope.showResult= false;
                        
			this.showForm = function () {
				$scope.showForm = true;
			};
			this.save = function () {
                                $scope.showResult=true;
				//alert("Guardado: " + $scope.user.firstName + " " + $scope.user.lastName);
			};
                        
                        this.formatD=function(){
                        return $scope.dt.getDate()+'/'+($scope.dt.getMonth()+1)+'/'+($scope.dt.getYear()+1900);  
                      }; 
                        
                       $scope.today = function() {
                       $scope.dt = new Date();
                       };
                       $scope.today();

                      $scope.clear = function () {
                        $scope.dt = null;
                      };

                      // Disable weekend selection
                      $scope.disabled = function(date, mode) {
                        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
                      };

                      $scope.toggleMin = function() {
                        $scope.minDate = $scope.minDate ? null : new Date();
                      };
                      $scope.toggleMin();

                      $scope.open = function($event) {
                        $event.preventDefault();
                        $event.stopPropagation();

                        $scope.opened = true;
                      };

                      $scope.dateOptions = {
                        formatYear: 'yyyy',
                        startingDay: 0
                      };

                      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
                      $scope.format = $scope.formats[0]; 
                        
                       
                        
		}]);   
 
                app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
			};
		}]);
            
                app.directive('userResult',[function(){
                        return{
                            restrict:"E",
                            templateUrl:"src/modules/user/resultTemplate.html"
                        };
                }]);
            
           
            
            
           
})();