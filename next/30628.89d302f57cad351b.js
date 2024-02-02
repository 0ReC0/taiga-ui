(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[30628],{30628:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-input-date-range-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputDateRangeExample1 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(\n            new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),\n        ),\n    });\n\n    readonly min = new TuiDay(2000, 2, 20);\n\n    readonly max = new TuiDay(2040, 2, 20);\n}\n"}}]);