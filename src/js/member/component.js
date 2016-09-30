require("./loginComponent.js");
require("./addressComponent.js");
require("./scoreComponent.js")
angular.module("memberComponent",["walletComponent","orderComponent","couponComponent","commentComponent","loginComponent","addressComponent","scoreComponent"])
//svg组件化图标
.component("spanIcon",{
    bindings:{
        class:"@",
        icon:"@",
        style:"@",
    },
    template:`
        <svg style="{{$ctrl.style}};display:flex;display:table;" class="{{$ctrl.class}}" ><use xlink:href="{{$ctrl.iconName}}" /></svg>
    `,
    controller:function(){
        this.iconName = "#icon-"+this.icon;
    }
})
//头部公共组件
.component("headerTpl",{
    template:`
        <div class="header"></div>
        <header class="header container-fill">
            <div class="pull-left" onclick="window.history.go(-1)"><span-icon style="width:2.8rem;height:2.8rem;color:#333;" icon="arrow-left"></span-icon></div>
            <div class="pull-right"><span-icon style="width:2.8rem;height:2.8rem;color:#333;" icon="dot-more" ng-click="$ctrl.showNav()"></span-icon>
                <ul class="slide-nav list-none" ng-show="$ctrl.isNavshow">
                    <li onclick="location.href='/'"><span icon-home></span>首页</li>
                    <li onclick="location.href='/'"><span icon-home></span>分类</li>
                    <li onclick="location.href='/'"><span icon-home></span>购物车</li>
                    <li onclick="location.href='/'"><span icon-home></span>我的</li>
                </ul>
            </div>
            <h1>{{$ctrl.title}}</h1>

        </header>
    `,
    bindings:{
        title:'@'   //< 属性变量绑定  &属性绑定函数  @绑定字符串
    },
    controller:function(){
        this.isNavshow = false;
        this.showNav = function(){
            this.isNavshow  = !this.isNavshow;
        }
    }
})
//经典tab选项   基于component 组件化开发
.component("tabsTpl",{
    transclude:true,
    template:`
    <div class="container-fill order-nav">
    <ul class="list-none flex-between">
        <li ng-repeat="v in $ctrl.list" ng-class="v.active" ng-click="$ctrl.choose($index)" >{{v.title}}</li>
    </ul>
    </div>

    <div class="tabsContentsBox"></div>
    `,
    bindings:{
        list: "<",
        component:"@",
    },
    controller:function($scope,$compile,$element){
        $element[0].querySelector(".tabsContentsBox").innerHTML = `
            <${this.component} on-choose='gobj'></${this.component}>
        `;
        $compile(angular.element($element[0].querySelector(".tabsContentsBox")).contents())($scope);

        this.choose = (k) => {
            $scope.gobj =  this.list[k];
            for(let kk in this.list){
                this.list[kk]["active"] = "";
            }
            this.list[k]["active"] = "active";
        }
    }
})
//会员中心 --首页
.component("memberIndex",{
    template:`
    <div class="member-wrapper" style="background-color:#f2f2f2;">
        <top-tpl></top-tpl>
        <div class="hi16"></div>
        <box-menu></box-menu>
        <div ng-repeat="menu in $ctrl.panels">
            <panel menus="menu"></panel>
            <div  class="hi16"></div>
        </div>
        <footer></footer>
    </div>
    `,
    controller:["$apiRest",function($apiRest){
        this.panels = [
            [
                {"title":"我的钱包",icon:"icon-money",stxt:"查看我的钱包",href:"member.wallet"}
            ],
            [
                {"title":"全部订单",icon:"icon-order",stxt:"查看订单",href:"member.order"},
                {"title":"我的优惠券",icon:"icon-quan",href:"member.coupon"},
                {"title":"我的评价",icon:"icon-pinlun",stxt:"查看评价",href:"member.comment"},
                {"title":"我的收藏",icon:"icon-sc",href:"member.regist"},
            ],
            [
                {"title":"地址管理",icon:"icon-dzgl",href:"member.address"},
                {"title":"我的积分",icon:"icon-jifen",href:"member.score"},
                {"title":"我的留言",icon:"icon-liuyan"},
                {"title":"售后服务",icon:"icon-shfw"}
            ],
            [
                {"title":"注销登录",icon:"icon-loginout",href:"member.loginout"}
            ]
        ]
    }],
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
                <li class="{{v.icon}}" ng-repeat="v in $ctrl.menus" ><a style="display:block;" ui-sref="{{v['href']?v['href']:'#'}}" ui-sref-active="active">{{v.title}}  <div class="right-icon">{{v.stxt}}</div><hr class="line"/></a></li>
            </ul>
        </div>
    `,
    bindings:{
        menus:"<"
    },
    controller:function($scope){
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
