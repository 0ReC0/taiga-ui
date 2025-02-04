import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/experimental/components/button';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'nav[tuiNavigationNav]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./nav.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiBadgeOptionsProvider({size: 'm'}),
        tuiButtonOptionsProvider({size: 's'}),
    ],
})
export class TuiNavComponent {}
