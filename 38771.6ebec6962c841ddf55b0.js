(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[38771],{38771:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiLetModule:()=>y});var i=n(12057),c=n(33982),a=n(73961),o=n(54231),u=n(54002),p=n(74788),l=n(43560),s=n(93525),r=n(33772),d=n(20945),m=n(39761),g=n(40939),Z=n(4123);function h(e,t){if(1&e&&(p.ynx(0),p.TgZ(1,"p"),p._uU(2),p.qZA(),p.TgZ(3,"p"),p._uU(4," It can be used many times: "),p._UZ(5,"tui-badge",1),p.qZA(),p.TgZ(6,"p"),p._uU(7,"It subscribed once and async pipe unsubscribed it after component destroy"),p.qZA(),p.BQk()),2&e){const e=t.tuiLet;p.xp6(2),p.hij("Timer value: ",e,""),p.xp6(3),p.Q6J("value",e)}}let T=(()=>{class e{constructor(){this.timer$=(0,d.F)(1e3).pipe((0,m.O)(0))}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-let-example-1"]],decls:2,vars:3,consts:[[4,"tuiLet"],[3,"value"]],template:function(e,t){1&e&&(p.YNc(0,h,8,2,"ng-container",0),p.ALo(1,"async")),2&e&&p.Q6J("tuiLet",p.lcZ(1,1,t.timer$))},directives:[g.L,Z.g],pipes:[i.Ov],encapsulation:2,changeDetection:0}),e})();var f=n(45294);function x(e,t){if(1&e&&(p.TgZ(0,"div"),p.TgZ(1,"p"),p._uU(2),p.qZA(),p.TgZ(3,"p"),p._uU(4," That can be used many times: "),p._UZ(5,"tui-badge",1),p.qZA(),p.TgZ(6,"p"),p._uU(7,"And getter is called only once."),p.qZA(),p.qZA()),2&e){const e=t.tuiLet;p.xp6(2),p.hij("Calculated with getter value: ",e,""),p.xp6(3),p.Q6J("value",e)}}let _=(()=>{class e{constructor(e){this.alerts=e}get getter(){return this.alerts.open("Getter called").subscribe(),"🐳"}}return e.ɵfac=function(t){return new(t||e)(p.Y36(f.TuiAlertService))},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-let-example-2"]],decls:1,vars:1,consts:[[4,"tuiLet"],[3,"value"]],template:function(e,t){1&e&&p.YNc(0,x,8,2,"div",0),2&e&&p.Q6J("tuiLet",t.getter)},directives:[g.L,Z.g],encapsulation:2,changeDetection:0}),e})();var v=n(83074);function A(e,t){if(1&e&&(p.TgZ(0,"p"),p._uU(1," Directive "),p.TgZ(2,"code"),p._uU(3,"tuiLet"),p.qZA(),p._uU(4," allows to reuse computed value in several places in template to avoid recalculations of getters or many async pipes "),p.qZA(),p.TgZ(5,"tui-doc-example",3),p._UZ(6,"tui-let-example-1"),p.qZA(),p.TgZ(7,"tui-doc-example",4),p._UZ(8,"tui-let-example-2"),p.qZA()),2&e){const e=p.oxw();p.xp6(5),p.Q6J("content",e.example1),p.xp6(2),p.Q6J("content",e.example2)}}function b(e,t){if(1&e&&(p.TgZ(0,"ol",5),p.TgZ(1,"li"),p.TgZ(2,"p"),p._uU(3," Import "),p.TgZ(4,"code"),p._uU(5,"TuiLetModule"),p.qZA(),p._uU(6," into a module where you want to use our component "),p.qZA(),p._UZ(7,"tui-doc-code",6),p.qZA(),p.TgZ(8,"li"),p.TgZ(9,"p"),p._uU(10,"Add to the template:"),p.qZA(),p._UZ(11,"tui-doc-code",7),p.qZA(),p.qZA()),2&e){const e=p.oxw();p.xp6(7),p.Q6J("code",e.exampleModule),p.xp6(4),p.Q6J("code",e.exampleHtml)}}let q=(()=>{class e{constructor(){this.exampleModule=n.e(89065).then(n.t.bind(n,89065,17)),this.exampleHtml=n.e(10686).then(n.t.bind(n,10686,17)),this.example1={TypeScript:n.e(33542).then(n.t.bind(n,33542,17)),HTML:n.e(757).then(n.t.bind(n,757,17))},this.example2={TypeScript:n.e(43846).then(n.t.bind(n,43846,17)),HTML:n.e(38782).then(n.t.bind(n,38782,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["example-tui-let"]],decls:3,vars:0,consts:[["header","Let","package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],["id","pipe","heading","With Pipe",3,"content"],["id","getter","heading","With getter",3,"content"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,A,9,2,"ng-template",1),p.YNc(2,b,12,2,"ng-template",2),p.qZA())},directives:[l.q,s.n,r.f,T,_,v.c],encapsulation:2,changeDetection:0}),e})(),y=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[[i.ez,o.TuiLetModule,u.TuiBadgeModule,a.fV,c.Bz.forChild((0,a.Ve)(q))]]}),e})()}}]);