"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[46482],{46482:(ue,S,n)=>{n.r(S),n.d(S,{ExampleTuiDataListModule:()=>ae});var m=n(12057),s=n(23738),O=n(33982),G=n(23121),x=n(29851),r=n(36692),_=n(72002),T=n(31748),t=n(74788),z=n(88331),Y=n(37159),X=n(57068),H=n(50170),W=n(1414),V=n(52219),j=n(63060),B=n(62733),K=n(3729),q=n(68874),g=n(20933),C=n(89786),D=n(35065),L=n(40939),N=n(31363),h=n(20501),k=n(47305);function tt(o,a){if(1&o&&(t.TgZ(0,"button",6),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e.items),t.xp6(1),t.hij(" ",e.name," only ")}}function et(o,a){if(1&o&&(t.TgZ(0,"tui-opt-group"),t.TgZ(1,"button",6),t._uU(2," All "),t.qZA(),t.YNc(3,tt,2,2,"button",7),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("value",e.all),t.xp6(2),t.Q6J("ngForOf",e.items)}}function ot(o,a){if(1&o&&(t.TgZ(0,"button",6),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function nt(o,a){if(1&o&&(t.TgZ(0,"tui-opt-group",11),t.YNc(1,ot,2,2,"button",7),t.qZA()),2&o){const e=t.oxw().tuiLet;t.xp6(1),t.Q6J("ngForOf",e)}}function it(o,a){if(1&o&&(t.TgZ(0,"tui-opt-group",9),t.YNc(1,nt,2,1,"tui-opt-group",10),t.qZA()),2&o){const e=a.tuiLet,i=t.oxw().$implicit;t.Q6J("label",i.name),t.xp6(1),t.Q6J("ngIf",e.length)}}function at(o,a){if(1&o&&(t.ynx(0),t.YNc(1,it,2,2,"tui-opt-group",8),t.ALo(2,"tuiFilter"),t.BQk()),2&o){const e=a.$implicit,i=t.oxw();t.xp6(1),t.Q6J("tuiLet",t.Dn7(2,1,e.items,i.filter,i.value))}}let ut=(()=>{class o{constructor(){this.items=[],this.value="",this.all=r.EMPTY_ARRAY,this.filter=r.TUI_DEFAULT_MATCHER}onArrowDown(e,i){e.onFocus(i,!0)}onKeyDown(e,i){i&&(0,_.tuiIsEditingKey)(e)&&i.focus({preventScroll:!0})}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["custom-list"]],inputs:{items:"items"},decls:8,vars:4,consts:[["tuiTextfieldIconLeft","tuiIconSearchLarge",1,"tui-space_all-2",3,"tuiTextfieldLabelOutside","value","valueChange","keydown.arrowDown.prevent"],["input",""],["emptyContent","No results found",3,"keydown"],["list",""],[4,"ngIf"],[4,"ngFor","ngForOf"],["tuiOption","",3,"value"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],[3,"label",4,"tuiLet"],[3,"label"],["tuiMultiSelectGroup","",4,"ngIf"],["tuiMultiSelectGroup",""]],template:function(e,i){if(1&e){const u=t.EpF();t.TgZ(0,"tui-primitive-textfield",0,1),t.NdJ("valueChange",function(p){return i.value=p})("keydown.arrowDown.prevent",function(p){t.CHM(u);const d=t.MAs(5);return i.onArrowDown(d,p)}),t._uU(2," Search categories\n"),t.qZA(),t._UZ(3,"hr"),t.TgZ(4,"tui-data-list",2,3),t.NdJ("keydown",function(p){t.CHM(u);const d=t.MAs(1);return i.onKeyDown(p.key,d.nativeFocusableElement)}),t.YNc(6,et,4,2,"tui-opt-group",4),t.YNc(7,at,3,5,"ng-container",5),t.qZA()}2&e&&(t.Q6J("tuiTextfieldLabelOutside",!0)("value",i.value),t.xp6(6),t.Q6J("ngIf",!i.value),t.xp6(1),t.Q6J("ngForOf",i.items))},directives:[j.y,B.B,K.aR,q.x,g.q,m.O5,m.sg,C.R,D.v,L.L,N.g,h.Q],pipes:[k.S],encapsulation:2,changeDetection:0}),o})();function lt(o,a){if(1&o&&t._UZ(0,"custom-list",2),2&o){const e=t.oxw();t.Q6J("items",e.items)}}const st={name:"Income",items:["Donations","Product placement","Sponsorship","Found on the street","Unexpected inheritance","Investments","Color copier"]},pt={name:"Expenses",items:["Energy drinks","Coffee","Ramen","Bills","Back medicine","Warhammer 40000 figurines"]};let ct=(()=>{class o{constructor(){this.value=[],this.items=[st,pt],this.identityMatcher=(e,i)=>e.length===i.length&&e.every(u=>i.includes(u)),this.valueContent=({$implicit:e})=>{if(!e.length)return"All";const i=this.items.find(({items:u})=>this.identityMatcher(e,u));return i?`${i.name} only`:`Selected: ${e.length}`}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-data-list-example-4"]],decls:3,vars:3,consts:[[1,"control",3,"identityMatcher","valueContent","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,i){1&e&&(t.TgZ(0,"tui-select",0),t.NdJ("ngModelChange",function(l){return i.value=l}),t._uU(1," Open-source budget "),t.YNc(2,lt,1,1,"custom-list",1),t.qZA()),2&e&&t.Q6J("identityMatcher",i.identityMatcher)("valueContent",i.valueContent)("ngModel",i.value)},directives:[H.u,W.O,s.JJ,s.On,V.g,ut],styles:[".control[_ngcontent-%COMP%]{width:320px}"],changeDetection:0}),o})();var _t=n(79121),F=n(62939),E=n(76189),rt=n(34880);function dt(o,a){1&o&&t._UZ(0,"tui-svg",10)}function Tt(o,a){if(1&o&&(t.TgZ(0,"a",7,8),t._uU(2),t.YNc(3,dt,1,0,"tui-svg",9),t.qZA()),2&o){const e=a.$implicit,i=t.MAs(1);t.Q6J("routerLink",e.routerLink),t.uIk("aria-checked",i.isActive),t.xp6(2),t.hij(" ",e.label," "),t.xp6(1),t.Q6J("ngIf",i.isActive)}}function mt(o,a){if(1&o&&(t.TgZ(0,"tui-opt-group",5),t.YNc(1,Tt,4,4,"a",6),t.qZA()),2&o){const e=a.$implicit;t.Q6J("label",e.label),t.xp6(1),t.Q6J("ngForOf",e.items)}}function gt(o,a){if(1&o&&(t.TgZ(0,"tui-data-list",3),t.YNc(1,mt,2,2,"tui-opt-group",4),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.groups)}}let Dt=(()=>{class o{constructor(){this.arrow=T.TUI_ARROW,this.groups=[{label:$localize`Components`,items:[{label:"Input",routerLink:"/components/input"},{label:"Select",routerLink:"/components/select"},{label:"DataList",routerLink:"/components/data-list"}]},{label:$localize`Styles`,items:[{label:$localize`Icons`,routerLink:"/icons"},{label:$localize`Typography`,routerLink:"/typography"}]},{label:"",items:[{label:$localize`Changelog`,routerLink:"/changelog"}]}]}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-data-list-example-1"]],decls:5,vars:2,consts:[[3,"content"],["tuiButton","","type","button",3,"iconRight"],["content",""],["role","menu"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["tuiOption","","role","menuitemradio","routerLinkActive","",3,"routerLink",4,"ngFor","ngForOf"],["tuiOption","","role","menuitemradio","routerLinkActive","",3,"routerLink"],["rla","routerLinkActive"],["src","tuiIconCheckLarge",4,"ngIf"],["src","tuiIconCheckLarge"]],template:function(e,i){if(1&e&&(t.TgZ(0,"tui-hosted-dropdown",0),t.TgZ(1,"button",1),t._uU(2," Menu "),t.qZA(),t.qZA(),t.YNc(3,gt,2,1,"ng-template",null,2,t.W1O)),2&e){const u=t.MAs(4);t.Q6J("content",u),t.xp6(1),t.Q6J("iconRight",i.arrow)}},directives:[F.o,E.v,g.q,m.sg,C.R,D.v,O.yS,O.Od,m.O5,rt.P],encapsulation:2,changeDetection:0}),o})();var Z=n(94370),v=n(17163),y=n(37606),M=n(33250),$=n(26072),I=n(9829),R=n(7860);function Ft(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){const l=t.CHM(e).tuiLet;return t.oxw(2).selectOption(l)}),t._uU(1),t.qZA()}if(2&o){const e=a.tuiLet,i=t.oxw(2);t.Q6J("size",i.size),t.xp6(1),t.hij(" ",e," ")}}function Et(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){const l=t.CHM(e).tuiLet;return t.oxw(2).selectOption(l)}),t._uU(1),t.qZA()}if(2&o){const e=a.tuiLet,i=t.oxw(2);t.Q6J("size",i.size),t.xp6(1),t.hij(" ",e," ")}}function Ct(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(3).selectOption(l)}),t._uU(1),t.qZA()}if(2&o){const e=a.$implicit,i=t.oxw(3);t.Q6J("size",i.size),t.xp6(1),t.hij(" ",e," ")}}function Mt(o,a){if(1&o&&(t.TgZ(0,"tui-data-list",4),t.YNc(1,Ct,2,2,"button",10),t.TgZ(2,"button",6),t._uU(3," Nested menu "),t.qZA(),t.qZA()),2&o){const e=t.oxw().$implicit,i=t.MAs(10),u=t.oxw();t.Q6J("tuiActiveZoneParent",e),t.xp6(1),t.Q6J("ngForOf",u.burgers),t.xp6(1),t.Q6J("size",u.size)("tuiDropdownManual",!1)("tuiDropdown",i)}}function ft(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(3).selectOption(l)}),t._uU(1),t.qZA()}if(2&o){const e=a.$implicit,i=t.oxw(3);t.Q6J("size",i.size),t.xp6(1),t.hij(" ",e," ")}}function At(o,a){if(1&o&&(t.TgZ(0,"tui-data-list"),t.YNc(1,ft,2,2,"button",10),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.drinks)}}function Ot(o,a){if(1&o&&(t.TgZ(0,"tui-data-list",4),t.YNc(1,Ft,2,2,"button",5),t.TgZ(2,"button",6),t._uU(3," Burgers "),t.qZA(),t.TgZ(4,"button",6),t._uU(5," Drinks "),t.qZA(),t.YNc(6,Et,2,2,"button",5),t.qZA(),t.YNc(7,Mt,4,5,"ng-template",null,7,t.W1O),t.YNc(9,At,2,1,"ng-template",null,8,t.W1O)),2&o){const e=a.$implicit,i=t.MAs(8),u=t.MAs(10),l=t.oxw();t.Q6J("tuiActiveZoneParent",e),t.xp6(1),t.Q6J("tuiLet","French Fries"),t.xp6(1),t.Q6J("size",l.size)("tuiDropdownManual",!1)("tuiDropdown",i),t.xp6(2),t.Q6J("size",l.size)("tuiDropdownManual",!1)("tuiDropdown",u),t.xp6(2),t.Q6J("tuiLet","Ice Cream")}}let St=(()=>{class o{constructor(e){this.dialogService=e,this.dropdownOpen=!1,this.size="s",this.burgers=["Classic","Cheeseburger","Royal Cheeseburger"],this.drinks=["Cola","Tea","Coffee","Slurm"]}selectOption(e){this.dropdownOpen=!1,this.dialogService.open(`You selected ${e}`).subscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.TuiDialogService))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-data-list-example-2"]],decls:5,vars:3,consts:[[3,"content","open","openChange"],["dropdown",""],["tuiIconButton","","appearance","flat","icon","tuiIconMoreVer","type","button",3,"pseudoHover"],["content",""],["tuiDataListDropdownManager","",3,"tuiActiveZoneParent"],["tuiOption","",3,"size","click",4,"tuiLet"],["tuiOption","","tuiDropdownSided","","tuiDropdownAlign","right",3,"size","tuiDropdownManual","tuiDropdown"],["burgersTmp",""],["drinksTmp",""],["tuiOption","",3,"size","click"],["tuiOption","",3,"size","click",4,"ngFor","ngForOf"]],template:function(e,i){if(1&e&&(t.TgZ(0,"tui-hosted-dropdown",0,1),t.NdJ("openChange",function(l){return i.dropdownOpen=l}),t._UZ(2,"button",2),t.qZA(),t.YNc(3,Ot,11,9,"ng-template",null,3,t.W1O)),2&e){const u=t.MAs(1),l=t.MAs(4);t.Q6J("content",l)("open",i.dropdownOpen),t.xp6(2),t.Q6J("pseudoHover",u.open||null)}},directives:[F.o,E.v,g.q,Z.p,v.e,L.L,D.v,y.C,M.Ek,$.t,I.V,R.T,m.sg],encapsulation:2,changeDetection:0}),o})();function xt(o,a){if(1&o&&(t.TgZ(0,"button",9),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function Lt(o,a){if(1&o&&(t.TgZ(0,"button",9),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function Nt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tui-data-list",4),t.TgZ(1,"tui-opt-group",5),t.NdJ("ngModelChange",function(u){return t.CHM(e),t.oxw().value=u}),t.TgZ(2,"tui-opt-group",6),t.YNc(3,xt,2,2,"button",7),t.qZA(),t.TgZ(4,"tui-opt-group",8),t.YNc(5,Lt,2,2,"button",7),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.value),t.xp6(2),t.Q6J("ngForOf",e.burgers),t.xp6(2),t.Q6J("ngForOf",e.drinks)}}let ht=(()=>{class o{constructor(){this.value=[],this.burgers=["Hamburger","Cheeseburger"],this.drinks=["Cola","Tea","Coffee","Slurm"],this.arrow=T.TUI_ARROW}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-data-list-example-3"]],decls:7,vars:5,consts:[[3,"tuiDropdownMaxHeight","content"],["dropdown",""],["tuiIconButton","","appearance","flat","type","button",3,"icon","pseudoHover"],["content",""],[2,"width","12rem"],["tuiMultiSelectGroup","",3,"ngModel","ngModelChange"],["label","Main dishes menu with long label"],["tuiOption","","size","l",3,"value",4,"ngFor","ngForOf"],["label","Drinks"],["tuiOption","","size","l",3,"value"]],template:function(e,i){if(1&e&&(t.TgZ(0,"tui-hosted-dropdown",0,1),t._UZ(2,"button",2),t.qZA(),t.YNc(3,Nt,6,3,"ng-template",null,3,t.W1O),t.TgZ(5,"p"),t._uU(6),t.qZA()),2&e){const u=t.MAs(1),l=t.MAs(4);t.Q6J("tuiDropdownMaxHeight",500)("content",l),t.xp6(2),t.Q6J("icon",i.arrow)("pseudoHover",u.open||null),t.xp6(4),t.Oqu(i.value)}},directives:[F.o,M.Ek,E.v,g.q,C.R,N.g,h.Q,s.JJ,s.On,m.sg,D.v],encapsulation:2,changeDetection:0}),o})();var Zt=n(77027),vt=n(41360),yt=n(49746),$t=n(39607),It=n(16996),Rt=n(92483),Jt=n(48706);function Pt(o,a){if(1&o&&(t.TgZ(0,"form",14),t.TgZ(1,"tui-input",15),t._uU(2," RUB "),t.qZA(),t.qZA(),t.TgZ(3,"tui-data-list",4),t.TgZ(4,"button",16),t._uU(5," Exchange Rates: "),t.qZA(),t.qZA()),2&o){const e=t.oxw().$implicit,i=t.MAs(16),u=t.oxw();t.Q6J("formGroup",u.moneyForm),t.xp6(3),t.Q6J("tuiActiveZoneParent",e),t.xp6(1),t.Q6J("tuiDropdownManual",!0)("tuiDropdown",i)}}function Ut(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tui-calendar",17),t.NdJ("mousedown.silent.prevent",function(){return 0})("dayClick",function(u){return t.CHM(e),t.oxw(2).onDayClick(u)}),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("value",e.dateValue)}}function wt(o,a){if(1&o&&(t.TgZ(0,"form",14),t.TgZ(1,"tui-input",18),t._uU(2," Email "),t.qZA(),t.qZA()),2&o){const e=t.oxw(2);t.Q6J("formGroup",e.testForm)}}function bt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",3),t.TgZ(1,"div",19),t.TgZ(2,"tui-input",20),t.NdJ("ngModelChange",function(u){return t.CHM(e),t.oxw(2).dollar=u}),t._uU(3,"1 Rub = (X) Dollars"),t.qZA(),t.TgZ(4,"tui-input",20),t.NdJ("ngModelChange",function(u){return t.CHM(e),t.oxw(2).euro=u}),t._uU(5,"1 Rub = (Y) Euros"),t.qZA(),t.qZA(),t.TgZ(6,"ul",21),t.TgZ(7,"li",22),t._UZ(8,"tui-money",23),t.qZA(),t.TgZ(9,"li",22),t._UZ(10,"tui-money",24),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("ngModel",e.dollar),t.xp6(2),t.Q6J("ngModel",e.euro),t.xp6(4),t.Q6J("value",e.moneyValue/e.dollar),t.xp6(2),t.Q6J("value",e.moneyValue/e.euro)}}function Qt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tui-input-date-range",25),t.NdJ("ngModelChange",function(u){return t.CHM(e),t.oxw(2).rangeValue=u}),t._uU(1," Range "),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("ngModel",e.rangeValue)}}function Gt(o,a){if(1&o&&(t.TgZ(0,"tui-data-list",4),t.TgZ(1,"button",5),t._uU(2," \u{1f4b0} Money: "),t.qZA(),t.TgZ(3,"button",6),t._uU(4),t.qZA(),t.TgZ(5,"button",7),t._uU(6),t.qZA(),t.TgZ(7,"button",8),t._uU(8),t.qZA(),t.qZA(),t.YNc(9,Pt,6,4,"ng-template",null,9,t.W1O),t.YNc(11,Ut,1,1,"ng-template",null,10,t.W1O),t.YNc(13,wt,3,1,"ng-template",null,11,t.W1O),t.YNc(15,bt,11,4,"ng-template",null,12,t.W1O),t.YNc(17,Qt,2,1,"ng-template",null,13,t.W1O)),2&o){const e=a.$implicit,i=t.MAs(10),u=t.MAs(12),l=t.MAs(14),p=t.MAs(18),d=t.oxw();t.Q6J("tuiActiveZoneParent",e),t.xp6(1),t.Q6J("tuiDropdownManual",!0)("tuiDropdown",i),t.xp6(2),t.Q6J("tuiDropdownManual",!1)("tuiDropdown",u),t.xp6(1),t.hij(" \u{1f4c5} Calendar: ",d.dateValue," "),t.xp6(1),t.Q6J("tuiDropdownManual",!1)("tuiDropdown",l),t.xp6(1),t.hij(" \u{1f4e7} Email: ",d.testValue," "),t.xp6(1),t.Q6J("tuiDropdownManual",!1)("tuiDropdown",p),t.xp6(1),t.hij(" \u231b Range: ",d.rangeValue," ")}}let zt=(()=>{class o{constructor(){this.dropdownOpen=!1,this.dateValue=new r.TuiDay(2020,0,1),this.euro=87,this.dollar=75,this.testForm=new s.cw({testValue:new s.NI("mail@mail.ru")}),this.moneyForm=new s.cw({moneyValue:new s.NI(1e3)}),this.rangeValue=new r.TuiDayRange(r.TuiDay.currentLocal(),r.TuiDay.currentLocal().append({year:1}))}get testValue(){var e;return null===(e=this.testForm.get("testValue"))||void 0===e?void 0:e.value}get moneyValue(){var e;return Number(null===(e=this.moneyForm.get("moneyValue"))||void 0===e?void 0:e.value)||0}onDayClick(e){this.dateValue=e}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-data-list-example-5"]],decls:14,vars:7,consts:[["tuiDropdownLimitWidth","fixed",1,"example",3,"content","open","openChange"],["tuiButton","","appearance","outline","icon","tuiIconMoreVer","type","button","size","m",1,"example"],["content",""],[1,"example"],["tuiDataListDropdownManager","",3,"tuiActiveZoneParent"],["tuiOption","","tuiDropdownSided","","tuiDropdownAlign","right","tuiDropdownDirection","top",3,"tuiDropdownManual","tuiDropdown"],["automation-id","tui-data-list-calendar-option","tuiOption","","tuiDropdownSided","","tuiDropdownAlign","right",3,"tuiDropdownManual","tuiDropdown"],["automation-id","tui-data-list-email-option","tuiOption","","tuiDropdownSided","","tuiDropdownAlign","right",3,"tuiDropdownManual","tuiDropdown"],["automation-id","tui-data-list-range-option","tuiOption","","tuiDropdownSided","","tuiDropdownAlign","right","tuiDropdownDirection","top",3,"tuiDropdownManual","tuiDropdown"],["money",""],["calendar",""],["input",""],["currency",""],["range",""],[1,"form",3,"formGroup"],["automation-id","tui-data-money-input","formControlName","moneyValue"],["tuiOption","","tuiDropdownSided","","tuiDropdownDirection","bottom","tuiDropdownAlign","right",3,"tuiDropdownManual","tuiDropdown"],[3,"value","mousedown.silent.prevent","dayClick"],["automation-id","tui-data-list-email-field","formControlName","testValue"],["tuiGroup","",1,"group"],[3,"ngModel","ngModelChange"],[1,"exchange","tui-list","tui-list_large"],[1,"tui-list__item"],["currency","USD",3,"value"],["currency","EUR",3,"value"],["automation-id","tui-data-list-range-field",1,"form",3,"ngModel","ngModelChange"]],template:function(e,i){if(1&e&&(t.TgZ(0,"tui-hosted-dropdown",0),t.NdJ("openChange",function(l){return i.dropdownOpen=l}),t.TgZ(1,"button",1),t._uU(2," List of components "),t.qZA(),t.qZA(),t.YNc(3,Gt,19,12,"ng-template",null,2,t.W1O),t.TgZ(5,"div",3),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11),t.qZA(),t.TgZ(12,"p"),t._uU(13),t.qZA(),t.qZA()),2&e){const u=t.MAs(4);t.Q6J("content",u)("open",i.dropdownOpen),t.xp6(7),t.hij("Email: ",i.testValue,""),t.xp6(2),t.hij("Chosen date: ",i.dateValue,""),t.xp6(2),t.hij("Range date: ",i.rangeValue,""),t.xp6(2),t.AsE("Dol - ",i.dollar,", Eur - ",i.euro,"")}},directives:[F.o,M.Ek,E.v,g.q,Z.p,v.e,D.v,y.C,$.t,I.V,R.T,s._Y,s.JL,s.sg,Zt.K,vt.w,s.JJ,s.u,yt.a,$t.g,s.On,It.o,Rt.H,Jt.d],styles:[".example[_ngcontent-%COMP%]{margin-bottom:.5rem;min-width:20.25rem}.form[_ngcontent-%COMP%]{min-width:300px;overflow:hidden}.exchange[_ngcontent-%COMP%]{margin:25px}.group[_ngcontent-%COMP%]{max-width:30.25rem}"],changeDetection:0}),o})();function Yt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).open=!1}),t._uU(1),t.qZA()}if(2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e," ")}}function Xt(o,a){if(1&o&&(t.TgZ(0,"tui-opt-group",4),t.YNc(1,Yt,2,1,"button",5),t.qZA()),2&o){const e=a.$implicit;t.Q6J("label",e.label),t.xp6(1),t.Q6J("ngForOf",e.items)}}function Ht(o,a){if(1&o&&(t.TgZ(0,"tui-data-list"),t.YNc(1,Xt,2,2,"tui-opt-group",3),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.groups)}}let Wt=(()=>{class o{constructor(e){this.isMobile=e,this.open=!1,this.arrow=T.TUI_ARROW,this.groups=[{label:"Advantages of Taiga UI",items:["\u{1f9e9} Modular and fully-treeshakable. We harnessed the power of Secondary Entry Points mechanism. You can import even just one entity from our library and be sure that there is no redundant code in your bundle.","\u{1f9d9} Agnostic. Our components are very flexible and are ready for any use case. But we take care of basic UX aspects to let you focus on your project features.","\u{1f98b} Customizable. We use CSS custom properties for all our styling and provide easy methods to customize all UI components.","\u{1f6e0} Well engineered. We are not afraid to use DI to the max. All our components use OnPush, and the whole project is developed with strict TypeScript mode.","\u{1f4e6} It is big! We have 130+ components, 100+ directives, dozens of tokens, utils and tools. And it is not over yet.","\u{1f3d7} Maintained! The library started as an internal product in our company. It is used by 50+ projects in production now and it is here to stay."]},{label:"Well-engineered Taiga UI components",items:["Calendar","Dialog","ComboBox","Select"]}]}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.TUI_IS_MOBILE))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-data-list-example-6"]],decls:5,vars:5,consts:[["tuiDropdownAlign","left",3,"tuiDropdownLimitWidth","tuiDropdownMaxHeight","content","open","openChange"],["tuiButton","","appearance","flat","type","button",3,"iconRight"],["content",""],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["tuiOption","","class","option",3,"click",4,"ngFor","ngForOf"],["tuiOption","",1,"option",3,"click"]],template:function(e,i){if(1&e&&(t.TgZ(0,"tui-hosted-dropdown",0),t.NdJ("openChange",function(l){return i.open=l}),t.TgZ(1,"button",1),t._uU(2," Select why you use Taiga UI "),t.qZA(),t.qZA(),t.YNc(3,Ht,2,1,"ng-template",null,2,t.W1O)),2&e){const u=t.MAs(4);t.Q6J("tuiDropdownLimitWidth",i.isMobile?"fixed":"min")("tuiDropdownMaxHeight",700)("content",u)("open",i.open),t.xp6(1),t.Q6J("iconRight",i.arrow)}},directives:[F.o,M.Ek,E.v,g.q,m.sg,C.R,D.v],styles:[".option[_ngcontent-%COMP%]{white-space:normal}"],changeDetection:0}),o})();var Vt=n(44051),jt=n(17023),Bt=n(76349);function Kt(o,a){if(1&o&&(t.TgZ(0,"p"),t.tHW(1,2),t._UZ(2,"code"),t.N_p(),t.qZA(),t.TgZ(3,"tui-doc-example",3),t._UZ(4,"tui-data-list-example-4"),t.qZA(),t.TgZ(5,"tui-doc-example",4),t.TgZ(6,"tui-notification",5),t.tHW(7,6),t._UZ(8,"code"),t.N_p(),t.qZA(),t._UZ(9,"tui-data-list-example-1"),t.qZA(),t.TgZ(10,"tui-doc-example",7),t.TgZ(11,"tui-notification",5),t.tHW(12,8),t._UZ(13,"code"),t.N_p(),t.qZA(),t._UZ(14,"tui-data-list-example-2"),t.qZA(),t.TgZ(15,"tui-doc-example",9),t.TgZ(16,"tui-notification",5),t.tHW(17,10),t._UZ(18,"code"),t.N_p(),t.qZA(),t._UZ(19,"tui-data-list-example-3"),t.qZA(),t.TgZ(20,"tui-doc-example",11),t.TgZ(21,"tui-notification",5),t.tHW(22,12),t._UZ(23,"code"),t.N_p(),t.qZA(),t._UZ(24,"tui-data-list-example-5"),t.qZA(),t.TgZ(25,"tui-doc-example",13),t._UZ(26,"tui-data-list-example-6"),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("content",e.example4),t.xp6(2),t.Q6J("content",e.example1),t.xp6(5),t.Q6J("content",e.example2),t.xp6(5),t.Q6J("content",e.example3),t.xp6(5),t.Q6J("content",e.example5),t.xp6(5),t.Q6J("content",e.example6)}}function qt(o,a){1&o&&t.SDv(0,18)}function kt(o,a){1&o&&(t.tHW(0,19),t._UZ(1,"code"),t._UZ(2,"em"),t._UZ(3,"code"),t.N_p())}function te(o,a){1&o&&t.SDv(0,20)}function ee(o,a){1&o&&(t.tHW(0,21),t._UZ(1,"code"),t._UZ(2,"code"),t.N_p())}function oe(o,a){1&o&&(t.TgZ(0,"h2"),t._uU(1,"DataList"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,qt,1,0,"ng-template",14),t.YNc(4,kt,4,0,"ng-template",15),t.qZA(),t.TgZ(5,"h2"),t._uU(6,"OptGroup"),t.qZA(),t.TgZ(7,"tui-doc-documentation"),t.YNc(8,te,1,0,"ng-template",16),t.qZA(),t.TgZ(9,"h2"),t._uU(10,"Option"),t.qZA(),t.TgZ(11,"tui-doc-documentation"),t.YNc(12,ee,3,0,"ng-template",17),t.qZA())}function ne(o,a){if(1&o&&(t.TgZ(0,"ol",22),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,23),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",24),t.qZA(),t.TgZ(6,"li"),t.TgZ(7,"p"),t.SDv(8,25),t.qZA(),t._UZ(9,"tui-doc-code",26),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("code",e.exampleModule),t.xp6(4),t.Q6J("code",e.exampleHtml)}}let ie=(()=>{class o{constructor(){this.exampleModule=n.e(80708).then(n.t.bind(n,80708,17)),this.exampleHtml=n.e(38912).then(n.t.bind(n,38912,17)),this.example1={TypeScript:n.e(68853).then(n.t.bind(n,68853,17)),HTML:n.e(6225).then(n.t.bind(n,6225,17))},this.example2={TypeScript:n.e(62143).then(n.t.bind(n,62143,17)),HTML:n.e(95928).then(n.t.bind(n,95928,17))},this.example3={TypeScript:n.e(32985).then(n.t.bind(n,32985,17)),HTML:n.e(43035).then(n.t.bind(n,43035,17))},this.example4={TypeScript:n.e(22352).then(n.t.bind(n,22352,17)),HTML:n.e(26450).then(n.t.bind(n,26450,17)),"custom-list.component.ts":n.e(47209).then(n.t.bind(n,47209,17)),"custom-list.template.html":n.e(22657).then(n.t.bind(n,22657,17))},this.example5={TypeScript:n.e(8028).then(n.t.bind(n,8028,17)),HTML:n.e(77340).then(n.t.bind(n,77340,17)),LESS:n.e(72730).then(n.t.bind(n,72730,17))},this.example6={TypeScript:n.e(12510).then(n.t.bind(n,12510,17)),HTML:n.e(62995).then(n.t.bind(n,62995,17))}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["example-tui-data-list"]],decls:4,vars:0,consts:function(){let a,e,i,u,l,p,d,J,P,U,f,w,A,b,Q;return a=$localize`:␟f9d15c776cab9b795d1216098674f3a131512347␟7885675783778291482:${"\ufffd#2\ufffd"}:START_TAG_CODE:DataList${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to make lists or menus `,e=$localize`:␟dc60677d5a906e69f38a5cf9da7f2eb03931bea0␟7565716024468232322:Links`,i=$localize`:␟33c95483482ed8be69df5fcc5fa64b529f061437␟8571278609349877603: Import ${"\ufffd#8\ufffd"}:START_TAG_CODE:TuiArrowModule${"\ufffd/#8\ufffd"}:CLOSE_TAG_CODE: if you need a rotated arrow `,u=$localize`:␟54b9e6243f5a4c0cd2ae56b50aafa4bc56a49365␟1033431736972256177:Submenu`,l=$localize`:␟ae500c2ff8d5598534a7e200bc1362d08dc56316␟778881707317384072: Use ${"\ufffd#13\ufffd"}:START_TAG_CODE:TuiDataListDropdownManagerModule${"\ufffd/#13\ufffd"}:CLOSE_TAG_CODE: for nested menus `,p=$localize`:␟992f9aba2dd9e12cab5fdf16b03c54dae8f9703d␟8033471336283613576: Import ${"\ufffd#18\ufffd"}:START_TAG_CODE:TuiMultiSelectModule${"\ufffd/#18\ufffd"}:CLOSE_TAG_CODE:`,d=$localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`,J=$localize`:␟ae500c2ff8d5598534a7e200bc1362d08dc56316␟778881707317384072: Use ${"\ufffd#23\ufffd"}:START_TAG_CODE:TuiDataListDropdownManagerModule${"\ufffd/#23\ufffd"}:CLOSE_TAG_CODE: for nested menus `,P=$localize`:␟7d11463d87d1a3fe3dd9ad14fb82af39cc356bc4␟8684948632137613907:Options with long text`,U=$localize`:␟1396678e9343696e0ba4990b23fd3107ffaf1504␟314511360780648423: Content to display when there are no options inside `,f=$localize`:␟f57d8b200294d6e6e0b0f1fb7efe62ed640add20␟6904648380497078003: Native accessability role — ${"[\ufffd#1\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:listbox${"[\ufffd/#1\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd#2\ufffd"}:START_EMPHASISED_TEXT:(default)${"\ufffd/#2\ufffd"}:CLOSE_EMPHASISED_TEXT: or ${"[\ufffd#1\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:menu${"[\ufffd/#1\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: for common usage `,f=t.Zx4(f),w=$localize`:␟8c918c45e9c54837c94f25f61a68988a3b272035␟2059095426405918218: Group label `,A=$localize`:␟1d0af9e8a86558c15856025e01265669cfcd5d2f␟1098780179882136171: Native accessability role. Set ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:aria-checked${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: for all roles except ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:menuitem${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: (see sample) `,A=t.Zx4(A),b=$localize`:␟5328da1720bf2dec4cb435be14f74ff37d2609ef␟944971838556589360: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiDataListModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,Q=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","DataList","package","CORE","type","components"],["pageTab",""],a,["id","custom","heading","Custom list",3,"content"],["id","links","heading",e,3,"content"],[1,"tui-space_bottom-3"],i,["id","submenu","heading",u,3,"content"],l,["id","control","heading","Form control",3,"content"],p,["id","complex","heading",d,3,"content"],J,["id","long-text-options","heading",P,3,"content"],["documentationPropertyName","emptyContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","role","documentationPropertyMode","input","documentationPropertyType","TuiDataListRole"],["documentationPropertyName","label","documentationPropertyMode","input","documentationPropertyType","string"],["documentationPropertyName","role","documentationPropertyMode","input","documentationPropertyType","TuiOptionRole"],U,f,w,A,[1,"b-demo-steps"],b,["filename","myComponent.module.ts",3,"code"],Q,["filename","myComponent.template.html",3,"code"]]},template:function(e,i){1&e&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,Kt,27,6,"ng-template",1),t.YNc(2,oe,13,0,"ng-template",1),t.YNc(3,ne,10,2,"ng-template",1),t.qZA())},directives:[z.q,Y.n,X.f,ct,_t.L,Dt,St,ht,zt,Wt,Vt.z,jt.B,Bt.c],encapsulation:2,changeDetection:0}),o})(),ae=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,s.u5,s.UX,r.TuiLetModule,T.TuiMultiSelectModule,_.TuiPrimitiveTextfieldModule,T.TuiSelectModule,_.TuiTextfieldControllerModule,T.TuiArrowModule,_.TuiNotificationModule,_.TuiDataListModule,T.TuiDataListDropdownManagerModule,_.TuiSvgModule,_.TuiHostedDropdownModule,_.TuiButtonModule,_.TuiDropdownModule,r.TuiActiveZoneModule,x.fV,O.Bz.forChild((0,x.Ve)(ie)),r.TuiFilterPipeModule,_.TuiCalendarModule,T.TuiInputModule,T.TuiInputDateRangeModule,G.TuiMoneyModule,_.TuiGroupModule]]}),o})()}}]);