(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[45433],{45433:e=>{e.exports='<tui-tree\n    *ngFor="let item of data.children"\n    [tuiTreeController]="true"\n    [value]="item"\n    [content]="content"\n    [childrenHandler]="handler"\n></tui-tree>\n\n<ng-template\n    #content\n    let-item\n>\n    {{ item.text }}\n</ng-template>\n'}}]);