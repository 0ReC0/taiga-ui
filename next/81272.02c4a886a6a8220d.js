(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[81272],{81272:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMonth} from '@taiga-ui/cdk';\nimport {tuiInputDateOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'input-month-example-3',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [tuiInputDateOptionsProvider({nativePicker: true})],\n})\nexport class InputMonthExample3 {\n    readonly control = new FormControl<TuiMonth | null>(null);\n    readonly min = TuiMonth.currentLocal().append({month: -12});\n    readonly max = TuiMonth.currentLocal().append({month: 12});\n}\n"}}]);