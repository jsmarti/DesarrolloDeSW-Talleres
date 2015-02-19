(function () {
	var crud = angular.module('CrudModule');

	crud.factory('CRUDUtils', ['Restangular', function (RestAngular) {
			function CRUD($scope) {
				this.api = RestAngular.all(this.url);
				$scope.currentRecord = {};
				$scope.records = [];
				this.editMode = false;
                                this.viewAvg=false;
                                this.average=0;
                                

				this.fetchRecords = function () {
					var self = this;
					this.api.getList().then(function (data) {
						$scope.records = data;
						$scope.currentRecord = {};
						self.editMode = false;
					});
                                        this.viewAvg=false;
				};
				this.createRecord = function () {
					this.editMode = true;
					$scope.currentRecord = {};
                                        this.viewAvg=false;
				};
				this.saveRecord = function () {
					var self = this;
					if ($scope.currentRecord.id) {
						$scope.currentRecord.put().then(function () {
							self.fetchRecords();
						});
					} else {
						this.api.post($scope.currentRecord).then(function () {
							self.fetchRecords();
						});
					}
                                        this.viewAvg=false;
				};
				this.deleteRecord = function (record) {
					var self = this;
					record.remove().then(function () {
						self.fetchRecords();
					});
                                        this.viewAvg=false;
				};
				this.editRecord = function (record) {
					$scope.currentRecord = RestAngular.copy(record);
					this.editMode = true;
                                        this.viewAvg=false;
				};
                                this.viewAverageAge= function(record){
                                    var min = record.minAge;
                                    var max = record.maxAge;
                                    $scope.currentRecord=record;
                                    this.average= (min+max)/2;
                                    this.editMode=false;
                                    this.viewAvg=true;
                                    
                                };
                                
                                this.toggle=function(){
                                    this.editMode=false;
                                    this.viewAvg=false;
                                };
                                
                                
                                
			}
			;
			return {
				extendCtrl: function (obj, scope) {
					CRUD.call(obj, scope);
				}
			};
		}]);
})();