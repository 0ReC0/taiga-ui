(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{xkOV:function(n,e,i){"use strict";i.r(e),e.default='<tui-carousel\n    [draggable]="true"\n    [itemsCount]="3"\n    [(index)]="index"\n>\n    <ng-container *ngFor="let item of items; let i = index">\n        <img\n            *tuiItem\n            alt=""\n            draggable="false"\n            src="assets/images/{{item}}"\n            class="item"\n            [class.item_active]="i === index + 1"\n        />\n    </ng-container>\n</tui-carousel>\n'}}]);