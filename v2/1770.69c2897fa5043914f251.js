(window.webpackJsonp=window.webpackJsonp||[]).push([[1770],{Mdpv:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-currency-example2`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCurrencyExample2 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(100),\n    });\n}\n"}}]);