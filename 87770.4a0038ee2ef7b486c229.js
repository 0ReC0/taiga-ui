(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[87770],{87770:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-tabs-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTabsExample4 {\n    activeItemIndex = 0;\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alerts: TuiAlertService,\n    ) {}\n\n    onClick(item: string): void {\n        this.alerts.open(item).subscribe();\n    }\n}\n"}}]);