(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[8853],{8853:n=>{n.exports='<div class="container">\n    <tui-input-number\n        tuiTextfieldSize="l"\n        tuiTextfieldPostfix="₽"\n        [formControl]="amountControl"\n        [tuiTextfieldCleaner]="true"\n        [tuiTextfieldLabelOutside]="true"\n    >\n        <input\n            tuiTextfield\n            inputmode="numeric"\n        />\n    </tui-input-number>\n\n    <button\n        tuiButton\n        class="pay-button"\n        (click)="payByCard()"\n    >\n        <div class="icon-group">\n            <tui-svg src="tuiIconVisa"></tui-svg>\n            <tui-svg src="tuiIconMaestro"></tui-svg>\n            <tui-svg src="tuiIconMir"></tui-svg>\n        </div>\n        Pay\n    </button>\n</div>\n'}}]);