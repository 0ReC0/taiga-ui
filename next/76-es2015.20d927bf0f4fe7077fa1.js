(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{RBkr:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiLinkModule",(function(){return J}));var o=n("An66"),i=n("3kIJ"),a=n("1VvW"),l=n("SVIu"),c=n("Qq0t"),r=n("kZht"),u=n("OZlg"),d=n("e0eB"),m=n("iyc4"),p=n("yZWP");let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-link-example-1"]],decls:2,vars:0,consts:[["tuiLink","","routerLink","/components/link"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"a",0),r["\u0275\u0275text"](1,"Link"),r["\u0275\u0275elementEnd"]())},directives:[p.a,a.e],encapsulation:2,changeDetection:0}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-link-example-2"]],decls:5,vars:0,consts:[["tuiLink","","icon","tuiIconSettings"],[1,"tui-space_bottom-1"],["tuiLink","","icon","tuiIconSettings","iconAlign","left"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"a",0),r["\u0275\u0275text"](1,"Link with icon right"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](2,"p",1),r["\u0275\u0275elementStart"](3,"a",2),r["\u0275\u0275text"](4,"Link with icon left"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())},directives:[p.a],encapsulation:2,changeDetection:0}),e})();var g=n("TxeG");let k=(()=>{class e{onClick(e){console.log("click",e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-link-example-3"]],decls:29,vars:3,consts:[["href","#","tuiLink",""],["tuiMode","onLight",1,"plate","plate_light"],["tuiLink","","routerLink","/directives/mode"],["tuiLink","",3,"pseudo","click"],["tuiMode","onDark",1,"plate","plate_dark"],["href","#","tuiLink","","mode","positive"],["href","#","tuiLink","","mode","negative"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"a",0),r["\u0275\u0275text"](1,"normal"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](2,"p"),r["\u0275\u0275elementStart"](3,"span",1),r["\u0275\u0275text"](4," See "),r["\u0275\u0275elementStart"](5,"a",2),r["\u0275\u0275text"](6,"tuiMode"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](7," directive "),r["\u0275\u0275elementStart"](8,"button",3),r["\u0275\u0275listener"]("click",(function(e){return t.onClick(e)})),r["\u0275\u0275text"](9," Pseudo-link "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"span",4),r["\u0275\u0275text"](11," See "),r["\u0275\u0275elementStart"](12,"a",2),r["\u0275\u0275text"](13,"tuiMode"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](14," directive "),r["\u0275\u0275elementStart"](15,"button",3),r["\u0275\u0275listener"]("click",(function(e){return t.onClick(e)})),r["\u0275\u0275text"](16," Pseudo-link "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](17,"p"),r["\u0275\u0275elementStart"](18,"a",5),r["\u0275\u0275text"](19,"Positive link"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](20,"p"),r["\u0275\u0275elementStart"](21,"a",6),r["\u0275\u0275text"](22,"Negative link"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](23,"button",3),r["\u0275\u0275listener"]("click",(function(e){return t.onClick(e)})),r["\u0275\u0275text"](24,"Pseudo-link"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](25,"\n(If you need a pseudo-link, use\n"),r["\u0275\u0275elementStart"](26,"code"),r["\u0275\u0275text"](27,"button"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](28,"\nelement for correct work with focus)\n")),2&e&&(r["\u0275\u0275advance"](8),r["\u0275\u0275property"]("pseudo",!0),r["\u0275\u0275advance"](7),r["\u0275\u0275property"]("pseudo",!0),r["\u0275\u0275advance"](8),r["\u0275\u0275property"]("pseudo",!0))},directives:[p.a,g.a,a.e],styles:[".plate[_ngcontent-%COMP%]{display:inline-block;margin:0 -.75rem;padding:.75rem;border-radius:var(--tui-radius-m);background-color:#3e4757}.plate_light[_ngcontent-%COMP%]{background-color:#e5e7ea}.plate_dark[_ngcontent-%COMP%]{color:var(--tui-base-01)}"],changeDetection:0}),e})();var h,y=n("EPR0"),x=n("yHor"),b=n("zGJC"),L=n("u8jZ");h=$localize`:␟9f44c60a97db5faa42ae710a7a774b46fd513588␟3640324414554960056: Link component. It has focus highlight and can be customized with an icon `;const v=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],S=["heading",$localize`:␟27ce7fa0c6db3c8f4d7045c3661f318da6ee9a9b␟7005100758555430198:With icon`],C=["heading",$localize`:␟84179be0a765ac2da1a2bcf6b5b476a4e9253aab␟1387438809102966566:Modes`];function E(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275i18n"](1,h),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](2,"tui-doc-example",2),r["\u0275\u0275i18nAttributes"](3,v),r["\u0275\u0275element"](4,"tui-link-example-1"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"tui-doc-example",3),r["\u0275\u0275i18nAttributes"](6,S),r["\u0275\u0275element"](7,"tui-link-example-2"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"tui-doc-example",4),r["\u0275\u0275i18nAttributes"](9,C),r["\u0275\u0275element"](10,"tui-link-example-3"),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("content",e.example1),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("content",e.example2),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("content",e.example3)}}function P(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"a",12),r["\u0275\u0275text"](2," Link example "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("mode",e.mode)("icon",e.icon)("iconAlign",e.iconAlign)("iconRotated",e.iconRotated)}}function V(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"button",13),r["\u0275\u0275text"](1," It is a pseudo-link because it is actually a button "),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"](2);r["\u0275\u0275property"]("mode",e.mode)("icon",e.icon)("iconAlign",e.iconAlign)("pseudo",!0)("iconRotated",e.iconRotated)}}var T,M,A,w,I,_,$;function R(e,t){1&e&&r["\u0275\u0275i18n"](0,T)}function D(e,t){1&e&&(r["\u0275\u0275i18nStart"](0,M),r["\u0275\u0275elementStart"](1,"a",14),r["\u0275\u0275element"](2,"code"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275i18nEnd"]())}function O(e,t){1&e&&(r["\u0275\u0275i18nStart"](0,A),r["\u0275\u0275element"](1,"code"),r["\u0275\u0275i18nEnd"]())}function z(e,t){1&e&&r["\u0275\u0275i18n"](0,w)}function N(e,t){1&e&&r["\u0275\u0275i18n"](0,I)}function G(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"tui-doc-demo"),r["\u0275\u0275template"](1,P,3,4,"ng-container",5),r["\u0275\u0275template"](2,V,2,5,"ng-template",null,6,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"tui-doc-documentation"),r["\u0275\u0275template"](5,R,1,0,"ng-template",7),r["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().mode=t})),r["\u0275\u0275template"](6,D,3,0,"ng-template",8),r["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().icon=t})),r["\u0275\u0275template"](7,O,2,0,"ng-template",9),r["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().iconAlign=t})),r["\u0275\u0275template"](8,z,1,0,"ng-template",10),r["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().iconRotated=t})),r["\u0275\u0275template"](9,N,1,0,"ng-template",11),r["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().pseudo=t})),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275reference"](3),t=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",!t.pseudo)("ngIfElse",e),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("documentationPropertyValues",t.modeValues)("documentationPropertyValue",t.mode),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("documentationPropertyValues",t.iconVariants)("documentationPropertyValue",t.icon),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("documentationPropertyValues",t.iconAlignValues)("documentationPropertyValue",t.iconAlign),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("documentationPropertyValue",t.iconRotated),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("documentationPropertyValue",t.pseudo)}}function j(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"ol",15),r["\u0275\u0275elementStart"](1,"li"),r["\u0275\u0275elementStart"](2,"p"),r["\u0275\u0275i18nStart"](3,_),r["\u0275\u0275element"](4,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](5,"tui-doc-code",16),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"li"),r["\u0275\u0275elementStart"](7,"p"),r["\u0275\u0275i18n"](8,$),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](9,"tui-doc-code",17),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("code",e.exampleImportModule),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}T=$localize`:␟359c52cc610ab74a35e6a35eb7daae1e83c676d8␟7692372826979939400: Link mode `,M=$localize`:␟d03a90af9bc8467e5d854e31fa1aba2008f712ee␟8224576999847043867: An icon. It can be stringified svg or a name of icon registered in ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:SvgService${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK:`,A=$localize`:␟4f3b462bff6679570be2e78d798f1ac7538dfd85␟7794138143221582799: Icon align to text, ${"\ufffd#1\ufffd"}:START_TAG_CODE:right${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: by default `,w=$localize`:␟2cc758678b529522e03c10fb51854ec3f91d1221␟6173660799512285856: Rotate icon 180 deg (for dropdowns) `,I=$localize`:␟738cf572e05c2db2015af902afc94fa5893d12e0␟2798898592568079458: Pseudo-link `,_=$localize`:␟4d090082c379e23350e9be3956250a3b1ab694be␟5747552098609425760: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiLinkModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,$=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let H=(()=>{class e{constructor(){this.exampleImportModule="import {TuiLinkModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiLinkModule\n    ],\n...\n",this.exampleInsertTemplate='<a tuiLink href="#">Link</a>\n\n<a tuiLink\n   [icon]="tuiIconSettings"\n   iconAlign="left"\n   href="#">Link with icon left</a>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-link-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLinkExample1 {}\n",HTML:'<a tuiLink routerLink="/components/link">Link</a>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-link-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLinkExample2 {}\n",HTML:'<a tuiLink icon="tuiIconSettings">Link with icon right</a>\n<p class="tui-space_bottom-1">\n    <a tuiLink icon="tuiIconSettings" iconAlign="left">Link with icon left</a>\n</p>\n'},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-link-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLinkExample3 {\n    onClick(event: MouseEvent) {\n        console.log('click', event);\n    }\n}\n",HTML:'<a href="#" tuiLink>normal</a>\n<p>\n    <span tuiMode="onLight" class="plate plate_light">\n        See\n        <a tuiLink routerLink="/directives/mode">tuiMode</a>\n        directive\n        <button tuiLink [pseudo]="true" (click)="onClick($event)">\n            Pseudo-link\n        </button>\n    </span>\n</p>\n<span tuiMode="onDark" class="plate plate_dark">\n    See\n    <a tuiLink routerLink="/directives/mode">tuiMode</a>\n    directive\n    <button tuiLink [pseudo]="true" (click)="onClick($event)">\n        Pseudo-link\n    </button>\n</span>\n<p>\n    <a href="#" tuiLink mode="positive">Positive link</a>\n</p>\n<p>\n    <a href="#" tuiLink mode="negative">Negative link</a>\n</p>\n<button tuiLink [pseudo]="true" (click)="onClick($event)">Pseudo-link</button>\n(If you need a pseudo-link, use\n<code>button</code>\nelement for correct work with focus)\n'},this.pseudo=!1,this.iconRotated=!1,this.modeValues=["positive","negative"],this.mode=null,this.iconAlignValues=["right","left"],this.icon=null,this.iconVariants=["tuiIconStarLarge","tuiIconGeoLarge"],this.iconAlign=this.iconAlignValues[0]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-link"]],decls:4,vars:0,consts:[["header","Link","package","CORE","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","with-icon",3,"content",6,"heading"],["id","modes",3,"content",6,"heading"],[4,"ngIf","ngIfElse"],["pseudoLink",""],["documentationPropertyName","mode","documentationPropertyMode","input","documentationPropertyType","'positive' | 'negative' | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","icon","documentationPropertyMode","input","documentationPropertyType","string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","iconAlign","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","iconRotated","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","pseudo","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["tuiLink","",3,"mode","icon","iconAlign","iconRotated"],["tuiLink","",3,"mode","icon","iconAlign","pseudo","iconRotated"],["tuiLink","","routerLink","/services/svg-service"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"tui-doc-page",0),r["\u0275\u0275template"](1,E,11,3,"ng-template",1),r["\u0275\u0275template"](2,G,10,10,"ng-template",1),r["\u0275\u0275template"](3,j,10,2,"ng-template",1),r["\u0275\u0275elementEnd"]())},directives:[u.a,d.a,m.a,s,f,k,y.a,o.t,x.a,b.a,p.a,a.e,L.a],encapsulation:2,changeDetection:0}),e})(),J=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,i.ReactiveFormsModule,c.TuiLinkModule,c.TuiModeModule,l.h,a.f.forChild(Object(l.o)(H))]]}),e})()}}]);