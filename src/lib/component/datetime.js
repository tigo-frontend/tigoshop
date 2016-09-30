app.component("testdate",{
    template:`
    <div style="padding:0 1rem;">
    <datepick on-list="$ctrl.onChange(list)"></datepick>
    </div>
    <div style="padding:0 1rem; ">
        <p style="margin:1.2rem 0 .3rem;padding:0;">展地规格：3.0 * 3.0</p>
        <div class="flex-between">
            <div>普通日价格：xxx元/天</div>
            <div>便民日价格：xxx元/天</div>\
        </div>
    </div>
    <style>
        .liu-pick-list{
            list-style:none;
            margin:0;
            padding:1.6rem 1rem;
        }
        .liu-pick-list li{
            padding:1rem 0;
            border-bottom:.1rem solid #aaa;
        }
        .liu-pick-list li span{
            width:25%;
            text-align:center;
        }
    </style>
    <ul class="liu-pick-list">
        <li class="flex-between">
            <span>已选日期</span>
            <span>可预定展位数</span>
            <span>价格</span>
            <span>预定数量</span>
        </li>
        <li  ng-repeat="v in $ctrl.lists" class="flex-between">
            <span>{{v.date}}</span>
            <span>{{v.surnum}}</span>
            <span>{{v.price}}</span>
            <span>{{v.benum}}</span>
        </li>
    </ul>
    <div style="padding:1rem;">
        <p style="margin-top:0;">活动内容（必填）</p>
        <textarea style="width:100%;height:6rem;padding:.5rem;border:solid 1px #aaa;" placeholder="请填写活动内容用于展地审核"></textarea>
        <p style="margin:1rem 0 0 0;padding:0;">您选择的展地数量是：</p>
        <p style="margin:.2rem 0;padding:0;">您选择的展地日期是：</p>
        <p style="margin:.2rem 0;padding:0;">2016-09-10至2016-09-15（共5天）</p>
        <p style="text-align:right">共计2500元</p>
    </div>
    `.trim(),
    controller:[function(){
        this.onChange = function(list){
            this.lists = list;

            ///console.log(Array.from(this.lists));
        }
    }]
})
app.component("datepick",{
    template:`
    <table style="background-color:#161d24;color:#fff;width:100%;position:relative;padding:8px 2px">
        <svg style="display:none;">
           <symbol id="ixsanjiao" viewBox="0 0 100 100">
           <path transform="scale(0.0925, 0.0925)" d="M231.621377 8.160126l606.776838 470.422492c20.453152 13.635435 20.453152 47.724021 0 61.359455l-606.776838 470.422492c-27.270869 20.453152-61.359455 0-61.359455-27.270869L170.261922 42.248712C170.261922 8.160126 204.350508-12.293026 231.621377 8.160126z" fill="currentColor"></path>
           </symbol>
        </svg>
        <tr>
            <td>
            <div style="cursor:pointer;text-align:left;padding-left:18px;" ng-click="$ctrl.previous()" >
                <svg style="-webkit-transform:rotateY(180deg);transform:rotateY(180deg);width:1.4rem;height:1.4rem;color:#fff;display:flex;display:table;"  ><use xlink:href="#ixsanjiao" /></svg>
            </div>
            </td><td style="text-align:center">
                {{$ctrl.year}}年 {{$ctrl.cnMonth}}月
            </td>
            <td style="text-align:center;">
            <div style="cursor:pointer;text-align:right;padding-right:18px;" ng-click="$ctrl.thenext()">
                <svg style="width:1.4rem;height:1.4rem;color:#fff;display:initial;"  ><use xlink:href="#ixsanjiao" /></svg>
            </div>
            </td>
        </tr>
    </table>
    <table style="background-color:#000;color:#fff;width:100%;position:relative;padding:1px 2px;text-align:center;">
        <tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>
    </table>
    <table style="width:100%;padding:8px 0;text-align:center;border:solid .2rem #ccc;border-top:none;">
        <tr ng-repeat="x in $ctrl.monthday track by $index">
            <td ng-repeat="(k,v) in x track by $index">
                <a href="javascript:void(0);" data-pick="1" ng-click="$ctrl.pickdate($event,v)" style="margin:.4rem 0;width:2.4rem;height:2.4rem;line-height:2.4rem;position:relative;background:{{v.bgc}};display:inline-block;color:#fff;text-align:center;">
                {{v.D}}
                <span ng-if="v.te" style='position: absolute;top: 0;left: 0;width: 0;height: 0;border-left: solid 1.3rem #f9ee30;border-right: none;border-top: none;border-bottom: solid 1.3rem transparent;'></span>
                </a>
            </td>
        </tr>
        <tr>
            <td colspan="7">
                <div class="flex-between">
                    <div>Tips：点选预定时间，再次选择取消</div>
                    <div>
                    <button ng-click="pickall()" style="color:#fff;padding:.3rem;border:none;background:#333;-webkit-border-radius:.5rem;border-radius:.7rem;">全选</button>
                    <button ng-click="pickdel()" style="margin-left:.5rem;border:none;padding:.3rem;background:#e3e3e3;-webkit-border-radius:.5rem;border-radius:.7rem;">清空</button>
                    </div>
                </div>
            </td>
        </tr>
    </table>
    `.trim(),
    bindings:{
        onList:"&"
    },
    controller:function(){
        let datepick = new class dt {
            constructor() {
                this.lunarInfo = new Array(
                    0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
                    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
                    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
                    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
                    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
                    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
                    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
                    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
                    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
                    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
                    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
                    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
                    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
                    0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
                    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0);
                this.Animals = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");
                this.Gan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
                this.Zhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
                this.cnNum = new Array("","一","二","三","四","五","六","七","八","九","十","十一","十二");
                this.Now = new Date();
                this.YY = this.nowY = this.Now.getFullYear();
                this.MM = this.nowM = this.Now.getMonth();
                this.DD = this.nowD = this.Now.getDate();
            }

            //默认当前系统时间，当月总计多少天
            monthDays(year=this.YY,month=this.MM){
                let isy = false;
                if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) isy = true;
                switch (month+1) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        return 31;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        return 30;
                    case 2:
                        return isy ? 28 : 29;
                }
            }

            //默认当前系统时间，当月第一天是星期几
            startWeek(y=this.YY, m=this.MM, d=1){
                let dd = new Date( y , m , d );
                return dd.getDay();
            }

            console(infos,fn=()=>{}){
                //console.log(infos);
                let dateval = [];
                //上一月
                for(let i=this.startWeek()-1; i >= 0; i--){
                    dateval.push({
                        "Y":datepick.YY,
                        "M":datepick.MM,
                        "D":this.monthDays("",datepick.MM-1)-i,
                        "te":false,
                    })
                }
                //当月
                for(let i=1,bgc="#ababab"; i <= this.monthDays(); i++){
                    let [Y,M,D] = [datepick.YY,
                                    (()=>  {
                                        if(datepick.MM+1<10){
                                            return "0"+(datepick.MM+1)
                                        }else {
                                            return datepick.MM+1;
                                        }
                                    })(),
                                    (() => i<10?("0"+i):i)(),
                                ]
                    if(infos && infos[Y+"-"+M+"-"+D]){
                        //console.log(infos[Y+"-"+M+"-"+D]);
                        dateval.push( Object.assign({Y,M,D,bgc},infos[Y+"-"+M+"-"+D] ))
                    }else{
                        dateval.push({Y,M,D,bgc})
                    }

                }
                let newval = [];
                for(let i=0,v=0; i< dateval.length; i++){
                    if(i%7 == 0){
                        v++;
                        newval[v] = [];
                    }
                    newval[v].push(dateval[i]) ;
                }
                let x = 1;
                [5,6].map(
                    (n) =>　{
                        let fn = newval[n]?newval[n].length:0;
                        if(!newval[n]) newval[n]=[];
                        if(fn < 7){
                            for(let i=7; i>fn; i--){
                                newval[n].push({
                                    "Y":datepick.YY,
                                    "M":datepick.MM+2,
                                    "D":x
                                });
                                x++;
                            }
                        }
                    }
                )
                fn(this);
                return newval;
            }
        }
        //当天展位信息、是否可选
        let dateinfo = {
            "2016-09-11":{
                picker:true,
                bgc:"#2c922c",
                te:true,
                surnum:11,
                price:800,
            },
            "2016-09-17":{
                picker:true,
                bgc:"#2c922c",
                te:true,
                surnum:7,
                price:800,
            },
            "2016-09-15":{
                picker:true,
                bgc:"#2c922c",
                te:false,
                surnum:8,
                price:300,
            },
            "2016-09-12":{
                picker:true,
                bgc:"#2c922c",
                te:false,
                surnum:5,
                price:800,
            },
            "2016-09-25":{
                picker:true,
                bgc:"#2c922c",
                te:false,
                surnum:5,
                price:800,
            }
        };

        this.monthday = datepick.console(dateinfo,(r)=>{
            this.year = r.YY;
            this.month = r.MM;
            this.cnMonth = r.cnNum[r.MM+1];
        });


        //全选
        this.pickall = function(){

        }
        //清空全选
        this.pickdel = function(){

        }
        //点击某一天事件
        var listData = {};
        this.pickdate = function(ev,v){
            if(!v.picker) return false;

            let obj = ev.target;
            if(obj.getAttribute("data-pick") == 1){
                obj.style.backgroundColor = "#ea4949";
                obj.setAttribute("data-pick",2);
                listData[v.Y+"-"+v.M+"-"+v.D] = ({
                    date:v.Y+"-"+v.M+"-"+v.D,
                    surnum:v.surnum,
                    price:v.price,
                    benum:1,
                })
                this.onList({list:listData});
                return false;
            }
            if(obj.getAttribute("data-pick") == 2){
                var listNewData = {};
                for(let k in listData){
                    if(k != (v.Y+"-"+v.M+"-"+v.D) ){
                        listNewData[k] = listData[k];
                    }

                }

                listData = listNewData;
                this.onList({list:listNewData});
                obj.style.backgroundColor = v.bgc;
                obj.setAttribute("data-pick",1);
                return false;
            }
        }
        //翻向前一月
        this.previous = function(){
            datepick.MM = datepick.MM-1;
            this.monthday = datepick.console(dateinfo,(r)=>{
                this.year = r.YY;
                this.month = r.MM;
                this.cnMonth = r.cnNum[r.MM+1];
            });
        }
        //翻向后一月
        this.thenext =function(){
            datepick.MM = datepick.MM + 1;
            this.monthday = datepick.console(dateinfo,(r)=>{
                this.year = r.YY;
                this.month = r.MM;
                this.cnMonth = r.cnNum[r.MM+1];
            });
        }
    }
})
