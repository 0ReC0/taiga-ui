(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38918],{38918:n=>{n.exports='<div class="wrapper">\n    <tui-calendar\n        [markerHandler]="markerHandler"\n        [maxViewedMonth]="firstMonth"\n        [month]="firstMonth"\n        [showAdjacent]="false"\n        [value]="value"\n        [(hoveredItem)]="hoveredItem"\n        (dayClick)="onDayClick($event)"\n        (monthChange)="onMonthChangeFirst($event)"\n    ></tui-calendar>\n    <tui-calendar\n        [markerHandler]="markerHandler"\n        [maxViewedMonth]="middleMonth"\n        [minViewedMonth]="middleMonth"\n        [month]="middleMonth"\n        [showAdjacent]="false"\n        [value]="value"\n        [(hoveredItem)]="hoveredItem"\n        (dayClick)="onDayClick($event)"\n        (monthChange)="onMonthChangeMiddle($event)"\n    ></tui-calendar>\n    <tui-calendar\n        [markerHandler]="markerHandler"\n        [minViewedMonth]="lastMonth"\n        [month]="lastMonth"\n        [showAdjacent]="false"\n        [value]="value"\n        [(hoveredItem)]="hoveredItem"\n        (dayClick)="onDayClick($event)"\n        (monthChange)="onMonthChangeLast($event)"\n    ></tui-calendar>\n</div>\n<div *ngIf="value">Chosen dates: {{ value }}</div>\n'}}]);