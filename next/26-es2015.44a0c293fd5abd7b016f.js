(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{gpkK:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiLegendItemModule",(function(){return R}));var o=n("An66"),a=n("1VvW"),i=n("UTYu"),r=n("T8fS"),l=n("SVIu"),c=n("l4xa"),d=n("cWK9"),m=(n("Qq0t"),n("kZht")),u=n("OZlg"),p=n("e0eB"),s=n("iyc4"),g=n("pdBE"),v=n("0/K7"),f=n("MyvS"),x=n("TYom");function h(e,t){if(1&e&&(m["\u0275\u0275element"](0,"tui-money",5),m["\u0275\u0275elementStart"](1,"div"),m["\u0275\u0275text"](2,"Total"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("singleColor",!0)("value",e.sum)}}function y(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-legend-item",6),m["\u0275\u0275listener"]("tuiHoveredChange",(function(n){m["\u0275\u0275restoreView"](e);const o=t.index;return m["\u0275\u0275nextContext"]().onHover(o,n)})),m["\u0275\u0275element"](1,"tui-money",5),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,o=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("color",o.getColor(n))("text",e)("active",o.isItemActive(n)),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("singleColor",!0)("value",o.value[n])}}let C=(()=>{class e{constructor(){this.activeItemIndex=null,this.value=[13769,12367,10172,3018,2592],this.sum=Object(c.sum)(...this.value),this.labels=["Food","Cafe","Open Source","Taxi","Other"]}isItemActive(e){return this.activeItemIndex===e}onHover(e,t){this.activeItemIndex=t?e:null}getColor(e){return`var(--tui-chart-${e})`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-legend-item-example-1"]],decls:6,vars:4,consts:[[1,"wrapper"],[3,"value","content","activeItemIndex","activeItemIndexChange"],["content",""],[1,"legend"],["class","item",3,"color","text","active","tuiHoveredChange",4,"ngFor","ngForOf"],[3,"singleColor","value"],[1,"item",3,"color","text","active","tuiHoveredChange"]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"tui-ring-chart",1),m["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](2,h,3,2,"ng-template",null,2,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementStart"](4,"div",3),m["\u0275\u0275template"](5,y,2,5,"tui-legend-item",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275reference"](3);m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",t.value)("content",e)("activeItemIndex",t.activeItemIndex),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("ngForOf",t.labels)}},directives:[g.a,o.s,v.a,f.a,x.a],styles:["[_nghost-%COMP%]{--tui-chart-0:#c779d0;--tui-chart-1:#feac5e;--tui-chart-2:#ff5f6d;--tui-chart-3:#4bc0c8;--tui-chart-4:#9795cd}.wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.legend[_ngcontent-%COMP%]{margin-left:2.8125rem}.item[_ngcontent-%COMP%]{margin:0 .5rem .75rem 0}"],changeDetection:0}),e})();var b=n("EPR0"),I=n("yHor"),T=n("zGJC"),S=n("u8jZ");const E=["header",$localize`:␟c3d93006062f75d305b66685eaedb021d62229ea␟1570614066977040018:LegendItem`];var P;P=$localize`:␟a984adcd40e5ae696a4b3641b5ebd09b4e409959␟6137055992947046886:A button for a legend of ring or pie charts`;const V=["heading",$localize`:␟c5f83f5f1db2e4c97d30936845035e24a84e150c␟1963043015047934208:With a ring chart`];function w(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,P),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-example",2),m["\u0275\u0275i18nAttributes"](3,V),m["\u0275\u0275element"](4,"tui-legend-item-example-1"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example1)}}var M,O,A,$,H,_;function z(e,t){1&e&&m["\u0275\u0275i18n"](0,O)}function D(e,t){1&e&&m["\u0275\u0275i18n"](0,A)}function L(e,t){1&e&&m["\u0275\u0275i18n"](0,$)}function k(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo"),m["\u0275\u0275elementStart"](1,"tui-legend-item",3),m["\u0275\u0275element"](2,"tui-money",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"p"),m["\u0275\u0275i18nStart"](4,M),m["\u0275\u0275element"](5,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"tui-doc-documentation"),m["\u0275\u0275template"](7,z,1,0,"ng-template",5),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().active=t})),m["\u0275\u0275template"](8,D,1,0,"ng-template",6),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().color=t})),m["\u0275\u0275template"](9,L,1,0,"ng-template",7),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().text=t})),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("active",e.active)("color",e.color)("text",e.text),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",123456)("singleColor",!0),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("documentationPropertyValue",e.active),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.colorVariants)("documentationPropertyValue",e.color),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.text)}}function F(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",8),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,H),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,_),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}M=$localize`:␟40d57b3cc3417571e6bc8c7bf65f54c61f261bd0␟4646256599536584910:${"\ufffd#5\ufffd"}:START_TAG_CODE:tui-money${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE: is used to format currency and fraction `,O=$localize`:␟341b67b8b895f827a618e320d690de69209958c9␟4436855227670865152: Active state from outside `,A=$localize`:␟a6f48a1d27dd6e40e08f07ea7d1c2c39684112e5␟3329374499952540134: Indicator color `,$=$localize`:␟998a01f32aef31a3065d9bfa168ba0a037f2ce0a␟7702365343132985223: Text inside `,H=$localize`:␟9e13c6dcecd09092521578f08847018f409f0433␟7576166659982546507: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiBarModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,_=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let N=(()=>{class e{constructor(){this.exampleImportModule="import {TuiLegendItemModule} from '@taiga-ui/addon-charts';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiLegendItemModule\n    ],\n...\n",this.exampleInsertTemplate='<tui-legend-item [value]="value">Content</tui-legend-item>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {sum} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-legend-item-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLegendItemExample1 {\n    activeItemIndex: number | null = null;\n\n    readonly value = [13769, 12367, 10172, 3018, 2592];\n    readonly sum = sum(...this.value);\n    readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];\n\n    isItemActive(index: number): boolean {\n        return this.activeItemIndex === index;\n    }\n\n    onHover(index: number, hovered: boolean) {\n        this.activeItemIndex = hovered ? index : null;\n    }\n\n    getColor(index: number): string {\n        return `var(--tui-chart-${index})`;\n    }\n}\n",HTML:'<div class="wrapper">\n    <tui-ring-chart\n        [value]="value"\n        [content]="content"\n        [(activeItemIndex)]="activeItemIndex"\n    ></tui-ring-chart>\n\n    <ng-template #content>\n        <tui-money [singleColor]="true" [value]="sum"></tui-money>\n        <div>Total</div>\n    </ng-template>\n\n    <div class="legend">\n        <tui-legend-item\n            *ngFor="let label of labels; let index = index"\n            class="item"\n            [color]="getColor(index)"\n            [text]="label"\n            [active]="isItemActive(index)"\n            (tuiHoveredChange)="onHover(index, $event)"\n        >\n            <tui-money [singleColor]="true" [value]="value[index]"></tui-money>\n        </tui-legend-item>\n    </div>\n</div>\n',LESS:":host {\n    --tui-chart-0: #c779d0;\n    --tui-chart-1: #feac5e;\n    --tui-chart-2: #ff5f6d;\n    --tui-chart-3: #4bc0c8;\n    --tui-chart-4: #9795cd;\n}\n\n.wrapper {\n    display: flex;\n    align-items: center;\n}\n\n.legend {\n    margin-left: 2.8125rem;\n}\n\n.item {\n    margin: 0 0.5rem 0.75rem 0;\n}\n"},this.text="Text inside",this.active=!1,this.colorVariants=["support-21","primary","secondary"],this.color=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-legend-item"]],decls:5,vars:0,consts:[["package","ADDON-CHARTS","type","components",6,"header"],["pageTab",""],["id","ring",3,"content",6,"heading"],[3,"active","color","text"],[3,"value","singleColor"],["documentationPropertyName","active","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","color","documentationPropertyMode","input","documentationPropertyType","TuiColor | string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275i18nAttributes"](1,E),m["\u0275\u0275template"](2,w,5,1,"ng-template",1),m["\u0275\u0275template"](3,k,10,9,"ng-template",1),m["\u0275\u0275template"](4,F,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[u.a,p.a,s.a,C,b.a,f.a,v.a,I.a,T.a,S.a],encapsulation:2,changeDetection:0}),e})(),R=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.TuiLegendItemModule,i.TuiRingChartModule,r.TuiMoneyModule,d.c,c.TuiHoveredModule,l.h,a.f.forChild(Object(l.o)(N))]]}),e})()}}]);