(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[12690],{12690:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiMobileCalendarModule:()=>E});var o=n(12057),a=n(23738),i=n(33982),u=n(73961),r=n(54349),l=n(45294),c=n(54231),d=n(54002),m=n(74788),s=n(43560),p=n(93525),g=n(66596),T=n(33772),y=n(89570),h=n(9112),_=n(88002),Z=n(76189);let x=(()=>{class e{constructor(e,t,n){this.months$=n,this.control=new a.NI(new c.TuiDay(2024,11,3)),this.date$=(0,h.aj)([(0,c.tuiControlValue)(this.control),this.months$]).pipe((0,_.U)((([e,t])=>this.getParsed(e,t))));const o=(0,c.tuiControlValue)(this.control),i=m.zs3.create({providers:[{provide:d.TUI_CALENDAR_DATE_STREAM,useValue:o}],parent:t}),u=new y.Al(r.TuiMobileCalendarDialogComponent,i);this.dialog$=e.open(u,{size:"fullscreen",closeable:!1,data:{min:c.TuiDay.currentLocal()}})}get empty(){return!this.control.value}getParsed(e,t){if(!e)return"Choose a date";const{month:n,day:o,year:a}=e;return`${t[n]} ${o}, ${a}`}onClick(){this.dialog$.subscribe((e=>{this.control.setValue(e)}))}}return e.ɵfac=function(t){return new(t||e)(m.Y36(l.TuiDialogService),m.Y36(m.zs3),m.Y36(l.TUI_MONTHS))},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-mobile-calendar-example-1"]],decls:5,vars:5,consts:[[1,"wrapper"],["appearance","secondary","icon","tuiIconCalendarLarge","shape","rounded","title","Choose a date","tuiIconButton","","type","button",3,"click"],[1,"date"]],template:function(e,t){1&e&&(m.TgZ(0,"div",0),m.TgZ(1,"button",1),m.NdJ("click",(function(){return t.onClick()})),m.qZA(),m.TgZ(2,"span",2),m._uU(3),m.ALo(4,"async"),m.qZA(),m.qZA()),2&e&&(m.xp6(2),m.ekj("date_empty",t.empty),m.xp6(1),m.hij(" ",m.lcZ(4,3,t.date$)," "))},directives:[Z.v],pipes:[o.Ov],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.date[_ngcontent-%COMP%]{margin-left:1rem}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-03)}"],changeDetection:0}),e})();var f=n(73104);let A=(()=>{class e{constructor(){this.min=new c.TuiDay((new Date).getFullYear(),(new Date).getMonth(),1),this.max=new c.TuiDay((new Date).getFullYear(),(new Date).getMonth(),10)}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-mobile-calendar-example-2"]],decls:2,vars:3,consts:[[1,"example"],[3,"max","min","single"]],template:function(e,t){1&e&&(m.TgZ(0,"div",0),m._UZ(1,"tui-mobile-calendar",1),m.qZA()),2&e&&(m.xp6(1),m.Q6J("max",t.max)("min",t.min)("single",!1))},directives:[f.F],styles:[".example[_ngcontent-%COMP%]{height:35rem}"],changeDetection:0}),e})(),b=(()=>{class e{constructor(){this.min=c.TuiDay.currentLocal()}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["tui-mobile-calendar-example-3"]],features:[m._Bn([{provide:l.TUI_FIRST_DAY_OF_WEEK,useValue:c.TuiDayOfWeek.Sunday}])],decls:1,vars:1,consts:[[3,"min"]],template:function(e,t){1&e&&m._UZ(0,"tui-mobile-calendar",0),2&e&&m.Q6J("min",t.min)},directives:[f.F],styles:["tui-mobile-calendar[_ngcontent-%COMP%]{max-width:20rem;height:30rem}"],changeDetection:0}),e})();var U=n(10977),M=n(51192),D=n(60404),P=n(83074);function C(e,t){1&e&&(m._uU(0," Use "),m.TgZ(1,"a",7),m._uU(2," TUI_FIRST_DAY_OF_WEEK "),m.qZA(),m._uU(3," token to change start day of the week (Monday by default). "))}const V=function(){return["/components/input-date"]},w=function(){return["/components/input-date-range"]};function I(e,t){if(1&e&&(m.TgZ(0,"p"),m._uU(1," A calendar for mobile devices. It is used in "),m.TgZ(2,"a",2),m._uU(3," InputDate "),m.qZA(),m._uU(4," and "),m.TgZ(5,"a",2),m._uU(6," InputDateRange "),m.qZA(),m._uU(7," if "),m.TgZ(8,"code"),m._uU(9,"TuiMobileCalendarDialogModule"),m.qZA(),m._uU(10," and "),m.TgZ(11,"code"),m._uU(12,"TuiDialogModule"),m.qZA(),m._uU(13," are both imported once in the main module "),m.qZA(),m.TgZ(14,"p"),m._uU(15," You can use "),m.TgZ(16,"code"),m._uU(17,"TUI_CALENDAR_DATE_STREAM"),m.qZA(),m._uU(18," token to set value from outside (see samples) "),m.qZA(),m.TgZ(19,"strong"),m._uU(20,"Component should be used on mobile devices as fullscreen dialog"),m.qZA(),m.TgZ(21,"tui-doc-example",3),m._UZ(22,"tui-mobile-calendar-example-1"),m.qZA(),m.TgZ(23,"tui-doc-example",4),m._UZ(24,"tui-mobile-calendar-example-2"),m.qZA(),m.TgZ(25,"tui-doc-example",5),m.YNc(26,C,4,0,"ng-template",null,6,m.W1O),m._UZ(28,"tui-mobile-calendar-example-3"),m.qZA()),2&e){const e=m.MAs(27),t=m.oxw();m.xp6(2),m.Q6J("routerLink",m.DdM(6,V)),m.xp6(3),m.Q6J("routerLink",m.DdM(7,w)),m.xp6(16),m.Q6J("content",t.example1),m.xp6(2),m.Q6J("content",t.example2),m.xp6(2),m.Q6J("content",t.example3)("description",e)}}function q(e,t){1&e&&(m.TgZ(0,"div"),m._uU(1,"A handler that gets a date and returns true if it is disabled."),m.qZA(),m.TgZ(2,"strong"),m._uU(3,"Must be a pure function"),m.qZA())}function N(e,t){1&e&&m._uU(0," Max date ")}function v(e,t){1&e&&m._uU(0," Min date ")}function k(e,t){1&e&&m._uU(0," Single date or a range ")}function L(e,t){1&e&&m._uU(0,' "Cancel" clicked ')}function H(e,t){1&e&&m._uU(0,' "Confirm" button clicked ')}function S(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"tui-doc-demo"),m._UZ(1,"tui-mobile-calendar",8),m.qZA(),m.TgZ(2,"tui-doc-documentation"),m.YNc(3,q,4,0,"ng-template",9),m.NdJ("documentationPropertyValueChange",(function(t){return m.CHM(e),m.oxw().disabledItemHandler=t})),m.YNc(4,N,1,0,"ng-template",10),m.NdJ("documentationPropertyValueChange",(function(t){return m.CHM(e),m.oxw().max=t})),m.YNc(5,v,1,0,"ng-template",11),m.NdJ("documentationPropertyValueChange",(function(t){return m.CHM(e),m.oxw().min=t})),m.YNc(6,k,1,0,"ng-template",12),m.NdJ("documentationPropertyValueChange",(function(t){return m.CHM(e),m.oxw().single=t})),m.YNc(7,L,1,0,"ng-template",13),m.YNc(8,H,1,0,"ng-template",14),m.qZA()}if(2&e){const e=m.oxw();m.xp6(1),m.Q6J("disabledItemHandler",e.disabledItemHandler)("max",e.max)("min",e.min)("single",e.single),m.xp6(2),m.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),m.xp6(1),m.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),m.xp6(1),m.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),m.xp6(1),m.Q6J("documentationPropertyValue",e.single)}}function J(e,t){if(1&e&&(m.TgZ(0,"ol",15),m.TgZ(1,"li"),m.TgZ(2,"p"),m._uU(3," Import "),m.TgZ(4,"code"),m._uU(5,"TuiDialogModule"),m.qZA(),m._uU(6," and "),m.TgZ(7,"code"),m._uU(8,"TuiMobileCalendarModule"),m.qZA(),m._uU(9," once into the main module "),m.qZA(),m._UZ(10,"tui-doc-code",16),m.qZA(),m.TgZ(11,"li"),m.TgZ(12,"p"),m._uU(13," Import "),m.TgZ(14,"code"),m._uU(15,"TuiMobileCalendarDialogModule"),m.qZA(),m._uU(16," for automatic use with "),m.TgZ(17,"code"),m._uU(18,"TuiInputDate"),m.qZA(),m._uU(19," or "),m.TgZ(20,"code"),m._uU(21,"TuiInputDateRange"),m.qZA(),m._uU(22," : "),m.qZA(),m._UZ(23,"tui-doc-code",16),m.qZA(),m.TgZ(24,"li"),m.TgZ(25,"p"),m._uU(26,"Add to the template:"),m.qZA(),m._UZ(27,"tui-doc-code",17),m.qZA(),m.qZA()),2&e){const e=m.oxw();m.xp6(10),m.Q6J("code",e.exampleModule),m.xp6(13),m.Q6J("code",e.exampleImportDialogModule),m.xp6(4),m.Q6J("code",e.exampleHtml)}}let Y=(()=>{class e{constructor(){this.exampleHtml=n.e(87147).then(n.t.bind(n,87147,17)),this.exampleModule=n.e(38346).then(n.t.bind(n,38346,17)),this.exampleImportDialogModule=n.e(60697).then(n.t.bind(n,60697,17)),this.example1={TypeScript:n.e(96985).then(n.t.bind(n,96985,17)),HTML:n.e(82551).then(n.t.bind(n,82551,17)),LESS:n.e(95840).then(n.t.bind(n,95840,17))},this.example2={TypeScript:n.e(38739).then(n.t.bind(n,38739,17)),HTML:n.e(65382).then(n.t.bind(n,65382,17))},this.example3={TypeScript:n.e(8863).then(n.t.bind(n,8863,17)),HTML:n.e(58130).then(n.t.bind(n,58130,17)),LESS:n.e(1468).then(n.t.bind(n,1468,17))},this.minVariants=[c.TUI_FIRST_DAY,new c.TuiDay(2017,2,5),new c.TuiDay(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[c.TUI_LAST_DAY,new c.TuiDay(2020,2,5),new c.TuiDay(2300,0,1)],this.max=this.maxVariants[0],this.single=!0,this.disabledItemHandlerVariants=[c.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.control=new a.NI,this.stream=(0,c.tuiControlValue)(this.control)}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=m.Xpm({type:e,selectors:[["example-tui-mobile-calendar"]],features:[m._Bn([{provide:d.TUI_CALENDAR_DATE_STREAM,deps:[e],useFactory:e=>e.stream}])],decls:4,vars:0,consts:[["header","MobileCalendar","package","ADDON-MOBILE","type","components"],["pageTab",""],["tuiLink","",3,"routerLink"],["id","dropdown","heading","Custom dropdown",3,"content"],["id","range","heading","Range",3,"content"],["id","localization","heading","Localization",3,"content","description"],["localizationDescription",""],["fragment","first-day-of-week","routerLink","/utils/tokens","tuiLink",""],[1,"calendar",3,"disabledItemHandler","max","min","single"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","single","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","cancel","documentationPropertyType","void"],["documentationPropertyMode","output","documentationPropertyName","confirm","documentationPropertyType","TuiDayRange | TuiDay"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m.TgZ(0,"tui-doc-page",0),m.YNc(1,I,29,8,"ng-template",1),m.YNc(2,S,9,11,"ng-template",1),m.YNc(3,J,28,3,"ng-template",1),m.qZA())},directives:[s.q,p.n,g.V,i.yS,T.f,x,A,b,U.F,f.F,M.z,D.B,P.c],styles:[".calendar[_ngcontent-%COMP%]{height:28.75rem}"],changeDetection:0}),e})(),E=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=m.oAB({type:e}),e.ɵinj=m.cJS({imports:[[o.ez,a.UX,l.TuiLinkModule,l.TuiButtonModule,r.TuiMobileCalendarModule,r.TuiMobileCalendarDialogModule,u.fV,i.Bz.forChild((0,u.Ve)(Y))]]}),e})()}}]);