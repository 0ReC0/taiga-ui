(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[91312],{91312:e=>{e.exports='<span class="tui-text_body-l">Strings:</span>\n\n<tui-multi-select\n    class="b-form tui-space_top-5"\n    [editable]="false"\n    [formControl]="itemStringControl"\n    [tuiHintContent]="\'hint\'"\n    [tuiTextfieldCleaner]="true"\n    [tuiTextfieldLabelOutside]="true"\n>\n    Star Wars persons\n\n    <select\n        multiple\n        tuiSelect\n        [items]="items"\n    ></select>\n</tui-multi-select>\n\n<tui-multi-select\n    class="b-form tui-space_vertical-5"\n    [disabledItemHandler]="disableHandler"\n    [editable]="false"\n    [formControl]="itemStringGroupControl"\n    [tuiTextfieldLabelOutside]="true"\n>\n    Star Wars persons\n\n    <select\n        multiple\n        tuiSelect\n        [items]="groupItems"\n        [labels]="labels"\n    ></select>\n</tui-multi-select>\n\n<span class="tui-text_body-l">Objects (stringify):</span>\n<tui-multi-select\n    class="b-form tui-space_top-5"\n    [editable]="false"\n    [formControl]="itemControl"\n    [stringify]="stringify"\n    [tuiHintContent]="\'hint\'"\n    [tuiTextfieldCleaner]="true"\n    [tuiTextfieldLabelOutside]="true"\n>\n    Star Wars persons\n\n    <select\n        multiple\n        tuiSelect\n        [items]="customItems"\n    ></select>\n</tui-multi-select>\n\n<tui-multi-select\n    class="b-form tui-space_top-5"\n    [disabledItemHandler]="disableItemHandler"\n    [editable]="false"\n    [formControl]="itemGroupControl"\n    [stringify]="stringify"\n    [tuiTextfieldLabelOutside]="true"\n>\n    Star Wars persons\n\n    <select\n        multiple\n        tuiSelect\n        [items]="customGroupItems"\n        [labels]="labels"\n    ></select>\n</tui-multi-select>\n'}}]);