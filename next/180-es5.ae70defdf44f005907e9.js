function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f29846a83e0cdbad86f552b549fcde62d80c7bf90\u241f3424664730177588095: Import an Angular module for forms and ",":START_TAG_CODE:TuiTablePaginationModule",":CLOSE_TAG_CODE: in the same module where you want to use our component: "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f45f210b96a2a6e91f52f153a4f8dc30662629f8e\u241f142654590491855672:Usage"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f6848d6df5be6ff4b71028617c374e17b8f9c36c8\u241f1478194324430836348:Component to show pagination in table footer"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{CUSP:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTablePaginationModule",(function(){return v}));var a,i,l=n("An66"),o=n("1VvW"),p=n("SVIu"),c=n("53zJ"),r=n("kZht"),m=n("OZlg"),u=n("e0eB"),s=n("iyc4"),d=n("o2jy"),g=((a=function e(){_classCallCheck(this,e),this.page=3,this.size=10}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=r["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-table-pagination-example-1"]],decls:5,vars:5,consts:[[3,"total","page","size","pageChange","sizeChange"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"tui-table-pagination",0),r["\u0275\u0275listener"]("pageChange",(function(e){return t.page=e}))("sizeChange",(function(e){return t.size=e})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](1,"p"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"p"),r["\u0275\u0275text"](4),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275property"]("total",237)("page",t.page)("size",t.size),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("Current page: ",t.page,""),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("Items per page: ",t.size,""))},directives:[d.a],styles:[".list[_ngcontent-%COMP%]{width:12.5rem}"],changeDetection:0}),a),f=n("u8jZ"),b=["pageTab",$localize(_templateObject())];i=$localize(_templateObject2());var h,C,T=["heading",$localize(_templateObject3())];function _(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275i18n"](1,i),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](2,"tui-doc-example",3),r["\u0275\u0275i18nAttributes"](3,T),r["\u0275\u0275element"](4,"tui-table-pagination-example-1"),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("content",n.example1)}}function O(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"ol",4),r["\u0275\u0275elementStart"](1,"li"),r["\u0275\u0275elementStart"](2,"p"),r["\u0275\u0275i18nStart"](3,h),r["\u0275\u0275element"](4,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](5,"tui-doc-code",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"li"),r["\u0275\u0275elementStart"](7,"p"),r["\u0275\u0275i18n"](8,C),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](9,"tui-doc-code",6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("code",n.exampleImportModule),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}h=$localize(_templateObject4(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),C=$localize(_templateObject5());var x,j,z=((j=function e(){_classCallCheck(this,e),this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-table-pagination-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTablePaginationExample1 {\n    page = 3;\n    size = 10;\n}\n",HTML:'<tui-table-pagination\n    [total]="237"\n    [(page)]="page"\n    [(size)]="size"\n></tui-table-pagination>\n<p>Current page: {{page}}</p>\n<p>Items per page: {{size}}</p>\n'},this.exampleImportModule="import {TuiTablePaginationModule} from '@taiga-ui/addon-table';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiTablePaginationModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-table-pagination [total]="total" [(page)]="page" [(size)]="size"></tui-table-pagination>\n'}).\u0275fac=function(e){return new(e||j)},j.\u0275cmp=r["\u0275\u0275defineComponent"]({type:j,selectors:[["example-tui-table-pagination"]],decls:4,vars:0,consts:[["header","TablePagination","package","ADDON-TABLE","type","components"],["pageTab",""],[6,"pageTab"],["id","usage",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"tui-doc-page",0),r["\u0275\u0275template"](1,_,5,1,"ng-template",1),r["\u0275\u0275template"](2,O,10,2,"ng-template",2),r["\u0275\u0275i18nAttributes"](3,b),r["\u0275\u0275elementEnd"]())},directives:[m.a,u.a,s.a,g,f.a],encapsulation:2,changeDetection:0}),j),v=((x=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:x}),x.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||x)},imports:[[l.c,c.d,p.h,o.f.forChild(Object(p.o)(z))]]}),x)}}]);