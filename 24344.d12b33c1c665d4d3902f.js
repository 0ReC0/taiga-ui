(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[24344],{24344:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiPreviewModule:()=>X});var n=i(12057),o=i(33982),c=i(73961),l=i(46001),r=i(26764),a=i(45294),u=i(89570),s=i(74788),p=i(43560),d=i(93525),m=i(79121),h=i(33772),g=i(76189),w=i(10643),v=i(99021),f=i(49116),Z=i(48882),b=i(4498);const x=["preview"],T=["contentSample"];function y(e,t){if(1&e&&s._UZ(0,"img",10),2&e){const e=t.polymorpheusOutlet;s.Q6J("src",e,s.LSH)}}function A(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-preview",4),s.NdJ("tuiSwipe",(function(t){return s.CHM(e),s.oxw().onSwipe(t)})),s.TgZ(1,"tui-preview-title"),s._uU(2),s.qZA(),s.TgZ(3,"tui-preview-pagination",5),s.NdJ("indexChange",(function(t){return s.CHM(e),s.oxw().index=t})),s.qZA(),s.TgZ(4,"button",6),s.NdJ("click",(function(){return s.CHM(e),s.oxw().delete()})),s.qZA(),s.TgZ(5,"button",7),s.NdJ("click",(function(){return s.CHM(e),s.oxw().download()})),s.qZA(),s.TgZ(6,"button",8),s.NdJ("click",(function(){return s.CHM(e).$implicit.complete()})),s.qZA(),s.YNc(7,y,1,1,"img",9),s.qZA()}if(2&e){const e=s.oxw();s.Q6J("rotatable",!0),s.xp6(2),s.Oqu(e.title),s.xp6(1),s.Q6J("length",e.length)("index",e.index),s.xp6(4),s.Q6J("polymorpheusOutlet",e.previewContent)}}function _(e,t){1&e&&(s.TgZ(0,"div",11),s.TgZ(1,"h1"),s._uU(2,"Important document"),s.qZA(),s.TgZ(3,"p"),s._uU(4,"Hello everyone! This is some important document in A4 format, although it is made using html"),s.qZA(),s.TgZ(5,"p"),s._uU(6," This shows that the component preview can work with absolutely any content: this way you can show any template, image, pdf or even iframe with your favorite site. We will put this content in the center of the portal and provide the user with control over it, and we will provide you with convenient levers to change it and process actions. "),s.qZA(),s._UZ(7,"img",12),s.qZA())}let S=(()=>{class e{constructor(e,t){this.previewService=e,this.alerts=t,this.index=0,this.length=2}get title(){return 0===this.index?"Transaction cert.jpg":"My face.jpg"}get previewContent(){return 0===this.index&&this.contentSample?this.contentSample:"https://avatars.githubusercontent.com/u/10106368"}show(){this.previewService.open(this.preview||"").subscribe({complete:()=>console.info("complete")})}download(){this.alerts.open("Downloading...").subscribe()}delete(){this.alerts.open("Deleting...").subscribe()}onSwipe(e){"left"===e.direction&&(this.index=(0,r.tuiClamp)(this.index+1,0,this.length-1)),"right"===e.direction&&(this.index=(0,r.tuiClamp)(this.index-1,0,this.length-1))}}return e.ɵfac=function(t){return new(t||e)(s.Y36(l.TuiPreviewDialogService),s.Y36(a.TuiAlertService))},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-preview-example-1"]],viewQuery:function(e,t){if(1&e&&(s.Gf(x,5),s.Gf(T,5)),2&e){let e;s.iGM(e=s.CRH())&&(t.preview=e.first),s.iGM(e=s.CRH())&&(t.contentSample=e.first)}},decls:8,vars:0,consts:[[1,"tui-space_bottom-2"],["tuiButton","","size","m","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],["contentSample",""],[3,"rotatable","tuiSwipe"],[3,"length","index","indexChange"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconTrash","title","Delete","type","button",3,"click"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconDownload","title","Download","type","button",3,"click"],["tuiPreviewAction","","tuiIconButton","","icon","tuiIconCloseLarge","title","Close","type","button",3,"click"],["alt","preview",3,"src",4,"polymorpheusOutlet"],["alt","preview",3,"src"],[1,"content"],["src","https://github.com/tinkoff/ng-polymorpheus/raw/master/projects/demo/assets/logo.svg","alt","logo",1,"polymorpheus"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s._uU(1,"With all features"),s.qZA(),s.TgZ(2,"button",1),s.NdJ("click",(function(){return t.show()})),s._uU(3," Show preview\n"),s.qZA(),s.YNc(4,A,8,5,"ng-template",null,2,s.W1O),s.YNc(6,_,8,0,"ng-template",null,3,s.W1O))},directives:[g.v,w.m,v.W,f.S,Z.i,b.v,u.Li],styles:[".content[_ngcontent-%COMP%]{font:var(--tui-font-text-xl);background-color:var(--tui-base-01);width:50rem;height:68.75rem;padding:3.75rem;box-sizing:border-box;border-radius:.75rem}.polymorpheus[_ngcontent-%COMP%]{padding:2.5rem 10.375rem}"],changeDetection:0}),e})();const q=["preview"];function C(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-preview",2),s._UZ(1,"iframe",3),s.TgZ(2,"button",4),s.NdJ("click",(function(){return s.CHM(e).$implicit.complete()})),s.qZA(),s.qZA()}2&e&&s.Q6J("rotatable",!1)("zoomable",!1)}let U=(()=>{class e{constructor(e){this.previewDialogService=e}show(){this.previewDialogService.open(this.preview||"").subscribe()}}return e.ɵfac=function(t){return new(t||e)(s.Y36(l.TuiPreviewDialogService))},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-preview-example-2"]],viewQuery:function(e,t){if(1&e&&s.Gf(q,5),2&e){let e;s.iGM(e=s.CRH())&&(t.preview=e.first)}},decls:4,vars:0,consts:[["tuiButton","","size","m","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],["src","https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1","frameborder","0","allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","","title","Youtube",1,"content"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconCloseLarge","title","Close","type","button",3,"click"]],template:function(e,t){1&e&&(s.TgZ(0,"button",0),s.NdJ("click",(function(){return t.show()})),s._uU(1," Show simple preview\n"),s.qZA(),s.YNc(2,C,3,2,"ng-template",null,1,s.W1O))},directives:[g.v,w.m,b.v],styles:[".content[_ngcontent-%COMP%]{width:80%;height:80%}"],changeDetection:0}),e})();var M=i(26215),k=i(25917),J=i(46797),P=i(88002),$=i(45435),N=i(43190),I=i(39761),Q=i(34880),H=i(23184);const L=["preview"];function D(e,t){1&e&&(s.ynx(0),s.TgZ(1,"div",9),s._UZ(2,"tui-svg",10),s.TgZ(3,"div"),s._uU(4,"Preview unavailable"),s.qZA(),s.qZA(),s.BQk())}function O(e,t){if(1&e&&s._UZ(0,"img",11),2&e){const e=t.ngIf;s.Q6J("src",e,s.LSH)}}function B(e,t){1&e&&s._UZ(0,"tui-loader",12)}function Y(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-preview",2),s.ALo(1,"async"),s.ALo(2,"async"),s.ALo(3,"async"),s.TgZ(4,"tui-preview-title"),s._uU(5),s.ALo(6,"async"),s.qZA(),s.TgZ(7,"tui-preview-pagination",3),s.NdJ("indexChange",(function(t){return s.CHM(e),s.oxw().index$$.next(t)})),s.qZA(),s.TgZ(8,"button",4),s.NdJ("click",(function(){return s.CHM(e),s.oxw().download()})),s.qZA(),s.TgZ(9,"button",5),s.NdJ("click",(function(){return s.CHM(e).$implicit.complete()})),s.qZA(),s.YNc(10,D,5,0,"ng-container",6),s.ALo(11,"async"),s.YNc(12,O,1,1,"img",7),s.ALo(13,"async"),s.YNc(14,B,1,0,"tui-loader",8),s.ALo(15,"async"),s.qZA()}if(2&e){const e=s.oxw();s.Q6J("rotatable",!s.lcZ(1,8,e.contentUnavailable$))("zoomable",!s.lcZ(2,10,e.contentUnavailable$)&&!s.lcZ(3,12,e.loading$)),s.xp6(5),s.Oqu(s.lcZ(6,14,e.title$)),s.xp6(2),s.Q6J("length",e.items.length)("index",e.index$$.value),s.xp6(3),s.Q6J("ngIf",s.lcZ(11,16,e.contentUnavailable$)),s.xp6(2),s.Q6J("ngIf",s.lcZ(13,18,e.imageSrc$)),s.xp6(2),s.Q6J("ngIf",s.lcZ(15,20,e.loading$))}}let z=(()=>{class e{constructor(e){this.previewDialogService=e,this.items=[{title:"some table.xlsx",hasPreview:!1},{title:"Content #2",hasPreview:!0}],this.index$$=new M.X(0),this.item$=this.index$$.pipe((0,P.U)((e=>this.items[e])),(0,$.h)(r.tuiIsPresent)),this.title$=this.item$.pipe((0,P.U)((e=>e.title))),this.contentUnavailable$=this.item$.pipe((0,P.U)((e=>!e.hasPreview))),this.imageSrc$=this.item$.pipe((0,N.w)((e=>e.hasPreview?this.emulateBackendRequest().pipe((0,I.O)("")):(0,k.of)(null)))),this.loading$=this.imageSrc$.pipe((0,P.U)((e=>""===e)))}show(){this.previewDialogService.open(this.preview||"").subscribe()}download(){console.info("downloading...")}emulateBackendRequest(){return(0,J.H)(1500).pipe((0,P.U)((()=>"https://ng-web-apis.github.io/dist/assets/images/web-api.svg")))}}return e.ɵfac=function(t){return new(t||e)(s.Y36(l.TuiPreviewDialogService))},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-preview-example-3"]],viewQuery:function(e,t){if(1&e&&s.Gf(L,5),2&e){let e;s.iGM(e=s.CRH())&&(t.preview=e.first)}},decls:4,vars:0,consts:[["tuiButton","","size","m","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],[3,"length","index","indexChange"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconDownload","title","Download","type","button",3,"click"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconCloseLarge","title","Close","type","button",3,"click"],[4,"ngIf"],["width","512","height","512","alt","img source",3,"src",4,"ngIf"],["size","xl","class","t-loader",4,"ngIf"],[1,"t-container"],["src","tuiIconFileLarge",1,"t-icon"],["width","512","height","512","alt","img source",3,"src"],["size","xl",1,"t-loader"]],template:function(e,t){1&e&&(s.TgZ(0,"button",0),s.NdJ("click",(function(){return t.show()})),s._uU(1," Show preview\n"),s.qZA(),s.YNc(2,Y,16,22,"ng-template",null,1,s.W1O))},directives:[g.v,w.m,f.S,Z.i,b.v,n.O5,Q.P,H.k],pipes:[n.Ov],styles:[".content[_ngcontent-%COMP%]{background-color:#f5f1f1;width:25rem;height:37.5rem;padding:2.5rem;border-radius:.75rem}.t-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:var(--tui-text-02-night)}.t-icon[_ngcontent-%COMP%]{margin-bottom:.75rem;transform:scale(4);height:5rem}.t-loader[_ngcontent-%COMP%]{width:4rem}"],changeDetection:0}),e})();var W=i(83074);function E(e,t){if(1&e&&(s.TgZ(0,"p"),s._uU(1," Preview component allows to open modal for viewing some document and to work with it (download, zoom, rotate etc) "),s.qZA(),s.TgZ(2,"p"),s._uU(3,"As a document you can provide any content like images,"),s.qZA(),s.TgZ(4,"tui-notification",3),s._uU(5," The component automatically adjusts to the mobile device "),s.qZA(),s.TgZ(6,"tui-doc-example",4),s._UZ(7,"tui-preview-example-1"),s.qZA(),s.TgZ(8,"tui-doc-example",5),s._UZ(9,"tui-preview-example-2"),s.qZA(),s.TgZ(10,"tui-doc-example",6),s._UZ(11,"tui-preview-example-3"),s.qZA()),2&e){const e=s.oxw();s.xp6(6),s.Q6J("content",e.example1),s.xp6(2),s.Q6J("content",e.example2),s.xp6(2),s.Q6J("content",e.example3)}}function G(e,t){if(1&e&&(s.TgZ(0,"ol",7),s.TgZ(1,"li"),s._uU(2," Add "),s.TgZ(3,"code"),s._uU(4,"TuiPreviewModule"),s.qZA(),s._uU(5," to main module: "),s._UZ(6,"tui-doc-code",8),s.qZA(),s.TgZ(7,"li"),s._uU(8," Create a template with tui-preview "),s._UZ(9,"tui-doc-code",9),s.qZA(),s.TgZ(10,"li"),s._uU(11," Open the component from the "),s.TgZ(12,"code"),s._uU(13,"TuiPreviewDialogService"),s.qZA(),s._uU(14," as in the example "),s._UZ(15,"tui-doc-code",10),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(6),s.Q6J("code",e.exampleModule),s.xp6(3),s.Q6J("code",e.exampleHtml),s.xp6(6),s.Q6J("code",e.exampleComponent)}}let R=(()=>{class e{constructor(){this.exampleModule=i.e(97010).then(i.t.bind(i,97010,17)),this.exampleComponent=i.e(41888).then(i.t.bind(i,41888,17)),this.exampleHtml=i.e(34336).then(i.t.bind(i,34336,17)),this.example1={TypeScript:i.e(88642).then(i.t.bind(i,88642,17)),LESS:i.e(84691).then(i.t.bind(i,84691,17)),HTML:i.e(1246).then(i.t.bind(i,1246,17))},this.example2={TypeScript:i.e(79812).then(i.t.bind(i,79812,17)),LESS:i.e(18404).then(i.t.bind(i,18404,17)),HTML:i.e(84963).then(i.t.bind(i,84963,17))},this.example3={TypeScript:i.e(42835).then(i.t.bind(i,42835,17)),LESS:i.e(74852).then(i.t.bind(i,74852,17)),HTML:i.e(79826).then(i.t.bind(i,79826,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["example-preview"]],decls:3,vars:0,consts:[["header","Preview","package","ADDON-PREVIEW"],["pageTab",""],["pageTab","Setup"],[1,"tui-space_bottom-4"],["id","default","heading","Full preview",3,"content"],["id","simple","heading","Simple mode",3,"content"],["id","loading","heading","With loading and unavailable image",3,"content"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","some.component.html",3,"code"],["filename","some.component.ts",3,"code"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-doc-page",0),s.YNc(1,E,12,3,"ng-template",1),s.YNc(2,G,16,3,"ng-template",2),s.qZA())},directives:[p.q,d.n,m.L,h.f,S,U,z,W.c],encapsulation:2,changeDetection:0}),e})(),X=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[[n.ez,u.wq,a.TuiButtonModule,l.TuiPreviewModule,a.TuiNotificationModule,c.fV,a.TuiSvgModule,a.TuiLoaderModule,r.TuiSwipeModule,o.Bz.forChild((0,c.Ve)(R))]]}),e})()}}]);