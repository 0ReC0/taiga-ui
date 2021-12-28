(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{G5ph:function(e,n,t){"use strict";t.r(n),t.d(n,"ExampleTuiPaginationModule",(function(){return J}));var a=t("An66"),i=t("3kIJ"),o=t("1VvW"),d=t("SVIu"),r=t("dvRg"),l=t("cWK9"),c=t("kZht"),u=t("OZlg"),p=t("e0eB"),m=t("iyc4"),s=t("cc69"),g=t("X03X");let h=(()=>{class e{constructor(){this.length=64,this.index=10}goToPage(e){this.index=e,console.info("New page:",e)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-pagination-example-1"]],decls:2,vars:5,consts:[["secondary","index","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"length","index","indexChange"]],template:function(e,n){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-slider",0),c["\u0275\u0275listener"]("ngModelChange",(function(e){return n.index=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](1,"tui-pagination",1),c["\u0275\u0275listener"]("indexChange",(function(e){return n.goToPage(e)})),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("max",n.length-1)("quantum",1)("ngModel",n.index),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("length",n.length)("index",n.index))},directives:[s.a,i.NgControlStatus,i.NgModel,g.a],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),e})(),x=(()=>{class e{constructor(){this.activePadding=2}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-pagination-example-2"]],decls:2,vars:6,consts:[["secondary","activePadding","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"activePadding","length","index"]],template:function(e,n){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-slider",0),c["\u0275\u0275listener"]("ngModelChange",(function(e){return n.activePadding=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](1,"tui-pagination",1)),2&e&&(c["\u0275\u0275property"]("max",6)("quantum",1)("ngModel",n.activePadding),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("activePadding",n.activePadding)("length",64)("index",10))},directives:[s.a,i.NgControlStatus,i.NgModel,g.a],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),e})(),f=(()=>{class e{constructor(){this.sidePadding=3}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-pagination-example-3"]],decls:2,vars:6,consts:[["secondary","sidePadding","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"sidePadding","length","index"]],template:function(e,n){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-slider",0),c["\u0275\u0275listener"]("ngModelChange",(function(e){return n.sidePadding=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](1,"tui-pagination",1)),2&e&&(c["\u0275\u0275property"]("max",6)("quantum",1)("ngModel",n.sidePadding),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("sidePadding",n.sidePadding)("length",64)("index",10))},directives:[s.a,i.NgControlStatus,i.NgModel,g.a],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),e})();function y(e,n){if(1&e&&c["\u0275\u0275text"](0),2&e){const e=n.$implicit,t=c["\u0275\u0275nextContext"]();c["\u0275\u0275textInterpolate"](t.days[e])}}let P=(()=>{class e{constructor(){this.days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-pagination-example-4"]],decls:3,vars:2,consts:[[3,"length","content"],["test",""]],template:function(e,n){if(1&e&&(c["\u0275\u0275element"](0,"tui-pagination",0),c["\u0275\u0275template"](1,y,1,1,"ng-template",null,1,c["\u0275\u0275templateRefExtractor"])),2&e){const e=c["\u0275\u0275reference"](2);c["\u0275\u0275property"]("length",7)("content",e)}},directives:[g.a],encapsulation:2,changeDetection:0}),e})();var b,C=t("EPR0"),v=t("yHor"),M=t("zGJC"),T=t("u8jZ");b=$localize`:␟b6b6dd74c9cd7f63f1aa4d62ed5050cfe6280495␟8509982288045769283: Pagination component enables the user to select a specific page from a range of pages `;const S=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],V=["heading",$localize`:␟7447e99a313dfd660dfdac371c1790c906afdfbc␟1343291924581059799:Visible pages around active`],E=["heading",$localize`:␟47ebd404b33f1353e628e1beaab432a604aa0267␟1450301538176787808:Visible edge pages`],z=["heading",$localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`];function w(e,n){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18n"](1,b),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-example",2),c["\u0275\u0275i18nAttributes"](3,S),c["\u0275\u0275element"](4,"tui-pagination-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"tui-doc-example",3),c["\u0275\u0275i18nAttributes"](6,V),c["\u0275\u0275element"](7,"tui-pagination-example-2"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"tui-doc-example",4),c["\u0275\u0275i18nAttributes"](9,E),c["\u0275\u0275element"](10,"tui-pagination-example-3"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"tui-doc-example",5),c["\u0275\u0275i18nAttributes"](12,z),c["\u0275\u0275element"](13,"tui-pagination-example-4"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example2),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example3),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example4)}}var $,N,D,A,I,q,L,O;function k(e,n){1&e&&c["\u0275\u0275i18n"](0,$)}function U(e,n){1&e&&c["\u0275\u0275i18n"](0,N)}function _(e,n){1&e&&c["\u0275\u0275i18n"](0,D)}function R(e,n){1&e&&c["\u0275\u0275i18n"](0,A)}function H(e,n){1&e&&c["\u0275\u0275i18n"](0,I)}function K(e,n){1&e&&c["\u0275\u0275i18n"](0,q)}function j(e,n){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo"),c["\u0275\u0275elementStart"](1,"tui-pagination",6),c["\u0275\u0275listener"]("indexChange",(function(n){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().index=n})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-documentation"),c["\u0275\u0275template"](3,k,1,0,"ng-template",7),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().focusable=n})),c["\u0275\u0275template"](4,U,1,0,"ng-template",8),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().index=n})),c["\u0275\u0275template"](5,_,1,0,"ng-template",9),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().length=n})),c["\u0275\u0275template"](6,R,1,0,"ng-template",10),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().size=n})),c["\u0275\u0275template"](7,H,1,0,"ng-template",11),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().activePadding=n})),c["\u0275\u0275template"](8,K,1,0,"ng-template",12),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().sidePadding=n})),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("focusable",e.focusable)("length",e.length)("size",e.size)("activePadding",e.activePadding)("sidePadding",e.sidePadding)("index",e.index),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("documentationPropertyValue",e.focusable),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.index),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.length),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.activePadding),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.sidePadding)}}function F(e,n){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",13),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,L),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",14),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,O),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",15),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleImportModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}$=$localize`:␟30781cbf047ad38e186ad68e325b742909287b00␟1810512560805883949: Accepts focus with keyboard `,N=$localize`:␟bf69fc21a86418012f148932ebe5eb91bcae5b45␟6937522081049060052: Active page index `,D=$localize`:␟7188b68f4c0ede7f60421cd661e5d0791220c304␟4207451728711936955: Total pages count `,A=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,I=$localize`:␟6ce429b0b2501d96eefb0c6f3c52e414e14909ef␟7208302007968196085: Amount of visible pages around active page `,q=$localize`:␟ce7a11e7e6703260dd3c380e666f8a12a54128ff␟8219649223317915483: Amount of visible pages at the edges `,L=$localize`:␟efadc8d4431e8d89cddff062a3ea73f171e1b8db␟4453511622032715639: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiPaginationModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,O=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let G=(()=>{class e{constructor(){this.exampleImportModule="import {TuiPaginationModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiPaginationModule\n    ],\n...\n",this.exampleInsertTemplate='<tui-pagination [length]="pageCount"\n                [index]="currentPage"\n                (indexChange)="goToPage($event)"></tui-pagination>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample1 {\n    length = 64;\n\n    index = 10;\n\n    goToPage(index: number) {\n        this.index = index;\n        console.info('New page:', index);\n    }\n}\n",HTML:'<tui-input-slider\n    secondary="index"\n    size="m"\n    class="slider"\n    [max]="length - 1"\n    [quantum]="1"\n    [(ngModel)]="index"\n></tui-input-slider>\n\n<tui-pagination\n    [length]="length"\n    [index]="index"\n    (indexChange)="goToPage($event)"\n></tui-pagination>\n',LESS:t.e(10).then(t.bind(null,"oaEK"))},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample2 {\n    activePadding = 2;\n}\n",HTML:'<tui-input-slider\n    secondary="activePadding"\n    size="m"\n    class="slider"\n    [max]="6"\n    [quantum]="1"\n    [(ngModel)]="activePadding"\n></tui-input-slider>\n\n<tui-pagination\n    [activePadding]="activePadding"\n    [length]="64"\n    [index]="10"\n></tui-pagination>\n',LESS:t.e(10).then(t.bind(null,"oaEK"))},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample3 {\n    sidePadding = 3;\n}\n",HTML:'<tui-input-slider\n    secondary="sidePadding"\n    size="m"\n    class="slider"\n    [max]="6"\n    [quantum]="1"\n    [(ngModel)]="sidePadding"\n></tui-input-slider>\n\n<tui-pagination\n    [sidePadding]="sidePadding"\n    [length]="64"\n    [index]="10"\n></tui-pagination>\n',LESS:t.e(10).then(t.bind(null,"oaEK"))},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample4 {\n    readonly days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];\n}\n",HTML:'<tui-pagination [length]="7" [content]="test"></tui-pagination>\n<ng-template #test let-index>{{days[index]}}</ng-template>\n'},this.focusable=!0,this.index=0,this.length=8,this.sizeVariants=["s","m"],this.size=this.sizeVariants[1],this.activePadding=1,this.sidePadding=1}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-pagination"]],decls:4,vars:0,consts:[["header","Pagination","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","around",3,"content",6,"heading"],["id","edges",3,"content",6,"heading"],["id","custom",3,"content",6,"heading"],[3,"focusable","length","size","activePadding","sidePadding","index","indexChange"],["documentationPropertyName","focusable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","index","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","length","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","activePadding","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","sidePadding","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,n){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,w,14,4,"ng-template",1),c["\u0275\u0275template"](2,j,9,13,"ng-template",1),c["\u0275\u0275template"](3,F,10,2,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[u.a,p.a,m.a,h,x,f,P,C.a,g.a,v.a,M.a,T.a],encapsulation:2,changeDetection:0}),e})(),J=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[r.TuiBadgeModule,r.TuiPaginationModule,r.TuiInputSliderModule,a.c,r.TuiRadioListModule,i.FormsModule,i.ReactiveFormsModule,d.h,o.f.forChild(Object(d.o)(G)),l.c]]}),e})()}}]);