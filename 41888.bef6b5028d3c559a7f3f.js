(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[41888],{41888:e=>{e.exports="```ts\nimport {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {TuiPreviewDialogService} from '@taiga-ui/addon-preview';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogContext} from '@taiga-ui/core';\n\n@Component({\n  // ...\n})\nexport class SomeComponent {\n  @ViewChild('preview')\n  readonly preview: TemplateRef<TuiDialogContext<void>>;\n\n  constructor(\n    @Inject(TuiPreviewDialogService)\n    private readonly previewDialogService: TuiPreviewDialogService,\n  ) {}\n\n  show() {\n    this.previewDialogService.open(this.preview).subscribe();\n  }\n}\n```\n"}}]);