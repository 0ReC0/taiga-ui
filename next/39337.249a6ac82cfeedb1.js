(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[39337],{39337:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiItemsWithMoreModule:()=>X});var n=i(88692),o=i(69900),u=i(91795),c=i(64206),r=i(78129),a=i(17326),s=i(64537),m=i(49195),l=i(79121),d=i(41763),p=i(83344),h=i(87467),g=i(82707),f=i(83074),x=i(10977),Z=i(62840),w=i(60404),T=i(43560),M=i(93525),y=i(38868);function q(e,t){if(1&e&&s._UZ(0,"tui-tag",4),2&e){const e=s.oxw().$implicit;s.Q6J("value",e)}}function _(e,t){1&e&&(s.ynx(0),s.YNc(1,q,1,1,"tui-tag",3),s.BQk())}function b(e,t){if(1&e&&s._uU(0),2&e){const e=t.$implicit,i=s.oxw();s.hij(" and ",i.getRemaining(e)," more ")}}let A=(()=>{class e{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.required=3}getRemaining(e){const t=e<this.required?e+2:e+1;return this.items.length-t}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-items-with-more-example-1"]],decls:3,vars:2,consts:[[3,"required"],[4,"ngFor","ngForOf"],["tuiMore",""],["size","m","class","tui-space_right-1",3,"value",4,"tuiItem"],["size","m",1,"tui-space_right-1",3,"value"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-items-with-more",0),s.YNc(1,_,2,0,"ng-container",1),s.YNc(2,b,1,1,"ng-template",2),s.qZA()),2&e&&(s.Q6J("required",t.required),s.xp6(1),s.Q6J("ngForOf",t.items))},dependencies:[n.sg,m.G,d.V,p.G,h.S,g.w],encapsulation:2,changeDetection:0}),e})();var C=i(68822),J=i(39607),U=i(82285),v=i(88964),k=i(62939),N=i(33250),P=i(76189),V=i(20933),Q=i(35065),L=i(34880);function Y(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-checkbox-block",4),s.NdJ("ngModelChange",(function(){s.CHM(e);const t=s.oxw().index,i=s.oxw();return s.KtG(i.onModelChange(t))})),s._uU(1),s.qZA()}if(2&e){const e=s.oxw(),t=e.index,i=e.$implicit,n=s.oxw();s.Q6J("hideCheckbox",!0)("ngModel",n.value[t]),s.xp6(1),s.hij(" ",i," ")}}function G(e,t){1&e&&(s.ynx(0),s.YNc(1,Y,2,3,"tui-checkbox-block",3),s.BQk())}function I(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"button",11),s.NdJ("click",(function(){s.CHM(e);const t=s.oxw().index,i=s.oxw(3);return s.KtG(i.onModelChange(t))})),s._uU(1),s._UZ(2,"tui-svg",12),s.qZA()}if(2&e){const e=s.oxw(),t=e.$implicit,i=e.index,n=s.oxw(3);s.xp6(1),s.hij(" ",t," "),s.xp6(1),s.ekj("_hidden",!n.value[i])}}function z(e,t){if(1&e&&(s.ynx(0),s.YNc(1,I,3,3,"button",10),s.BQk()),2&e){const e=t.index,i=s.oxw(2).$implicit;s.xp6(1),s.Q6J("ngIf",e>i)}}function F(e,t){if(1&e&&(s.TgZ(0,"tui-data-list",9),s.YNc(1,z,2,1,"ng-container",1),s.qZA()),2&e){const e=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",e.items)}}function O(e,t){if(1&e&&(s.TgZ(0,"tui-hosted-dropdown",5)(1,"button",6),s._uU(2," More "),s.TgZ(3,"tui-badge",7),s._uU(4),s.qZA()(),s.YNc(5,F,2,1,"ng-template",null,8,s.W1O),s.qZA()),2&e){const e=t.$implicit,i=s.MAs(6),n=s.oxw();s.Q6J("content",i),s.xp6(4),s.Oqu(n.items.length-e-1)}}let S=(()=>{class e{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.value=this.items.map(C.ALWAYS_FALSE_HANDLER)}onModelChange(e){this.value[e]=!this.value[e]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-items-with-more-example-2"]],decls:3,vars:2,consts:[["tuiGroup","",3,"collapsed"],[4,"ngFor","ngForOf"],["tuiMore",""],["size","m","class","item",3,"hideCheckbox","ngModel","ngModelChange",4,"tuiItem"],["size","m",1,"item",3,"hideCheckbox","ngModel","ngModelChange"],["tuiDropdownAlign","right",1,"item",3,"content"],["appearance","whiteblock","size","m","tuiButton","","type","button",1,"item"],[1,"tui-space_left-2"],["dropdown",""],["size","l"],["tuiOption","",3,"click",4,"ngIf"],["tuiOption","",3,"click"],["src","tuiIconCheck",1,"tui-space_left-2"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-items-with-more",0),s.YNc(1,G,2,0,"ng-container",1),s.YNc(2,O,7,2,"ng-template",2),s.qZA()),2&e&&(s.Q6J("collapsed",!0),s.xp6(1),s.Q6J("ngForOf",t.items))},dependencies:[n.sg,n.O5,o.JJ,o.On,J.g,d.V,p.G,h.S,g.w,U.C,v.z,k.o,N.Ek,P.v,V.q,Q.v,L.P],styles:[".item[_ngcontent-%COMP%]{border-radius:inherit;font-weight:400}._hidden[_ngcontent-%COMP%]{visibility:hidden}"],changeDetection:0}),e})();function B(e,t){if(1&e&&(s.TgZ(0,"div",2),s._uU(1,"Component to hide overflown items behind custom content."),s.qZA(),s.TgZ(2,"tui-doc-example",3)(3,"tui-notification",2),s._uU(4," Resize the screen to see extra items disappear "),s.qZA(),s._UZ(5,"tui-items-with-more-example-1"),s.qZA(),s.TgZ(6,"tui-doc-example",4),s._UZ(7,"tui-items-with-more-example-2"),s.qZA()),2&e){const e=s.oxw();s.xp6(2),s.Q6J("content",e.example1)("fullsize",!0),s.xp6(4),s.Q6J("content",e.example2)("fullsize",!0)}}function E(e,t){if(1&e&&s._UZ(0,"tui-tag",11),2&e){const e=s.oxw().$implicit;s.Q6J("value",e)}}function H(e,t){1&e&&(s.ynx(0),s.YNc(1,E,1,1,"tui-tag",10),s.BQk())}function D(e,t){1&e&&(s.TgZ(0,"span"),s._uU(1,"and now for something completely different!"),s.qZA())}function $(e,t){1&e&&s._uU(0," Artificial limit on visible items ")}function W(e,t){1&e&&s._uU(0," Index of an item that must remain visible ")}function j(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-doc-demo")(1,"tui-items-with-more",5),s.YNc(2,H,2,0,"ng-container",6),s.YNc(3,D,2,0,"span",7),s.qZA()(),s.TgZ(4,"p"),s._uU(5," Use "),s.TgZ(6,"code"),s._uU(7,"tuiItem"),s.qZA(),s._uU(8," directive for each item "),s.qZA(),s.TgZ(9,"p"),s._uU(10," Use "),s.TgZ(11,"code"),s._uU(12,"tuiMore"),s.qZA(),s._uU(13,' directive for "See more" content '),s.qZA(),s.TgZ(14,"tui-doc-documentation"),s.YNc(15,$,1,0,"ng-template",8),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const i=s.oxw();return s.KtG(i.itemsLimit=t)})),s.YNc(16,W,1,0,"ng-template",9),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const i=s.oxw();return s.KtG(i.required=t)})),s.qZA()}if(2&e){const e=s.oxw();s.xp6(1),s.Q6J("itemsLimit",e.itemsLimit)("required",e.required),s.xp6(1),s.Q6J("ngForOf",e.items),s.xp6(13),s.Q6J("documentationPropertyValues",e.itemsLimitVariants)("documentationPropertyValue",e.itemsLimit),s.xp6(1),s.Q6J("documentationPropertyValues",e.requiredVariants)("documentationPropertyValue",e.required)}}function K(e,t){if(1&e&&(s.TgZ(0,"ol",12)(1,"li")(2,"p"),s._uU(3," Import "),s.TgZ(4,"code"),s._uU(5,"TuiItemsWithMoreModule"),s.qZA(),s._uU(6," into a module where you want to use our component "),s.qZA(),s._UZ(7,"tui-doc-code",13),s.qZA(),s.TgZ(8,"li")(9,"p"),s._uU(10,"Add to the template:"),s.qZA(),s._UZ(11,"tui-doc-code",14),s.qZA()()),2&e){const e=s.oxw();s.xp6(7),s.Q6J("code",e.exampleModule),s.xp6(4),s.Q6J("code",e.exampleHtml)}}let R=(()=>{class e{constructor(){this.exampleModule=i.e(55548).then(i.t.bind(i,55548,17)),this.exampleHtml=i.e(61307).then(i.t.bind(i,61307,17)),this.example1={TypeScript:i.e(95839).then(i.t.bind(i,95839,17)),HTML:i.e(16023).then(i.t.bind(i,16023,17))},this.example2={TypeScript:i.e(76196).then(i.t.bind(i,76196,17)),HTML:i.e(93750).then(i.t.bind(i,93750,17)),LESS:i.e(86584).then(i.t.bind(i,86584,17))},this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.requiredVariants=[-1,2,4],this.itemsLimitVariants=[1/0,4,2],this.required=this.requiredVariants[0],this.itemsLimit=this.itemsLimitVariants[0]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["example-items-with-more"]],decls:4,vars:0,consts:[["header","ItemsWithMore","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],["id","base","heading","Basic",3,"content","fullsize"],["id","dropdown","heading","Dropdown",3,"content","fullsize"],[3,"itemsLimit","required"],[4,"ngFor","ngForOf"],[4,"tuiMore"],["documentationPropertyMode","input","documentationPropertyName","itemsLimit","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","required","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["class","tui-space_right-2",3,"value",4,"tuiItem"],[1,"tui-space_right-2",3,"value"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-doc-page",0),s.YNc(1,B,8,4,"ng-template",1),s.YNc(2,j,17,7,"ng-template",1),s.YNc(3,K,12,2,"ng-template",1),s.qZA())},dependencies:[n.sg,m.G,l.L,d.V,p.G,h.S,g.w,f.c,x.F,Z.z,w.B,T.q,M.n,y.f,A,S],encapsulation:2,changeDetection:0}),e})(),X=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[n.ez,o.u5,r.TuiGroupModule,a.TuiTagModule,r.TuiNotificationModule,a.TuiItemsWithMoreModule,a.TuiCheckboxBlockModule,r.TuiHostedDropdownModule,r.TuiDropdownModule,r.TuiButtonModule,r.TuiDataListModule,r.TuiSvgModule,c.fV,u.Bz.forChild((0,c.Ve)(R))]}),e})()}}]);