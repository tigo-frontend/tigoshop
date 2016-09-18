require.config({
    paths:{
        'angular': '../lib/angular/angular',
        "agRoute": "../lib/angular/angular-ui-router.min",
        "agResource": "../lib/angular/angular-resource",
        "app":"app",
        "route":"route/route",
        "component":"component"
    },
    shim:{
        angular:{
            exports:"angular"
        },
        angularRoute:{
            deps:["angular"],
            exports:"angularRoute"
        }
    },
    deps:["angular"],
    urlArgs: "t=" + (new Date()).getTime()  //防止读取缓存，调试用
});
require(["angular","agRoute","app"],function(angular){
    //console.log("9999");
    angular.bootstrap(document,['ngApp']);
});
