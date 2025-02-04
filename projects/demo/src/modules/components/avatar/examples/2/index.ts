import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiFadeDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-avatar-example-2',
    imports: [TuiAvatarComponent, TuiAutoColorPipe, TuiFadeDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAvatarExample2 {}
