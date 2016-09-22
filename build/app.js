webpackJsonp([1,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	module.exports = __webpack_require__(19);


/***/ },

/***/ 16:
/***/ function(module, exports) {

	angular.element(document).ready(function(){var initH=1334;window.onresize=function(){var h=document.documentElement.clientHeight;var w=document.documentElement.clientWidth;document.documentElement.style.fontSize=100*1.25*(h/initH)+"%";document.body.style.height=h+"px";};var app=angular.module("ngApp",["ui.router","ui.router.state.events","ngResource","memberComponent"]);app.run(function($rootScope){$rootScope.$on("$stateChangeStart",function(){console.log("路由变化33323");});});app.config(function($stateProvider,$urlRouterProvider,$locationProvider){$urlRouterProvider.otherwise("/member");$stateProvider//会员中心首页
	.state({name:"member",url:"/member",template:`
	                <section ui-view>
	                    <member-index></member-index>
	                </section>
	              `//component:'memberIndex'
	})//会员中心订单页
	.state("member.order",{url:"/order",component:'memberOrder'})//会员中心我的钱包
	.state({name:"member.wallet",url:'/wallet',component:'memberWallet'});});angular.bootstrap(document,['ngApp']);});

/***/ },

/***/ 17:
/***/ function(module, exports) {

	angular.module("memberComponent",["walletComponent","orderComponent"])//头部公共组件
	.component("headerTpl",{template:`
	        <div class="header"></div>
	        <header class="header container-fill">
	            <div class="pull-left"><span icon-arrow-left></span></div>
	            <div class="pull-right"><span icon-dot-more></span></div>
	            <h1>我的钱包</h1>
	        </header>
	    `}).component("memberIndex",{template:`
	    <div class="member-wrapper">
	        <top-tpl></top-tpl>
	        <div class="hi16"></div>
	        <box-menu></box-menu>
	        <div ng-repeat="menu in $ctrl.panels">
	            <panel menus="menu"></panel>
	            <div  class="hi16"></div>
	        </div>
	        <footer></footer>
	    </div>
	    `,controller:function($scope,$element,$attrs){this.panels=[[{"title":"我的钱包",icon:"icon-money",stxt:"查看我的钱包",href:"member.wallet"}],[{"title":"全部订单",icon:"icon-order",stxt:"查看订单",href:"member.order"},{"title":"我的优惠券",icon:"icon-quan"},{"title":"我的评价",icon:"icon-pinlun",stxt:"查看评价"},{"title":"我的收藏",icon:"icon-sc"}],[{"title":"地址管理",icon:"icon-dzgl"},{"title":"我的积分",icon:"icon-jifen"},{"title":"我的留言",icon:"icon-liuyan"},{"title":"售后服务",icon:"icon-shfw"}],[{"title":"注销登录",icon:"icon-loginout"}]];},bindings:{}}).component("topTpl",{template:`
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
		`}).component("boxMenu",{template:`
	        <div class="box-menu">
	        <ul class="flex-between list-none text-center">
	            <li><p class="color-red">￥200</p>余额</li>
	            <li><p class="color-red">5</p>优惠券</li>
	            <li><p class="color-red">13130</p>积分</li>
	        </ul>
	        </div>
	        <div class="padd"><hr class="line"/></div>
	    `}).component("panel",{template:`
	        <div class="list-panel">
	            <ul class="list-none">
	                <li class="{{v.icon}}" ng-repeat="v in $ctrl.menus" ><a style="display:block;" ui-sref="{{v['href']?v['href']:'#'}}" ui-sref-active="active">{{v.title}}  <div class="right-icon">{{v.stxt}}</div><hr class="line"/></a></li>
	            </ul>
	        </div>
	    `,bindings:{menus:"<"},controller:function($scope){}}).component('footer',{template:`
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
	    `});

/***/ },

/***/ 18:
/***/ function(module, exports) {

	angular.module("walletComponent",[]).component("memberWallet",{template:`
	        <div class="member-wrapper">
	        <header-tpl></header-tpl>
	        </div>
	    `});

/***/ },

/***/ 19:
/***/ function(module, exports) {

	angular.module("orderComponent",[]).component('memberOrder',{template:`
	        <div class="member-wrapper">
	            <header-tpl></header-tpl>
	            <order-tabs></order-tabs>
	            <order-panel></order-panel>
	        </div>
	    `}).component('orderTabs',{template:`
	        <div class="container-fill wallet-nav">
	        <ul class="list-none flex-between">
	            <li>全部</li>
	            <li>待付款</li>
	            <li>待发货</li>
	            <li>待收货</li>
	            <li>已完成</li>
	        </ul>
	        </div>
	    `}).component('orderPanel',{template:`
	        <div class="order-lists">
	            <h2>店铺：网站自营</h2>
	            <dl class="flex-between">
	                <dt><img src="../src/img/member/product.jpg" /></dt>
	                <dd class="center">小米旗舰店正品手机平板通用迷你充电宝 移动电源10000毫安大容量</dd>
	                <dd class="price">￥90元</dd>
	            </dl>
	            <div class="o-total text-right">支付888元</div>
	            <div class="o-btn text-right">
	                <button>取消订单</button>
	                <button>立即付款</button>
	            </div>
	        </div>
	    `});

/***/ }

});