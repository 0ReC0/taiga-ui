(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[78997],{78997:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-value-changes-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiValueChangesExample2 {\n    readonly form = new FormGroup({\n        name: new FormControl('', {updateOn: 'blur'}),\n        age: new FormControl(),\n    });\n\n    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}\n\n    onChanges(value: string): void {\n        this.alerts.open(JSON.stringify(value)).subscribe();\n    }\n}\n"}}]);