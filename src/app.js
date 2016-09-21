
angular.element(document).ready(function(){
    var initH = 1334;
    window.onresize =  function(){
        var h = document.documentElement.clientHeight;
        var w = document.documentElement.clientWidth;
        document.documentElement.style.fontSize=(100*1.25 * (h/initH)) +"%";
        document.body.style.height = h + "px";
    }
    var app  = angular.module("ngApp",["ui.router","ngResource","memberComponent"]);
        app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

          $urlRouterProvider.otherwise("/index");
          $stateProvider
          .state("index",{
              url:"/index",
              template:' '
          })

      })
      angular.bootstrap(document,['ngApp']);
})
