(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{eZqP:function(e,n,t){"use strict";t.r(n),t.d(n,"ExampleTuiAxesModule",(function(){return ce}));var a=t("An66"),o=t("1VvW"),i=t("UTYu"),r=t("T8fS"),l=t("SVIu"),s=t("Qq0t"),c=t("cWK9"),d=t("kZht"),u=t("OZlg"),m=t("e0eB"),p=t("iyc4"),x=t("ae/2");let y=(()=>{class e{constructor(){this.axisXLabels=["Jan 2019","Feb","Mar"],this.axisYLabels=["","25%","50%","75%","100%"],this.axisYSecondaryLabels=["80 k","100 k","120 k"],this.verticalLinesHandler=(e,n)=>e===n-1?"none":"dashed"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-axes-example-1"]],decls:1,vars:7,consts:[["axisYName","Target","axisYSecondaryName","Sum",1,"axes",3,"axisYInset","horizontalLines","verticalLines","axisXLabels","axisYLabels","axisYSecondaryLabels","verticalLinesHandler"]],template:function(e,n){1&e&&d["\u0275\u0275element"](0,"tui-axes",0),2&e&&d["\u0275\u0275property"]("axisYInset",!0)("horizontalLines",2)("verticalLines",3)("axisXLabels",n.axisXLabels)("axisYLabels",n.axisYLabels)("axisYSecondaryLabels",n.axisYSecondaryLabels)("verticalLinesHandler",n.verticalLinesHandler)},directives:[x.a],styles:[".axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}"],changeDetection:0}),e})();var h=t("D57K"),b=t("l4xa"),f=t("gRvT"),g=t("0/K7");function L(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"p",4),d["\u0275\u0275element"](1,"span",5),d["\u0275\u0275elementStart"](2,"span",6),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](4,"tui-money",7),d["\u0275\u0275elementEnd"]()),2&e){const e=n.$implicit,t=n.index,a=d["\u0275\u0275nextContext"]().$implicit,o=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275styleProp"]("background",o.getBackground(t),d["\u0275\u0275defaultStyleSanitizer"]),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](o.getSetName(t)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("singleColor",!0)("value",1e3*e[a])}}function P(e,n){if(1&e&&d["\u0275\u0275template"](0,L,5,5,"p",3),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("ngForOf",e.value)}}let v=(()=>{class e{constructor(){this.value=[[10,20,3,7],[15,18,24,1],[34,23,12,9],[30,14,18,14]],this.axisYSecondaryLabels=["",this.getMax(this.value)/2+" k",this.getMax(this.value)+" k"],this.axisXLabels=["Q1","Q2","Q3","Q4"],this.horizontalLinesHandler=i.TUI_ALWAYS_DASHED,this.verticalLinesHandler=i.TUI_ALWAYS_NONE,this.setNames=["cdk","core","kit","charts"]}getPercent(e){return 100*Math.max(...e)/this.getMax(this.value)}getSetName(e){return this.setNames[e]}getBackground(e){return`var(--tui-chart-${e})`}getMax(e){return Object(b.ceil)(e.reduce((e,n)=>Math.max(...n,e),0),-1)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-axes-example-2"]],decls:4,vars:8,consts:[["axisY","none",1,"axes",3,"axisXLabels","axisYSecondaryLabels","horizontalLines","verticalLines","horizontalLinesHandler","verticalLinesHandler"],[1,"chart",3,"value","hintContent"],["hint",""],["class","hint",4,"ngFor","ngForOf"],[1,"hint"],[1,"dot"],[1,"name"],[3,"singleColor","value"]],template:function(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",0),d["\u0275\u0275element"](1,"tui-bar-chart",1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](2,P,1,1,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"])),2&e){const e=d["\u0275\u0275reference"](3);d["\u0275\u0275property"]("axisXLabels",n.axisXLabels)("axisYSecondaryLabels",n.axisYSecondaryLabels)("horizontalLines",2)("verticalLines",4)("horizontalLinesHandler",n.horizontalLinesHandler)("verticalLinesHandler",n.verticalLinesHandler),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("value",n.value)("hintContent",e)}},directives:[x.a,f.a,a.s,g.a],styles:[".hint[_ngcontent-%COMP%], [_nghost-%COMP%]{--tui-chart-0:#c779d0;--tui-chart-1:#feac5e;--tui-chart-2:#ff5f6d;--tui-chart-3:#4bc0c8}.axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}.chart[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{height:100%}.wrapper[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:-.0625rem;cursor:pointer}.wrapper[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.05)}.hint[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.dot[_ngcontent-%COMP%]{border-radius:100%;width:.75rem;height:.75rem}.dot[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]{margin-right:.5rem}"],changeDetection:0}),Object(h.b)([b.tuiPure],e.prototype,"getMax",null),e})();var V=t("EPR0"),Y=t("yHor"),S=t("zGJC"),C=t("u8jZ");const T=["header",$localize`:␟157063b95e7de3b711a5e65f8b1b4a66bf51a9a7␟3176053473328457908:Axes`];var M;M=$localize`:␟299892581b7c29a4afe856bb50e83f932e7c19f9␟3749794859286359761:Just axes for charts`;const N=["heading",$localize`:␟9b735478d27ada48a6cc734cb7f499ffe3b60f31␟5400608477820076858:Cool one`],z=["heading",$localize`:␟befa476ed5c37d3ed4be47fe5759c340c6e24cd4␟927609271953315702:With bars`];function H(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,M),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](3,N),d["\u0275\u0275element"](4,"tui-axes-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](6,z),d["\u0275\u0275element"](7,"tui-axes-example-2"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2)}}var A,w,I,E,k,_,O,X,$,D,U,W,Q,R,j;function B(e,n){1&e&&d["\u0275\u0275i18n"](0,A)}function J(e,n){1&e&&(d["\u0275\u0275i18nStart"](0,w),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275i18nEnd"]())}function F(e,n){1&e&&d["\u0275\u0275i18n"](0,I)}function G(e,n){1&e&&d["\u0275\u0275i18n"](0,E)}function Z(e,n){1&e&&d["\u0275\u0275i18n"](0,k)}function K(e,n){1&e&&d["\u0275\u0275i18n"](0,_)}function q(e,n){1&e&&d["\u0275\u0275i18n"](0,O)}function ee(e,n){1&e&&d["\u0275\u0275i18n"](0,X)}function ne(e,n){1&e&&d["\u0275\u0275i18n"](0,$)}function te(e,n){1&e&&d["\u0275\u0275i18n"](0,D)}function ae(e,n){1&e&&d["\u0275\u0275i18n"](0,U)}function oe(e,n){1&e&&d["\u0275\u0275i18n"](0,W)}function ie(e,n){1&e&&d["\u0275\u0275i18n"](0,Q)}function re(e,n){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275element"](1,"tui-axes",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-documentation"),d["\u0275\u0275template"](3,B,1,0,"ng-template",5),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisX=n})),d["\u0275\u0275template"](4,J,2,0,"ng-template",6),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisXLabels=n})),d["\u0275\u0275template"](5,F,1,0,"ng-template",7),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisY=n})),d["\u0275\u0275template"](6,G,1,0,"ng-template",8),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisYInset=n})),d["\u0275\u0275template"](7,Z,1,0,"ng-template",9),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisYLabels=n})),d["\u0275\u0275template"](8,K,1,0,"ng-template",10),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisYName=n})),d["\u0275\u0275template"](9,q,1,0,"ng-template",11),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisYSecondaryInset=n})),d["\u0275\u0275template"](10,ee,1,0,"ng-template",12),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisYSecondaryLabels=n})),d["\u0275\u0275template"](11,ne,1,0,"ng-template",13),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisYSecondaryName=n})),d["\u0275\u0275template"](12,te,1,0,"ng-template",14),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().horizontalLines=n})),d["\u0275\u0275template"](13,ae,1,0,"ng-template",15),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().horizontalLinesHandler=n})),d["\u0275\u0275template"](14,oe,1,0,"ng-template",16),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().verticalLines=n})),d["\u0275\u0275template"](15,ie,1,0,"ng-template",17),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().verticalLinesHandler=n})),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("axisX",e.axisX)("axisXLabels",e.axisXLabels)("axisY",e.axisY)("axisYInset",e.axisYInset)("axisYLabels",e.axisYLabels)("axisYName",e.axisYName)("axisYSecondaryInset",e.axisYSecondaryInset)("axisYSecondaryLabels",e.axisYSecondaryLabels)("axisYSecondaryName",e.axisYSecondaryName)("horizontalLines",e.horizontalLines)("horizontalLinesHandler",e.horizontalLinesHandler)("verticalLines",e.verticalLines)("verticalLinesHandler",e.verticalLinesHandler),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValues",e.lineVariants)("documentationPropertyValue",e.axisX),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.labelsVariants)("documentationPropertyValue",e.axisXLabels),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.lineVariants)("documentationPropertyValue",e.axisY),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.axisYInset),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.labelsVariants)("documentationPropertyValue",e.axisYLabels),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.axisYName),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.axisYSecondaryInset),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.labelsVariants)("documentationPropertyValue",e.axisYSecondaryLabels),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.axisYSecondaryName),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.horizontalLines),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.handlerVariants)("documentationPropertyValue",e.horizontalLinesHandler),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.verticalLines),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.handlerVariants)("documentationPropertyValue",e.verticalLinesHandler)}}function le(e,n){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",18),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,R),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",19),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,j),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",20),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleImportModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}A=$localize`:␟f64e1f5d1e794dab4b787c26bf022a2c9898d1ef␟7040174970690647937: Axis X `,w=$localize`:␟2f8e23a3f6977505fbbb8b3213e5912e32a2188d␟5270458325684962839: Labels for X. Emptry string is empty stroke, ${"\ufffd#1\ufffd"}:START_TAG_CODE:null${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: — no stroke `,I=$localize`:␟2642d8e7bc40dbf7276fb69cb640c80ac1c07be9␟5140923464869546529: Axis Y `,E=$localize`:␟60800456eca99202fc6cebb2fc9f5a10a5e0a72d␟2837390181413385612: Inset of labels on axis Y `,k=$localize`:␟06d8e98f8b5258586ff187e97dae0d16518e9ab5␟2657129922321475589: Labels for Y `,_=$localize`:␟7e478ef44515adc35026c32852851c7f7d84d651␟4037762709948884159: Name of Y axis `,O=$localize`:␟ac60157a8311a55856019cafd6b36016eb669dab␟1884145993509521583: Inset labels for Y `,X=$localize`:␟83b47ed4c100d02f8d9266656e0a0cd4868829a1␟5391635047792570800: Secondary Y axis labels `,$=$localize`:␟264edf3e9d07bdae2defe9a9a8083e92d020d303␟1495535954616436734: Secondary Y axis name `,D=$localize`:␟b320bfbd957dcc40c0482581c996f149ec3ffbf5␟8249773395630076811: Horizontal lines number `,U=$localize`:␟36af86f2988f299294e7c3e39259c33da740851b␟7177151488130232990: Horizontal lines type handler `,W=$localize`:␟5495dd2570db74aef538977c664775059a1554c9␟6546346680735354696: Number of vertical lines `,Q=$localize`:␟cf738f0fc8a03a466440318b0f21a2b9199b10c6␟1142374539392645294: Vertical lines type handler `,R=$localize`:␟44a035fbfcb4f3f0ef301785a4fea1e80b4afe55␟2561454909924995663: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAxesModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,j=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let se=(()=>{class e{constructor(){this.exampleImportModule="import {TuiAxesModule} from '@taiga-ui/addon-charts';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiAxesModule\n    ],\n...\n",this.exampleInsertTemplate='<tui-axes [value]="value"></tui-axes>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLineHandler} from '@taiga-ui/addon-charts';\n\n@Component({\n    selector: 'tui-axes-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAxesExample1 {\n    readonly axisXLabels = ['Jan 2019', 'Feb', 'Mar'];\n    readonly axisYLabels = ['', '25%', '50%', '75%', '100%'];\n    readonly axisYSecondaryLabels = ['80 k', '100 k', '120 k'];\n    readonly verticalLinesHandler: TuiLineHandler = (index, total) =>\n        index === total - 1 ? 'none' : 'dashed';\n}\n",HTML:'<tui-axes\n    axisYName="Target"\n    axisYSecondaryName="Sum"\n    class="axes"\n    [axisYInset]="true"\n    [horizontalLines]="2"\n    [verticalLines]="3"\n    [axisXLabels]="axisXLabels"\n    [axisYLabels]="axisYLabels"\n    [axisYSecondaryLabels]="axisYSecondaryLabels"\n    [verticalLinesHandler]="verticalLinesHandler"\n></tui-axes>\n',LESS:".axes {\n    height: 18.75rem;\n    width: 37.5rem;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_ALWAYS_DASHED, TUI_ALWAYS_NONE} from '@taiga-ui/addon-charts';\nimport {ceil, tuiPure} from '@taiga-ui/cdk';\n\nconst BENJI = 100;\n\n@Component({\n    selector: 'tui-axes-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAxesExample2 {\n    readonly value: ReadonlyArray<[number, number, number, number]> = [\n        [10, 20, 3, 7],\n        [15, 18, 24, 1],\n        [34, 23, 12, 9],\n        [30, 14, 18, 14],\n    ];\n\n    readonly axisYSecondaryLabels = [\n        '',\n        `${this.getMax(this.value) / 2} k`,\n        `${this.getMax(this.value)} k`,\n    ];\n\n    readonly axisXLabels = ['Q1', 'Q2', 'Q3', 'Q4'];\n\n    readonly horizontalLinesHandler = TUI_ALWAYS_DASHED;\n\n    readonly verticalLinesHandler = TUI_ALWAYS_NONE;\n\n    private readonly setNames = ['cdk', 'core', 'kit', 'charts'];\n\n    getPercent(set: [number, number, number, number]): number {\n        return (BENJI * Math.max(...set)) / this.getMax(this.value);\n    }\n\n    getSetName(index: number): string {\n        return this.setNames[index];\n    }\n\n    getBackground(index: number): string {\n        return `var(--tui-chart-${index})`;\n    }\n\n    @tuiPure\n    private getMax(value: ReadonlyArray<[number, number, number, number]>): number {\n        return ceil(\n            value.reduce((max, value) => Math.max(...value, max), 0),\n            -1,\n        );\n    }\n}\n",HTML:'<tui-axes\n    axisY="none"\n    class="axes"\n    [axisXLabels]="axisXLabels"\n    [axisYSecondaryLabels]="axisYSecondaryLabels"\n    [horizontalLines]="2"\n    [verticalLines]="4"\n    [horizontalLinesHandler]="horizontalLinesHandler"\n    [verticalLinesHandler]="verticalLinesHandler"\n>\n    <tui-bar-chart\n        class="chart"\n        [value]="value"\n        [hintContent]="hint"\n    ></tui-bar-chart>\n</tui-axes>\n\n<ng-template #hint let-setIndex>\n    <p *ngFor="let item of value; let index = index" class="hint">\n        <span class="dot" [style.background]="getBackground(index)"></span>\n        <span class="name">{{getSetName(index)}}</span>\n        <tui-money\n            [singleColor]="true"\n            [value]="item[setIndex] * 1000"\n        ></tui-money>\n    </p>\n</ng-template>\n',LESS:":host,\n.hint {\n    --tui-chart-0: #c779d0;\n    --tui-chart-1: #feac5e;\n    --tui-chart-2: #ff5f6d;\n    --tui-chart-3: #4bc0c8;\n}\n\n.axes {\n    height: 18.75rem;\n    width: 37.5rem;\n}\n\n.chart {\n    height: 100%;\n}\n\n.wrapper {\n    position: relative;\n    display: flex;\n    flex: 1;\n    align-items: flex-end;\n    justify-content: center;\n    height: 100%;\n    margin-bottom: -0.0625rem;\n    cursor: pointer;\n\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.05);\n    }\n}\n\n.hint {\n    display: flex;\n    align-items: center;\n}\n\n.dot {\n    border-radius: 100%;\n    width: 0.75rem;\n    height: 0.75rem;\n    margin-right: 0.5rem;\n}\n\n.name {\n    margin-right: 0.5rem;\n}\n"},this.lineVariants=["solid","dashed","none","hidden"],this.labelsVariants=[[],["","25%","50%","100%"],["One","Two","Three"],["One",null,"","Two and a half","Three",null]],this.handlerVariants=[i.TUI_ALWAYS_SOLID,i.TUI_ALWAYS_DASHED,e=>e%2?"dashed":"solid"],this.axisX=this.lineVariants[0],this.axisXLabels=this.labelsVariants[0],this.axisY=this.lineVariants[0],this.axisYInset=!1,this.axisYLabels=this.labelsVariants[0],this.axisYName="",this.axisYSecondaryInset=!1,this.axisYSecondaryLabels=this.labelsVariants[0],this.axisYSecondaryName="",this.horizontalLines=0,this.horizontalLinesHandler=this.handlerVariants[0],this.verticalLines=0,this.verticalLinesHandler=this.handlerVariants[1]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-axes"]],decls:5,vars:0,consts:[["package","ADDON-CHARTS","type","components",6,"header"],["pageTab",""],["id","advanced",3,"content",6,"heading"],["id","bars",3,"content",6,"heading"],[1,"axes",3,"axisX","axisXLabels","axisY","axisYInset","axisYLabels","axisYName","axisYSecondaryInset","axisYSecondaryLabels","axisYSecondaryName","horizontalLines","horizontalLinesHandler","verticalLines","verticalLinesHandler"],["documentationPropertyName","axisX","documentationPropertyMode","input","documentationPropertyType","TuiLineTypeT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisXLabels","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<string | null>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisY","documentationPropertyMode","input","documentationPropertyType","TuiLineTypeT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYInset","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYLabels","documentationPropertyMode","input","documentationPropertyType","readonly string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYName","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYSecondaryInset","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYSecondaryLabels","documentationPropertyMode","input","documentationPropertyType","readonly string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYSecondaryName","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","horizontalLines","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","horizontalLinesHandler","documentationPropertyMode","input","documentationPropertyType","TuiLineHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","verticalLines","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","verticalLinesHandler","documentationPropertyMode","input","documentationPropertyType","TuiLineHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,n){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,T),d["\u0275\u0275template"](2,H,8,2,"ng-template",1),d["\u0275\u0275template"](3,re,16,33,"ng-template",1),d["\u0275\u0275template"](4,le,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[u.a,m.a,p.a,y,v,V.a,x.a,Y.a,S.a,C.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem}"],changeDetection:0}),e})(),ce=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[a.c,o.f,i.TuiAxesModule,i.TuiBarChartModule,s.TuiHintModule,c.c,r.TuiMoneyModule,l.h,o.f.forChild(Object(l.o)(se))]]}),e})()}}]);