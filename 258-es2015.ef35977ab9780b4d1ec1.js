(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{"940Z":function(n,e,a){"use strict";a.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_LAST_DAY, TuiDay} from '@taiga-ui/cdk';\nimport {TuiNamedDay} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-date-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateExample3 {\n    from: TuiDay | null = null;\n    to: TuiDay | null = null;\n    min = new TuiDay(2017, 9, 4);\n    max = TuiDay.currentLocal();\n    items = [\n        new TuiNamedDay(\n            TUI_LAST_DAY.append({year: -1}),\n            'Until today',\n            TuiDay.currentLocal(),\n        ),\n    ];\n}\n"}}]);