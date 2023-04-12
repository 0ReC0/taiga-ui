(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[7283],{7283:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiBooleanHandler} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-multi-select-example-10',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample10 {\n    itemControl = new FormControl();\n    itemGroupControl = new FormControl();\n\n    items = [\n        'Luke Skywalker',\n        'Leia Organa Solo',\n        'Darth Vader',\n        'Han Solo',\n        'Obi-Wan Kenobi',\n        'Yoda',\n    ];\n\n    groupItems = [\n        ['Caesar', 'Greek', 'Apple and Chicken'],\n        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],\n    ];\n\n    labels = ['Salad', 'Soup'];\n\n    disableHandler: TuiBooleanHandler<string> = item => item.startsWith('Broccoli');\n}\n"}}]);