(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5084],{5084:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiSwipeModule:()=>O});var i=n(86568),o=n(82312),c=n(59130),s=n(13512),a=n(18917),d=n(6528),r=n(13692),u=n(34496),p=n(37288),l=n(83480),m=n(28364);let h=(()=>{var e;class t{constructor(){this.swiped="default"}onSwipe(e){this.swiped=e.direction}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.In1({type:e,selectors:[["tui-swipe-example-1"]],hostVars:2,hostBindings:function(e,t){2&e&&d.m8U(t.swiped)},decls:2,vars:2,consts:[[1,"box","tui-text_body-l",3,"ngClass","tuiSwipe"]],template:function(e,t){1&e&&(d.I0R(0,"div",0),d.qCj("tuiSwipe",(function(e){return t.onSwipe(e)})),d.OEk(1),d.C$Y()),2&e&&(d.E7m("ngClass",t.swiped),d.yG2(1),d.oRS(" Swiped ",t.swiped,"\n"))},dependencies:[i.QF,m.g],styles:[".box[_ngcontent-%COMP%]{width:200px;height:200px;background-color:var(--tui-primary);transition:all .5s ease-out;display:flex;justify-content:center;align-items:center;touch-action:none}.box.left[_ngcontent-%COMP%]{background-color:var(--tui-support-12)}.box.right[_ngcontent-%COMP%]{background-color:var(--tui-support-03)}.box.top[_ngcontent-%COMP%]{background-color:var(--tui-support-08)}.box.bottom[_ngcontent-%COMP%]{background-color:var(--tui-support-10)}"],changeDetection:0}),t})();var w=n(96458),g=n(24916);function b(e,t){if(1&e){const e=d.KQA();d.I0R(0,"div",2),d.qCj("tuiSwipe",(function(t){d.usT(e);const n=d.GaO();return d.CGJ(n.onSwipe(t))})),d.OEk(1," Swipe right to close "),d.C$Y()}}let C=(()=>{var e;class t{constructor(){this.open$=new w.E}toggle(e){this.open$.next(e)}onSwipe(e){console.info(e.direction),"left"===e.direction&&this.toggle(!0),"right"===e.direction&&this.toggle(!1)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.In1({type:e,selectors:[["tui-swipe-example-2"]],decls:4,vars:4,consts:[[1,"container","tui-text_body-l",3,"tuiSwipe"],["class","sidebar tui-text_body-l",3,"tuiSwipe",4,"tuiSidebar","tuiSidebarDirection"],[1,"sidebar","tui-text_body-l",3,"tuiSwipe"]],template:function(e,t){1&e&&(d.I0R(0,"div",0),d.qCj("tuiSwipe",(function(e){return t.onSwipe(e)})),d.OEk(1," Swipe left to open "),d.yuY(2,b,2,0,"div",1),d.wVc(3,"async"),d.C$Y()),2&e&&(d.yG2(2),d.E7m("tuiSidebar",!!d.kDX(3,2,t.open$))("tuiSidebarDirection","right"))},dependencies:[m.g,g.G,i.a],styles:[".container[_ngcontent-%COMP%]{width:200px;height:200px}.sidebar[_ngcontent-%COMP%]{width:100%;height:100%}.container[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"],changeDetection:0}),t})();function f(e,t){if(1&e&&(d.I0R(0,"p")(1,"code"),d.OEk(2,"tuiSwipe"),d.C$Y(),d.OEk(3," directive allows detecting swipes on mobile devices. "),d.C$Y(),d.I0R(4,"p"),d.OEk(5," You can configure the directive with "),d.I0R(6,"code"),d.OEk(7,"TUI_SWIPE_OPTIONS"),d.C$Y(),d.OEk(8," token. "),d.wR5(9,"br"),d.OEk(10," Allowed options: "),d.C$Y(),d.I0R(11,"dl")(12,"dt")(13,"strong"),d.OEk(14,"timeout:"),d.C$Y()(),d.I0R(15,"dd"),d.OEk(16,"max time between touchstart and touchend"),d.C$Y(),d.I0R(17,"dt")(18,"strong"),d.OEk(19,"threshold"),d.C$Y(),d.OEk(20," : "),d.C$Y(),d.I0R(21,"dd"),d.OEk(22,"min distance between touchstart and touchend."),d.C$Y()(),d.I0R(23,"tui-doc-example",3),d.wR5(24,"tui-swipe-example-1"),d.C$Y(),d.I0R(25,"tui-doc-example",4),d.wR5(26,"tui-swipe-example-2"),d.C$Y()),2&e){const e=d.GaO();d.yG2(23),d.E7m("content",e.example1),d.yG2(2),d.E7m("content",e.example2)}}function x(e,t){if(1&e&&(d.I0R(0,"ol",5)(1,"li")(2,"p"),d.OEk(3," Import "),d.I0R(4,"code"),d.OEk(5,"TuiSwipeModule"),d.C$Y(),d.OEk(6," into a module where you want to use our directive "),d.C$Y(),d.wR5(7,"tui-doc-code",6),d.C$Y(),d.I0R(8,"li")(9,"p"),d.OEk(10,"Add to the template:"),d.C$Y(),d.wR5(11,"tui-doc-code",7),d.C$Y()()),2&e){const e=d.GaO();d.yG2(7),d.E7m("code",e.exampleModule),d.yG2(4),d.E7m("code",e.exampleHtml)}}let S=(()=>{var e;class t{constructor(){this.exampleModule=n.e(3536).then(n.t.bind(n,3536,17)),this.exampleHtml=n.e(91728).then(n.t.bind(n,91728,17)),this.example1={TypeScript:n.e(56932).then(n.t.bind(n,56932,17)),HTML:n.e(75752).then(n.t.bind(n,75752,17)),LESS:n.e(96844).then(n.t.bind(n,96844,17))},this.example2={TypeScript:n.e(27044).then(n.t.bind(n,27044,17)),HTML:n.e(2584).then(n.t.bind(n,2584,17)),LESS:n.e(26536).then(n.t.bind(n,26536,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.In1({type:e,selectors:[["example-tui-swipe"]],decls:3,vars:0,consts:[["header","Swipe","package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],["id","base","heading","Basic",3,"content"],["id","sidebar","heading","With sidebar",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(d.I0R(0,"tui-doc-page",0),d.yuY(1,f,27,2,"ng-template",1),d.yuY(2,x,12,2,"ng-template",2),d.C$Y())},dependencies:[r.u,u.E,p.u,l.I,h,C],encapsulation:2,changeDetection:0}),t})(),O=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=d.a4G({type:e}),e.ɵinj=d.s3X({imports:[i.MD,a.TuiSwipeModule,c.kx,s.TuiSidebarModule,a.TuiActiveZoneModule,o.qQ.forChild((0,c._A)(S))]}),t})()}}]);