(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{QqOv:function(n,t,e){"use strict";e.r(t),t.default='<tui-axes\n    class="axes"\n    [verticalLines]="4"\n    [horizontalLines]="2"\n>\n    <tui-line-chart\n        [x]="0"\n        [y]="0"\n        [width]="400"\n        [height]="200"\n        [value]="value"\n        [hintContent]="hint"\n    ></tui-line-chart>\n</tui-axes>\n\n<tui-axes\n    class="axes tui-space_top-10"\n    [verticalLines]="4"\n    [horizontalLines]="2"\n>\n    <tui-line-chart\n        [x]="0"\n        [y]="0"\n        [width]="400"\n        [height]="200"\n        [value]="singleValue"\n        [dots]="true"\n        [hintContent]="hintContent"\n    ></tui-line-chart>\n</tui-axes>\n\n<ng-template\n    #hintContent\n    let-value\n    let-index="index"\n>\n    <div>Vertical: {{ value[0] }}</div>\n    <div>Horizontal: {{ value[1] }}</div>\n    <div>index: {{ index }}</div>\n</ng-template>\n'}}]);