webpackJsonp([0,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	
	angular.element(document).ready(function(){
	    var app  = angular.module("ngApp",["ui.router","ngResource","mallComponent"]);
	        app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	          $urlRouterProvider.otherwise("/index");
	          $stateProvider
	          .state("index",{
	              url:"/index",
	              template:'9999'
	          })

	      })
	      angular.bootstrap(document,['ngApp']);
	})


/***/ }
]);