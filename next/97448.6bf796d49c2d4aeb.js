(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97448],{75068:o=>{o.exports="```ts\n// ...\nimport {TuiRootModule, TuiDialogModule, TuiAlertModule, TuiPushModule} from '@taiga-ui/core';\n\nbootstrapApplication(AppComponent, {\n  providers: [\n    provideAnimations(),\n    provideRouter(routes),\n    provideClientHydration(),\n    importProvidersFrom(\n      TuiRootModule,\n      TuiDialogModule,\n      TuiAlertModule,\n      TuiPushModule,\n      // ...\n    ),\n  ],\n}).catch(err => console.error(err));\n```\n"}}]);