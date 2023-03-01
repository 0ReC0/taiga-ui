"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[20855],{20855:e=>{e.exports='<tui-tiles\n    class="tiles"\n    [debounce]="500"\n    [(order)]="order"\n>\n    <tui-tile\n        *ngFor="let item of items; let index = index"\n        class="tile"\n        [style.order]="order.get(index)"\n        [width]="item.w"\n        [height]="item.h"\n    >\n        <div\n            class="content"\n            [class.rick]="item.content === \'rick\'"\n        >\n            <iframe\n                *ngIf="item.content === \'rick\'; else default"\n                src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&autohide=1&showinfo=0&controls=0"\n                title="YouTube video player"\n                frameborder="0"\n                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n                allowfullscreen\n                class="rick"\n            ></iframe>\n            <tui-svg\n                tuiTileHandle\n                src="tuiIconDragLarge"\n                class="handle"\n            ></tui-svg>\n            <tui-svg\n                tuiTileHandle\n                src="tuiIconDragLarge"\n                class="handle"\n            ></tui-svg>\n            <ng-template #default>\n                <h2 class="title">{{ item.content }}</h2>\n                Order - {{ order.get(index) ?? index }}\n            </ng-template>\n        </div>\n    </tui-tile>\n</tui-tiles>\n'}}]);