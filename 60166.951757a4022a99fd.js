(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[60166],{60166:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiFormatPhoneModule:()=>U});var o=n(88692),i=n(78942),u=n(18241),a=n(11205),r=n(78129),p=n(50675),c=n(64537),d=n(77027),s=n(41360),m=n(68874),l=n(10200),h=n(83074),g=n(62840),f=n(60404),y=n(43560),x=n(93525),P=n(38868),M=n(3520);let Z=(()=>{var e;class t{constructor(){this.phone="+78005557778"}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-format-phone-example-1"]],decls:8,vars:8,consts:[[1,"tui-space_top-4"]],template:function(e,t){1&e&&(c.TgZ(0,"div"),c._uU(1,"Formatted number by default:"),c.qZA(),c._uU(2),c.ALo(3,"tuiFormatPhone"),c.TgZ(4,"div",0),c._uU(5,"Formatted number with custom params:"),c.qZA(),c._uU(6),c.ALo(7,"tuiFormatPhone")),2&e&&(c.xp6(2),c.hij("\n",c.lcZ(3,2,t.phone)," "),c.xp6(4),c.hij("\n",c.Dn7(7,4,t.phone,void 0,"###-###-##-##"),"\n"))},dependencies:[M.r],encapsulation:2,changeDetection:0}),t})();function C(e,t){if(1&e&&(c.TgZ(0,"p"),c._uU(1,"Pipe to format phone number"),c.qZA(),c.TgZ(2,"tui-doc-example",2),c._UZ(3,"tui-format-phone-example-1"),c.qZA()),2&e){const e=c.oxw();c.xp6(2),c.Q6J("content",e.example1)}}function T(e,t){1&e&&c._uU(0," Country code ")}function b(e,t){1&e&&c._uU(0," Phone number mask ")}function w(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"p",3),c._uU(1),c.ALo(2,"tuiFormatPhone"),c.qZA(),c.TgZ(3,"tui-input",4),c.NdJ("ngModelChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.index=t)})),c.qZA(),c.TgZ(4,"tui-doc-documentation"),c.YNc(5,T,1,0,"ng-template",5),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.countryCode=t)})),c.YNc(6,b,1,0,"ng-template",6),c.NdJ("documentationPropertyValueChange",(function(t){c.CHM(e);const n=c.oxw();return c.KtG(n.phoneMask=t)})),c.qZA()}if(2&e){const e=c.oxw();c.xp6(1),c.hij(" Formatted phone number: ",c.Dn7(2,7,e.index,e.countryCode,e.phoneMask)," "),c.xp6(2),c.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",e.index),c.xp6(2),c.Q6J("documentationPropertyValues",e.countryCodes)("documentationPropertyValue",e.countryCode),c.xp6(1),c.Q6J("documentationPropertyValues",e.phoneMasks)("documentationPropertyValue",e.phoneMask)}}function _(e,t){if(1&e&&(c.TgZ(0,"ol",7)(1,"li")(2,"p"),c._uU(3," Import "),c.TgZ(4,"code"),c._uU(5,"TuiFormatPhonePipeModule"),c.qZA(),c._uU(6," into a module where you want to use the pipe "),c.qZA(),c._UZ(7,"tui-doc-code",8),c.qZA(),c.TgZ(8,"li")(9,"p"),c._uU(10,"Use pipe in template with function and its arguments:"),c.qZA(),c._UZ(11,"tui-doc-code",9),c.qZA()()),2&e){const e=c.oxw();c.xp6(7),c.Q6J("code",e.exampleModule),c.xp6(4),c.Q6J("code",e.exampleHtml)}}let A=(()=>{var e;class t{constructor(){this.exampleModule=n.e(14203).then(n.t.bind(n,14203,17)),this.exampleHtml=n.e(66398).then(n.t.bind(n,66398,17)),this.example1={TypeScript:n.e(37904).then(n.t.bind(n,37904,17)),HTML:n.e(99280).then(n.t.bind(n,99280,17))},this.index="+78005557778",this.countryCodes=[void 0,"+850","+1","+52"],this.countryCode=this.countryCodes[0],this.phoneMasks=[void 0,"####-#############","### ###-####","### ###-####"],this.phoneMask=this.phoneMasks[0]}get maxLength(){return this.countryCode&&this.phoneMask?this.countryCode.length+this.phoneMask.length-2:12}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["example-tui-format-phone"]],decls:4,vars:0,consts:[["header","FormatPhone","package","CORE","type","pipes"],["pageTab",""],["id","base","heading","Basic",3,"content"],[1,"text","b-full-width"],["tuiTextfieldSize","m",1,"slider",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["documentationPropertyName","countryCode","documentationPropertyType","string | undefined",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","phoneMask","documentationPropertyType","string | undefined",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,C,4,1,"ng-template",1),c.YNc(2,w,7,11,"ng-template",1),c.YNc(3,_,12,2,"ng-template",1),c.qZA())},dependencies:[d.K,s.w,i.JJ,i.On,m.x,l.s,h.c,g.z,f.B,y.q,x.n,P.f,Z,M.r],styles:[".text[_ngcontent-%COMP%]{font-size:1.1875rem}.slider[_ngcontent-%COMP%]{margin-top:.75rem;width:9.375rem}"],changeDetection:0}),t})(),U=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=c.oAB({type:e}),e.ɵinj=c.cJS({imports:[r.TuiFormatPhonePipeModule,p.TuiInputModule,i.UX,i.u5,o.ez,p.TuiRadioListModule,r.TuiTextfieldControllerModule,a.fV,u.Bz.forChild((0,a.Ve)(A))]}),t})()}}]);