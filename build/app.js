webpackJsonp([1,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	module.exports = __webpack_require__(21);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports) {

	"use strict";

	angular.element(document).ready(function () {
	    var initH = 1334;
	    window.onresize = function () {
	        var h = document.documentElement.clientHeight;
	        var w = document.documentElement.clientWidth;
	        document.documentElement.style.fontSize = 100 * 1.25 * (h / initH) + "%";
	        document.body.style.height = h + "px";
	    };
	    var app = angular.module("ngApp", ["ui.router", "ui.router.state.events", "ngResource", "memberComponent"]);
	    app.run(function ($rootScope) {
	        $rootScope.$on("$stateChangeStart", function () {
	            console.log("路由变化33323");
	        });
	    });
	    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	        $urlRouterProvider.otherwise("/member");
	        $stateProvider
	        //会员中心首页
	        .state({
	            name: "member",
	            url: "/member",
	            template: "\n                <section ui-view>\n                    <member-index></member-index>\n                </section>\n              "
	            //component:'memberIndex'
	        })
	        //会员中心订单页
	        .state("member.order", {
	            url: "/order",
	            component: 'memberOrder'
	        })
	        //会员中心我的钱包
	        .state({
	            name: "member.wallet",
	            url: '/wallet',
	            component: 'memberWallet'
	        })
	        //会员中心—我的优惠券
	        .state({
	            name: "member.coupon",
	            url: '/coupon',
	            component: 'memberCoupon'
	        }).state({
	            name: 'member.comment',
	            url: 'comment',
	            component: 'memberComment'
	        });
	    });
	    angular.bootstrap(document, ['ngApp']);
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	angular.module("memberComponent", ["walletComponent", "orderComponent", "couponComponent", "commentComponent"])
	//头部公共组件
	.component("headerTpl", {
	    template: "\n        <div class=\"header\"></div>\n        <header class=\"header container-fill\">\n            <div class=\"pull-left\"><span icon-arrow-left onclick=\"window.history.go(-1)\"></span></div>\n            <div class=\"pull-right\"><span icon-dot-more></span></div>\n            <h1>{{$ctrl.title}}</h1>\n        </header>\n    ",
	    bindings: {
	        title: '@' //< 属性变量绑定  &属性绑定函数  @绑定字符串
	    }
	})
	//经典tab选项   基于component 组件化开发
	.component("tabsTpl", {
	    transclude: true,
	    template: "\n    <div class=\"container-fill order-nav\">\n    <ul class=\"list-none flex-between\">\n        <li ng-repeat=\"v in $ctrl.list\" ng-class=\"v.active\" ng-click=\"$ctrl.choose($index)\" >{{v.title}}</li>\n    </ul>\n    </div>\n\n    <div class=\"tabsContentsBox\"></div>\n    ",
	    bindings: {
	        list: "<",
	        component: "@"
	    },
	    controller: function controller($scope, $compile, $element) {
	        var _this = this;

	        $element[0].querySelector(".tabsContentsBox").innerHTML = "\n            <" + this.component + " on-choose='gobj'></" + this.component + ">\n        ";
	        $compile(angular.element($element[0].querySelector(".tabsContentsBox")).contents())($scope);

	        this.choose = function (k) {
	            $scope.gobj = _this.list[k];
	            for (var kk in _this.list) {
	                _this.list[kk]["active"] = "";
	            }
	            _this.list[k]["active"] = "active";
	        };
	    }
	}).component("memberIndex", {
	    template: "\n    <div class=\"member-wrapper\">\n        <top-tpl></top-tpl>\n        <div class=\"hi16\"></div>\n        <box-menu></box-menu>\n        <div ng-repeat=\"menu in $ctrl.panels\">\n            <panel menus=\"menu\"></panel>\n            <div  class=\"hi16\"></div>\n        </div>\n        <footer></footer>\n    </div>\n    ",
	    controller: function controller($scope, $element, $attrs) {
	        this.panels = [[{ "title": "我的钱包", icon: "icon-money", stxt: "查看我的钱包", href: "member.wallet" }], [{ "title": "全部订单", icon: "icon-order", stxt: "查看订单", href: "member.order" }, { "title": "我的优惠券", icon: "icon-quan", href: "member.coupon" }, { "title": "我的评价", icon: "icon-pinlun", stxt: "查看评价", href: "member.comment" }, { "title": "我的收藏", icon: "icon-sc" }], [{ "title": "地址管理", icon: "icon-dzgl" }, { "title": "我的积分", icon: "icon-jifen" }, { "title": "我的留言", icon: "icon-liuyan" }, { "title": "售后服务", icon: "icon-shfw" }], [{ "title": "注销登录", icon: "icon-loginout" }]];
	    },
	    bindings: {}
	}).component("topTpl", {
	    template: "\n\t\t<div class=\"top-bg\">\n\t\t\t<div class=\"top-nav flex-between\">\n                <div style=\"position:relative;width:20%;\">\n                    <img class=\"touxiang\" src=\"./src/img/member/tx01.jpg\" />\n                </div>\n\t\t\t\t<div>我的订单</div>\n\t\t\t\t<div>我的收藏</div>\n\t\t\t\t<div>我的评价</div>\n\t\t\t</div>\n\t\t</div>\n\t"
	}).component("boxMenu", {
	    template: "\n        <div class=\"box-menu\">\n        <ul class=\"flex-between list-none text-center\">\n            <li><p class=\"color-red\">￥200</p>余额</li>\n            <li><p class=\"color-red\">5</p>优惠券</li>\n            <li><p class=\"color-red\">13130</p>积分</li>\n        </ul>\n        </div>\n        <div class=\"padd\"><hr class=\"line\"/></div>\n    "
	}).component("panel", {
	    template: "\n        <div class=\"list-panel\">\n            <ul class=\"list-none\">\n                <li class=\"{{v.icon}}\" ng-repeat=\"v in $ctrl.menus\" ><a style=\"display:block;\" ui-sref=\"{{v['href']?v['href']:'#'}}\" ui-sref-active=\"active\">{{v.title}}  <div class=\"right-icon\">{{v.stxt}}</div><hr class=\"line\"/></a></li>\n            </ul>\n        </div>\n    ",
	    bindings: {
	        menus: "<"
	    },
	    controller: function controller($scope) {}
	}).component('footer', {
	    template: "\n        <div class=\"footer\">\n            <ul class=\"foot-nav\">\n                <li><a href=\"javascript:;\">liubin</a></li>\n                <li><a href=\"javascript:;\">退出</a></li>\n                <li><a href=\"javascript:;\">反馈</a></li>\n                <li><a href=\"javascript:;\">回到顶部</a></li>\n            </ul>\n            <h6>粤ICP备829382934号</h6>\n            <h6>&copy;2005-2016 tigoshop单商户V1 版权所有，并保留所有权利。</h6>\n        </div>\n    "
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	angular.module("walletComponent", []).component("memberWallet", {
	    template: "\n        <div class=\"member-wrapper\">\n        <header-tpl title=\"资金管理\"></header-tpl>\n        <div style=\"padding:2rem 0;border-bottom:solid 1px #ccc\" class=\"text-center\">账户余额￥888.00元</div>\n        <wallet-detail></wallet-detail>\n        </div>\n    "
	}).component("walletDetail", {
	    template: "\n        <div style=\"background:#fff;\">\n        <div class=\"wal-detail-box\">\n            <ul class=\"wal-tree list-none\">\n                <li>\n                    <p>增加 190</p>\n                    <p>2016-2-2</p>\n                    <p>下单消费</p>\n                    <span class=\"wal-tree-dot\"></span>\n                </li>\n                <li>\n                    <p>增加 190</p>\n                    <p>2016-2-2</p>\n                    <p>下单消费</p>\n                    <span class=\"wal-tree-dot\"></span>\n                </li>\n                <li>\n                    <p>增加 190</p>\n                    <p>2016-2-2</p>\n                    <p>下单消费</p>\n                    <span class=\"wal-tree-dot\"></span>\n                </li>\n                <li>\n                    <p>增加 190</p>\n                    <p>2016-2-2</p>\n                    <p>下单消费</p>\n                    <span class=\"wal-tree-dot\"></span>\n                </li>\n            </ul>\n        </div>\n        </div>\n    "
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	angular.module("orderComponent", []).component('memberOrder', {
	    template: "\n        <div class=\"member-wrapper\">\n            <div>{{$ctrl.title}}</div>\n            <header-tpl title=\"我的订单\"></header-tpl>\n            <tabs-tpl list=\"$ctrl.list\" component='order-panel'>\n            </tabs-tpl>\n        </div>\n\n    ",
	    controller: function controller() {
	        this.list = [{ title: "全部", id: 0 }, { title: "待付款", id: 1 }, { title: "待发货", id: 2 }, { title: "待收货", id: 3 }, { title: "已完成", id: 4 }];
	    }
	}).component('orderPanel', {
	    transclude: true,
	    // require:{
	    //     tabsCtrl:"^tabsTpl"
	    // },
	    bindings: {
	        onChoose: "<" //可被$onChanges监听数据的变化
	    },
	    template: "\n        <div class=\"order-lists\">\n            <h2>店铺：网站自营</h2>\n            <dl class=\"flex-between\">\n                <dt><img src=\"../src/img/member/product.jpg\" /></dt>\n                <dd class=\"center\">小米旗舰店正品手机平板通用迷你充电宝 移动电源10000毫安大容量</dd>\n                <dd class=\"price\">￥90元<br />2件</dd>\n            </dl>\n            <dl class=\"flex-between\">\n                <dt><img src=\"../src/img/member/product.jpg\" /></dt>\n                <dd class=\"center\">小米旗舰店正品手机平板通用迷你充电宝 移动电源10000毫安大容量</dd>\n                <dd class=\"price\">￥90元<br />2件</dd>\n            </dl>\n            <div class=\"o-total text-right\">支付888元</div>\n            <div class=\"o-btn text-right\">\n                <button>取消订单</button>\n                <button>立即付款</button>\n            </div>\n        </div>\n    ",
	    controller: function controller() {
	        this.$onChanges = function (_ref) {
	            var onChoose = _ref.onChoose;

	            console.log(this.onChoose);
	        };
	    }
	});
	// .component('orderTabs',{
	//     transclude:true,        //将组件里被覆盖的部分转换到组件的ng-transclude盒子里
	//     template:`
	//         <div class="container-fill order-nav">
	//         <ul class="list-none flex-between">
	//             <li ng-click="$ctrl.select(0)">全部</li>
	//             <li ng-click="$ctrl.select(1)">待付款</li>
	//             <li ng-click="$ctrl.select(2)">待发货</li>
	//             <li ng-click="$ctrl.select(3)">待收货</li>
	//             <li ng-click="$ctrl.select(4)">已完成</li>
	//         </ul>
	//         </div>
	//         <order-panel list-data="lists">{{listContent}}</order-panel>
	//     `,
	//     controller:function($scope){
	//         $scope.lists = 0;
	//         this.select = (x=0) => {
	//             $scope.lists = x;
	//         };
	//     }
	// })

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	angular.module("couponComponent", []).component("memberCoupon", {
	    template: "\n    <div class=\"member-wrapper\">\n        <div>{{$ctrl.title}}</div>\n        <header-tpl title=\"我的优惠券\"></header-tpl>\n        <tabs-tpl list=\"$ctrl.list\" component=\"coupon-tabcontent\"></tabs-tpl>\n    </div>\n    ",
	    controller: function controller() {
	        this.list = [{ title: "未使用" }, { title: "已使用" }, { title: "已过期" }];
	    }
	}).component("couponTabcontent", {
	    template: "\n    999\n    ",
	    bindings: {
	        onChoose: '<'
	    },
	    controller: function controller() {}
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	angular.module("commentComponent", []).component("memberComment", {
	    template: "\n    <div class=\"member-wrapper\">\n        <div>{{$ctrl.title}}</div>\n        <header-tpl title=\"我的评价\"></header-tpl>\n    </div>\n    "
	});

/***/ }
]);