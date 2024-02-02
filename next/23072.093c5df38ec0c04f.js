(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[23072],{23072:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_E2E} from '@taiga-ui/cdk';\nimport {of, timer} from 'rxjs';\n\n@Component({\n    selector: 'tui-progress-bar-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiProgressBarExample2 {\n    readonly fastValue$ = this.isE2E ? of(80) : timer(500, 100);\n    readonly slowValue$ = this.isE2E ? of(4) : timer(500, 2000);\n    readonly colors = [\n        'var(--tui-support-01)',\n        'var(--tui-support-21)',\n        'lightskyblue',\n        '#3682db',\n        'var(--tui-primary)',\n    ];\n\n    constructor(@Inject(TUI_IS_E2E) private readonly isE2E: boolean) {}\n}\n"}}]);