(window.webpackJsonp=window.webpackJsonp||[]).push([[1938],{"6cx+":function(n,e,i){"use strict";i.r(e),e.default='<p>{{ rounded }} = round(value, precision);</p>\n<p>{{ floored }} = floor(value, precision);</p>\n<p>{{ ceiled }} = ceil(value, precision);</p>\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number\n            formControlName="value"\n            class="tui-space_top-2"\n            [precision]="3"\n        >\n            value\n        </tui-input-number>\n        <tui-input-number\n            formControlName="precision"\n            class="tui-space_top-2"\n        >\n            precision\n        </tui-input-number>\n    </div>\n</form>\n'}}]);