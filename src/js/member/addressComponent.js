angular.module("addressComponent",[])
.component("memberAddress",{
    transclude:true,
    template:`
    <div class="member-wrapper">
        <header-tpl title="地址管理"></header-tpl>
        <div class="address-wrap">
        <ng-transclude></ng-transclude>
        </div>
    </div>
    `
})
.component("addressList",{
    template:`
    <member-address>
        <dl class="address-list" >
            <dt>刘先生<span>电话:13986765412</span></dt>
            <dd margin="0 0 0 0" padding="1rem 0 0">内蒙古自治区，乌海市，乌海市辖区，海兴大厦</dd>
            <div class="edit" coordinate="center-y" style="right:1rem;">
            <span-icon icon="edit" style="width:3rem;height:3rem;color:#666"></span-icon>
            </div>
        </dl>
        <a ui-sref="member.add-place" class="btn-submit block">添加新地址</a>
    </member-address>
    `
})
.component("addressAdd",{
    template:`
    <member-address>
        <form class="add-address-form">
            <div class="form-group flex-between">
                <div class="caption">
                    收货人
                </div>
                <div class="form-input">
                    <input type="text" class="none" />
                </div>
            </div>
            <div class="form-group flex-between">
                <div class="caption">
                    地区
                </div>
                <div class="form-input">
                    <input type="text" class="none" />
                </div>
            </div>
            <div class="form-group flex-between">
                <div class="caption">
                    详细地址
                </div>
                <div class="form-input">
                    <input type="text" class="none" />
                </div>
            </div>
            <div class="form-group flex-between">
                <div class="caption">
                    手机号
                </div>
                <div class="form-input">
                    <input type="text" class="none" />
                </div>
            </div>
            <div class="form-group flex-between">
                <div class="caption">
                    邮政编码
                </div>
                <div class="form-input">
                    <input type="text" class="none" />
                </div>
            </div>
            <div>
                <button class="btn-submit block">保存</button>
            </div>
        </form>
    </amember-address>
    `
})
