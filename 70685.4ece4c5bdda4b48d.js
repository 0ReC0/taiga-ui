(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[70685],{70685:e=>{e.exports='<form [formGroup]="form">\n    <tui-filter\n        formControlName="filters"\n        [badgeHandler]="badgeHandler"\n        [content]="content"\n        [identityMatcher]="identityMatcher"\n        [items]="items"\n    ></tui-filter>\n</form>\n<ng-template\n    #content\n    let-item\n>\n    {{ item.title }}\n</ng-template>\n<div>\n    <pre>Form value: {{ form.value | json }}</pre>\n</div>\n'}}]);