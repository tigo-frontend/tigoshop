angular.module("walletComponent",[])
.component("memberWallet",{
    template:`
        <div class="member-wrapper">
        <header-tpl title="资金管理"></header-tpl>
        <div class="text-center user-balance">账户余额<span class="value">￥888.00元</span></div>
        <wallet-detail></wallet-detail>
        </div>
    `
})
.component("walletDetail",{
    template:`
        <div style="background:#fff;">
        <div class="wal-detail-box">
            <ul class="wal-tree list-none">
                <li>
                    <p>增加 190</p>
                    <p>2016-2-2</p>
                    <p>下单消费</p>
                    <span class="wal-tree-dot"></span>
                </li>
                <li>
                    <p>增加 190</p>
                    <p>2016-2-2</p>
                    <p>下单消费</p>
                    <span class="wal-tree-dot"></span>
                </li>
                <li>
                    <p>增加 190</p>
                    <p>2016-2-2</p>
                    <p>下单消费</p>
                    <span class="wal-tree-dot"></span>
                </li>
                <li>
                    <p>增加 190</p>
                    <p>2016-2-2</p>
                    <p>下单消费</p>
                    <span class="wal-tree-dot"></span>
                </li>
            </ul>
        </div>
        </div>
    `
})
