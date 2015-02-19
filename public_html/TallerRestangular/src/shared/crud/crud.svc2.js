(function () {
	var crud2 = angular.module('CrudModule2');

	crud2.factory('CRUDUtils2', ['Restangular', function (RestAngular) {
			function CRUD($scope) {
				this.api = RestAngular.all(this.url);
                                $scope.currentPlayer={};
                                $scope.players=[];
                                this.editPlayers=false;
                                this.showOldest=false;
                                this.oldestP=null;
                                this.oldestAge=0;
                                //Jugadores
                                this.fetchPlayers = function () {
					var self = this;
					this.api.getList().then(function (data) {
						$scope.players = data;
						$scope.currentPlayer = {};
						self.editPlayers = false;
					});
				};
				this.createPlayer = function () {
					this.editPlayers = true;
					$scope.currentPlayer = {};
				};
				this.savePlayer = function () {
					var self = this;
                                        
					if ($scope.currentPlayer.id) {
						$scope.currentPlayer.put().then(function () {
							self.fetchPlayers();
						});
					} else {
						this.api.post($scope.currentPlayer).then(function () {
							self.fetchPlayers();
						});
					}
				};
				this.deletePlayer = function (player) {
					var self = this;
					player.remove().then(function () {
						self.fetchPlayers();
					});
				};
				this.editPlayer = function (player) {
					$scope.currentPlayer= RestAngular.copy(player);
					this.editPlayers = true;
				};
                                
                                this.oldestPlayer = function(){
                                    var oldest;
                                    var ageOld=0;
                                    var i;
                                    for(i=0;i<$scope.players.length;i++){
                                        if($scope.players[i].age>ageOld){
                                            oldest=$scope.players[i];
                                            ageOld = $scope.players[i].age;
                                        }
                                    }
                                    this.oldestAge=ageOld;
                                    this.oldestP=oldest;
                                    this.showOldest=true;
                                };
                                
                                this.toggle=function(){
                                    this.showOldest=false;
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