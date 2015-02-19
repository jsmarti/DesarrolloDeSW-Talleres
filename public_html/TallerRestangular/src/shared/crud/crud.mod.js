(function () {
	var crud = angular.module('CrudModule', ['restangular']);
        var crud2 = angular.module('CrudModule2',['restangular']);
        
        
	crud.config(['RestangularProvider', function (rp) {
			rp.setBaseUrl('webresources');
		}]);
            
            crud2.config(['RestangularProvider', function (rp) {
			rp.setBaseUrl('webresources');
		}]);
})();