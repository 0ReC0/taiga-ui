(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[98049],{98049:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiComboBoxModule:()=>tt});var i=n(17068),a=n(12057),o=n(24751),r=n(33982),u=n(73961),s=n(79388),l=n(3497),c=n(58770),d=n(89570),p=n(75695),m=n(64762),h=n(74788),g=n(82880),f=n(98204),x=n(43560),y=n(93525),T=n(33772),b=n(79121),Z=n(27075),C=n(79765),v=n(25917),M=n(45435),w=n(43190),_=n(39761),A=n(71289),U=n(40939),S=n(64374),P=n(41967),J=n(89290),q=n(10200),N=n(91030),L=n(52219),V=n(50020),I=n(44124);function F(e,t){if(1&e&&h._UZ(0,"tui-data-list-wrapper",8),2&e){const e=h.oxw().tuiLet;h.oxw();const t=h.MAs(3);h.Q6J("items",e)("itemContent",t)}}function H(e,t){if(1&e&&h._UZ(0,"tui-data-list-wrapper",8),2&e){const e=h.oxw().tuiLet;h.oxw();const t=h.MAs(3);h.Q6J("items",e)("itemContent",t)}}function k(e,t){if(1&e&&h._UZ(0,"tui-data-list-wrapper",8),2&e){const e=h.oxw().tuiLet;h.oxw();const t=h.MAs(3);h.Q6J("items",e)("itemContent",t)}}function D(e,t){if(1&e){const e=h.EpF();h.TgZ(0,"form",2),h.TgZ(1,"tui-combo-box",3),h.NdJ("searchChange",(function(t){return h.CHM(e),h.oxw().onSearchChange(t)})),h._uU(2," Find the best employees "),h.TgZ(3,"input",4),h.NdJ("input",(function(t){h.CHM(e);const n=h.oxw();return n.onSearchChange(n.extractValueFromEvent(t))})),h.qZA(),h.YNc(4,F,1,2,"tui-data-list-wrapper",5),h.qZA(),h.TgZ(5,"tui-combo-box",6),h._uU(6," Find the best employees "),h.TgZ(7,"input",4),h.NdJ("input",(function(t){h.CHM(e);const n=h.oxw();return n.onSearchChange(n.extractValueFromEvent(t))})),h.qZA(),h.YNc(8,H,1,2,"tui-data-list-wrapper",5),h.qZA(),h.TgZ(9,"tui-combo-box",7),h._uU(10," Choose a developer "),h.TgZ(11,"input",4),h.NdJ("input",(function(t){h.CHM(e);const n=h.oxw();return n.onSearchChange(n.extractValueFromEvent(t))})),h.qZA(),h.YNc(12,k,1,2,"tui-data-list-wrapper",5),h.qZA(),h.qZA()}if(2&e){const e=h.oxw(),t=h.MAs(3);h.Q6J("tuiTextfieldCleaner",!0),h.xp6(1),h.Q6J("formControl",e.testValue)("valueContent",t),h.xp6(4),h.Q6J("formControl",e.testValue)("valueContent",t),h.xp6(4),h.Q6J("formControl",e.testValue)("valueContent",t)}}function Q(e,t){if(1&e&&(h.TgZ(0,"div",9),h._UZ(1,"tui-avatar",10),h.TgZ(2,"div",11),h._uU(3),h.qZA(),h.qZA()),2&e){const e=t.$implicit;h.xp6(1),h.Q6J("avatarUrl",e.avatarUrl||null)("text",e.toString()),h.xp6(2),h.Oqu(e)}}class O{constructor(e,t,n=null){this.firstName=e,this.lastName=t,this.avatarUrl=n}toString(){return`${this.firstName} ${this.lastName}`}}const B=[new O("Roman","Sedov","https://avatars.githubusercontent.com/u/10106368"),new O("Alex","Inkin",Z.L`/images/avatar.jpg`)];let E=(()=>{class e{constructor(){this.search$=new C.xQ,this.items$=this.search$.pipe((0,M.h)((e=>null!==e)),(0,w.w)((e=>this.serverRequest(e).pipe((0,_.O)(null)))),(0,_.O)(B)),this.testValue=new o.NI(B[1])}onSearchChange(e){this.search$.next(e)}extractValueFromEvent(e){var t;return(null===(t=e.target)||void 0===t?void 0:t.value)||null}serverRequest(e){const t=B.filter((t=>(0,s.TUI_DEFAULT_MATCHER)(t,e||"")));return(0,v.of)(t).pipe((0,A.g)(1e3*Math.random()+500))}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=h.Xpm({type:e,selectors:[["tui-combo-box-example-1"]],decls:4,vars:3,consts:[["class","b-form",3,"tuiTextfieldCleaner",4,"tuiLet"],["content",""],[1,"b-form",3,"tuiTextfieldCleaner"],["tuiTextfieldSize","s",3,"formControl","valueContent","searchChange"],["tuiTextfield","","placeholder","Type a name",3,"input"],[3,"items","itemContent",4,"tuiDataList"],["tuiTextfieldSize","m",1,"tui-space_vertical-5",3,"formControl","valueContent"],[3,"formControl","valueContent"],[3,"items","itemContent"],[1,"template"],["size","xs",1,"avatar",3,"avatarUrl","text"],[1,"name"]],template:function(e,t){1&e&&(h.YNc(0,D,13,7,"form",0),h.ALo(1,"async"),h.YNc(2,Q,4,3,"ng-template",null,1,h.W1O)),2&e&&h.Q6J("tuiLet",h.lcZ(1,1,t.items$))},directives:[U.L,o._Y,o.JL,o.F,S.b,P._,J.m,q.s,o.JJ,o.oH,N.M,L.g,V.e,I.J],pipes:[a.Ov],styles:[".template[_ngcontent-%COMP%]{display:flex;align-items:center}.avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1}"],changeDetection:0}),e})();class Y{constructor(e,t,n=null,i=!1){this.firstName=e,this.lastName=t,this.avatarUrl=n,this.disabled=i}toString(){return`${this.firstName} ${this.lastName}`}}const G=[new Y("Roman","Sedov","https://avatars.githubusercontent.com/u/10106368"),new Y("Alex","Inkin",Z.L`/images/avatar.jpg`)];var R=n(87519),z=n(46782),$=n(47349);let W=(()=>{class e{constructor(e){this.destroy$=e,this.request$=new C.xQ,this.response$=this.request$.pipe((0,R.x)(),(0,w.w)((e=>(0,v.of)(G.filter((t=>(0,s.TUI_DEFAULT_MATCHER)(t,e)))).pipe((0,A.g)(1e3*Math.random()+500),(0,_.O)(null)))),(0,z.R)(this.destroy$),(0,$.d)({bufferSize:1,refCount:!0}))}request(e){return this.request$.next(e||""),this.response$}}return e.ɵfac=function(t){return new(t||e)(h.LFG(s.TuiDestroyService,2))},e.ɵprov=h.Yz7({token:e,factory:e.ɵfac}),e})();var j=n(20933),K=n(35065),X=n(23184);function ee(e,t){if(1&e&&(h._UZ(0,"tui-avatar",5),h.TgZ(1,"span",6),h._uU(2),h.qZA()),2&e){const e=t.$implicit;h.Q6J("avatarUrl",e.avatarUrl||null)("text",e.toString()),h.xp6(2),h.Oqu(e)}}function te(e,t){if(1&e&&(h.TgZ(0,"button",10),h._UZ(1,"tui-avatar",5),h.TgZ(2,"span",6),h._uU(3),h.qZA(),h.qZA()),2&e){const e=t.$implicit;h.Q6J("value",e)("disabled",e.disabled),h.xp6(1),h.Q6J("avatarUrl",e.avatarUrl||null)("text",e.toString()),h.xp6(2),h.Oqu(e)}}function ne(e,t){if(1&e&&(h.TgZ(0,"tui-data-list"),h.YNc(1,te,4,5,"button",9),h.qZA()),2&e){const e=h.oxw(2).tuiLet;h.xp6(1),h.Q6J("ngForOf",e)}}function ie(e,t){1&e&&h._UZ(0,"tui-loader",11)}function ae(e,t){if(1&e&&(h.YNc(0,ne,2,1,"tui-data-list",7),h.YNc(1,ie,1,0,"ng-template",null,8,h.W1O)),2&e){const e=h.MAs(2),t=h.oxw().tuiLet;h.Q6J("ngIf",t)("ngIfElse",e)}}function oe(e,t){if(1&e){const e=h.EpF();h.TgZ(0,"tui-combo-box",1),h.NdJ("searchChange",(function(t){return h.CHM(e),h.oxw().search=t})),h._uU(1," Find the best employees "),h._UZ(2,"input",2),h.YNc(3,ee,3,3,"ng-template",null,3,h.W1O),h.YNc(5,ae,3,2,"ng-template",4),h.qZA()}if(2&e){const e=h.MAs(4),t=h.oxw();h.Q6J("formControl",t.control)("valueContent",e)("search",t.search)}}let re=(()=>{class e{constructor(e){this.service=e,this.search="",this.control=new o.NI(G[0])}}return e.ɵfac=function(t){return new(t||e)(h.Y36(W))},e.ɵcmp=h.Xpm({type:e,selectors:[["tui-combo-box-example-2"]],features:[h._Bn([W,s.TuiDestroyService])],decls:2,vars:3,consts:[["class","b-form",3,"formControl","valueContent","search","searchChange",4,"tuiLet"],[1,"b-form",3,"formControl","valueContent","search","searchChange"],["tuiTextfield","","placeholder","Type a name"],["value",""],["tuiDataList",""],["size","xs",1,"avatar",3,"avatarUrl","text"],[1,"name"],[4,"ngIf","ngIfElse"],["loading",""],["tuiOption","",3,"value","disabled",4,"ngFor","ngForOf"],["tuiOption","",3,"value","disabled"],[1,"tui-space_vertical-4"]],template:function(e,t){1&e&&(h.YNc(0,oe,6,3,"tui-combo-box",0),h.ALo(1,"async")),2&e&&h.Q6J("tuiLet",h.lcZ(1,1,t.service.request(t.search)))},directives:[U.L,P._,J.m,o.JJ,o.oH,N.M,L.g,I.J,a.O5,j.q,a.sg,K.v,X.k],pipes:[a.Ov],styles:[".avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1}"],changeDetection:0}),e})();var ue=n(68800);function se(e,t){if(1&e&&(h._UZ(0,"tui-data-list-wrapper",3),h.ALo(1,"tuiFilterByInput")),2&e){const e=h.oxw();h.Q6J("items",h.lcZ(1,1,e.items))}}let le=(()=>{class e{constructor(){this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.value=""}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=h.Xpm({type:e,selectors:[["tui-combo-box-example-3"]],decls:4,vars:1,consts:[[1,"b-form",3,"ngModel","ngModelChange"],["tuiTextfield","","placeholder","Type a name"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(h.TgZ(0,"tui-combo-box",0),h.NdJ("ngModelChange",(function(e){return t.value=e})),h._uU(1," Find the best employees "),h._UZ(2,"input",1),h.YNc(3,se,2,3,"tui-data-list-wrapper",2),h.qZA()),2&e&&h.Q6J("ngModel",t.value)},directives:[P._,J.m,o.JJ,o.On,N.M,L.g,V.e],pipes:[ue.b],encapsulation:2,changeDetection:0}),e})();var ce=n(30114),de=n(60666);function pe(e,t){if(1&e&&(h._UZ(0,"tui-data-list-wrapper",3),h.ALo(1,"tuiFilterByInputWith"),h.ALo(2,"tuiStringifyContent")),2&e){const e=h.oxw();h.Q6J("items",h.xi3(1,2,e.items,e.stringify))("itemContent",h.lcZ(2,5,e.stringify))}}let me=(()=>{class e{constructor(){this.value=null,this.items=[{name:"John",surname:"Cleese"},{name:"Eric",surname:"Idle"},{name:"Graham",surname:"Chapman"},{name:"Michael",surname:"Palin"},{name:"Terry",surname:"Gilliam"},{name:"Terry",surname:"Jones"}],this.stringify=e=>`${e.name} ${e.surname}`}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=h.Xpm({type:e,selectors:[["tui-combo-box-example-4"]],decls:4,vars:2,consts:[[1,"b-form",3,"stringify","ngModel","ngModelChange"],["tuiTextfield","","placeholder","Type a name"],[3,"items","itemContent",4,"tuiDataList"],[3,"items","itemContent"]],template:function(e,t){1&e&&(h.TgZ(0,"tui-combo-box",0),h.NdJ("ngModelChange",(function(e){return t.value=e})),h._uU(1," Find the best employees "),h._UZ(2,"input",1),h.YNc(3,pe,3,7,"tui-data-list-wrapper",2),h.qZA()),2&e&&h.Q6J("stringify",t.stringify)("ngModel",t.value)},directives:[P._,J.m,o.JJ,o.On,N.M,L.g,V.e],pipes:[ce.Y,de.Q],encapsulation:2,changeDetection:0}),e})();var he=n(62500);let ge=(()=>{class e{constructor(e){this.strategy=e,this.indexChange=this.strategy.scrolledIndexChange}}return e.ɵfac=function(t){return new(t||e)(h.Y36(i.yU))},e.ɵdir=h.lG2({type:e,selectors:[["","indexChange",""]],outputs:{indexChange:"indexChange"}}),e})();function fe(e,t){if(1&e&&(h.TgZ(0,"button",6),h._uU(1),h.qZA()),2&e){const e=t.$implicit;h.Q6J("value",e),h.xp6(1),h.hij(" ",e," ")}}function xe(e,t){if(1&e){const e=h.EpF();h.TgZ(0,"cdk-virtual-scroll-viewport",3),h.NdJ("indexChange",(function(){return h.CHM(e),h.MAs(2).handleFocusLossIfNecessary()})),h.TgZ(1,"tui-data-list",null,4),h.YNc(3,fe,2,2,"button",5),h.qZA(),h.qZA()}if(2&e){const e=t.tuiLet;h.Udp("height",44*e.length,"px"),h.Q6J("itemSize",44),h.xp6(3),h.Q6J("cdkVirtualForOf",e)}}function ye(e,t){if(1&e&&(h.ynx(0),h.YNc(1,xe,4,4,"cdk-virtual-scroll-viewport",2),h.ALo(2,"tuiFilterByInput"),h.BQk()),2&e){const e=h.oxw();h.xp6(1),h.Q6J("tuiLet",h.lcZ(2,1,e.countries))}}let Te=(()=>{class e{constructor(){this.value=null,this.countries=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation","Rwanda","Réunion","Saint Barthélemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Åland Islands"]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=h.Xpm({type:e,selectors:[["tui-combo-box-example-5"]],decls:3,vars:1,consts:[[1,"b-form",3,"ngModel","ngModelChange"],[4,"tuiDataList"],["tuiScrollable","","class","scroll",3,"height","itemSize","indexChange",4,"tuiLet"],["tuiScrollable","",1,"scroll",3,"itemSize","indexChange"],["list",""],["tuiOption","",3,"value",4,"cdkVirtualFor","cdkVirtualForOf"],["tuiOption","",3,"value"]],template:function(e,t){1&e&&(h.TgZ(0,"tui-combo-box",0),h.NdJ("ngModelChange",(function(e){return t.value=e})),h._uU(1," Country "),h.YNc(2,ye,3,3,"ng-container",1),h.qZA()),2&e&&h.Q6J("ngModel",t.value)},directives:[P._,J.m,o.JJ,o.On,L.g,U.L,i.N7,i.xd,he.R,ge,j.q,i.x0,K.v],pipes:[ue.b],styles:[".scroll[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;min-height:64px;max-height:200px}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar, .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}"],changeDetection:0}),e})();var be=n(68874);function Ze(e,t){if(1&e&&h._UZ(0,"tui-data-list-wrapper",4),2&e){const e=h.oxw();h.Q6J("items",e.items)}}const Ce=e=>`${e.name} (${e.dept.title})`;let ve=(()=>{class e{constructor(){this.testValue=new o.NI(null),this.items=[{id:42,name:"John Cleese",dept:{id:566,title:"Financial"}},{id:237,name:"Eric Idle",dept:{id:560,title:"Staffing"}},{id:666,name:"Michael Palin",dept:{id:566,title:"Financial"}},{id:123,name:"Terry Gilliam",dept:{id:500,title:"Administrative"}},{id:777,name:"Terry Jones",dept:{id:566,title:"Financial"}},{id:999,name:"Graham Chapman",dept:{id:560,title:"Staffing"}}]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=h.Xpm({type:e,selectors:[["tui-combo-box-example-6"]],features:[h._Bn([(0,c.tuiItemsHandlersProvider)({stringify:Ce})])],decls:5,vars:2,consts:[[1,"b-form"],["tuiTextfieldSize","m",3,"formControl","tuiTextfieldLabelOutside"],["tuiTextfield","","placeholder","Type a name"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(h.TgZ(0,"form",0),h.TgZ(1,"tui-combo-box",1),h._uU(2," Employee "),h._UZ(3,"input",2),h.YNc(4,Ze,1,1,"tui-data-list-wrapper",3),h.qZA(),h.qZA()),2&e&&(h.xp6(1),h.Q6J("formControl",t.testValue)("tuiTextfieldLabelOutside",!0))},directives:[o._Y,o.JL,o.F,P._,J.m,q.s,o.JJ,o.oH,be.x,N.M,L.g,V.e],encapsulation:2,changeDetection:0}),e})();var Me=n(66596),we=n(10977),_e=n(76189),Ae=n(51192),Ue=n(60404),Se=n(54218),Pe=n(61135),Je=n(33250),qe=n(84848),Ne=n(3729),Le=n(87205),Ve=n(34880),Ie=n(91473),Fe=n(83074);const He=["valueTemplateContent"];function ke(e,t){1&e&&(h._uU(0," You can use "),h.TgZ(1,"code"),h._uU(2,"ComboBox"),h.qZA(),h._uU(3," with "),h.TgZ(4,"code"),h._uU(5,"ScrollingModule"),h.qZA(),h._uU(6," from "),h.TgZ(7,"a",11),h._uU(8," @angular/cdk/scrolling "),h.qZA(),h._uU(9," . "))}function De(e,t){if(1&e&&(h.TgZ(0,"div",2),h.TgZ(1,"code"),h._uU(2,"ComboBox"),h.qZA(),h._uU(3," is a textfield with a dropdown with items. You can choose one of available options or input a value manually. "),h.qZA(),h.TgZ(4,"tui-doc-example",3),h.TgZ(5,"tui-notification",4),h._uU(6," If you need to set some attributes or listen to events on native "),h.TgZ(7,"code"),h._uU(8,"input"),h.qZA(),h._uU(9," , you can put it inside with "),h.TgZ(10,"code"),h._uU(11,"Textfield"),h.qZA(),h._uU(12," directive as shown below "),h.qZA(),h._UZ(13,"tui-combo-box-example-1"),h.qZA(),h.TgZ(14,"tui-doc-example",5),h._UZ(15,"tui-combo-box-example-2"),h.qZA(),h.TgZ(16,"tui-doc-example",6),h._UZ(17,"tui-combo-box-example-3"),h.qZA(),h.TgZ(18,"tui-doc-example",7),h._UZ(19,"tui-combo-box-example-4"),h.qZA(),h.TgZ(20,"tui-doc-example",8),h.YNc(21,ke,10,0,"ng-template",null,9,h.W1O),h.TgZ(23,"tui-notification",2),h._uU(24," Note that virtual scroll can imperatively remove focused option from DOM. This causes ExpressionChange errors and to solve those take a look at a tiny "),h.TgZ(25,"code"),h._uU(26,"IndexChange"),h.qZA(),h._uU(27," directive included in this example. "),h.qZA(),h._UZ(28,"tui-combo-box-example-5"),h.qZA(),h.TgZ(29,"tui-doc-example",10),h._UZ(30,"tui-combo-box-example-6"),h.qZA()),2&e){const e=h.MAs(22),t=h.oxw();h.xp6(4),h.Q6J("content",t.example1),h.xp6(10),h.Q6J("content",t.example2),h.xp6(2),h.Q6J("content",t.example3),h.xp6(2),h.Q6J("content",t.example4),h.xp6(2),h.Q6J("content",t.example5)("description",e),h.xp6(9),h.Q6J("content",t.example6)}}function Qe(e,t){if(1&e&&h._UZ(0,"tui-data-list-wrapper",25),2&e){const e=h.oxw(3);h.Q6J("items",e.filter(e.search))}}function Oe(e,t){if(1&e){const e=h.EpF();h.TgZ(0,"tui-combo-box",23),h.NdJ("searchChange",(function(t){return h.CHM(e),h.oxw(2).search=t})),h._uU(1," Choose an account "),h.YNc(2,Qe,1,1,"tui-data-list-wrapper",24),h.qZA()}if(2&e){const e=h.oxw(2);h.Q6J("formControl",e.control)("focusable",e.focusable)("valueContent",e.valueContent)("identityMatcher",e.identityMatcher)("readOnly",e.readOnly)("strict",e.strict)("stringify",e.stringify)("strictMatcher",e.strictMatcher)("pseudoInvalid",e.pseudoInvalid)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoActive",e.pseudoPressed)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiDropdownOffset",e.dropdownOffset)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintAppearance",e.hintAppearance)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldFiller",e.filler)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("search",e.search)}}function Be(e,t){if(1&e&&(h.TgZ(0,"div",26),h._UZ(1,"tui-svg",27),h.TgZ(2,"span"),h._uU(3),h.qZA(),h.qZA()),2&e){const e=t.$implicit;h.xp6(3),h.Oqu(e)}}function Ee(e,t){1&e&&(h._uU(0," Disabled state (use "),h.TgZ(1,"code"),h._uU(2,"formControl.disable()"),h.qZA(),h._uU(3," ) "))}function Ye(e,t){1&e&&(h._uU(0," Textfield value to subscribe on input or setting it from the outside (emits "),h.TgZ(1,"code"),h._uU(2,"null"),h.qZA(),h._uU(3," when item from list selected) "))}function Ge(e,t){1&e&&(h._uU(0," A function that compares search and value to define a match between them. "),h.TgZ(1,"strong"),h._uU(2,"Must be a pure function"),h.qZA())}function Re(e,t){1&e&&(h._uU(0," Value must only be an item of suggestions  "),h._UZ(1,"code",28),h.TgZ(2,"p"),h.TgZ(3,"strong"),h._uU(4," When "),h.TgZ(5,"code"),h._uU(6,"false"),h.qZA(),h._uU(7," , make sure your handlers, such as "),h.TgZ(8,"code"),h._uU(9,"stringify"),h.qZA(),h._uU(10," can handle "),h.TgZ(11,"code"),h._uU(12,"string"),h.qZA(),h._uU(13," value, as well as "),h._UZ(14,"code",28),h.qZA(),h.qZA())}function ze(e,t){1&e&&(h._uU(0," A function that compares search text and item to define a match between them. Lowercase string comparison function by default. "),h.TgZ(1,"strong"),h._uU(2,"Should be a pure function"),h.qZA())}function $e(e,t){1&e&&(h._uU(0," A function that transforms object into a string. "),h.TgZ(1,"code"),h._uU(2,"String(value)"),h.qZA(),h._uU(3," by default. "),h.TgZ(4,"strong"),h._uU(5,"Should be a pure function"),h.qZA())}function We(e,t){1&e&&h._uU(0," A template for custom view of selected value ")}function je(e,t){if(1&e){const e=h.EpF();h.TgZ(0,"tui-doc-demo",12),h.YNc(1,Oe,3,27,"ng-template"),h.qZA(),h.YNc(2,Be,4,1,"ng-template",null,13,h.W1O),h.TgZ(4,"div"),h.TgZ(5,"p"),h._uU(6," Set a value with copied object from items to check "),h.TgZ(7,"code"),h._uU(8,"identityMatcher"),h.qZA(),h._uU(9," : "),h.qZA(),h.TgZ(10,"button",14),h.NdJ("click",(function(){return h.CHM(e),h.oxw().setValue()})),h._uU(11," Set "),h.qZA(),h.qZA(),h.TgZ(12,"tui-doc-documentation"),h.YNc(13,Ee,4,0,"ng-template",15),h.NdJ("documentationPropertyValueChange",(function(t){return h.CHM(e),h.oxw().disabled=t})),h.YNc(14,Ye,4,0,"ng-template",16),h.NdJ("documentationPropertyValueChange",(function(t){return h.CHM(e),h.oxw().search=t})),h.YNc(15,Ge,3,0,"ng-template",17),h.NdJ("documentationPropertyValueChange",(function(t){return h.CHM(e),h.oxw().identityMatcher=t})),h.YNc(16,Re,15,0,"ng-template",18),h.NdJ("documentationPropertyValueChange",(function(t){return h.CHM(e),h.oxw().strict=t})),h.YNc(17,ze,3,0,"ng-template",19),h.NdJ("documentationPropertyValueChange",(function(t){return h.CHM(e),h.oxw().strictMatcher=t})),h.YNc(18,$e,6,0,"ng-template",20),h.NdJ("documentationPropertyValueChange",(function(t){return h.CHM(e),h.oxw().stringify=t})),h.YNc(19,We,1,0,"ng-template",21),h.NdJ("documentationPropertyValueChange",(function(t){return h.CHM(e),h.oxw().selectedValueTemplate=t})),h.qZA(),h._UZ(20,"inherited-documentation",22)}if(2&e){const e=h.oxw();h.Q6J("control",e.control),h.xp6(13),h.Q6J("documentationPropertyValue",e.disabled),h.xp6(1),h.Q6J("documentationPropertyValue",e.search),h.xp6(1),h.Q6J("documentationPropertyValues",e.identityMatcherVariants)("documentationPropertyValue",e.identityMatcher),h.xp6(1),h.Q6J("documentationPropertyValue",e.strict),h.xp6(1),h.Q6J("documentationPropertyValues",e.strictMatcherVariants)("documentationPropertyValue",e.strictMatcher),h.xp6(1),h.Q6J("documentationPropertyValues",e.stringifyVariants)("documentationPropertyValue",e.stringify),h.xp6(1),h.Q6J("documentationPropertyValues",e.valueTemplateVariants)("documentationPropertyValue",e.selectedValueTemplate),h.xp6(1),h.Q6J("dropdown",!0)}}function Ke(e,t){if(1&e&&(h.TgZ(0,"ol",29),h.TgZ(1,"li"),h.TgZ(2,"p"),h._uU(3," Import an Angular module for forms and "),h.TgZ(4,"code"),h._uU(5,"TuiComboBoxModule"),h.qZA(),h._uU(6," in the same module where you want to use our component: "),h.qZA(),h._UZ(7,"tui-doc-code",30),h.TgZ(8,"p"),h._uU(9," See samples to learn more about working with "),h.TgZ(10,"code"),h._uU(11,"tui-data-list-wrapper"),h.qZA(),h._uU(12," or without them "),h.qZA(),h.qZA(),h.TgZ(13,"li"),h.TgZ(14,"p"),h._uU(15," Declare a form ( "),h.TgZ(16,"code"),h._uU(17,"FormGroup"),h.qZA(),h._uU(18," ) or a control ( "),h.TgZ(19,"code"),h._uU(20,"FormControl"),h.qZA(),h._uU(21," ) in your component: "),h.qZA(),h._UZ(22,"tui-doc-code",31),h.qZA(),h.TgZ(23,"li"),h.TgZ(24,"p"),h._uU(25,"Add to the template:"),h.qZA(),h._UZ(26,"tui-doc-code",32),h.qZA(),h.qZA()),2&e){const e=h.oxw();h.xp6(7),h.Q6J("code",e.exampleModule),h.xp6(15),h.Q6J("code",e.exampleForm),h.xp6(4),h.Q6J("code",e.exampleHtml)}}class Xe{constructor(e,t){this.name=e,this.balance=t}toString(){return`${this.name} (${this.balance})`}}class et extends g.b{constructor(){super(...arguments),this.exampleForm=n.e(72351).then(n.t.bind(n,72351,17)),this.exampleModule=n.e(34142).then(n.t.bind(n,34142,17)),this.exampleHtml=n.e(62982).then(n.t.bind(n,62982,17)),this.example1={TypeScript:n.e(74375).then(n.t.bind(n,74375,17)),HTML:n.e(48990).then(n.t.bind(n,48990,17)),LESS:n.e(21050).then(n.t.bind(n,21050,17))},this.example2={TypeScript:n.e(7863).then(n.t.bind(n,7863,17)),HTML:n.e(53102).then(n.t.bind(n,53102,17)),LESS:n.e(74073).then(n.t.bind(n,74073,17)),"user.ts":n.e(11962).then(n.t.bind(n,11962,17)),"request.service.ts":n.e(1442).then(n.t.bind(n,1442,17)),"database-mock-data.ts":n.e(47161).then(n.t.bind(n,47161,17))},this.example3={TypeScript:n.e(87533).then(n.t.bind(n,87533,17)),HTML:n.e(88753).then(n.t.bind(n,88753,17))},this.example4={TypeScript:n.e(28454).then(n.t.bind(n,28454,17)),HTML:n.e(32569).then(n.t.bind(n,32569,17))},this.example5={TypeScript:n.e(54991).then(n.t.bind(n,31574,17)),HTML:n.e(31241).then(n.t.bind(n,31241,17)),LESS:n.e(94729).then(n.t.bind(n,94729,17)),"index-change.directive.ts":n.e(47711).then(n.t.bind(n,47711,17))},this.example6={TypeScript:n.e(14890).then(n.t.bind(n,66331,17)),HTML:n.e(83889).then(n.t.bind(n,83889,17))},this.items=[new Xe("Rubles",500),new Xe("Dollars",237),new Xe("Netherlands Antillean Guilder and Falkland Islands Pound",700)],this.strict=!0,this.search="",this.valueTemplateVariants=["","Template"],this.selectedValueTemplate="",this.iconVariants=["","tuiIconPieChartLarge","tuiIconCreditCardLarge"],this.iconLeft=this.iconVariants[0],this.stringifyVariants=[s.TUI_DEFAULT_STRINGIFY,e=>String(String(e).match(/\d+/))],this.stringify=this.stringifyVariants[0],this.strictMatcherVariants=[s.TUI_STRICT_MATCHER,(e,t,n)=>Number.parseInt(n(e).match(/\d+/g)[0],10)===Number.parseInt(t,10)],this.strictMatcher=this.strictMatcherVariants[0],this.identityMatcherVariants=[(e,t)=>e===t,(e,t)=>e.balance===t.balance],this.identityMatcher=this.identityMatcherVariants[0],this.control=new o.NI(null,o.kI.required)}get valueContent(){return this.valueTemplateRef&&this.selectedValueTemplate?this.valueTemplateRef:""}filter(e){return this.items.filter((t=>(0,s.TUI_DEFAULT_MATCHER)(t,e||"")))}setValue(){this.control.setValue(new Xe("Dollars",237))}}et.ɵfac=function(){let e;return function(t){return(e||(e=h.n5z(et)))(t||et)}}(),et.ɵcmp=h.Xpm({type:et,selectors:[["example-tui-combo-box"]],viewQuery:function(e,t){if(1&e&&h.Gf(He,5),2&e){let e;h.iGM(e=h.CRH())&&(t.valueTemplateRef=e.first)}},features:[h._Bn([{provide:f.x,useExisting:(0,h.Gpc)((()=>et))},(0,u.PR)(["tuiTextfieldPrefix","tuiTextfieldPostfix"])]),h.qOj],decls:4,vars:0,consts:[["header","ComboBox","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],["id","async","heading","Async data loading",3,"content"],[1,"tui-space_bottom-4","b-form"],["id","datalist","heading","DataList",3,"content"],["id","wrapper","heading","DataListWrapper","description","With filtering through tuiFilterByInput pipe",3,"content"],["id","stringify","heading","Stringify","description","With filtering through tuiFilterByInputWith pipe using custom stringify handler",3,"content"],["id","virtual","heading","Virtual scroll",3,"content","description"],["cdkVirtualScrollDescription",""],["id","options-stringify","heading","Options (stringify)",3,"content"],["tuiLink","","rel","noreferrer","href","https://material.angular.io/cdk/scrolling/overview","target","_blank"],[3,"control"],["valueTemplateContent",""],["tuiButton","","type","button","size","m",3,"click"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","search","documentationPropertyMode","input-output","documentationPropertyType","string | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","identityMatcher","documentationPropertyMode","input","documentationPropertyType","TuiIdentityMatcher",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","strict","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","strictMatcher","documentationPropertyMode","input","documentationPropertyType","TuiStringMatcher | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","stringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","valueContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],[3,"formControl","focusable","valueContent","identityMatcher","readOnly","strict","stringify","strictMatcher","pseudoInvalid","pseudoFocus","pseudoHover","pseudoActive","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiDropdownOffset","tuiHintContent","tuiHintDirection","tuiHintAppearance","tuiTextfieldIconLeft","tuiTextfieldFiller","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize","search","searchChange"],[3,"items",4,"tuiDataList"],[3,"items"],[1,"item-template"],["src","tuiIconCheck",1,"item-template-icon"],["tuiText","<T>"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(h.TgZ(0,"tui-doc-page",0),h.YNc(1,De,31,7,"ng-template",1),h.YNc(2,je,21,13,"ng-template",1),h.YNc(3,Ke,27,3,"ng-template",1),h.qZA())},directives:[x.q,y.n,T.f,b.L,E,re,le,me,Te,ve,Me.V,we.F,_e.v,Ae.z,Ue.B,Se.w,P._,J.m,Pe.E,o.JJ,o.oH,Je.Ek,qe.bZ,Ne.aR,Le.k,S.b,be.x,q.s,L.g,V.e,Ve.P,Ie.v,Fe.c],styles:[".item-template[_ngcontent-%COMP%]{display:flex;align-items:center}.item-template-icon[_ngcontent-%COMP%]{margin-right:.375rem}"],changeDetection:0}),(0,m.gn)([s.tuiPure],et.prototype,"filter",null);let tt=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=h.oAB({type:e}),e.ɵinj=h.cJS({imports:[[a.ez,o.u5,o.UX,i.Cl,l.TuiScrollbarModule,c.TuiComboBoxModule,l.TuiButtonModule,l.TuiLinkModule,c.TuiAvatarModule,l.TuiSvgModule,l.TuiDataListModule,l.TuiLoaderModule,s.TuiLetModule,l.TuiNotificationModule,l.TuiTextfieldControllerModule,l.TuiHintModule,l.TuiDropdownModule,c.TuiDataListWrapperModule,c.TuiFilterByInputPipeModule,c.TuiStringifyContentPipeModule,d.wq,u.fV,p.f,r.Bz.forChild((0,u.Ve)(et)),u.Zp]]}),e})()}}]);