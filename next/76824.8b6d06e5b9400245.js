(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[76824],{76824:n=>{n.exports="```ts\nimport {TUI_PROMPT} from '@taiga-ui/kit';\n\n// ...\nexport class MyComponent {\n  constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}\n\n  prompt() {\n    this.dialogs\n      .open<boolean>(TUI_PROMPT, {\n        label: 'Are you sure?',\n        data: {\n          content: 'This action has consequences',\n          yes: 'Whatever...',\n          no: 'Oops!',\n        },\n      })\n      .subscribe(response => {\n        // ...\n      });\n  }\n}\n```\n"}}]);