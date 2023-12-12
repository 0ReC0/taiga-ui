(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[88918],{88918:n=>{n.exports="import {Component} from '@angular/core';\nimport {UntypedFormControl, UntypedFormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-radio-list-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiRadioListExample2 {\n    readonly items = [\n        {\n            name: 'Simple',\n            description: 'Something usual',\n        },\n        {\n            name: 'Advanced',\n            description: 'Something better',\n        },\n        {\n            name: 'PRO',\n            description: 'Something cool',\n        },\n    ];\n\n    readonly testForm = new UntypedFormGroup({\n        tariff: new UntypedFormControl(this.items[0]),\n    });\n}\n"}}]);