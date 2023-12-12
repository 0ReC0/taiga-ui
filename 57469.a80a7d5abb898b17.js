(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[57469],{57469:n=>{n.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\ninterface Item {\n    badge?: number;\n    icon: string;\n    text: string;\n}\n\n@Component({\n    selector: 'tui-tab-bar-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiTabBarExample1 {\n    activeItemIndex = 1;\n\n    readonly items = [\n        {\n            text: 'Favorites',\n            icon: 'tuiIconHeartLarge',\n            badge: 3,\n        },\n        {\n            text: 'Calls',\n            icon: 'tuiIconPhoneLarge',\n            badge: 1234,\n        },\n        {\n            text: 'Profile',\n            icon: 'tuiIconUserLarge',\n        },\n        {\n            text: 'Settings and configuration',\n            icon: 'tuiIconSettingsLarge',\n            badge: 100,\n        },\n        {\n            text: 'More',\n            icon: 'tuiIconMoreHorizontalLarge',\n        },\n    ];\n\n    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}\n\n    onClick(item: Item): void {\n        item.badge = 0;\n        this.alerts.open(this.activeItemIndex, {label: item.text}).subscribe();\n    }\n}\n"}}]);