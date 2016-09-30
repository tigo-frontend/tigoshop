angular.element(document).ready(function(){
    var initH = 1334;
    window.onresize =  function(){
        var h = document.documentElement.clientHeight;
        var w = document.documentElement.clientWidth;
        document.documentElement.style.fontSize=(100*1.25 * (h/initH)) +"%";
        document.body.style.height = h + "px";
    }
    var app  = angular.module("ngApp",["ui.router","ui.router.state.events","ngResource","memberComponent"]);
        [
            "margin",
            "padding",
            {name:"coordinate",fun:function($scope,$element,$attrs){
                let [val,x=0,y=0,xy=""] = [$attrs["coordinate"]];
                if(val == "center-x") {x = "50%";xy={left:"50%"} };
                if(val == "center-y") {y = "50%";xy={top:"50%"} };
                if(val == "center"){x="50%";y="50%";xy={left:"50%",top:"50%"} }
                $element.css(xy);
                $element.css({
                    webkitTransform: "translate3d(-"+x+",-"+y+",0)",
                    mozTransform: "translate3d(-"+x+",-"+y+",0)",
                    msTransform: "translate3d(-"+x+",-"+y+",0)",
                    transform: "translate3d(-"+x+",-"+y+",0)",
                })
            }}
        ].map( x => {
            let {name,fun} = x;
            if(!name) name = x;
            if(!fun){
                fun = function($scope,$element,$attrs){
                    console.log(name);
                    console.log($element);
                    $element[0].style.cssText =  name +":" +$attrs[name];
                    $element.removeAttr(name);
                }
            }
            app.directive(name,function(){
                return {
                    restrict:"A",
                    template:"",
                    controller:["$scope","$element","$attrs",fun]
                }

            })
        })
        // Restful 请求架构
        app.factory("$apiRest",["$resource",function($resource){
            let api = "http://api.admin.net/";
            let restful = function(url,params){
                if(!url) return false;
                return $resource(api+url,params,{
                    update:{
                        method:"PUT",
                        params:{}
                    }
                });
            }
            return restful;
        }])
        app.run(function($rootScope){
            $rootScope.$on("$stateChangeStart",function(){
                console.log("路由变化33323");
            })
        })
        app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

          $urlRouterProvider.otherwise("/member");
          $stateProvider
          .state({
              name:"member.login",
              url:"/login",
              component:"memberLogin"
          })
          .state({
              name:"member.regist",
              url:"/regist",
              component:"memberRegister"
          })
          //会员中心首页
          .state({
              name:"member",
              url:"/member",
              template:`
                <section ui-view>
                    <member-index></member-index>
                </section>
              `
          })
          //会员中心订单页
          .state("member.order",{
              url:"/order",
              component:'memberOrder'
          })
          //会员中心我的钱包
          .state({
              name:"member.wallet",
              url:'/wallet',
              component:'memberWallet'
          })
          //会员中心—我的优惠券
          .state({
              name:"member.coupon",
              url:'/coupon',
              component:'memberCoupon' ,
          })
          //会员中心-地址管理
          .state({
              name:"member.address",
              url:"/address",
              component:"addressList",
          })
          //会员中心-新增地址
          .state({
              name:"member.add-place",
              url:'/add-place',
              component:'addressAdd'
          })
          //会员中心-添加评价
          .state({
              name:'member.comment',
              url:'/comment',
              component:'memberComment',
          })
          //会员中心-我的积分
          .state({
              name:"member.score",
              url:"/score",
              component:'memberScore',
          })
          //会员中心- 我的留言
          .state({
              name:"member.message",
              url:"/message",
              component:"memberMessage"
          })
          //会员中心-退出登陆
          .state({
              name:"member.loginout",
              url:"/loginout",
              template:'99',
              controller:["$state",function($state){
                  $state.go("member.login");
              }]
          })
          .state({
              name:"member.forget",
              url:'/forget',
              component:'memberForget',
          })

      })
      angular.bootstrap(document,['ngApp']);
})
