(function () {

	var mainApp = angular.module('mainApp', ['ngRoute', 'sportModule', 'playerModule']);

	mainApp.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/sport', {
                            templateUrl: 'src/modules/sport/sport.tpl.html'
			}).when('/player',{
                            templateUrl: 'src/modules/player/player.tpl.html'
                        }).otherwise('/');
		}]);

	//Configuración módulo sport
	var sportModule = angular.module('sportModule', ['CrudModule', 'MockModule']);
        
        //Configuración de módulo player
        var playerModule = angular.module('playerModule',['CrudModule2','MockModule','sportModule']);

	sportModule.constant('sport.context', 'sports');

	sportModule.config(['sport.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);
            
        playerModule.constant('player.context', 'players');

	playerModule.config(['player.context', 'MockModule.urlsProvider', function (context, urlsProvider) {
			urlsProvider.registerUrl(context);
		}]);
})();