(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[21080],{21080:r=>{r.exports='<form\n    class="b-form"\n    [formGroup]="userDetailsForm"\n>\n    <p>\n        <tui-input formControlName="name">Name</tui-input>\n\n        <tui-error\n            formControlName="name"\n            [error]="[] | tuiFieldError | async"\n        ></tui-error>\n    </p>\n\n    <div formGroupName="address">\n        <p>\n            <tui-input formControlName="street">Street</tui-input>\n\n            <tui-error\n                formControlName="street"\n                [error]="[] | tuiFieldError | async"\n            ></tui-error>\n        </p>\n\n        <p>\n            <tui-input formControlName="zipCode">Zip code</tui-input>\n\n            <tui-error\n                formControlName="zipCode"\n                [error]="[] | tuiFieldError | async"\n            ></tui-error>\n        </p>\n\n        <p>\n            <tui-input formControlName="city">City</tui-input>\n\n            <tui-error\n                formControlName="city"\n                [error]="[] | tuiFieldError | async"\n            ></tui-error>\n        </p>\n    </div>\n</form>\n'}}]);