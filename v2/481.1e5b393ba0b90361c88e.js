(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{"d/ws":function(n,t,s){"use strict";s.r(t),t.default='<div\n    *ngIf="size$ | async as size"\n    class="container"\n>\n    <tui-block-status\n        class="card"\n        [card]="true"\n    >\n        <img\n            tuiSlot="top"\n            alt="hidden content"\n            src="./assets/images/camping.svg"\n            class="image"\n        />\n\n        We hide the unwanted block\n\n        <button\n            tuiButton\n            appearance="secondary"\n            [size]="size"\n        >\n            Return\n        </button>\n    </tui-block-status>\n    <tui-block-status\n        class="card"\n        [card]="true"\n    >\n        <img\n            tuiSlot="top"\n            alt="something wrong"\n            src="./assets/images/cancel.svg"\n            class="image"\n        />\n\n        Something happened in this block\n\n        <button\n            tuiButton\n            appearance="secondary"\n            [size]="size"\n        >\n            Try again\n        </button>\n    </tui-block-status>\n</div>\n'}}]);