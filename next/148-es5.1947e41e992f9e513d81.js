function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f17eb6975c7e319b982144e2bd8f0ee6999e9eb2e\u241f3799636229807761262:Add to the template and subscribe to a change:"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241fb353d913cbd741c6c16613accf378b4da1d7201a\u241f2830324911231252653: Import ",":START_TAG_CODE:TuiZoomModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f1ea31081e50390f86dac9d44f30ce6d662d9b486\u241f8227596913155490392:Simple"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f8b02657b209c7003ad6767912739abaeba8c40e0\u241f4091126478260922324:",":START_TAG_CODE:tuiZoom",":CLOSE_TAG_CODE: directive emits delta between wheel events or between pinch on mobile devices. It emits coordinates of the zoom center as well. You can use it to change the scale of an element as in example below "]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fe76cd6dbaa898f85934f363fef654b29e44d004b\u241f6421460271971606186:Zoom"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{LA0d:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiZoomModule",(function(){return $}));var a,o,l=n("An66"),i=n("1VvW"),c=n("SVIu"),r=n("l4xa"),m=n("kZht"),p=n("OZlg"),s=n("e0eB"),d=n("iyc4"),u=n("ZTXN"),f=n("SrNW"),b=n("jIqt"),h=n("YtkY"),g=n("GsCX"),v=((a=function(){function e(){_classCallCheck(this,e),this.delta$=new u.a,this.scale$=this.delta$.pipe(Object(f.a)((function(e,t){return Object(r.clamp)(e+t,.5,3)}),1),Object(b.a)(1)),this.transform$=this.scale$.pipe(Object(h.a)((function(e){return"scale(".concat(e,")")})))}return _createClass(e,[{key:"onZoom",value:function(e){var t=e.delta;this.delta$.next(t)}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=m["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-zoom-example-1"]],decls:7,vars:10,consts:[[1,"t-container",3,"tuiZoom"],[1,"t-zoomable"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275listener"]("tuiZoom",(function(e){return t.onZoom(e)})),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275pipe"](2,"async"),m["\u0275\u0275elementStart"](3,"span"),m["\u0275\u0275text"](4),m["\u0275\u0275pipe"](5,"number"),m["\u0275\u0275pipe"](6,"async"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275styleProp"]("transform",m["\u0275\u0275pipeBind1"](2,3,t.transform$)),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind2"](5,5,m["\u0275\u0275pipeBind1"](6,8,t.scale$),"1.0-3")))},directives:[g.a],pipes:[l.b,l.g],styles:[".t-container[_ngcontent-%COMP%], .t-zoomable[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.t-container[_ngcontent-%COMP%]{width:12rem;height:12rem;-ms-touch-action:none;touch-action:none;background-color:var(--tui-secondary)}.t-zoomable[_ngcontent-%COMP%]{width:3rem;height:3rem;background-color:var(--tui-primary);border-radius:var(--tui-radius-l)}"],changeDetection:0}),a),_=n("u8jZ"),x=["header",$localize(_templateObject())];o=$localize(_templateObject2(),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var y,C,O=["heading",$localize(_templateObject3())];function j(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18nStart"](1,o),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](4,O),m["\u0275\u0275element"](5,"tui-zoom-example-1"),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",n.example1)}}function T(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",4),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,y),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",5),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,C),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",6),m["\u0275\u0275element"](10,"tui-doc-code",7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",n.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",n.exampleInsertTemplate),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("code",n.exampleComponent)}}y=$localize(_templateObject4(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),C=$localize(_templateObject5());var w,S,Z=((S=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiZoomModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiZoomModule\n    ],\n...\n",this.exampleInsertTemplate='<div (tuiZoom)="onZoom($event)">\n    ...\n</div>\n',this.exampleComponent="scale = 1;\n\nonZoom(scale: TuiScale) {\n    this.scale += scale.delta;\n}\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {clamp, TuiZoom} from '@taiga-ui/cdk';\nimport {Subject} from 'rxjs';\nimport {map, scan, startWith} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-zoom-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiZoomExample1 {\n    readonly delta$ = new Subject<number>();\n\n    readonly scale$ = this.delta$.pipe(\n        scan((scale, next) => clamp(scale + next, 0.5, 3), 1),\n        startWith(1),\n    );\n\n    readonly transform$ = this.scale$.pipe(map(scale => `scale(${scale})`));\n\n    onZoom({delta}: TuiZoom) {\n        this.delta$.next(delta);\n    }\n}\n",HTML:'<div class="t-container" (tuiZoom)="onZoom($event)">\n    <div class="t-zoomable" [style.transform]="transform$ | async">\n        <span>{{scale$ | async | number: \'1.0-3\'}}</span>\n    </div>\n</div>\n'}}).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=m["\u0275\u0275defineComponent"]({type:S,selectors:[["example-tui-zoom"]],decls:4,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],["pageTab","Setup"],["id","multiple",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275i18nAttributes"](1,x),m["\u0275\u0275template"](2,j,6,1,"ng-template",1),m["\u0275\u0275template"](3,T,11,3,"ng-template",2),m["\u0275\u0275elementEnd"]())},directives:[p.a,s.a,d.a,v,_.a],encapsulation:2,changeDetection:0}),S),$=((w=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:w}),w.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||w)},imports:[[l.c,r.TuiZoomModule,c.h,i.f.forChild(Object(c.o)(Z))]]}),w)}}]);