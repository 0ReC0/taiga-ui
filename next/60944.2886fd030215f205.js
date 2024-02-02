(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[60944],{60944:i=>{i.exports='<div tuiCell>\n    <tui-avatar\n        src="tuiIconEyeLarge"\n        tuiAccessories\n    ></tui-avatar>\n    <div tuiTitle>\n        Long title in a cell will wrap to multiple lines and so will the subtitle\n        <div\n            tuiSubtitle\n            [style.display]="\'block\'"\n        >\n            Use\n            <strong>tuiAccessories</strong>\n            to keep your side content properly aligned if you have many lines of text\n        </div>\n    </div>\n    <div tuiAccessories>\n        <tui-icon\n            icon="tuiIconCheckLarge"\n            [style.color]="\'var(--tui-positive)\'"\n        ></tui-icon>\n    </div>\n</div>\n\n<div\n    tuiCell\n    [style.white-space]="\'nowrap\'"\n>\n    <div\n        tuiFade\n        tuiTitle\n    >\n        Alternatively you can use fade to hide extra text using nowrap CSS\n        <div tuiSubtitle>Works the same for subtitle when fade directive is applied to the top</div>\n    </div>\n    <tui-badge>Works with the right side</tui-badge>\n</div>\n\n<div\n    tuiCell\n    [style.white-space]="\'nowrap\'"\n>\n    <tui-avatar\n        src="tuiIconSmileLarge"\n        [round]="false"\n    ></tui-avatar>\n    <div\n        tuiFade\n        tuiTitle\n    >\n        Works with fade on both sides\n        <div tuiSubtitle>You can control proportions</div>\n    </div>\n    <div\n        tuiFade\n        tuiTitle\n    >\n        Proportions are controlled with flex\n        <div tuiSubtitle>Flex shrink is set to 70-30 by default</div>\n    </div>\n    <tui-badge-notification size="xs"></tui-badge-notification>\n</div>\n\n<div tuiCell>\n    <tui-avatar\n        src="/assets/images/avatar.jpg"\n        tuiAccessories\n    ></tui-avatar>\n    <div\n        tuiAccessories\n        tuiTitle\n    >\n        Alexander\n        <div tuiSubtitle>Taiga UI developer</div>\n    </div>\n    <div tuiTitle>\n        <span [style.color]="\'var(--tui-positive)\'">+$1000</span>\n        <div tuiSubtitle>Bonus for tuiCell component</div>\n        <tui-badge appearance="primary">Awesome!</tui-badge>\n    </div>\n</div>\n\n<div tuiCell>\n    <tui-avatar\n        src="tuiIconHomeLarge"\n        tuiAccessories\n    ></tui-avatar>\n    <div tuiTitle>\n        <strong>Main account</strong>\n        <div tuiSubtitle>USD</div>\n        <tui-badge appearance="neutral">By default unless arrested</tui-badge>\n    </div>\n    <div\n        tuiAccessories\n        tuiTitle\n        [style.white-space]="\'nowrap\'"\n        [style.width]="0"\n    >\n        $123 456\n        <div tuiSubtitle>Careful, content may overlap</div>\n    </div>\n</div>\n'}}]);