(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[52240],{52240:n=>{n.exports='<div tuiAppearance="secondary">Non-interactive elements do not react to pointer</div>\n\n<button tuiAppearance="secondary">Hovered state is only triggered on devices with pointer</button>\n\n<tui-hosted-dropdown\n    content="Button looks hovered when dropdown is open"\n    [(open)]="open"\n>\n    <button\n        tuiAppearance="secondary"\n        [tuiAppearanceState]="open ? \'hover\' : null"\n    >\n        Triggering state manually\n    </button>\n</tui-hosted-dropdown>\n'}}]);