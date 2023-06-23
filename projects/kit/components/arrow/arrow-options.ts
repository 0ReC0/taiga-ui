import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeM, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_ARROW} from './arrow.component';

export interface TuiArrowOptions {
    readonly iconSmall: PolymorpheusContent;
    readonly iconLarge: PolymorpheusContent;
}

/** Default values for arrow options */
export const TUI_ARROW_DEFAULT_OPTIONS: TuiArrowOptions = {
    iconSmall: `tuiIconChevronDown`,
    iconLarge: `tuiIconChevronDownLarge`,
};

/**
 * Default parameters for arrow component
 */
export const TUI_ARROW_OPTIONS = new InjectionToken<TuiArrowOptions>(
    `[TUI_ARROW_OPTIONS]`,
    {
        factory: () => TUI_ARROW_DEFAULT_OPTIONS,
    },
);

export const tuiArrowOptionsProvider: (
    options: Partial<TuiArrowOptions>,
) => ValueProvider = (options: Partial<TuiArrowOptions>) => ({
    provide: TUI_ARROW_OPTIONS,
    useValue: {...TUI_ARROW_DEFAULT_OPTIONS, ...options},
});

export interface TuiArrowMode {
    readonly interactive: PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeL | TuiSizeM | TuiSizeS>
    >;
    readonly disabled: PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeL | TuiSizeM | TuiSizeS>
    >;
}

/**
 * Type of icon in dropdowns for interactive or disable mode
 */
export const TUI_ARROW_MODE = new InjectionToken<TuiArrowMode>(`[TUI_ARROW_MODE]`, {
    factory: () => ({
        interactive: TUI_ARROW,
        disabled: TUI_ARROW,
    }),
});

export const tuiArrowModeProvider: (options: Partial<TuiArrowMode>) => ValueProvider = (
    options: Partial<TuiArrowMode>,
) => ({
    provide: TUI_ARROW_MODE,
    useValue: {
        interactive: TUI_ARROW,
        disabled: TUI_ARROW,
        ...options,
    },
});