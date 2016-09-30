angular.module("scoreComponent",[])
.component("memberScore",{
    template:`
        <div class="member-wrapper">
            <header-tpl title="我的积分"></header-tpl>
            <div class="text-center" style="margin:.8rem 0;border-bottom:1px solid #ccc">
                    <p style="color:#ff0000;margin:1rem 0 0 0;">0</p>
                    <p margin=".6rem 0 1rem 0">可用积分</p>
            </div>
            <ul class="list-none score-list" style="padding:1rem">
                <li class="flex-between">
                    <div class="">余额：888元<br />
                        积分：888分
                    </div>
                    <div class="text-right">
                        下单消费<br />
                        2016-07-15
                    </div>
                </li>
                <li class="flex-between" >
                    <div class="">余额：888元<br />
                        积分：888分
                    </div>
                    <div class="text-right">
                        下单消费<br />
                        2016-07-15
                    </div>
                </li>
                <li class="flex-between" >
                    <div class="">余额：888元<br />
                        积分：888分
                    </div>
                    <div class="text-right">
                        下单消费<br />
                        2016-07-15
                    </div>
                </li>
                <li class="flex-between" >
                    <div class="">余额：888元<br />
                        积分：888分
                    </div>
                    <div class="text-right">
                        下单消费<br />
                        2016-07-15
                    </div>
                </li>
            </ul>
        </div>
    `.trim()
})
//我的留言板
.component("memberMessage",{
    template:`
    <div class="member-wrapper">
        <header-tpl title="我的留言"></header-tpl>
        <div>
            您现在还没有留言
        </div>
    </div>
    `
})
