webpackJsonp([1,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	module.exports = __webpack_require__(24);


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
	    ["margin", "padding", { name: "coordinate", fun: function fun($scope, $element, $attrs) {
	            var _ref = [$attrs["coordinate"]];
	            var val = _ref[0];
	            var _ref$ = _ref[1];
	            var x = _ref$ === undefined ? 0 : _ref$;
	            var _ref$2 = _ref[2];
	            var y = _ref$2 === undefined ? 0 : _ref$2;
	            var _ref$3 = _ref[3];
	            var xy = _ref$3 === undefined ? "" : _ref$3;

	            if (val == "center-x") {
	                x = "50%";xy = { left: "50%" };
	            };
	            if (val == "center-y") {
	                y = "50%";xy = { top: "50%" };
	            };
	            if (val == "center") {
	                x = "50%";y = "50%";xy = { left: "50%", top: "50%" };
	            }
	            $element.css(xy);
	            $element.css({
	                webkitTransform: "translate3d(-" + x + ",-" + y + ",0)",
	                mozTransform: "translate3d(-" + x + ",-" + y + ",0)",
	                msTransform: "translate3d(-" + x + ",-" + y + ",0)",
	                transform: "translate3d(-" + x + ",-" + y + ",0)"
	            });
	        } }].map(function (x) {
	        var name = x.name;
	        var fun = x.fun;

	        if (!name) name = x;
	        if (!fun) {
	            fun = function fun($scope, $element, $attrs) {
	                console.log(name);
	                console.log($element);
	                $element[0].style.cssText = name + ":" + $attrs[name];
	                $element.removeAttr(name);
	            };
	        }
	        app.directive(name, function () {
	            return {
	                restrict: "A",
	                template: "",
	                controller: ["$scope", "$element", "$attrs", fun]
	            };
	        });
	    });
	    // Restful 请求架构
	    app.factory("$apiRest", ["$resource", function ($resource) {
	        var api = "http://api.admin.net/";
	        var restful = function restful(url, params) {
	            if (!url) return false;
	            return $resource(api + url, params, {
	                update: {
	                    method: "PUT",
	                    params: {}
	                }
	            });
	        };
	        return restful;
	    }]);
	    app.run(function ($rootScope) {
	        $rootScope.$on("$stateChangeStart", function () {
	            console.log("路由变化33323");
	        });
	    });
	    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	        $urlRouterProvider.otherwise("/member");
	        $stateProvider.state({
	            name: "member.login",
	            url: "/login",
	            component: "memberLogin"
	        }).state({
	            name: "member.regist",
	            url: "/regist",
	            component: "memberRegister"
	        })
	        //会员中心首页
	        .state({
	            name: "member",
	            url: "/member",
	            template: "\n                <section ui-view>\n                    <member-index></member-index>\n                </section>\n              "
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
	        })
	        //会员中心-地址管理
	        .state({
	            name: "member.address",
	            url: "/address",
	            component: "addressList"
	        })
	        //会员中心-新增地址
	        .state({
	            name: "member.add-place",
	            url: '/add-place',
	            component: 'addressAdd'
	        })
	        //会员中心-添加评价
	        .state({
	            name: 'member.comment',
	            url: '/comment',
	            component: 'memberComment'
	        })
	        //会员中心-我的积分
	        .state({
	            name: "member.score",
	            url: "/score",
	            component: 'memberScore'
	        })
	        //会员中心- 我的留言
	        .state({
	            name: "member.message",
	            url: "/message",
	            component: "memberMessage"
	        })
	        //会员中心-退出登陆
	        .state({
	            name: "member.loginout",
	            url: "/loginout",
	            template: '99',
	            controller: ["$state", function ($state) {
	                $state.go("member.login");
	            }]
	        }).state({
	            name: "member.forget",
	            url: '/forget',
	            component: 'memberForget'
	        });
	    });
	    angular.bootstrap(document, ['ngApp']);
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	angular.module("memberComponent", ["walletComponent", "orderComponent", "couponComponent", "commentComponent", "loginComponent", "addressComponent", "scoreComponent"])
	//svg组件化图标
	.component("spanIcon", {
	    bindings: {
	        class: "@",
	        icon: "@",
	        style: "@"
	    },
	    template: "\n        <svg style=\"{{$ctrl.style}};display:flex;display:table;\" class=\"{{$ctrl.class}}\" ><use xlink:href=\"{{$ctrl.iconName}}\" /></svg>\n    ",
	    controller: function controller() {
	        this.iconName = "#icon-" + this.icon;
	    }
	})
	//头部公共组件
	.component("headerTpl", {
	    template: "\n        <div class=\"header\"></div>\n        <header class=\"header container-fill\">\n            <div class=\"pull-left\" onclick=\"window.history.go(-1)\"><span-icon style=\"width:2.8rem;height:2.8rem;color:#333;\" icon=\"arrow-left\"></span-icon></div>\n            <div class=\"pull-right\"><span-icon style=\"width:2.8rem;height:2.8rem;color:#333;\" icon=\"dot-more\" ng-click=\"$ctrl.showNav()\"></span-icon>\n                <ul class=\"slide-nav list-none\" ng-show=\"$ctrl.isNavshow\">\n                    <li onclick=\"location.href='/'\"><span icon-home></span>首页</li>\n                    <li onclick=\"location.href='/'\"><span icon-home></span>分类</li>\n                    <li onclick=\"location.href='/'\"><span icon-home></span>购物车</li>\n                    <li onclick=\"location.href='/'\"><span icon-home></span>我的</li>\n                </ul>\n            </div>\n            <h1>{{$ctrl.title}}</h1>\n\n        </header>\n    ",
	    bindings: {
	        title: '@' //< 属性变量绑定  &属性绑定函数  @绑定字符串
	    },
	    controller: function controller() {
	        this.isNavshow = false;
	        this.showNav = function () {
	            this.isNavshow = !this.isNavshow;
	        };
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
	})
	//会员中心 --首页
	.component("memberIndex", {
	    template: "\n    <div class=\"member-wrapper\" style=\"background-color:#f2f2f2;\">\n        <top-tpl></top-tpl>\n        <div class=\"hi16\"></div>\n        <box-menu></box-menu>\n        <div ng-repeat=\"menu in $ctrl.panels\">\n            <panel menus=\"menu\"></panel>\n            <div  class=\"hi16\"></div>\n        </div>\n        <footer></footer>\n    </div>\n    ",
	    controller: ["$apiRest", function ($apiRest) {
	        this.panels = [[{ "title": "我的钱包", icon: "icon-money", stxt: "查看我的钱包", href: "member.wallet" }], [{ "title": "全部订单", icon: "icon-order", stxt: "查看订单", href: "member.order" }, { "title": "我的优惠券", icon: "icon-quan", href: "member.coupon" }, { "title": "我的评价", icon: "icon-pinlun", stxt: "查看评价", href: "member.comment" }, { "title": "我的收藏", icon: "icon-sc", href: "member.regist" }], [{ "title": "地址管理", icon: "icon-dzgl", href: "member.address" }, { "title": "我的积分", icon: "icon-jifen", href: "member.score" }, { "title": "我的留言", icon: "icon-liuyan" }, { "title": "售后服务", icon: "icon-shfw" }], [{ "title": "注销登录", icon: "icon-loginout", href: "member.loginout" }]];
	    }],
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

	angular.module("loginComponent", []).component("memberLogin", {
	    template: "\n    <div class=\"member-wrapper\">\n        <div class=\"header\"></div>\n        <header class=\"header container-fill\">\n            <div class=\"pull-left\" onclick=\"window.history.go(-1)\">\n                <span-icon style=\"width:2.8rem;height:2.8rem;color:#333;\" icon=\"arrow-left\"></span-icon>\n            </div>\n            <h1>会员登陆</h1>\n        </header>\n        <login-form></login-form>\n    </div>\n    "
	}).component("loginForm", {
	    template: "\n        <form class=\"login-form\" novalidate><div>\n            <div class=\"form-group flex-between\">\n                <div class=\"caption\">用户名：</div>\n                <div class=\"form-input\"><input type=\"text\" ng-model=\"$ctrl.data.username\" value=\"\" /></div>\n            </div>\n            <div class=\"form-group flex-between\">\n                <div class=\"caption\">密码：</div>\n                <div class=\"form-input\"><input type=\"password\" ng-model=\"$ctrl.data.password\" value=\"\" /></div>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn-submit block\" type=\"button\" ng-click=\"$ctrl.submit()\">确认登陆</button>\n            </div>\n\n            <div class=\"form-group text-right qita\">\n                <div class=\"pull-left\"><input type=\"checkbox\" value=\"0\" >自动登陆</div>\n                <a ui-sref=\"member.regist\">免费注册</a> | <a ui-sref=\"member.forget\">忘记密码？</a>\n            </div>\n        </div></form>\n    ",
	    controller: ["$apiRest", "$state", function ($apiRest, $state) {
	        this.submit = function () {
	            $apiRest("/member/login").save(this.data, function (msg) {
	                if (msg.status) $state.go("member");
	            });
	        };
	    }]
	}).component("memberRegister", {
	    template: "\n    <div class=\"member-wrapper\">\n        <div class=\"header\"></div>\n        <header class=\"header container-fill\">\n            <div class=\"pull-left\" onclick=\"window.history.go(-1)\">\n                <span-icon style=\"width:2.8rem;height:2.8rem;color:#333;\" icon=\"arrow-left\"></span-icon>\n            </div>\n            <h1>会员注册</h1>\n        </header>\n        <regist-form></regist-form>\n    </div>\n    "
	}).component("registForm", {
	    template: "\n    <form class=\"regist-form\">\n        <div class=\"form-group flex-between\">\n            <div class=\"caption\">\n                手机账号\n            </div>\n            <div class=\"form-input\">\n                <input class=\"none\" placeholder=\"11位手机号\" />\n            </div>\n        </div>\n        <div class=\"form-group flex-between\">\n            <div class=\"caption\">\n                密码\n            </div>\n            <div class=\"form-input\">\n                <input type=\"password\" class=\"none\" placeholder=\"请输入密码\" />\n            </div>\n        </div>\n        <div class=\"form-group flex-between\">\n            <div class=\"caption\">\n                确认密码\n            </div>\n            <div class=\"form-input\">\n                <input type=\"password\" class=\"none\" placeholder=\"请再次输入密码\" />\n            </div>\n        </div>\n        <div class=\"form-group flex-between\">\n            <div  class=\"form-input\">\n                <input class=\"none\" placeholder=\"验证码\" />\n            </div>\n            <button style=\"width:40%;\">验证码</button>\n        </div>\n        <div>\n            <button class=\"btn-submit block\" ng-click=\"$ctrl.submit()\" type=\"button\">注册</button>\n        </div>\n    </form>\n    ",
	    controller: ["$state", function ($state) {
	        this.submit = function () {
	            $state.go("member");
	        };
	    }]
	}).component("memberForget", {
	    template: "\n    <div class=\"member-wrapper\">\n        <div class=\"header\"></div>\n        <header class=\"header container-fill\">\n            <div class=\"pull-left\" onclick=\"window.history.go(-1)\"><span-icon style=\"width:2.8rem;height:2.8rem;color:#333;\" icon=\"arrow-left\"></span-icon></div>\n            <h1>忘记密码</h1>\n        </header>\n        <forget-form></forget-form>\n    </div>\n    "
	}).component("forgetForm", {
	    template: "\n    <form class=\"forget-form\">\n        <div class=\"form-group\">\n            <input class=\"block-input\" placeholder=\"手机号/账号\" />\n        </div>\n        <div class=\"form-group\">\n\n        </div>\n        <div class=\"form-group\">\n            下一步\n        </div>\n    </form>\n    "
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	angular.module("addressComponent", []).component("memberAddress", {
	    transclude: true,
	    template: "\n    <div class=\"member-wrapper\">\n        <header-tpl title=\"地址管理\"></header-tpl>\n        <div class=\"address-wrap\">\n        <ng-transclude></ng-transclude>\n        </div>\n    </div>\n    "
	}).component("addressList", {
	    template: "\n    <member-address>\n        <dl class=\"address-list\" >\n            <dt>刘先生<span>电话:13986765412</span></dt>\n            <dd margin=\"0 0 0 0\" padding=\"1rem 0 0\">内蒙古自治区，乌海市，乌海市辖区，海兴大厦</dd>\n            <div class=\"edit\" coordinate=\"center-y\" style=\"right:1rem;\">\n            <span-icon icon=\"edit\" style=\"width:3rem;height:3rem;color:#666\"></span-icon>\n            </div>\n        </dl>\n        <a ui-sref=\"member.add-place\" class=\"btn-submit block\">添加新地址</a>\n    </member-address>\n    "
	}).component("addressAdd", {
	    template: "\n    <member-address>\n        <form class=\"add-address-form\">\n            <div class=\"form-group flex-between\">\n                <div class=\"caption\">\n                    收货人\n                </div>\n                <div class=\"form-input\">\n                    <input type=\"text\" class=\"none\" />\n                </div>\n            </div>\n            <div class=\"form-group flex-between\">\n                <div class=\"caption\">\n                    地区\n                </div>\n                <div class=\"form-input\">\n                    <input type=\"text\" class=\"none\" />\n                </div>\n            </div>\n            <div class=\"form-group flex-between\">\n                <div class=\"caption\">\n                    详细地址\n                </div>\n                <div class=\"form-input\">\n                    <input type=\"text\" class=\"none\" />\n                </div>\n            </div>\n            <div class=\"form-group flex-between\">\n                <div class=\"caption\">\n                    手机号\n                </div>\n                <div class=\"form-input\">\n                    <input type=\"text\" class=\"none\" />\n                </div>\n            </div>\n            <div class=\"form-group flex-between\">\n                <div class=\"caption\">\n                    邮政编码\n                </div>\n                <div class=\"form-input\">\n                    <input type=\"text\" class=\"none\" />\n                </div>\n            </div>\n            <div>\n                <button class=\"btn-submit block\">保存</button>\n            </div>\n        </form>\n    </amember-address>\n    "
	});

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	angular.module("scoreComponent", []).component("memberScore", {
	    template: "\n        <div class=\"member-wrapper\">\n            <header-tpl title=\"我的积分\"></header-tpl>\n            <div class=\"text-center\" style=\"margin:.8rem 0;border-bottom:1px solid #ccc\">\n                    <p style=\"color:#ff0000;margin:1rem 0 0 0;\">0</p>\n                    <p margin=\".6rem 0 1rem 0\">可用积分</p>\n            </div>\n            <ul class=\"list-none score-list\" style=\"padding:1rem\">\n                <li class=\"flex-between\">\n                    <div class=\"\">余额：888元<br />\n                        积分：888分\n                    </div>\n                    <div class=\"text-right\">\n                        下单消费<br />\n                        2016-07-15\n                    </div>\n                </li>\n                <li class=\"flex-between\" >\n                    <div class=\"\">余额：888元<br />\n                        积分：888分\n                    </div>\n                    <div class=\"text-right\">\n                        下单消费<br />\n                        2016-07-15\n                    </div>\n                </li>\n                <li class=\"flex-between\" >\n                    <div class=\"\">余额：888元<br />\n                        积分：888分\n                    </div>\n                    <div class=\"text-right\">\n                        下单消费<br />\n                        2016-07-15\n                    </div>\n                </li>\n                <li class=\"flex-between\" >\n                    <div class=\"\">余额：888元<br />\n                        积分：888分\n                    </div>\n                    <div class=\"text-right\">\n                        下单消费<br />\n                        2016-07-15\n                    </div>\n                </li>\n            </ul>\n        </div>\n    ".trim()
	})
	//我的留言板
	.component("memberMessage", {
	    template: "\n    <div class=\"member-wrapper\">\n        <header-tpl title=\"我的留言\"></header-tpl>\n        <div>\n            您现在还没有留言\n        </div>\n    </div>\n    "
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	angular.module("walletComponent", []).component("memberWallet", {
	    template: "\n        <div class=\"member-wrapper\">\n        <header-tpl title=\"资金管理\"></header-tpl>\n        <div class=\"text-center user-balance\">账户余额<span class=\"value\">￥888.00元</span></div>\n        <wallet-detail></wallet-detail>\n        </div>\n    "
	}).component("walletDetail", {
	    template: "\n        <div style=\"background:#fff;\">\n        <div class=\"wal-detail-box\">\n            <ul class=\"wal-tree list-none\">\n                <li>\n                    <p>增加 190</p>\n                    <p>2016-2-2</p>\n                    <p>下单消费</p>\n                    <span class=\"wal-tree-dot\"></span>\n                </li>\n                <li>\n                    <p>增加 190</p>\n                    <p>2016-2-2</p>\n                    <p>下单消费</p>\n                    <span class=\"wal-tree-dot\"></span>\n                </li>\n                <li>\n                    <p>增加 190</p>\n                    <p>2016-2-2</p>\n                    <p>下单消费</p>\n                    <span class=\"wal-tree-dot\"></span>\n                </li>\n                <li>\n                    <p>增加 190</p>\n                    <p>2016-2-2</p>\n                    <p>下单消费</p>\n                    <span class=\"wal-tree-dot\"></span>\n                </li>\n            </ul>\n        </div>\n        </div>\n    "
	});

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	angular.module("orderComponent", []).component('memberOrder', {
	    template: "\n        <div class=\"member-wrapper\">\n            <div>{{$ctrl.title}}</div>\n            <header-tpl title=\"我的订单\"></header-tpl>\n            <tabs-tpl list=\"$ctrl.list\" component='order-panel'>\n            </tabs-tpl>\n        </div>\n\n    ",
	    controller: function controller() {
	        this.list = [{ title: "全部", id: 0, active: "active" }, { title: "待付款", id: 1 }, { title: "待发货", id: 2 }, { title: "待收货", id: 3 }, { title: "已完成", id: 4 }];
	    }
	}).component('orderPanel', {
	    transclude: true,
	    // require:{
	    //     tabsCtrl:"^tabsTpl"
	    // },
	    bindings: {
	        onChoose: "<" //可被$onChanges监听数据的变化
	    },
	    template: "\n        <div class=\"order-lists\">\n            <h2>店铺：网站自营</h2>\n            <dl class=\"flex-between\">\n                <dt><img src=\"../src/img/member/product.jpg\" /></dt>\n                <dd class=\"center\">小米旗舰店正品手机平板通用迷你充电宝 移动电源10000毫安大容量</dd>\n                <dd class=\"price text-right\">￥90元<br />2件</dd>\n            </dl>\n            <dl class=\"flex-between\">\n                <dt><img src=\"../src/img/member/product.jpg\" /></dt>\n                <dd class=\"center\">小米旗舰店正品手机平板通用迷你充电宝 移动电源10000毫安大容量</dd>\n                <dd class=\"price\">￥90元<br />2件</dd>\n            </dl>\n            <div class=\"o-total text-right\">共2件商品：<span class=\"red\">￥888元</span></div>\n            <div class=\"o-btn text-right\">\n                <button class=\"btn-cancel\">取消订单</button>\n                <button class=\"btn-pay\">立即付款</button>\n            </div>\n        </div>\n    ",
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
/* 23 */
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
/* 24 */
/***/ function(module, exports) {

	"use strict";

	angular.module("commentComponent", []).component("memberComment", {
	    template: "\n    <div class=\"member-wrapper\">\n        <div>{{$ctrl.title}}</div>\n        <header-tpl title=\"我的评价\"></header-tpl>\n        <tabs-tpl list=\"$ctrl.list\" component=\"comment-tabcontent\"></tabs-tpl>\n    </div>\n    ",
	    controller: function controller() {
	        this.list = [{ title: "全部评价", active: "active" }, { title: "待评价" }, { title: "已评价" }];
	    }
	}).component("commentTabcontent", {
	    template: "\n    <div class=\"pj-list\">\n        <h2>购买时间：2016-05-24 11:01</h2>\n        <dl class=\"flex-between\">\n            <dt class=\"pj-img\"><img src=\"src/img/member/product.jpg\" /></dt>\n            <dd class=\"pj-tit\">\n                <p>小米旗舰店正品手机平板通用迷你充电宝 移动电源10000毫安大容量</p>\n                <p>￥8933.00</p>\n            </dd>\n            <dd class=\"pj-btn\">\n                <button type=\"button\">评价订单</button>\n            </dd>\n        </dl>\n    </div>\n    <div class=\"pj-list\">\n        <h2>购买时间：2016-05-24 11:01</h2>\n        <dl class=\"flex-between\">\n            <dt class=\"pj-img\"><img src=\"src/img/member/product.jpg\" /></dt>\n            <dd class=\"pj-tit\">\n                <p>小米旗舰店正品手机平板通用迷你充电宝 移动电源10000毫安大容量</p>\n                <p>￥8933.00</p>\n            </dd>\n            <dd class=\"pj-btn\">\n                <button type=\"button\">评价订单</button>\n            </dd>\n        </dl>\n    </div>\n    ",
	    require: {
	        tabsCtrl: "^tabsTpl"
	    },
	    bindings: {
	        onChoose: "<"
	    },
	    controller: function controller() {
	        this.$onChanges = function (_ref) {
	            var onChoose = _ref.onChoose;

	            this.onChoose = function () {
	                console.log("99999");
	            };
	        };
	    }
	});

/***/ }
]);