(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[96927],{96927:e=>{e.exports="import {Component} from '@angular/core';\nimport {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-textarea-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiTextareaExample1 {\n    testForm = new UntypedFormGroup({\n        testValue1: new UntypedFormControl('A field', Validators.required),\n        testValue2: new UntypedFormControl(\n            'This one can be expanded',\n            Validators.required,\n        ),\n    });\n}\n"}}]);