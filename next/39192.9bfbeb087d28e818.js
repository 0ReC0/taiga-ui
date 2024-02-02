(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[39192],{39192:n=>{n.exports='<tui-hosted-dropdown\n    #dropdown\n    [content]="content"\n    [(open)]="dropdownOpen"\n>\n    <button\n        appearance="flat"\n        icon="tuiIconMoreVertical"\n        tuiIconButton\n        type="button"\n        [pseudoHover]="dropdown.open || null"\n    ></button>\n</tui-hosted-dropdown>\n<ng-template\n    #content\n    let-activeZone\n>\n    <tui-data-list\n        tuiDataListDropdownManager\n        [size]="size"\n        [tuiActiveZoneParent]="activeZone"\n    >\n        <button\n            *tuiLet="\'French Fries\' as item"\n            tuiOption\n            (click)="selectOption(item)"\n        >\n            {{ item }}\n        </button>\n        <button\n            tuiDropdownAlign="right"\n            tuiDropdownSided\n            tuiOption\n            [tuiDropdown]="burgersTmp"\n            [tuiDropdownManual]="false"\n        >\n            Burgers\n        </button>\n        <button\n            tuiDropdownAlign="right"\n            tuiDropdownSided\n            tuiOption\n            [tuiDropdown]="drinksTmp"\n            [tuiDropdownManual]="false"\n        >\n            Drinks\n        </button>\n        <button\n            *tuiLet="\'Ice Cream\' as item"\n            tuiOption\n            (click)="selectOption(item)"\n        >\n            {{ item }}\n        </button>\n    </tui-data-list>\n    <ng-template #burgersTmp>\n        <tui-data-list\n            tuiDataListDropdownManager\n            [tuiActiveZoneParent]="activeZone"\n        >\n            <button\n                *ngFor="let burger of burgers"\n                tuiOption\n                (click)="selectOption(burger)"\n            >\n                {{ burger }}\n            </button>\n            <button\n                tuiDropdownAlign="right"\n                tuiDropdownSided\n                tuiOption\n                [tuiDropdown]="drinksTmp"\n                [tuiDropdownManual]="false"\n            >\n                Nested menu\n            </button>\n        </tui-data-list>\n    </ng-template>\n    <ng-template #drinksTmp>\n        <tui-data-list [size]="size">\n            <button\n                *ngFor="let drink of drinks"\n                tuiOption\n                (click)="selectOption(drink)"\n            >\n                {{ drink }}\n            </button>\n        </tui-data-list>\n    </ng-template>\n</ng-template>\n'}}]);