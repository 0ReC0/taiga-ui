(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[14536],{14536:e=>{e.exports='<tui-files>\n    <tui-file\n        *ngFor="let file of files"\n        state="normal"\n        [file]="file"\n        [showDelete]="control.enabled"\n    ></tui-file>\n\n    <tui-file\n        *ngFor="let file of rejectedFiles"\n        state="error"\n        [file]="file"\n        [showDelete]="control.enabled"\n    ></tui-file>\n\n    <tui-file\n        *ngIf="loadingFile && !isE2E"\n        state="loading"\n        [file]="loadingFile"\n        [showDelete]="control.enabled"\n        (removed)="removeLoading()"\n    ></tui-file>\n</tui-files>\n\n<h4>With link</h4>\n<tui-files>\n    <tui-file\n        *tuiItem\n        state="normal"\n        [file]="fileWithLink"\n        [showDelete]="control.enabled"\n    ></tui-file>\n</tui-files>\n\n<h4>With deleted state</h4>\n<tui-files>\n    <tui-file\n        *ngFor="let file of removedFiles"\n        size="l"\n        state="deleted"\n        [file]="file"\n        [showDelete]="control.enabled"\n    >\n        <button\n            tuiLink\n            type="button"\n            (click)="restore(file)"\n        >\n            Restore\n        </button>\n    </tui-file>\n    <tui-file\n        *ngFor="let file of restoredFiles"\n        size="l"\n        state="normal"\n        [file]="file"\n        [leftContent]="icon"\n        [showDelete]="control.enabled"\n        (removed)="remove(file)"\n    ></tui-file>\n</tui-files>\n\n<ng-template #icon>\n    <tui-svg src="tuiIconFileLarge"></tui-svg>\n</ng-template>\n'}}]);