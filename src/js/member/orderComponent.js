angular.module("orderComponent",[])
.component('memberOrder',{
    template:`
        <div class="member-wrapper">
            <div>{{$ctrl.title}}</div>
            <header-tpl title="我的订单"></header-tpl>
            <tabs-tpl list="$ctrl.list" component='order-panel'>
            </tabs-tpl>
        </div>

    `,
    controller:function(){
        this.list = [
            {title:"全部",id:0},
            {title:"待付款",id:1},
            {title:"待发货",id:2},
            {title:"待收货",id:3},
            {title:"已完成",id:4},
        ] ;
    }
})
.component('orderPanel',{
    transclude:true,
    // require:{
    //     tabsCtrl:"^tabsTpl"
    // },
    bindings:{
        onChoose:"<"       //可被$onChanges监听数据的变化
    },
    template:`
        <div class="order-lists">
            <h2>店铺：网站自营</h2>
            <dl class="flex-between">
                <dt><img src="../src/img/member/product.jpg" /></dt>
                <dd class="center">小米旗舰店正品手机平板通用迷你充电宝 移动电源10000毫安大容量</dd>
                <dd class="price">￥90元<br />2件</dd>
            </dl>
            <dl class="flex-between">
                <dt><img src="../src/img/member/product.jpg" /></dt>
                <dd class="center">小米旗舰店正品手机平板通用迷你充电宝 移动电源10000毫安大容量</dd>
                <dd class="price">￥90元<br />2件</dd>
            </dl>
            <div class="o-total text-right">支付888元</div>
            <div class="o-btn text-right">
                <button>取消订单</button>
                <button>立即付款</button>
            </div>
        </div>
    `,
    controller:function(){
        this.$onChanges = function({onChoose}){
            console.log(this.onChoose);
        }
    }
})
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
