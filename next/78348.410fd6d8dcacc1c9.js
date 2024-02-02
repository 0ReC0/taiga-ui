(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[78348],{78348:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTime} from '@taiga-ui/cdk';\nimport {tuiCreateTimePeriods, tuiInputTimeOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-time-example-6',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiInputTimeOptionsProvider({\n            nativePicker: true,\n        }),\n    ],\n})\nexport class TuiInputTimeExample6 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(new TuiTime(10, 30)),\n        testValue2: new FormControl(new TuiTime(10, 30, 0)),\n        testValue3: new FormControl(new TuiTime(14, 30)),\n        testValue4: new FormControl(new TuiTime(10, 30, 0)),\n    });\n\n    readonly items = tuiCreateTimePeriods(14, 16, [0, 30]);\n}\n"}}]);