angular.module("orderComponent",[])
.component('memberOrder',{
    template:`
        <div class="member-wrapper">
            <header-tpl></header-tpl>
            <order-tabs></order-tabs>
            <order-panel></order-panel>
        </div>
    `
})
.component('orderTabs',{
    template:`
        <div class="container-fill wallet-nav">
        <ul class="list-none flex-between">
            <li>全部</li>
            <li>待付款</li>
            <li>待发货</li>
            <li>待收货</li>
            <li>已完成</li>
        </ul>
        </div>
    `
})
.component('orderPanel',{
    template:`
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
    `
})
