(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[93606],{93606:n=>{n.exports='<tui-tree\n    [childrenHandler]="handler"\n    [content]="content"\n    [map]="map"\n    [tuiTreeController]="false"\n    [value]="data"\n></tui-tree>\n\n<ng-template\n    #content\n    let-item\n>\n    {{ item.text }}\n</ng-template>\n\n<p>\n    <button\n        size="s"\n        tuiButton\n        type="button"\n        class="programmatic tui-space_right-2"\n        (click)="toggleTopmost()"\n    >\n        Toggle Topmost\n    </button>\n</p>\n<p>\n    <button\n        size="s"\n        tuiButton\n        type="button"\n        class="programmatic"\n        (click)="toggleLevel(0)"\n    >\n        Toggle Top level 1\n    </button>\n</p>\n<button\n    size="s"\n    tuiButton\n    type="button"\n    class="programmatic"\n    (click)="toggleLevel(2)"\n>\n    Toggle Top level 3\n</button>\n'}}]);