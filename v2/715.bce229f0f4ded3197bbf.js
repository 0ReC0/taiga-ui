(window.webpackJsonp=window.webpackJsonp||[]).push([[715],{"05Q8":function(n,e,t){"use strict";t.r(e),e.default='<form [formGroup]="testForm">\n    <label\n        *ngFor="let phone of formData.controls; let i = index"\n        tuiLabel\n        label="Phone number {{ i + 1 }}"\n        formArrayName="phones"\n        class="tui-space_bottom-4"\n    >\n        <span class="row">\n            <tui-input-phone\n                formControlName="{{ i }}"\n                tuiTextfieldAutocomplete="off"\n                tuiTextfieldSize="m"\n                class="input"\n                [tuiTextfieldLabelOutside]="true"\n            ></tui-input-phone>\n            <button\n                tuiIconButton\n                type="button"\n                size="m"\n                title="Delete phone number"\n                appearance="icon"\n                icon="tuiIconTrash"\n                class="tui-space_left-2 icon"\n                (click)="removePhone(i)"\n            ></button>\n        </span>\n        <ng-template #phoneErrorContent>Invalid phone number length</ng-template>\n        <tui-field-error formControlName="{{ i }}"></tui-field-error>\n    </label>\n\n    <tui-field-error\n        formArrayName="phones"\n        class="form-array-error"\n    ></tui-field-error>\n\n    <button\n        tuiButton\n        type="button"\n        size="s"\n        class="tui-space_top-4"\n        (click)="addPhone()"\n    >\n        Add a phone number\n    </button>\n</form>\n'}}]);