(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[15979],{15979:t=>{t.exports='<div class="tags">\n    <tui-tag\n        *ngFor="let tag of tags; let index = index; empty: emptyTags"\n        size="l"\n        status="custom"\n        class="tag"\n        [value]="tag"\n        [hoverable]="true"\n        [editable]="true"\n        [removable]="true"\n        (edited)="handleTagEdited($event, index)"\n    ></tui-tag>\n</div>\n\n<ng-template #emptyTags>All tags were removed. But Taiga UI is still an awesome UI-kit library ;)</ng-template>\n\n<tui-notification\n    status="info"\n    class="tui-space_top-2"\n>\n    Import\n    <code>TuiForModule</code>\n    if you want to be able to pass empty list template to\n    <code>ngFor</code>\n</tui-notification>\n'}}]);