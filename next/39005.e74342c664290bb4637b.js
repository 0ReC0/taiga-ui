(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[39005],{39005:n=>{n.exports='import {Component} from \'@angular/core\';\nimport {FormControl} from \'@angular/forms\';\nimport {changeDetection} from \'@demo/emulate/change-detection\';\nimport {encapsulation} from \'@demo/emulate/encapsulation\';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    tuiEditorOptionsProvider,\n    TuiEditorTool,\n} from \'@taiga-ui/addon-editor\';\n\n@Component({\n    selector: \'tui-editor-font-example-2\',\n    templateUrl: \'./index.html\',\n    providers: [\n        tuiEditorOptionsProvider({\n            fontOptions: () =>\n                [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96].map(size => ({\n                    px: size,\n                    name: `${size}`,\n                    ngStyle: {\'font-size\': \'1rem\'},\n                })),\n        }),\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import(\'@taiga-ui/addon-editor/extensions/starter-kit\').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import(\'@tiptap/extension-text-style\').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n                import(\'@taiga-ui/addon-editor/extensions/font-size\').then(\n                    ({TuiFontSize}) => TuiFontSize,\n                ),\n            ],\n        },\n    ],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiEditorFontExample2 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Size];\n\n    control = new FormControl(`\n        <p><span style="font-size: 96px">96</span></p>\n        <p><span style="font-size: 72px">72</span></p>\n        <p><span style="font-size: 48px">48</span></p>\n        <p><span style="font-size: 36px">36</span></p>\n        <p><span style="font-size: 30px">30</span></p>\n        <p><span style="font-size: 24px">24</span></p>\n        <p><span style="font-size: 18px">18</span></p>\n        <p><span style="font-size: 14px">14</span></p>\n        <p><span style="font-size: 12px">12</span></p>\n        <p><span style="font-size: 11px">11</span></p>\n        <p><span style="font-size: 10px">10</span></p>\n        <p><span style="font-size: 9px">9</span></p>\n        <p><span style="font-size: 8px">8</span></p>\n    `);\n}\n'}}]);