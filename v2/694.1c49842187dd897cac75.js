(window.webpackJsonp=window.webpackJsonp||[]).push([[694],{"8x7P":function(n,o,i){"use strict";i.r(o),o.default="```ts\nimport {tuiEditorOptionsProvider, TuiEditorOptions} from '@taiga-ui/addon-editor';\n\nconst CUSTOM_EDITOR_OPTIONS: Partial<TuiEditorOptions> = {\n  colors: new Map([\n    ['red', 'rgba(244, 87, 37, 1)'],\n    ['blue', 'var(--tui-primary)'],\n  ]),\n  //...\n};\n\n@Component({\n  //...\n  providers: [\n    // ..\n    tuiEditorOptionsProvider(CUSTOM_EDITOR_OPTIONS),\n  ],\n})\nexport class YourComponent {}\n```\n"}}]);