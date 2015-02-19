/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
	var app = angular.module('playerModule');

	app.controller('playerCtrl', ['$scope', 'CRUDUtils2', 'player.context', function ($scope, CRUDUtils2, context) {
			this.url = context;
			CRUDUtils2.extendCtrl(this, $scope);
			this.fetchPlayers();
                        
		}]);
})();

