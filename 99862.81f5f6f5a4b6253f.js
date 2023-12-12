(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[99862],{99862:e=>{e.exports="import {Component} from '@angular/core';\nimport {UntypedFormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiKeySteps} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-slider-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiSliderExample5 {\n    readonly labels: string[] = ['5 000', '100 000', '300 000', '1 000 000'];\n    readonly formControl = new UntypedFormControl(720_000);\n    readonly segments = this.labels.length - 1;\n\n    readonly keySteps: TuiKeySteps = [\n        [0, 5_000],\n        [100 / 3, 100_000],\n        [(100 / 3) * 2, 300_000],\n        [100, 1_000_000],\n    ];\n}\n"}}]);