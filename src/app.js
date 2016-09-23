
angular.element(document).ready(function(){
    var initH = 1334;
    window.onresize =  function(){
        var h = document.documentElement.clientHeight;
        var w = document.documentElement.clientWidth;
        document.documentElement.style.fontSize=(100*1.25 * (h/initH)) +"%";
        document.body.style.height = h + "px";
    }
    var app  = angular.module("ngApp",["ui.router","ui.router.state.events","ngResource","memberComponent"]);
        app.run(function($rootScope){
            $rootScope.$on("$stateChangeStart",function(){
                console.log("路由变化33323");
            })
        })
        app.config(function($stateProvider, $urlRouterProvider, $locationProvider){

          $urlRouterProvider.otherwise("/member");
          $stateProvider
          //会员中心首页
          .state({
              name:"member",
              url:"/member",
              template:`
                <section ui-view>
                    <member-index></member-index>
                </section>
              `
              //component:'memberIndex'
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
          .state({
              name:'member.comment',
              url:'comment',
              component:'memberComment',
          })

      })
      angular.bootstrap(document,['ngApp']);
})
