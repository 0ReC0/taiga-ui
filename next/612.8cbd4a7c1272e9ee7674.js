(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{zU60:function(e,n,i){"use strict";i.r(n),n.default='<form\n    tuiTextfieldSize="m"\n    class="b-form"\n    [tuiTextfieldLabelOutside]="true"\n    [tuiTextfieldCleaner]="true"\n>\n    <label\n        tuiLabel\n        i18n-label\n        label="Modified cleaner icon"\n    >\n        <tui-primitive-textfield\n            [value]="value"\n            (valueChange)="onValueChange($event)"\n            (focusedChange)="onFocused($event)"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                type="email"\n            />\n        </tui-primitive-textfield>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label="Override modified cleaner icon"\n        class="tui-space_top-4"\n    >\n        <tui-primitive-textfield\n            [value]="value"\n            [iconCleaner]="iconCleaner"\n            (valueChange)="onValueChange($event)"\n            (focusedChange)="onFocused($event)"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                type="email"\n            />\n        </tui-primitive-textfield>\n    </label>\n</form>\n\n<ng-template #iconCleaner>\n    <tui-svg src="tuiIconDraft"></tui-svg>\n</ng-template>\n'}}]);