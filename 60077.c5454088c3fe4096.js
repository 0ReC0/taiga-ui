(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[60077],{60077:n=>{n.exports="import {Component} from '@angular/core';\nimport {UntypedFormControl, UntypedFormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-filter-by-input-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiFilterByInputExample1 {\n    readonly items = [\n        'John Cleese',\n        'Eric Idle',\n        'Graham Chapman',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n    ];\n\n    readonly form = new UntypedFormGroup({\n        user: new UntypedFormControl(),\n    });\n}\n"}}]);