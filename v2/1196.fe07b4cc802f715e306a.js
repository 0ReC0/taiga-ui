(window.webpackJsonp=window.webpackJsonp||[]).push([[1196],{IGd5:function(e,n,t){"use strict";t.r(n),n.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-push-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPushExample1 {\n    constructor(@Inject(TuiAlertService) private readonly alert: TuiAlertService) {}\n\n    onClose(): void {\n        this.alert\n            .open(`Close button is visible when you subscribe to (close) output`)\n            .subscribe();\n    }\n}\n"}}]);