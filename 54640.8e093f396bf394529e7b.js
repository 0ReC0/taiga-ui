(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[54640],{54640:n=>{n.exports='<tui-input-files\n    *ngIf="!control.value"\n    [formControl]="control"\n>\n    <input\n        tuiInputFiles\n        accept="image/*"\n        capture="user"\n        title="Choose files (no limits)"\n    />\n</tui-input-files>\n\n<tui-files class="tui-space_top-1">\n    <tui-file\n        *ngIf="control.valueChanges | async as file"\n        [file]="file"\n        (removed)="removeFile()"\n    ></tui-file>\n</tui-files>\n'}}]);