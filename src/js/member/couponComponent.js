angular.module("couponComponent",[])
.component("memberCoupon",{
    template:`
    <div class="member-wrapper">
        <div>{{$ctrl.title}}</div>
        <header-tpl title="我的优惠券"></header-tpl>
        <tabs-tpl list="$ctrl.list" component="coupon-tabcontent"></tabs-tpl>
    </div>
    `,
    controller:function(){
        this.list = [
            {title:"未使用"},
            {title:"已使用"},
            {title:"已过期"},
        ];
    }
})
.component("couponTabcontent",{
    template:`
    999
    `,
    bindings:{
        onChoose:'<',
    },
    controller:function(){

    }
})
