(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[90648],{90648:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiDataListWrapperModule:()=>J});var i=n(86568),a=n(35856),o=n(82312),r=n(59130),s=n(43840),u=n(91009),l=n(6528),p=n(13692),m=n(95356),c=n(56616),d=n(34496),y=n(37288),h=n(83480),f=n(76004),C=n(2036),T=n(73148),b=n(61920),w=n(5204);function I(e,t){if(1&e&&(l.wR5(0,"tui-data-list-wrapper",2),l.wVc(1,"tuiFilterByInput")),2&e){const e=l.GaO();l.E7m("disabledItemHandler",e.disabledItemHandler)("items",l.kDX(1,2,e.items))}}let E=(()=>{var e;class t{constructor(){this.control=new a.Ku(""),this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.disabledItemHandler=e=>e.startsWith("T")}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["tui-data-list-wrapper-example-1"]],decls:3,vars:1,consts:[[3,"formControl"],["emptyContent","No results found","size","xs",3,"disabledItemHandler","items",4,"tuiDataList"],["emptyContent","No results found","size","xs",3,"disabledItemHandler","items"]],template:function(e,t){1&e&&(l.I0R(0,"tui-input",0),l.OEk(1," Account "),l.yuY(2,I,2,4,"tui-data-list-wrapper",1),l.C$Y()),2&e&&l.E7m("formControl",t.control)},dependencies:[a.ue,a.ug,f.O,C.U,T.O,b.c,w.E],encapsulation:2,changeDetection:0}),t})();var g=n(5604),k=n(81056),O=n(7332),Y=n(67764),x=n(89616);function R(e,t){if(1&e&&(l.wR5(0,"tui-data-list-wrapper",2),l.wVc(1,"tuiStringifyContent"),l.wVc(2,"tuiFilterByInputWith")),2&e){const e=l.GaO();l.E7m("itemContent",l.kDX(1,2,e.stringify))("items",l.g7$(2,4,e.items,e.stringify))}}let M=(()=>{var e;class t{constructor(){this.control=new a.Ku(null),this.items=[{name:"John",surname:"Cleese"},{name:"Eric",surname:"Idle"},{name:"Graham",surname:"Chapman"},{name:"Michael",surname:"Palin"},{name:"Terry",surname:"Gilliam"},{name:"Terry",surname:"Jones"}],this.stringify=e=>`${e.name} ${e.surname}`}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["tui-data-list-wrapper-example-2"]],decls:5,vars:3,consts:[[3,"formControl","stringify","tuiTextfieldLabelOutside"],[3,"itemContent","items",4,"tuiDataList"],[3,"itemContent","items"]],template:function(e,t){1&e&&(l.I0R(0,"label"),l.OEk(1," Type a name: "),l.I0R(2,"tui-combo-box",0),l.OEk(3," Account "),l.yuY(4,R,3,7,"tui-data-list-wrapper",1),l.C$Y()()),2&e&&(l.yG2(2),l.E7m("formControl",t.control)("stringify",t.stringify)("tuiTextfieldLabelOutside",!0))},dependencies:[a.ue,a.ug,g.i,k.q,f.O,C.U,O.E,Y.e,x.M],encapsulation:2,changeDetection:0}),t})();var P=n(46599);function $(e,t){if(1&e&&l.wR5(0,"tui-data-list-wrapper",2),2&e){const e=l.GaO();l.E7m("items",e.items)("labels",e.labels)}}let G=(()=>{var e;class t{constructor(){this.control=new a.Ku(""),this.items=[["Caesar","Greek","Apple and Chicken"],["Broccoli Cheddar","Chicken and Rice","Chicken Noodle"]],this.labels=["Salad","Soup"]}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["tui-data-list-wrapper-example-3"]],decls:3,vars:1,consts:[[3,"formControl"],[3,"items","labels",4,"tuiDataList"],[3,"items","labels"]],template:function(e,t){1&e&&(l.I0R(0,"tui-input",0),l.OEk(1," Menu "),l.yuY(2,$,1,2,"tui-data-list-wrapper",1),l.C$Y()),2&e&&l.E7m("formControl",t.control)},dependencies:[a.ue,a.ug,P._,C.U,T.O,b.c],encapsulation:2,changeDetection:0}),t})();function D(e,t){if(1&e&&(l.I0R(0,"p")(1,"code"),l.OEk(2,"DataListWrapper"),l.C$Y(),l.OEk(3," is an abstraction over "),l.I0R(4,"code"),l.OEk(5,"DataList"),l.C$Y(),l.OEk(6," to simplify usage in common cases where precise control is not necessary. "),l.C$Y(),l.I0R(7,"tui-doc-example",2),l.wR5(8,"tui-data-list-wrapper-example-1"),l.C$Y(),l.I0R(9,"tui-doc-example",3),l.wR5(10,"tui-data-list-wrapper-example-2"),l.C$Y(),l.I0R(11,"tui-doc-example",4),l.wR5(12,"tui-data-list-wrapper-example-3"),l.C$Y()),2&e){const e=l.GaO();l.yG2(7),l.E7m("content",e.example1),l.yG2(2),l.E7m("content",e.example2),l.yG2(2),l.E7m("content",e.example3)}}function L(e,t){1&e&&l.OEk(0," Items to select ")}function v(e,t){1&e&&l.OEk(0," Content of an item ")}function H(e,t){1&e&&l.OEk(0," Content to display when there are no options inside ")}function S(e,t){1&e&&(l.I0R(0,"div"),l.OEk(1,"A handler that gets an item and returns true if it is disabled."),l.C$Y(),l.I0R(2,"strong"),l.OEk(3,"Must be a pure function"),l.C$Y())}function N(e,t){1&e&&l.OEk(0," Size of items ")}function W(e,t){1&e&&l.OEk(0," Group label ")}function z(e,t){1&e&&(l.I0R(0,"h2"),l.OEk(1,"DataListWrapper"),l.C$Y(),l.I0R(2,"tui-doc-documentation"),l.yuY(3,L,1,0,"ng-template",5),l.yuY(4,v,1,0,"ng-template",6),l.yuY(5,H,1,0,"ng-template",7),l.yuY(6,S,4,0,"ng-template",8),l.yuY(7,N,1,0,"ng-template",9),l.yuY(8,W,1,0,"ng-template",10),l.C$Y())}function A(e,t){if(1&e&&(l.I0R(0,"ol",11)(1,"li")(2,"p"),l.OEk(3," Import "),l.I0R(4,"code"),l.OEk(5,"TuiDataListWrapperModule"),l.C$Y(),l.OEk(6," into a module where you want to use our component "),l.C$Y(),l.wR5(7,"tui-doc-code",12),l.C$Y(),l.I0R(8,"li")(9,"p"),l.OEk(10,"Add to the template:"),l.C$Y(),l.wR5(11,"tui-doc-code",13),l.C$Y()()),2&e){const e=l.GaO();l.yG2(7),l.E7m("code",e.exampleModule),l.yG2(4),l.E7m("code",e.exampleHtml)}}let B=(()=>{var e;class t{constructor(){this.exampleModule=n.e(62808).then(n.t.bind(n,62808,17)),this.exampleHtml=n.e(8692).then(n.t.bind(n,31072,17)),this.example1={TypeScript:n.e(6924).then(n.t.bind(n,84544,17)),HTML:n.e(50200).then(n.t.bind(n,50200,17))},this.example2={TypeScript:n.e(19552).then(n.t.bind(n,19552,17)),HTML:n.e(98256).then(n.t.bind(n,98256,17))},this.example3={TypeScript:n.e(37084).then(n.t.bind(n,37084,17)),HTML:n.e(83848).then(n.t.bind(n,83848,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["example-tui-data-list-wrapper"]],decls:4,vars:0,consts:[["header","DataListWrapper","package","KIT","type","components"],["pageTab",""],["id","disable","heading","Disables items that start with T",3,"content"],["id","custom","heading","Custom item content",3,"content"],["id","group-by","heading","Group by labels",3,"content"],["documentationPropertyMode","input","documentationPropertyName","items","documentationPropertyType","T[] | T[][] | null"],["documentationPropertyMode","input","documentationPropertyName","itemContent","documentationPropertyType","PolymorpheusContent<TuiValueContentContext<T>>"],["documentationPropertyMode","input","documentationPropertyName","emptyContent","documentationPropertyType","PolymorpheusContent"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<T>"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeL | TuiSizeXS"],["documentationPropertyMode","input","documentationPropertyName","labels","documentationPropertyType","string[]"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(l.I0R(0,"tui-doc-page",0),l.yuY(1,D,13,3,"ng-template",1),l.yuY(2,z,9,0,"ng-template",1),l.yuY(3,A,12,2,"ng-template",1),l.C$Y())},dependencies:[p.u,m.I,c.S,d.E,y.u,h.I,E,M,G],encapsulation:2,changeDetection:0}),t})(),J=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=l.a4G({type:e}),e.ɵinj=l.s3X({imports:[i.MD,a.y,a.sl,o.qQ.forChild((0,r._A)(B)),r.kx,u.TuiComboBoxModule,u.TuiDataListWrapperModule,u.TuiFilterByInputPipeModule,u.TuiInputModule,u.TuiStringifyContentPipeModule,s.TuiTextfieldControllerModule]}),t})()}}]);