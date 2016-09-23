angular.module("commentComponent",[])
.component("memberComment",{
    template:`
    <div class="member-wrapper">
        <div>{{$ctrl.title}}</div>
        <header-tpl title="我的评价"></header-tpl>
    </div>
    `
})
