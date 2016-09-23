angular.module("walletComponent",[])
.component("memberWallet",{
    template:`
        <div class="member-wrapper">
        <header-tpl title="资金管理"></header-tpl>
        <div style="padding:2rem 0;border-bottom:solid 1px #ccc" class="text-center">账户余额￥888.00元</div>
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
