"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[91295],{91295:(Ce,m,n)=>{n.r(m),n.d(m,{ExampleTuiInputCardGroupedModule:()=>me});var _=n(12057),d=n(24751),x=n(33982),c=n(23121),C=n(29851),p=n(72002),U=n(9488),T=n(89570),I=n(75695),e=n(74788),G=n(82238),A=n(98204),v=n(57750),y=n(88331),F=n(37159),L=n(57068),s=n(72602),E=n(36951),g=n(7114);const $=function(){return[]};let Z=(()=>{class o{constructor(){this.control=new d.NI(null,[c.tuiCardNumberValidator,c.tuiCardExpireValidator])}get card(){const t=this.control.value?this.control.value.card:"";if(t.length<7)return null;switch(t.charAt(0)){case"0":case"1":case"2":return"https://ng-web-apis.github.io/dist/assets/images/common.svg";case"3":case"4":case"5":return"https://ng-web-apis.github.io/dist/assets/images/geolocation.svg";case"6":case"7":return"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg";default:return"https://ng-web-apis.github.io/dist/assets/images/payment-request.svg"}}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-card-grouped-example-1"]],decls:4,vars:9,consts:[[3,"cardSrc","formControl"],[3,"formControl","error"]],template:function(t,a){1&t&&(e._UZ(0,"tui-input-card-grouped",0),e._UZ(1,"tui-error",1),e.ALo(2,"async"),e.ALo(3,"tuiFieldError")),2&t&&(e.Q6J("cardSrc",a.card)("formControl",a.control),e.xp6(1),e.Q6J("formControl",a.control)("error",e.lcZ(2,4,e.lcZ(3,6,e.DdM(8,$)))))},directives:[s.c,d.JJ,d.oH,E.v],pipes:[_.Ov,g.A],encapsulation:2,changeDetection:0}),o})();var J=n(52219),b=n(20933),V=n(35065),X=n(34880),O=n(32675),H=n(88135);function Q(o,r){if(1&o&&(e.TgZ(0,"button",9),e._UZ(1,"tui-card",10),e.TgZ(2,"label",11),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA(),e.qZA()),2&o){const t=r.$implicit;e.Q6J("value",t),e.xp6(1),e.Q6J("cardNumber",t.card.slice(-4)),e.xp6(1),e.Q6J("tuiLabel",t.bank),e.xp6(1),e.hij(" ",t.name," "),e.xp6(2),e.Oqu(t.card.slice(-5))}}function z(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tui-data-list",4),e.NdJ("keydown.escape",function(){e.CHM(t);const i=e.oxw(),u=e.MAs(2);return i.onEsc(u)}),e.TgZ(1,"button",5),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(),u=e.MAs(2);return i.onClick(u)}),e._UZ(2,"tui-svg",6),e.TgZ(3,"span",7),e._uU(4,"New card"),e.qZA(),e.qZA(),e.YNc(5,Q,6,5,"button",8),e.qZA()}if(2&o){const t=e.oxw();e.xp6(5),e.Q6J("ngForOf",t.items)}}let Y=(()=>{class o{constructor(){this.items=[{card:"4321***1234",expire:"12/21",name:"Salary",bank:"Tinkoff"},{card:"8765***5678",expire:"03/42",cvc:"***",name:"Tips",bank:"Bank of America"},{card:"4200***9000",name:"Dogecoins",bank:"Crypto"}],this.card=new d.cw({meta:new d.NI(this.items[0])})}onClick(t){var a;null===(a=this.card.get("meta"))||void 0===a||a.setValue(null),this.onEsc(t)}onEsc(t){var a;null===(a=t.nativeFocusableElement)||void 0===a||a.focus(),t.open=!1}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-card-grouped-example-2"]],decls:4,vars:1,consts:[[3,"formGroup"],["formControlName","meta"],["component",""],["size","l",3,"keydown.escape",4,"tuiDataList"],["size","l",3,"keydown.escape"],["tuiOption","",3,"click"],["src","tuiIconPlus",1,"new"],[1,"label"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"],["size","s",1,"card",3,"cardNumber"],[1,"label",3,"tuiLabel"]],template:function(t,a){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"tui-input-card-grouped",1,2),e.YNc(3,z,6,1,"tui-data-list",3),e.qZA(),e.qZA()),2&t&&e.Q6J("formGroup",a.card)},directives:[d._Y,d.JL,d.sg,s.c,d.JJ,d.u,J.g,b.q,V.v,X.P,_.sg,O.S,H.A],styles:[".new[_ngcontent-%COMP%]{width:2rem;height:1.5rem;border-radius:4px;background:var(--tui-secondary);color:var(--tui-link)}.card[_ngcontent-%COMP%]{background:var(--tui-support-01)}button[_ngcontent-%COMP%]:nth-child(4)   .card[_ngcontent-%COMP%]{background:var(--tui-support-05)}.label[_ngcontent-%COMP%]{margin:0 auto 0 .75rem}"],changeDetection:0}),o})();function B(o,r){1&o&&e._UZ(0,"img",4)}const W=function(){return[]};let j=(()=>{class o{constructor(){this.control=new d.NI(null,[c.tuiCardNumberValidator,c.tuiCardExpireValidator])}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-card-grouped-example-3"]],decls:6,vars:9,consts:[[3,"cardSrc","formControl"],["polymorpheus",""],["template","polymorpheus"],[3,"formControl","error"],["width","32","height","32","alt","custom-icon","src","https://ng-web-apis.github.io/dist/assets/images/web-api.svg"]],template:function(t,a){if(1&t&&(e._UZ(0,"tui-input-card-grouped",0),e.YNc(1,B,1,0,"ng-template",1,2,e.W1O),e._UZ(3,"tui-error",3),e.ALo(4,"async"),e.ALo(5,"tuiFieldError")),2&t){const i=e.MAs(2);e.Q6J("cardSrc",i)("formControl",a.control),e.xp6(3),e.Q6J("formControl",a.control)("error",e.lcZ(4,4,e.lcZ(5,6,e.DdM(8,W))))}},directives:[s.c,d.JJ,d.oH,T.GL,E.v],pipes:[_.Ov,g.A],encapsulation:2,changeDetection:0}),o})(),K=(()=>{class o{constructor(){this.control=new d.NI({card:"",expire:"",cvc:"***"})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-card-grouped-example-4"]],decls:1,vars:1,consts:[[3,"formControl"]],template:function(t,a){1&t&&e._UZ(0,"tui-input-card-grouped",0),2&t&&e.Q6J("formControl",a.control)},directives:[s.c,d.JJ,d.oH],encapsulation:2,changeDetection:0}),o})();var w=n(31823),q=n(20546),k=n(17023),ee=n(54218),te=n(76349);function oe(o,r){if(1&o&&(e.TgZ(0,"p"),e.TgZ(1,"code"),e._uU(2,"InputCardGrouped"),e.qZA(),e._uU(3," is used to input a card as a separated control "),e.qZA(),e.TgZ(4,"tui-doc-example",2),e._UZ(5,"tui-input-card-grouped-example-1"),e.qZA(),e.TgZ(6,"tui-doc-example",3),e._UZ(7,"tui-input-card-grouped-example-2"),e.qZA(),e.TgZ(8,"tui-doc-example",4),e._UZ(9,"tui-input-card-grouped-example-3"),e.qZA(),e.TgZ(10,"tui-doc-example",5),e._UZ(11,"tui-input-card-grouped-example-4"),e.qZA()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("content",t.example1),e.xp6(2),e.Q6J("content",t.example2),e.xp6(2),e.Q6J("content",t.example3),e.xp6(2),e.Q6J("content",t.example4)}}function ne(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tui-input-card-grouped",16),e.NdJ("binChange",function(i){return e.CHM(t),e.oxw(2).onBinChange(i)}),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("formControl",t.control)("autocompleteEnabled",t.autocompleteEnabled)("cardSrc",t.cardSrc)("codeLength",t.codeLength)("exampleText",t.exampleText)("readOnly",t.readOnly)("focusable",t.focusable)("pseudoInvalid",t.pseudoInvalid)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered)("pseudoActive",t.pseudoPressed)}}function ae(o,r){1&o&&e._UZ(0,"tui-card",17)}function re(o,r){1&o&&(e.tHW(0,18),e._UZ(1,"code"),e.N_p())}function de(o,r){1&o&&e.SDv(0,19)}function ie(o,r){1&o&&e.SDv(0,20)}function ue(o,r){1&o&&e.SDv(0,21)}function le(o,r){1&o&&e.SDv(0,22)}function ce(o,r){1&o&&e.SDv(0,23)}function pe(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tui-doc-demo",6),e.YNc(1,ne,1,11,"ng-template"),e.qZA(),e.TgZ(2,"div",7),e.TgZ(3,"p"),e.tHW(4,8),e._UZ(5,"code"),e.N_p(),e.qZA(),e.qZA(),e.YNc(6,ae,1,0,"ng-template",null,9,e.W1O),e.TgZ(8,"tui-doc-documentation"),e.YNc(9,re,2,0,"ng-template",10),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().disabled=i}),e.YNc(10,de,1,0,"ng-template",11),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().autocompleteEnabled=i}),e.YNc(11,ie,1,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().cardSrcSelected=i}),e.YNc(12,ue,1,0,"ng-template",13),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().exampleText=i}),e.YNc(13,le,1,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(t),e.oxw().codeLength=i}),e.YNc(14,ce,1,0,"ng-template",15),e.qZA(),e._UZ(15,"inherited-documentation")}if(2&o){const t=e.MAs(7),a=e.oxw();e.Q6J("control",a.control),e.xp6(9),e.Q6J("documentationPropertyValue",a.disabled),e.xp6(1),e.Q6J("documentationPropertyValue",a.autocompleteEnabled),e.xp6(1),e.Q6J("documentationPropertyValues",a.getContentVariants(t))("documentationPropertyValue",a.cardSrcSelected),e.xp6(1),e.Q6J("documentationPropertyValue",a.exampleText),e.xp6(1),e.Q6J("documentationPropertyValues",a.codeLengthVariants)("documentationPropertyValue",a.codeLength)}}function se(o,r){if(1&o&&(e.TgZ(0,"ol",24),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,25),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",26),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,27),e.qZA(),e._UZ(9,"tui-doc-code",28),e.qZA(),e.qZA()),2&o){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(4),e.Q6J("code",t.exampleHtml)}}let _e=(()=>{class o extends v.O{constructor(t){super(),this.alertService=t,this.exampleModule=n.e(92593).then(n.t.bind(n,92593,17)),this.exampleHtml=n.e(29352).then(n.t.bind(n,29352,17)),this.example1={TypeScript:n.e(41940).then(n.t.bind(n,41940,17)),HTML:n.e(49991).then(n.t.bind(n,49991,17))},this.example2={TypeScript:n.e(29798).then(n.t.bind(n,29798,17)),HTML:n.e(1393).then(n.t.bind(n,1393,17)),LESS:n.e(5750).then(n.t.bind(n,5750,17))},this.example3={TypeScript:n.e(1843).then(n.t.bind(n,1843,17)),HTML:n.e(14228).then(n.t.bind(n,14228,17))},this.example4={TypeScript:n.e(21727).then(n.t.bind(n,21727,17)),HTML:n.e(33573).then(n.t.bind(n,33573,17))},this.cards={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},this.cardSrcVariants=Object.keys(this.cards),this.cardSrcSelected="",this.autocompleteEnabled=!1,this.exampleText="0000 0000 0000 0000",this.codeLengthVariants=[3,4],this.codeLength=this.codeLengthVariants[0],this.pseudoInvalid=null,this.readOnly=!1,this.control=new d.NI}get cardSrc(){return(0,G.tuiIsString)(this.cardSrcSelected)?this.cards[this.cardSrcSelected]:this.cardSrcSelected}get disabled(){return this.control.disabled}set disabled(t){t?this.control.disable():this.control.enable()}onBinChange(t){this.alertService.open(`bin: ${t}`).subscribe()}getContentVariants(t){return[...this.cardSrcVariants,t]}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.TuiAlertService))},o.\u0275cmp=e.Xpm({type:o,selectors:[["example-input-card-grouped"]],features:[e._Bn([{provide:A.x,useExisting:(0,e.Gpc)(()=>o)}]),e.qOj],decls:4,vars:0,consts:function(){let r,t,a,i,u,P,N,M,S,D,f,R,h;return r=$localize`:␟576c74546986ae39d66902c10b330cef17c11742␟2004268377756025676:With validation`,t=$localize`:␟0b16cb2ad793d315ec0749caae74c51ea59f9dd1␟7395231025733752915:With saved cards`,a=$localize`:␟9c59728c1210370022fbb770bda0d0b8fe1631c6␟1342170688498447742:With custom card template`,i=$localize`:␟d44becd24fa66aa31f134974747e1892db15c99a␟134626459094672385:Custom form state`,u=$localize`:␟2991990b36a95db17cd97eabd9f31582060b991a␟1504302675191121980: Add ${"\ufffd#5\ufffd"}:START_TAG_CODE:tuiCreateLuhnValidator(customMessage?)${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE: to control validators to validate it with Luhn algorithm `,P=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,N=$localize`:␟83ad20bde41f48a65e1ef7997973b9229940e933␟7840524756891506982: Browser autocomplete of card `,M=$localize`:␟fc048dc15100d76d9c59634a4cd574e69f6c4c27␟4001054117328009637: SVG card icon `,S=$localize`:␟26c4e17869f9a11168b776fecc88a93ba994a18b␟6871064863310761724: An example of input `,D=$localize`:␟8772d8eccb2dc868d0dec6c6c5db9e2264085070␟7430416980180297706: Code length `,f=$localize`:␟8457ba25b1fa93009d4263b1ed4635c9d9c693f1␟3816861219916976422: BIN value (card first 6 symbols) `,R=$localize`:␟33a49eba1a9f88fb51f268aeef91a4fce5f46b26␟1773577931530005511: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputCardGroupedModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,h=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","InputCardGrouped","package","ADDON-COMMERCE","type","components"],["pageTab",""],["id","validation","heading",r,3,"content"],["id","select","heading",t,3,"content"],["id","cardSrc","heading",a,3,"content"],["id","form-state","heading",i,3,"content"],[3,"control"],[1,"b-full-width","tui-space_bottom-6"],u,["template",""],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autocompleteEnabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","cardSrc","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","exampleText","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","codeLength","documentationPropertyMode","input","documentationPropertyType","3 | 4",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","binChange","documentationPropertyMode","output","documentationPropertyType","string | null"],[3,"formControl","autocompleteEnabled","cardSrc","codeLength","exampleText","readOnly","focusable","pseudoInvalid","pseudoFocus","pseudoHover","pseudoActive","binChange"],["cardNumber","1234","paymentSystem","maestro","size","s",1,"card"],P,N,M,S,D,f,[1,"b-demo-steps"],R,["filename","myComponent.module.ts",3,"code"],h,["filename","myComponent.template.html",3,"code"]]},template:function(t,a){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,oe,12,4,"ng-template",1),e.YNc(2,pe,16,8,"ng-template",1),e.YNc(3,se,10,2,"ng-template",1),e.qZA())},directives:[y.q,F.n,L.f,Z,Y,j,K,w.F,q.z,k.B,ee.w,s.c,d.JJ,d.oH,O.S,te.c],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.control[_ngcontent-%COMP%]{flex:1;margin-bottom:.25rem}.control[_ngcontent-%COMP%]:not(:last-child){margin-right:1.25rem}.error[_ngcontent-%COMP%]{min-width:100%}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}.card[_ngcontent-%COMP%]{background:#87ceeb}"],changeDetection:0}),o})(),me=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.TuiInputCardGroupedModule,p.TuiLinkModule,p.TuiErrorModule,U.TuiFieldErrorPipeModule,p.TuiDataListModule,c.TuiCardModule,p.TuiLabelModule,p.TuiSvgModule,_.ez,d.UX,C.fV,I.f,x.Bz.forChild((0,C.Ve)(_e)),T.wq]]}),o})()}}]);