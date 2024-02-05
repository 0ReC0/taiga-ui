import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {
    TuiBadgedContentModule,
    TuiButtonGroupModule,
    TuiButtonModule,
    TuiButtonVerticalModule,
    TuiSurfaceModule,
} from '@taiga-ui/experimental';

import {ExampleTuiButtonGroupComponent} from './button-group.component';
import {TuiButtonGroupExample1} from './examples/1';
import {TuiButtonGroupExample2} from './examples/2';
import {TuiButtonGroupExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        TuiNotificationModule,
        TuiButtonModule,
        tuiGetDocModules(ExampleTuiButtonGroupComponent),
        TuiButtonVerticalModule,
        TuiSurfaceModule,
        TuiButtonGroupModule,
        TuiBadgedContentModule,
    ],
    declarations: [
        ExampleTuiButtonGroupComponent,
        TuiButtonGroupExample1,
        TuiButtonGroupExample2,
        TuiButtonGroupExample3,
    ],
    exports: [ExampleTuiButtonGroupComponent],
})
export class ExampleTuiButtonGroupModule {}
