(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[62147],{62147:n=>{n.exports="```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {Injector, Component} from '@angular/core';\nimport {MyDialogComponent} from './my-dialog.component.ts';\n\n// ...\n\n@Component({\n  // ...\n})\nexport class MyComponent {\n  constructor(\n    @Inject(Injector) private readonly injector: Injector,\n    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,\n  ) {}\n\n  // ...\n  open() {\n    this.dialogs\n      .open(\n        // this.injector is optional\n        new PolymorpheusComponent(MyDialogComponent, this.injector),\n      )\n      .subscribe();\n  }\n}\n```\n"}}]);