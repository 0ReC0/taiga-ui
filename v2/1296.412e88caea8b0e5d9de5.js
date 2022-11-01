(window.webpackJsonp=window.webpackJsonp||[]).push([[1296],{SF49:function(n,e,i){"use strict";i.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContextWithImplicit, tuiPure, TuiStringHandler} from '@taiga-ui/cdk';\nimport {of} from 'rxjs';\nimport {delay} from 'rxjs/operators';\n\ninterface Python {\n    readonly id: number;\n    readonly name: string;\n}\n\nconst ITEMS: readonly Python[] = [\n    {id: 42, name: `John Cleese`},\n    {id: 237, name: `Eric Idle`},\n    {id: 666, name: `Michael Palin`},\n    {id: 123, name: `Terry Gilliam`},\n    {id: 777, name: `Terry Jones`},\n    {id: 999, name: `Graham Chapman`},\n];\n\n@Component({\n    selector: `tui-select-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample5 {\n    value = 42;\n\n    // Server request for items imitation\n    readonly items$ = of(ITEMS).pipe(delay(3000));\n\n    @tuiPure\n    stringify(\n        items: readonly Python[],\n    ): TuiStringHandler<TuiContextWithImplicit<number>> {\n        const map = new Map(items.map(({id, name}) => [id, name] as [number, string]));\n\n        return ({$implicit}: TuiContextWithImplicit<number>) => map.get($implicit) || ``;\n    }\n}\n"}}]);