(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[20632],{20632:t=>{t.exports='<div class="example">\n    <tui-select\n        tuiTextfieldSize="l"\n        [formControl]="account"\n        [tuiTextfieldLabelOutside]="true"\n        [valueContent]="value"\n    >\n        <ng-template tuiDataList>\n            <tui-data-list>\n                <button\n                    *ngFor="let item of accounts"\n                    tuiOption\n                    [value]="item"\n                >\n                    <my-account [account]="item"></my-account>\n                </button>\n            </tui-data-list>\n        </ng-template>\n    </tui-select>\n\n    <tui-select\n        tuiTextfieldSize="m"\n        class="tui-space_top-2"\n        [formControl]="account"\n        [tuiTextfieldLabelOutside]="true"\n        [valueContent]="value"\n    >\n        <ng-template tuiDataList>\n            <tui-data-list>\n                <button\n                    *ngFor="let item of accounts"\n                    tuiOption\n                    [value]="item"\n                >\n                    <my-account [account]="item"></my-account>\n                </button>\n            </tui-data-list>\n        </ng-template>\n    </tui-select>\n</div>\n\n<ng-template\n    #value\n    let-account\n>\n    <my-account [account]="account"></my-account>\n</ng-template>\n'}}]);