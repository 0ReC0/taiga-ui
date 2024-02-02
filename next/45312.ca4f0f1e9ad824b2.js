(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[45312],{45312:n=>{n.exports="import {Component, Inject, Injector} from '@angular/core';\nimport {Router} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {Observable, takeUntil} from 'rxjs';\n\nimport {AlertExampleWithCustomLabelComponent} from './alert-example-with-custom-label/alert-example-with-custom-label.component';\nimport {CustomLabelComponent} from './custom-label/custom-label.component';\n\n@Component({\n    selector: 'tui-alerts-example-5',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiAlertsExampleComponent5 {\n    readonly notification: Observable<void>;\n    readonly notificationWithCustomLabel: Observable<void>;\n\n    constructor(\n        @Inject(TuiAlertService) alerts: TuiAlertService,\n        @Inject(Router) router: Router,\n        @Inject(Injector) private readonly injector: Injector,\n    ) {\n        this.notification = alerts\n            .open(\n                new PolymorpheusComponent(\n                    AlertExampleWithCustomLabelComponent,\n                    this.injector,\n                ),\n                {\n                    label: ({status}) =>\n                        status === 'error'\n                            ? 'Error label from function'\n                            : 'Info label from function',\n                    status: 'error',\n                    autoClose: false,\n                },\n            )\n            .pipe(takeUntil(router.events));\n\n        this.notificationWithCustomLabel = alerts\n            .open(\n                new PolymorpheusComponent(\n                    AlertExampleWithCustomLabelComponent,\n                    this.injector,\n                ),\n                {\n                    label: new PolymorpheusComponent(CustomLabelComponent, this.injector),\n                    status: 'warning',\n                    autoClose: false,\n                },\n            )\n            .pipe(takeUntil(router.events));\n    }\n\n    showNotification(): void {\n        this.notification.subscribe();\n    }\n\n    showNotificationWithCustomLabel(): void {\n        this.notificationWithCustomLabel.subscribe();\n    }\n}\n"}}]);