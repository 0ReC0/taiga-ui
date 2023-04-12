(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[81715],{81715:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nconst getIcon: Record<string, string> = {\n    Calendar: 'tuiIconCalendarLarge',\n    Favorite: 'tuiIconStarLarge',\n    Messages: 'tuiIconMessageSquareLarge',\n    FAQ: 'tuiIconHelpCircleLarge',\n    Settings: 'tuiIconSettingsLarge',\n};\n\n@Component({\n    selector: 'tui-filter-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample3 {\n    items = ['Calendar', 'Favorite', 'Messages', 'FAQ', 'Settings'];\n\n    form = new FormGroup({\n        filters: new FormControl([]),\n    });\n\n    getItemIcon(title: string): string {\n        return getIcon[title];\n    }\n}\n"}}]);