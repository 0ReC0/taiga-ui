(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[87904],{65524:e=>{e.exports="import {VIRTUAL_SCROLL_STRATEGY, VirtualScrollStrategy} from '@angular/cdk/scrolling';\nimport {Directive, Inject, Output} from '@angular/core';\n\n@Directive({\n    selector: '[indexChange]',\n})\nexport class IndexChangeDirective {\n    @Output()\n    readonly indexChange = this.strategy.scrolledIndexChange;\n\n    constructor(\n        @Inject(VIRTUAL_SCROLL_STRATEGY)\n        private readonly strategy: VirtualScrollStrategy,\n    ) {}\n}\n"}}]);