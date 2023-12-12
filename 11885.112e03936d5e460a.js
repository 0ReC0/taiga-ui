(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[11885],{11885:e=>{e.exports="import {Component, Inject, Injector} from '@angular/core';\nimport {Router} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {Observable} from 'rxjs';\nimport {switchMap, takeUntil} from 'rxjs/operators';\n\nimport {AlertExampleComponent} from './alert-example/alert-example.component';\n\n@Component({\n    selector: 'tui-alerts-example-3',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiAlertsExampleComponent3 {\n    readonly notification: Observable<void>;\n\n    constructor(\n        @Inject(TuiAlertService) alerts: TuiAlertService,\n        @Inject(Router) router: Router,\n        @Inject(Injector) private readonly injector: Injector,\n    ) {\n        this.notification = alerts\n            .open<boolean>(\n                new PolymorpheusComponent(AlertExampleComponent, this.injector),\n                {\n                    label: 'Question',\n                    status: 'error',\n                    autoClose: false,\n                },\n            )\n            .pipe(\n                switchMap(response =>\n                    alerts.open(`Got a value — ${response}`, {\n                        label: 'Information',\n                    }),\n                ),\n                takeUntil(router.events),\n            );\n    }\n\n    showNotification(): void {\n        this.notification.subscribe();\n    }\n}\n"}}]);