(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[98952],{98952:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-skeleton-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiSkeletonExample1 {\n    radius = 0;\n\n    testForm = new FormGroup({\n        testValue: new FormControl(true),\n    });\n\n    skeletonVisible = false;\n    lightMode = false;\n    placeholder = 'Some paragraph with information';\n\n    showSkeleton(): void {\n        this.skeletonVisible = !this.skeletonVisible;\n    }\n\n    toggleLight(): void {\n        this.lightMode = !this.lightMode;\n    }\n}\n"}}]);