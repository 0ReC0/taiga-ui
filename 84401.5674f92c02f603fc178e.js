(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[84401],{84401:o=>{o.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';\n\n@Component({\n    selector: 'tui-editor-color-picker-tool-example-1',\n    templateUrl: './index.html',\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@taiga-ui/addon-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@tiptap/extension-text-style').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n                import('@taiga-ui/addon-editor/extensions/font-color').then(\n                    ({FontColor}) => FontColor,\n                ),\n                import('@taiga-ui/addon-editor/extensions/background-color').then(\n                    ({BackgroundColor}) => BackgroundColor,\n                ),\n            ],\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorColorPickerToolExample1 {\n    readonly builtInTools = [TuiEditorTool.Undo];\n\n    readonly control = new FormControl('');\n}\n"}}]);