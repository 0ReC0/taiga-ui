(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[39585],{39585:n=>{n.exports='<tui-tree\n    [childrenHandler]="handler"\n    [content]="content"\n    [tuiTreeController]="true"\n    [value]="data"\n></tui-tree>\n\n<ng-template\n    #content\n    let-node="node"\n    let-value\n>\n    <div\n        class="wrapper"\n        [style.opacity]="1 / node.level"\n    >\n        <tui-svg\n            *ngIf="value.icon"\n            [src]="value.icon"\n        ></tui-svg>\n        {{ value.text }}\n    </div>\n</ng-template>\n'}}]);