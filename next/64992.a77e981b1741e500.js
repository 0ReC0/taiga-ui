(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[64992],{64992:n=>{n.exports='```html\n<tui-hosted-dropdown\n  [content]="dropdown"\n  [(open)]="open"\n>\n  <button\n    tuiButton\n    type="button"\n  >\n    Open menu\n  </button>\n</tui-hosted-dropdown>\n<ng-template #dropdown>\n  <tui-data-list>\n    <button\n      *ngFor="let item of items"\n      tuiOption\n      (click)="onClick()"\n    >\n      {{item}}\n    </button>\n  </tui-data-list>\n</ng-template>\n```\n'}}]);