(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[25035],{25035:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiPdfViewerModule:()=>J});var n=i(12057),o=i(33982),c=i(73961),s=i(45294),r=i(54002),a=i(74788),u=i(43560),p=i(93525),d=i(79121),l=i(33772),f=i(91211),h=i(26764),m=i(76189);function g(e,t){if(1&e&&(a.TgZ(0,"a",3),a._uU(1," Download "),a.qZA()),2&e){const e=t.content;a.Q6J("href",e,a.LSH)}}let v=(()=>{class e{constructor(e,t,i){this.sanitizer=e,this.pdfService=t,this.isMobile=i,this.pdf="assets/media/taiga.pdf"}show(e){this.pdfService.open(this.sanitizer.bypassSecurityTrustResourceUrl(this.isMobile?`https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`:this.pdf),{label:"Taiga UI",actions:e}).subscribe()}}return e.ɵfac=function(t){return new(t||e)(a.Y36(f.H7),a.Y36(r.TuiPdfViewerService),a.Y36(h.TUI_IS_MOBILE))},e.ɵcmp=a.Xpm({type:e,selectors:[["tui-pdf-viewer-example-1"]],decls:6,vars:0,consts:[[1,"tui-space_bottom-3"],["tuiButton","","type","button",3,"click"],["actions",""],["download","","shape","rounded","size","s","tuiButton","",3,"href"]],template:function(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"tui-notification",0),a._uU(1," Note that you need to bypass sanitizer in order to use the URL so make sure you trust it\n"),a.qZA(),a.TgZ(2,"button",1),a.NdJ("click",(function(){a.CHM(e);const i=a.MAs(5);return t.show(i)})),a._uU(3," Taiga\n"),a.qZA(),a.YNc(4,g,2,1,"ng-template",null,2,a.W1O)}},directives:[d.L,m.v],encapsulation:2,changeDetection:0}),e})();var w=i(89570),b=i(43190);function T(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"button",1),a.NdJ("click",(function(){const t=a.CHM(e).$implicit,i=a.oxw();return t.onClick(i.context)})),a._uU(1),a.qZA()}if(2&e){const e=t.$implicit;a.xp6(1),a.hij(" ",e.text,"\n")}}let _=(()=>{class e{constructor(e){this.context=e}}return e.ɵfac=function(t){return new(t||e)(a.Y36(w.yf))},e.ɵcmp=a.Xpm({type:e,selectors:[["tui-actions-content"]],decls:1,vars:1,consts:[["shape","rounded","size","s","tuiButton","","class","tui-space_left-3",3,"click",4,"ngFor","ngForOf"],["shape","rounded","size","s","tuiButton","",1,"tui-space_left-3",3,"click"]],template:function(e,t){1&e&&a.YNc(0,T,2,1,"button",0),2&e&&a.Q6J("ngForOf",t.context.data)},directives:[n.sg,m.v],encapsulation:2,changeDetection:0}),e})();var Z=i(46797),x=i(88002),U=i(23184);function y(e,t){if(1&e&&a._UZ(0,"iframe",2),2&e){const e=t.ngIf;a.Q6J("src",e,a.uOi)}}function M(e,t){1&e&&a._UZ(0,"tui-loader",3)}let A=(()=>{class e{constructor(e,t){this.isMobile=e,this.sanitizer=t,this.pdf="assets/media/taiga.pdf",this.src$=(0,Z.H)(3e3).pipe((0,x.U)((()=>this.sanitizer.bypassSecurityTrustResourceUrl(this.isMobile?`https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`:this.pdf))))}}return e.ɵfac=function(t){return new(t||e)(a.Y36(h.TUI_IS_MOBILE),a.Y36(f.H7))},e.ɵcmp=a.Xpm({type:e,selectors:[["tui-pdf-content"]],decls:4,vars:4,consts:[["title","pdf",3,"src",4,"ngIf","ngIfElse"],["loading",""],["title","pdf",3,"src"],["size","xl"]],template:function(e,t){if(1&e&&(a.YNc(0,y,1,1,"iframe",0),a.ALo(1,"async"),a.YNc(2,M,1,0,"ng-template",null,1,a.W1O)),2&e){const e=a.MAs(3);a.Q6J("ngIf",a.lcZ(1,2,t.src$))("ngIfElse",e)}},directives:[n.O5,U.k],pipes:[n.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%}[_nghost-%COMP%]   *[_ngcontent-%COMP%]{flex:1}"],changeDetection:0}),e})(),S=(()=>{class e{constructor(e,t){this.alerts=e,this.pdfService=t}show(){const e={label:"Taiga UI",actions:new w.Al(_),data:[{text:"Sign",onClick:e=>e.completeWith("Document signed")},{text:"Deny",onClick:e=>e.completeWith("Document denied")}]};this.pdfService.open(new w.Al(A),e).pipe((0,b.w)((e=>this.alerts.open(e)))).subscribe()}}return e.ɵfac=function(t){return new(t||e)(a.Y36(s.TuiAlertService),a.Y36(r.TuiPdfViewerService))},e.ɵcmp=a.Xpm({type:e,selectors:[["tui-pdf-viewer-example-2"]],decls:2,vars:0,consts:[["tuiButton","","type","button",3,"click"]],template:function(e,t){1&e&&(a.TgZ(0,"button",0),a.NdJ("click",(function(){return t.show()})),a._uU(1," Taiga\n"),a.qZA())},directives:[m.v],encapsulation:2,changeDetection:0}),e})();var I=i(52504);function k(e,t){if(1&e&&a._UZ(0,"iframe",2),2&e){const e=a.oxw();a.Q6J("src",e.src,a.uOi)}}let q=(()=>{class e{constructor(e,t){this.isMobile=e,this.sanitizer=t,this.pdf="assets/media/taiga.pdf",this.open=!1,this.src=this.sanitizer.bypassSecurityTrustResourceUrl(this.isMobile?`https://drive.google.com/viewerng/viewer?embedded=true&url=https://taiga-ui.dev/${this.pdf}`:this.pdf)}}return e.ɵfac=function(t){return new(t||e)(a.Y36(h.TUI_IS_MOBILE),a.Y36(f.H7))},e.ɵcmp=a.Xpm({type:e,selectors:[["tui-pdf-viewer-example-3"]],decls:3,vars:1,consts:[["tuiButton","","type","button",3,"click"],[3,"tuiPdfViewer","tuiPdfViewerChange"],["title","pdf",1,"iframe",3,"src"]],template:function(e,t){1&e&&(a.TgZ(0,"button",0),a.NdJ("click",(function(){return t.open=!0})),a._uU(1," Taiga\n"),a.qZA(),a.YNc(2,k,1,1,"ng-template",1),a.NdJ("tuiPdfViewerChange",(function(e){return t.open=e}))),2&e&&(a.xp6(2),a.Q6J("tuiPdfViewer",t.open))},directives:[m.v,I.E],styles:[".iframe[_ngcontent-%COMP%]{width:100%;height:100%}"],changeDetection:0}),e})();var P=i(83074);function C(e,t){if(1&e&&(a.TgZ(0,"p"),a._uU(1,"Custom dialog to preview PDF"),a.qZA(),a.TgZ(2,"tui-notification",3),a._uU(3," Keep in mind mobile devices do not support displaying PDFs in iframe, so you need to rely on "),a.TgZ(4,"code"),a._uU(5,"TUI_IS_MOBILE"),a.qZA(),a._uU(6," token to provide suitable alternative behavior. For example, you can use third-party service "),a.TgZ(7,"code"),a._uU(8,"https://drive.google.com/viewerng/viewer?embedded=true&url=$YOUR_PUBLIC_PATH_TO_PDF"),a.qZA(),a._uU(9," or your own service to render PDF in mobile iframe with "),a.TgZ(10,"code"),a._uU(11,"pdf.js"),a.qZA(),a._uU(12," . "),a.qZA(),a.TgZ(13,"tui-doc-example",4),a._UZ(14,"tui-pdf-viewer-example-1"),a.qZA(),a.TgZ(15,"tui-doc-example",5),a._UZ(16,"tui-pdf-viewer-example-2"),a.qZA(),a.TgZ(17,"tui-doc-example",6),a._UZ(18,"tui-pdf-viewer-example-3"),a.qZA()),2&e){const e=a.oxw();a.xp6(13),a.Q6J("content",e.example1),a.xp6(2),a.Q6J("content",e.example2),a.xp6(2),a.Q6J("content",e.example3)}}function O(e,t){if(1&e&&(a.TgZ(0,"ol",7),a.TgZ(1,"li"),a._uU(2," Import "),a.TgZ(3,"code"),a._uU(4,"TuiPdfViewerModule"),a.qZA(),a._uU(5," to your main app module: "),a._UZ(6,"tui-doc-code",8),a.qZA(),a.TgZ(7,"li"),a._uU(8," Show preview with a service: "),a._UZ(9,"tui-doc-code",9),a.qZA(),a.qZA()),2&e){const e=a.oxw();a.xp6(6),a.Q6J("code",e.exampleModule),a.xp6(3),a.Q6J("code",e.exampleService)}}let Y=(()=>{class e{constructor(){this.exampleService=i.e(4914).then(i.t.bind(i,4914,17)),this.exampleModule=i.e(16272).then(i.t.bind(i,16272,17)),this.example1={TypeScript:i.e(56782).then(i.t.bind(i,56782,17)),HTML:i.e(57953).then(i.t.bind(i,57953,17))},this.example2={TypeScript:i.e(67871).then(i.t.bind(i,67871,17)),HTML:i.e(63178).then(i.t.bind(i,63178,17)),"actions-content.component.ts":i.e(19387).then(i.t.bind(i,19387,17)),"actions-content.component.html":i.e(74398).then(i.t.bind(i,74398,17)),"pdf-content.component.ts":i.e(28770).then(i.t.bind(i,28770,17)),"pdf-content.component.html":i.e(31067).then(i.t.bind(i,31067,17)),"pdf-content.component.less":i.e(85076).then(i.t.bind(i,85076,17))},this.example3={TypeScript:i.e(51079).then(i.t.bind(i,51079,17)),HTML:i.e(44676).then(i.t.bind(i,44676,17)),LESS:i.e(50396).then(i.t.bind(i,50396,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=a.Xpm({type:e,selectors:[["example-tui-pdf-viewer"]],decls:3,vars:0,consts:[["header","PdfViewer","package","KIT"],["pageTab",""],["pageTab","Setup"],["status","warning"],["id","base","heading","Basic",3,"content"],["id","component","heading","Component",3,"content"],["id","directive","heading","Directive",3,"content"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(a.TgZ(0,"tui-doc-page",0),a.YNc(1,C,19,3,"ng-template",1),a.YNc(2,O,10,2,"ng-template",2),a.qZA())},directives:[u.q,p.n,d.L,l.f,v,S,q,P.c],encapsulation:2,changeDetection:0}),e})(),J=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=a.oAB({type:e}),e.ɵinj=a.cJS({imports:[[n.ez,r.TuiPdfViewerModule,s.TuiLoaderModule,s.TuiButtonModule,s.TuiNotificationModule,c.fV,o.Bz.forChild((0,c.Ve)(Y))]]}),e})()}}]);