(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[69999],{26567:(e,t,r)=>{r.r(t),r.d(t,{ExampleFormatModule:()=>F});var a=r(12057),n=r(23738),o=r(33982),i=r(73961),m=r(45294),u=r(54002),p=r(74788),c=r(43560),s=r(93525),l=r(33772),d=r(44477),f=r(16753),h=r(13735);let g=(()=>{class e{constructor(){this.parametersForm=new n.cw({value:new n.NI(11)})}get px(){const{value:e}=this.parametersForm.value;return(0,d.tuiPx)(null!=e?e:0)}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-format-example-1"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p._uU(0),p.TgZ(1,"form",0),p.TgZ(2,"div",1),p.TgZ(3,"tui-input-number",2),p._uU(4," value "),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.hij("'",t.px,"' = px(value); "),p.xp6(1),p.Q6J("formGroup",t.parametersForm))},directives:[n._Y,n.JL,n.sg,f.q,h.g,n.JJ,n.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var Z=r(63881),x=r(50170),_=r(1414),v=r(52219),T=r(50020);function w(e,t){if(1&e&&p._UZ(0,"tui-data-list-wrapper",4),2&e){const e=p.oxw();p.Q6J("items",e.items)}}let y=(()=>{class e{constructor(){this.items=["USD","RUB","643","KZT","051","KRW","CHF","EUR","GBP"],this.parametersForm=new n.cw({currency:new n.NI(null)})}get currency(){const{currency:e}=this.parametersForm.value;return(0,Z.tuiGetCurrencySymbol)(e)}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-format-example-2"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","currency",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(p._uU(0),p.TgZ(1,"form",0),p.TgZ(2,"div",1),p.TgZ(3,"tui-select",2),p._uU(4," currency "),p.YNc(5,w,1,1,"tui-data-list-wrapper",3),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.hij("",t.currency," = getCurrencySymbol(currency); "),p.xp6(1),p.Q6J("formGroup",t.parametersForm))},directives:[n._Y,n.JL,n.sg,x.u,_.O,n.JJ,n.u,v.g,T.e],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var b=r(77027),S=r(41360);let C=(()=>{class e{constructor(){this.parametersForm=new n.cw({value:new n.NI("roman sEdOv")})}get capitalized(){const{value:e}=this.parametersForm.value;return(0,m.tuiCapitalize)(null!=e?e:"")}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-format-example-3"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p._uU(0),p.TgZ(1,"form",0),p.TgZ(2,"div",1),p.TgZ(3,"tui-input",2),p._uU(4," value "),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.hij("'",t.capitalized,"' = capitalize(value); "),p.xp6(1),p.Q6J("formGroup",t.parametersForm))},directives:[n._Y,n.JL,n.sg,b.K,S.w,n.JJ,n.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),A=(()=>{class e{constructor(){this.parametersForm=new n.cw({value:new n.NI("+79991234567"),countryCode:new n.NI("+7"),phoneMask:new n.NI("### ###-##-##")})}get formattedPhone(){const{value:e,countryCode:t,phoneMask:r}=this.parametersForm.value;return(0,m.tuiFormatPhone)(null!=e?e:"",null!=t?t:"",null!=r?r:"")}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-format-example-4"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","countryCode",1,"tui-space_top-2"],["formControlName","phoneMask",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p._uU(0),p.TgZ(1,"form",0),p.TgZ(2,"div",1),p.TgZ(3,"tui-input",2),p._uU(4," value "),p.qZA(),p.TgZ(5,"tui-input",3),p._uU(6," countryCode "),p.qZA(),p.TgZ(7,"tui-input",4),p._uU(8," phoneMask "),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.hij("'",t.formattedPhone,"' = formatPhone(value, countryCode, phoneMask); "),p.xp6(1),p.Q6J("formGroup",t.parametersForm))},directives:[n._Y,n.JL,n.sg,b.K,S.w,n.JJ,n.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),q=(()=>{class e{constructor(){this.parametersForm=new n.cw({value:new n.NI(123456.789),decimalLimit:new n.NI(2),decimalSeparator:new n.NI("."),thousandSeparator:new n.NI(" ")})}get formattedNumber(){const{value:e,decimalLimit:t,decimalSeparator:r,thousandSeparator:a}=this.parametersForm.value;return(0,m.tuiFormatNumber)(null!=e?e:123456.789,{decimalLimit:null!=t?t:2,decimalSeparator:null!=r?r:".",thousandSeparator:null!=a?a:" "})}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-format-example-5"]],decls:11,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","decimalLimit",1,"tui-space_top-2"],["formControlName","decimalSeparator",1,"tui-space_top-2"],["formControlName","thousandSeparator",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p._uU(0),p.TgZ(1,"form",0),p.TgZ(2,"div",1),p.TgZ(3,"tui-input",2),p._uU(4," value "),p.qZA(),p.TgZ(5,"tui-input",3),p._uU(6," decimalLimit "),p.qZA(),p.TgZ(7,"tui-input",4),p._uU(8," decimalSeparator "),p.qZA(),p.TgZ(9,"tui-input",5),p._uU(10," thousandSeparator "),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.hij("'",t.formattedNumber,"' = tuiFormatNumber(value, decimalLimit, decimalSeparator, thousandSeparator); "),p.xp6(1),p.Q6J("formGroup",t.parametersForm))},directives:[n._Y,n.JL,n.sg,b.K,S.w,n.JJ,n.u],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var N=r(83074);function J(e,t){if(1&e&&(p.TgZ(0,"p"),p._uU(1,"A set of format utils"),p.qZA(),p.TgZ(2,"tui-doc-example",3),p._UZ(3,"tui-format-example-1"),p.qZA(),p.TgZ(4,"tui-doc-example",4),p._UZ(5,"tui-format-example-2"),p.qZA(),p.TgZ(6,"tui-doc-example",5),p._UZ(7,"tui-format-example-3"),p.qZA(),p.TgZ(8,"tui-doc-example",6),p._UZ(9,"tui-format-example-4"),p.qZA(),p.TgZ(10,"tui-doc-example",7),p._UZ(11,"tui-format-example-5"),p.qZA()),2&e){const e=p.oxw();p.xp6(2),p.Q6J("content",e.example1),p.xp6(2),p.Q6J("content",e.example2),p.xp6(2),p.Q6J("content",e.example3),p.xp6(2),p.Q6J("content",e.example4),p.xp6(2),p.Q6J("content",e.example5)}}function U(e,t){if(1&e&&(p.TgZ(0,"ol",8),p.TgZ(1,"li"),p.TgZ(2,"p"),p._uU(3,"Import into component and use:"),p.qZA(),p._UZ(4,"tui-doc-code",9),p.qZA(),p.qZA()),2&e){const e=p.oxw();p.xp6(4),p.Q6J("code",e.importComponentExample)}}let L=(()=>{class e{constructor(){this.importComponentExample=r.e(50377).then(r.t.bind(r,50377,17)),this.example1={TypeScript:r.e(56174).then(r.t.bind(r,56174,17)),HTML:r.e(75052).then(r.t.bind(r,75052,17)),LESS:r.e(35374).then(r.t.bind(r,35374,17))},this.example2={TypeScript:r.e(16508).then(r.t.bind(r,16508,17)),HTML:r.e(52708).then(r.t.bind(r,52708,17)),LESS:r.e(79399).then(r.t.bind(r,79399,17))},this.example3={TypeScript:r.e(20392).then(r.t.bind(r,20392,17)),HTML:r.e(94506).then(r.t.bind(r,94506,17)),LESS:r.e(54796).then(r.t.bind(r,54796,17))},this.example4={TypeScript:r.e(33342).then(r.t.bind(r,33342,17)),HTML:r.e(43978).then(r.t.bind(r,43978,17)),LESS:r.e(17154).then(r.t.bind(r,17154,17))},this.example5={TypeScript:r.e(84254).then(r.t.bind(r,84254,17)),HTML:r.e(18343).then(r.t.bind(r,18343,17)),LESS:r.e(50475).then(r.t.bind(r,50475,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["example-format"]],decls:3,vars:0,consts:[["header","Format utils","package","CDK / CORE","path","cdk/utils/format"],["pageTab",""],["pageTab","Setup"],["id","px","description","Adds 'px' to a number","heading","px",3,"content"],["id","get-currency-symbol","description","Returns a currency symbol from its three letter code or ISO 4217","heading","getCurrencySymbol",3,"content"],["id","capitalize","description","Capitalizes every word in a string","heading","capitalize",3,"content"],["id","format-phone","description","Formats a phone number with separators","heading","formatPhone",3,"content"],["id","format-number","description","Formats a number with separators","heading","formatNumber",3,"content"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,J,12,5,"ng-template",1),p.YNc(2,U,5,1,"ng-template",2),p.qZA())},directives:[c.q,s.n,l.f,g,y,C,A,q,N.c],encapsulation:2,changeDetection:0}),e})(),F=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[[a.ez,u.TuiInputNumberModule,n.u5,n.UX,u.TuiInputModule,u.TuiSelectModule,m.TuiDataListModule,u.TuiDataListWrapperModule,i.fV,o.Bz.forChild((0,i.Ve)(L))]]}),e})()}}]);