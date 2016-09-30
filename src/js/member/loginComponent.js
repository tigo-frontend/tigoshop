angular.module("loginComponent",[])
.component("memberLogin",{
    template:`
    <div class="member-wrapper">
        <div class="header"></div>
        <header class="header container-fill">
            <div class="pull-left" onclick="window.history.go(-1)">
                <span-icon style="width:2.8rem;height:2.8rem;color:#333;" icon="arrow-left"></span-icon>
            </div>
            <h1>会员登陆</h1>
        </header>
        <login-form></login-form>
    </div>
    `
})
.component("loginForm",{
    template:`
        <form class="login-form" novalidate><div>
            <div class="form-group flex-between">
                <div class="caption">用户名：</div>
                <div class="form-input"><input type="text" ng-model="$ctrl.data.username" value="" /></div>
            </div>
            <div class="form-group flex-between">
                <div class="caption">密码：</div>
                <div class="form-input"><input type="password" ng-model="$ctrl.data.password" value="" /></div>
            </div>
            <div class="form-group">
                <button class="btn-submit block" type="button" ng-click="$ctrl.submit()">确认登陆</button>
            </div>

            <div class="form-group text-right qita">
                <div class="pull-left"><input type="checkbox" value="0" >自动登陆</div>
                <a ui-sref="member.regist">免费注册</a> | <a ui-sref="member.forget">忘记密码？</a>
            </div>
        </div></form>
    `,
    controller:["$apiRest","$state",function($apiRest,$state){
        this.submit = function(){
             $apiRest("/member/login").save(this.data,function(msg){
                    if(msg.status)
                        $state.go("member");
                })
        }
    }]
})
.component("memberRegister",{
    template:`
    <div class="member-wrapper">
        <div class="header"></div>
        <header class="header container-fill">
            <div class="pull-left" onclick="window.history.go(-1)">
                <span-icon style="width:2.8rem;height:2.8rem;color:#333;" icon="arrow-left"></span-icon>
            </div>
            <h1>会员注册</h1>
        </header>
        <regist-form></regist-form>
    </div>
    `
})
.component("registForm",{
    template:`
    <form class="regist-form">
        <div class="form-group flex-between">
            <div class="caption">
                手机账号
            </div>
            <div class="form-input">
                <input class="none" placeholder="11位手机号" />
            </div>
        </div>
        <div class="form-group flex-between">
            <div class="caption">
                密码
            </div>
            <div class="form-input">
                <input type="password" class="none" placeholder="请输入密码" />
            </div>
        </div>
        <div class="form-group flex-between">
            <div class="caption">
                确认密码
            </div>
            <div class="form-input">
                <input type="password" class="none" placeholder="请再次输入密码" />
            </div>
        </div>
        <div class="form-group flex-between">
            <div  class="form-input">
                <input class="none" placeholder="验证码" />
            </div>
            <button style="width:40%;">验证码</button>
        </div>
        <div>
            <button class="btn-submit block" ng-click="$ctrl.submit()" type="button">注册</button>
        </div>
    </form>
    `,
    controller:["$state",function($state){
        this.submit = function(){
            $state.go("member");
        }
    }]
})
.component("memberForget",{
    template:`
    <div class="member-wrapper">
        <div class="header"></div>
        <header class="header container-fill">
            <div class="pull-left" onclick="window.history.go(-1)"><span-icon style="width:2.8rem;height:2.8rem;color:#333;" icon="arrow-left"></span-icon></div>
            <h1>忘记密码</h1>
        </header>
        <forget-form></forget-form>
    </div>
    `
})
.component("forgetForm",{
    template:`
    <form class="forget-form">
        <div class="form-group">
            <input class="block-input" placeholder="手机号/账号" />
        </div>
        <div class="form-group">

        </div>
        <div class="form-group">
            下一步
        </div>
    </form>
    `
})
