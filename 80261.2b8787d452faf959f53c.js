(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[80261],{80261:n=>{n.exports='<tui-hosted-dropdown\n    tuiDropdownHover\n    [content]="dropdown"\n    [(open)]="open"\n>\n    <button\n        tuiButton\n        type="button"\n    >\n        Dropdown hover\n    </button>\n    <ng-template\n        #dropdown\n        let-activeZone\n    >\n        <p class="margin">\n            There is\n            <code>let-activeZone</code>\n            in dropdown template context to work with nested dropdowns\n        </p>\n\n        <tui-select\n            class="margin"\n            [formControl]="selected"\n            [tuiActiveZoneParent]="activeZone"\n        >\n            Nested select\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="selectItems"\n            ></tui-data-list-wrapper>\n        </tui-select>\n\n        <tui-hosted-dropdown\n            tuiDropdownHover\n            class="margin"\n            [content]="content"\n            [tuiActiveZoneParent]="activeZone"\n        >\n            <button\n                size="s"\n                tuiButton\n                type="button"\n            >\n                Nested dropdown hover\n            </button>\n            <ng-template #content>\n                <p class="tui-space_horizontal-2">Nested content!</p>\n            </ng-template>\n        </tui-hosted-dropdown>\n\n        <tui-data-list>\n            <button\n                *ngFor="let item of items"\n                tuiOption\n            >\n                {{ item }}\n            </button>\n        </tui-data-list>\n    </ng-template>\n</tui-hosted-dropdown>\n'}}]);