(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[34661],{34661:(t,e,r)=>{r.r(e),r.d(e,{Highlight:()=>i,default:()=>i,inputRegex:()=>o,pasteRegex:()=>s});var a=r(12867);const o=/(?:^|\s)((?:==)((?:[^~=]+))(?:==))$/,s=/(?:^|\s)((?:==)((?:[^~=]+))(?:==))/g,i=a.Mark.create({name:"highlight",addOptions:()=>({multicolor:!1,HTMLAttributes:{}}),addAttributes(){return this.options.multicolor?{color:{default:null,parseHTML:t=>t.getAttribute("data-color")||t.style.backgroundColor,renderHTML:t=>t.color?{"data-color":t.color,style:`background-color: ${t.color}; color: inherit`}:{}}}:{}},parseHTML:()=>[{tag:"mark"}],renderHTML({HTMLAttributes:t}){return["mark",(0,a.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setHighlight:t=>({commands:e})=>e.setMark(this.name,t),toggleHighlight:t=>({commands:e})=>e.toggleMark(this.name,t),unsetHighlight:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-Shift-h":()=>this.editor.commands.toggleHighlight()}},addInputRules(){return[(0,a.markInputRule)({find:o,type:this.type})]},addPasteRules(){return[(0,a.markPasteRule)({find:s,type:this.type})]}})}}]);