(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[14678],{14678:n=>{n.exports="import {Component, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';\n\nimport {IMAGE_CLIPBOARD_PASTE_EXTENSION} from './image-tool/paste.extension';\n\n@Component({\n    selector: 'tui-editor-paste-image-tool-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import('@taiga-ui/addon-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@taiga-ui/addon-editor/extensions/image-editor').then(\n                    ({tuiCreateImageEditorExtension}) =>\n                        tuiCreateImageEditorExtension({injector}).extend(\n                            IMAGE_CLIPBOARD_PASTE_EXTENSION,\n                        ),\n                ),\n            ],\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorPasteImageToolExample1 {\n    readonly builtInTools = [TuiEditorTool.Undo];\n    readonly control = new FormControl('');\n}\n"}}]);