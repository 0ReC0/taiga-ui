(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[18708],{18708:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DEFAULT_STRINGIFY, TuiContextWithImplicit} from '@taiga-ui/cdk';\nimport {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-line-chart-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiLineChartExample1 {\n    readonly value: readonly TuiPoint[] = [\n        [50, 50],\n        [100, 75],\n        [150, 50],\n        [200, 150],\n        [250, 155],\n        [300, 190],\n        [350, 90],\n    ];\n\n    readonly stringify = TUI_DEFAULT_STRINGIFY;\n\n    readonly hintContent = ({\n        $implicit,\n    }: TuiContextWithImplicit<readonly TuiPoint[]>): number => $implicit[0][1];\n}\n"}}]);