(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[44671],{44671:n=>{n.exports='<button\n    size="m"\n    tuiButton\n    type="button"\n    (click)="showDialog()"\n>\n    Show\n</button>\n<ng-template\n    let-observer\n    [tuiDialogOptions]="{label: \'Declarative directive\', size: \'s\'}"\n    [(tuiDialog)]="open"\n>\n    <form\n        [formGroup]="exampleForm"\n        (ngSubmit)="observer.complete()"\n    >\n        <p>This abstracts away service and subscription</p>\n        <tui-input\n            formControlName="exampleControl"\n            tuiAutoFocus\n        >\n            Some value\n        </tui-input>\n        <p>\n            <button\n                tuiButton\n                type="submit"\n            >\n                Ok\n            </button>\n        </p>\n    </form>\n</ng-template>\n'}}]);