import {Inject, Pipe, PipeTransform} from '@angular/core';
import {
    TUI_DEFAULT_MATCHER,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiFocusableElementAccessor,
    TuiStringHandler,
} from '@taiga-ui/cdk';

import {AbstractTuiFilterByInput, ArrayElement} from './filter-by-input.base';

/**
 * @deprecated Use {@link TuiFilterByInputPipe} instead
 */
@Pipe({
    name: `tuiFilterByInputWith`,
    pure: false,
})
export class TuiFilterByInputWithPipe
    extends AbstractTuiFilterByInput
    implements PipeTransform
{
    constructor(
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        protected readonly accessor: TuiFocusableElementAccessor,
    ) {
        super();
    }

    transform<T>(items: T, matcher?: TuiStringHandler<ArrayElement<T>>): T;
    transform<T>(
        items: ReadonlyArray<readonly T[]> | readonly T[] | null,
        stringify: TuiStringHandler<T>,
    ): ReadonlyArray<readonly T[]> | readonly T[] | null {
        return this.filter(items, TUI_DEFAULT_MATCHER, stringify, this.query);
    }
}