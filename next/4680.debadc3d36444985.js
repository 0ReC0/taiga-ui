(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4680],{4680:n=>{n.exports='<div class="wrapper">\n    <tui-input-range\n        id="input-range-with-key-steps"\n        [formControl]="control"\n        [keySteps]="keySteps"\n        [max]="max"\n        [min]="min"\n        [segments]="segments"\n        [steps]="totalSteps"\n    >\n        Not linear growing sliders\n    </tui-input-range>\n\n    <div class="ticks-labels">\n        <span *ngFor="let label of ticksLabels">{{ label }}</span>\n    </div>\n</div>\n\n<p class="tui-space_top-12 tui-space_bottom-0">\n    Control value:\n    <output for="input-range-with-key-steps">\n        <code>{{ control.value | json }}</code>\n    </output>\n</p>\n'}}]);