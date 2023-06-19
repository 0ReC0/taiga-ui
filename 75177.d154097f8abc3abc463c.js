(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[75177],{75177:n=>{n.exports='<p>Parent zone: {{ parentActive }}</p>\n<p>Child zone: {{ childActive }}</p>\n<p>\n    <input placeholder="input outside a zone" />\n</p>\n<div\n    #parent="tuiActiveZone"\n    class="active-zone"\n    [class.active-zone_active]="parentActive"\n    (tuiActiveZoneChange)="onParentActiveZone($event)"\n>\n    <h2>Parent zone</h2>\n    <button\n        tuiButton\n        type="button"\n    >\n        A button inside zone\n    </button>\n</div>\n<p>\n    <button type="button">A button outside of zone</button>\n</p>\n<div\n    class="active-zone"\n    [class.active-zone_active]="childActive"\n    [tuiActiveZoneParent]="parent"\n    (tuiActiveZoneChange)="onChildActiveZone($event)"\n>\n    <h2>Child zone</h2>\n    <tui-input\n        #input\n        [formControl]="control"\n    >\n        Input inside zone\n    </tui-input>\n    <p>\n        You can bind different elements with\n        <code>[tuiActiveZoneParent]</code>\n        directive\n    </p>\n</div>\n<p>\n    <input placeholder="input outside zone" />\n    <button\n        type="button"\n        (click)="onClick(input)"\n    >\n        Focus input in zone\n    </button>\n</p>\n<p>Zone keeps active after browser tab change</p>\n'}}]);