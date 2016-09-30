angular.module("commentComponent",[])
.component("memberComment",{
    template:`
    <div class="member-wrapper">
        <div>{{$ctrl.title}}</div>
        <header-tpl title="我的评价"></header-tpl>
        <tabs-tpl list="$ctrl.list" component="comment-tabcontent"></tabs-tpl>
    </div>
    `,
    controller:function(){
            this.list = [
                {title:"全部评价",active:"active"},
                {title:"待评价"},
                {title:"已评价"}
            ]
    }
})
.component("commentTabcontent",{
    template:`
    <div class="pj-list">
        <h2>购买时间：2016-05-24 11:01</h2>
        <dl class="flex-between">
            <dt class="pj-img"><img src="src/img/member/product.jpg" /></dt>
            <dd class="pj-tit">
                <p>小米旗舰店正品手机平板通用迷你充电宝 移动电源10000毫安大容量</p>
                <p>￥8933.00</p>
            </dd>
            <dd class="pj-btn">
                <button type="button">评价订单</button>
            </dd>
        </dl>
    </div>
    <div class="pj-list">
        <h2>购买时间：2016-05-24 11:01</h2>
        <dl class="flex-between">
            <dt class="pj-img"><img src="src/img/member/product.jpg" /></dt>
            <dd class="pj-tit">
                <p>小米旗舰店正品手机平板通用迷你充电宝 移动电源10000毫安大容量</p>
                <p>￥8933.00</p>
            </dd>
            <dd class="pj-btn">
                <button type="button">评价订单</button>
            </dd>
        </dl>
    </div>
    `,
    require:{
        tabsCtrl:"^tabsTpl",
    },
    bindings:{
        onChoose:"<",
    },
    controller:function(){
        this.$onChanges = function({onChoose}){
            this.onChoose = function() {
                console.log("99999");
            }
        }

    }
})
