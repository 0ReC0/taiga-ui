(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[71158],{71158:n=>{n.exports="tui-badge {\n    margin: 0.5rem;\n}\n\n@iterations: 20;\n\n.loop (@i) when (@i > 0) {\n    .support-@{i} {\n        background-color: ~'var(--tui-support-@{i}, var(--tui-support-0@{i}))';\n    }\n    .loop(@i - 1);\n}\n.loop (@iterations);\n"}}]);