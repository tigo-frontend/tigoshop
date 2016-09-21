webpackJsonp([1,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(12);
	module.exports = __webpack_require__(13);


/***/ },

/***/ 12:
/***/ function(module, exports) {

	
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


/***/ },

/***/ 13:
/***/ function(module, exports) {

	
	angular.module("memberComponent",[])
	.component("wrapper",{
	    template:`
	    <div class="wrapper">
	        <top-tpl></top-tpl>
	        <div class="hi16"></div>
	        <box-menu></box-menu>
	        <div ng-repeat="menu in $ctrl.panels">
	            <panel menus="menu"></panel>
	            <div  class="hi16"></div>
	        </div>
	        <footer></footer>
	        <section ui-view></section>
	    </div>
	    `,
	    controller:function($scope, $element, $attrs){
	        this.panels = [
	            [{"title":"我的钱包",icon:"icon-money",stxt:"查看我的钱包"}],
	            [
	                {"title":"全部订单",icon:"icon-order",stxt:"查看订单"},
	                {"title":"我的优惠券",icon:"icon-quan"},
	                {"title":"我的评价",icon:"icon-pinlun",stxt:"查看评价"},
	                {"title":"我的收藏",icon:"icon-sc"},
	            ],
	            [
	                {"title":"地址管理",icon:"icon-dzgl"},
	                {"title":"我的积分",icon:"icon-jifen"},
	                {"title":"我的留言",icon:"icon-liuyan"},
	                {"title":"售后服务",icon:"icon-shfw"}
	            ],
	            [
	                {"title":"注销登录",icon:"icon-loginout"}
	            ]
	        ]
	    },
	    bindings:{
	    }
	})
	.component("topTpl",{
	    template:`
			<div class="top-bg">
				<div class="top-nav flex-between">
	                <div style="position:relative;width:20%;">
	                    <img class="touxiang" src="./src/img/member/tx01.jpg" />
	                </div>
					<div>我的订单</div>
					<div>我的收藏</div>
					<div>我的评价</div>
				</div>
			</div>
		`
	})
	.component("boxMenu",{
	    template:`
	        <div class="box-menu">
	        <ul class="flex-between list-none text-center">
	            <li><p class="color-red">￥200</p>余额</li>
	            <li><p class="color-red">5</p>优惠券</li>
	            <li><p class="color-red">13130</p>积分</li>
	        </ul>
	        </div>
	        <div class="padd"><hr class="line"/></div>
	    `

	})
	.component("panel",{
	    template:`
	        <div class="list-panel">
	            <ul class="list-none">
	                <li class="{{v.icon}}" ng-repeat="v in $ctrl.menus">{{v.title}}  <div class="right-icon">{{v.stxt}}</div><hr class="line"/></li>
	            </ul>
	        </div>
	    `,
	    bindings:{
	        menus:"<"
	    },
	    controller:function(){
	        console.log(this);
	    }
	})
	.component('footer',{
	    template:`
	        <div class="footer">
	            <ul class="foot-nav">
	                <li><a href="javascript:;">liubin</a></li>
	                <li><a href="javascript:;">退出</a></li>
	                <li><a href="javascript:;">反馈</a></li>
	                <li><a href="javascript:;">回到顶部</a></li>
	            </ul>
	            <h6>粤ICP备829382934号</h6>
	            <h6>&copy;2005-2016 tigoshop单商户V1 版权所有，并保留所有权利。</h6>
	        </div>
	    `
	})


/***/ }

});