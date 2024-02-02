(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97090],{97090:(e,t,i)=>{i.r(t),i.d(t,{IconsBundledModule:()=>S});var n=i(39163),o=i(86568),s=i(35856),r=i(82312),a=i(59130),c=i(43840),u=i(91009),l=i(6528),d=i(55412),m=i(13692),p=i(34496),g=i(37288),h=i(83480),f=i(1100),k=i(47819),I=i(18917),E=i(83376),w=i(79800),y=i(76468),O=i(14184),v=i(79848);let C,R=e=>e;function x(e,t){if(1&e&&(l.SAx(0),l.I0R(1,"h2"),l.OEk(2,"Custom named icon"),l.C$Y(),l.wR5(3,"tui-svg",2),l.I0R(4,"h2"),l.OEk(5,"Named icon"),l.C$Y(),l.wR5(6,"tui-svg",3),l.I0R(7,"h2"),l.OEk(8,"Source code"),l.C$Y(),l.wR5(9,"tui-svg",4)(10,"br")(11,"tui-svg",5),l.I0R(12,"h2"),l.OEk(13,"External link"),l.C$Y(),l.wR5(14,"tui-svg",6),l.I0R(15,"h2"),l.OEk(16,"External segment link"),l.C$Y(),l.wR5(17,"tui-svg",7),l.k70()),2&e){const e=l.GaO();l.yG2(9),l.E7m("src",e.tuiIconClockLarge),l.yG2(2),l.E7m("src",e.svg),l.yG2(6),l.E7m("src",e.imageUrl)}}let b=(()=>{var e;class t{constructor(e,t){this.sanitizer=t,this.timeout$=(0,y.k)(0).pipe((0,O.k)(I.ALWAYS_TRUE_HANDLER)),this.imageUrl=(0,k._)(C||(C=R`/images/ts.svg#ts`)),this.svg='\n<svg height="6.25rem" id="svg" viewbox="0 0 200 200" width="6.25rem" xmlns="http://www.w3.org/2000/svg">\n    <linearGradient id="grad">\n        <stop class="stop stop--1" offset="0" stop-color="crimson" />\n        <stop class="stop stop--2" offset="49%" stop-color="gold" />\n        <stop class="stop stop--2" offset="51%" stop-color="gold" />\n        <stop class="stop stop--3" offset="100%" stop-color="teal" />\n    </linearGradient>\n\n    <pattern height="2" id="pattern" patternUnits="userSpaceOnUse" viewBox="0 0 50 50" width="2">\n        <path d="M0,50 50,0" stroke="black" stroke-width="6" />\n    </pattern>\n\n    <mask id="mask">\n        <rect fill="white" height="100%" width="100%" />\n        <rect fill="url(#pattern)" height="100%" width="100%" />\n    </mask>\n\n    <g mask="url(#mask)">\n        <text dy=".25em" fill="none" stroke="url(#grad)" stroke-width=".25" text-anchor="middle" x="50.7%" y="50.7%">\n            Text\n        </text>\n        <text dy=".25em" fill="url(#grad)" text-anchor="middle" x="50%" y="50%">\n            Text\n        </text>\n    </g>\n</svg>\n',this.tuiIconClockLarge=this.sanitizer.bypassSecurityTrustHtml(E.tuiIconClockLarge),e.define({customTuiIconMaestro:E.tuiIconMaestro,customTuiIconMastercard:E.tuiIconMastercard})}}return(e=t).ɵfac=function(t){return new(t||e)(l.GI1(c.TuiSvgService),l.GI1(f.mI))},e.ɵcmp=l.In1({type:e,selectors:[["tui-icons-bundled-example-1"]],features:[l.M5G([{provide:c.TUI_SANITIZER,useClass:w.IT}])],decls:5,vars:3,consts:[["src","customTuiIconMaestro",1,"icon"],[4,"ngIf"],["src","customTuiIconMastercard",1,"icon"],["src","tuiIconThumbsUpLarge",1,"icon"],[3,"src"],[1,"source",3,"src"],["src","https://ng-web-apis.github.io/dist/assets/images/web-api.svg",1,"external-icon"],[1,"icon",3,"src"]],template:function(e,t){1&e&&(l.I0R(0,"h2"),l.OEk(1,"Named icon from ShadowDOM"),l.C$Y(),l.wR5(2,"tui-svg",0),l.yuY(3,x,18,3,"ng-container",1),l.wVc(4,"async")),2&e&&(l.yG2(3),l.E7m("ngIf",l.kDX(4,1,t.timeout$)))},dependencies:[o.u_,v.W,o.a],styles:[".icon[_ngcontent-%COMP%]{width:2rem;height:2rem}.external-icon[_ngcontent-%COMP%]{width:auto;height:auto}.source[_ngcontent-%COMP%]{font-family:Georgia,sans-serif;font-size:5rem;font-weight:700;width:6.25rem;height:6.25rem;position:relative}.source[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%}"],changeDetection:0}),t})();function T(e,t){if(1&e&&(l.I0R(0,"p"),l.OEk(1," Use "),l.I0R(2,"code"),l.OEk(3,"TuiSvgService"),l.C$Y(),l.OEk(4," into your component for define any icons in js bundle: "),l.C$Y(),l.wR5(5,"tui-doc-code",2),l.I0R(6,"h2",3),l.OEk(7,"Sanitizer"),l.C$Y(),l.I0R(8,"p"),l.OEk(9," If you use unsafe icons or "),l.I0R(10,"a",4),l.OEk(11," Editor component "),l.C$Y(),l.OEk(12," you need to provide "),l.I0R(13,"code"),l.OEk(14,"TUI_SANITIZER"),l.C$Y(),l.OEk(15," token, which is responsible for removing malicious code from the svg. We recommend to use "),l.I0R(16,"a",5),l.OEk(17," NgDompurify "),l.C$Y(),l.OEk(18," as a sanitizer. This library implements "),l.I0R(19,"a",6),l.OEk(20," DOMPurify "),l.C$Y(),l.OEk(21," as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. "),l.C$Y(),l.I0R(22,"h4",7),l.OEk(23," Don't forget "),l.I0R(24,"a",8),l.OEk(25," provide TUI_SANITIZER "),l.C$Y(),l.OEk(26," if you want to use "),l.I0R(27,"code"),l.OEk(28,"Svg"),l.C$Y(),l.OEk(29," -component with: "),l.C$Y(),l.I0R(30,"ul",9)(31,"li",10),l.OEk(32,"icon which was imported from source code"),l.C$Y(),l.I0R(33,"li",10),l.OEk(34,"custom icons that you don't trust"),l.C$Y()(),l.wR5(35,"tui-doc-code",11),l.I0R(36,"tui-doc-example",12),l.wR5(37,"tui-icons-bundled-example-1"),l.C$Y()),2&e){const e=l.GaO();l.yG2(5),l.E7m("code",e.injectService),l.yG2(30),l.E7m("code",e.exampleSanitizer),l.yG2(1),l.E7m("content",e.example1)}}let M=(()=>{var e;class t{constructor(){this.exampleSanitizer=i.e(25112).then(i.t.bind(i,25112,17)),this.injectService=i.e(81576).then(i.t.bind(i,81576,17)),this.example1={TypeScript:i.e(40108).then(i.t.bind(i,40108,17)),HTML:i.e(29344).then(i.t.bind(i,29344,17)),LESS:i.e(12852).then(i.t.bind(i,12852,17)),"./inline-svg.ts":i.e(22396).then(i.t.bind(i,16,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["icons-bundled"]],decls:2,vars:0,consts:[["header","Icons bundled"],["pageTab",""],["filename","my.component.ts",3,"code"],[1,"tui-space_top-12"],["href","https://taiga-family.github.io/tui-editor","tuiLink",""],["href","https://github.com/taiga-family/ng-dompurify","rel","noreferrer","target","_blank","tuiLink",""],["href","https://github.com/cure53/DOMPurify","rel","noreferrer","target","_blank","tuiLink",""],[1,"tui-space_top-0"],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],[1,"tui-list","tui-list_small"],[1,"tui-list__item"],["filename","app.module.ts",3,"code"],["id","all","heading","Bundled / inline / external",3,"content"]],template:function(e,t){1&e&&(l.I0R(0,"tui-doc-page",0),l.yuY(1,T,38,3,"ng-template",1),l.C$Y())},dependencies:[d.C,m.u,p.E,g.u,h.I,r.ER,b],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.sanitizer-example[_ngcontent-%COMP%]{display:block;padding-top:3.5rem}"],changeDetection:0}),t})(),S=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=l.a4G({type:e}),e.ɵinj=l.s3X({imports:[o.MD,s.y,n.oz,a.Ci,c.TuiLinkModule,c.TuiExpandModule,c.TuiButtonModule,u.TuiInputDateRangeModule,c.TuiNotificationModule,c.TuiTextfieldControllerModule,c.TuiHintModule,a.kx,c.TuiSvgModule,r.qQ.forChild((0,a._A)(M))]}),t})()}}]);