(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[10488],{10488:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nclass Account {\n    constructor(\n        readonly name: string,\n        readonly balance: number,\n    ) {}\n\n    toString(): string {\n        return `${this.name} (${this.balance})`;\n    }\n}\n\n@Component({\n    selector: 'tui-accordion-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiAccordionExample2 {\n    readonly accounts = [\n        new Account('Rubles', 500),\n        new Account('Dollar', 237),\n        new Account('Euro', 100),\n    ];\n\n    svgIcons = {\n        rubles: import('./rubles.svg?raw'),\n    };\n\n    testForm = new FormGroup({\n        name: new FormControl(''),\n        accounts: new FormControl(this.accounts[0]),\n    });\n}\n"}}]);