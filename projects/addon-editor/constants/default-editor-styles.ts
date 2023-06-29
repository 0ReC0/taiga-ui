export const defaultEditorStyles = `
@import 'https://fonts.googleapis.com/css2?family=Manrope:wght@500;800&display=swap';

.tui-editor-socket h1,
.tui-editor-socket h2,
.tui-editor-socket h3,
.tui-editor-socket h4,
.tui-editor-socket h5,
.tui-editor-socket h6 {
    word-break: break-word;
    line-height: normal;
}

body.tui-editor-socket {
    margin: 0;
    overflow: hidden;
    padding: 0 16px;
}

p:empty:before {
    content: ' ';
    white-space: pre;
}

.tui-editor-socket {
    display: block;
    color: #333;
    font-size: 15px;
    font-family: tuiText, 'Manrope', sans-serif;
    line-height: 24px;
}

.tui-editor-socket ul,
.tui-editor-socket ol {
    list-style-type: none;
    margin: 16px 16px 16px 24px;
    padding: 0;
}

.tui-editor-socket li {
    margin: 16px 0;
}

.tui-editor-socket li p {
    display: inline;
    margin: 0 auto;
    word-break: break-word;
}

.tui-editor-socket ul li p {
    display: inline-block;
}

.tui-editor-socket ul > li:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 0 14px 1px -22px;
    background-color: #ffdd2d;
}

.tui-editor-socket ol {
    counter-reset: item;
}

.tui-editor-socket ol > li:before {
    content: counters(item, '.') '.';
    width: 24px;
    margin: 0 12px 0 -24px;
    counter-increment: item;
    color: #909090;
}

.tui-editor-socket pre {
    white-space: pre-wrap;
    word-break: break-word;
    border-radius: 4px;
    margin: 16px 0;
    padding: 12px 16px;
    font-family: 'Courier', monospace;
    color: #666666;
    background-color: #f5f5f6;
}

.tui-editor-socket pre + pre {
    margin-top: -29px;
    padding-top: 0;
}

.tui-editor-socket blockquote {
    margin: 20px 0 20px 24px !important;
    padding-left: 17px !important;
    border-left: 1px solid #cbcfd3 !important;
}

.tui-editor-socket p {
    margin: 16px 0;
}

.tui-editor-socket a:not([data-type='jump-anchor']) {
    color: var(--tui-link);
    text-decoration: none;
    outline: none;
}

.tui-editor-socket a:not([data-type='jump-anchor']):hover {
    color: var(--tui-link-hover);
    text-decoration: underline;
}

.tui-editor-socket a:not([data-type='jump-anchor']):active {
    color: var(--tui-primary-active);
}

.tui-editor-socket .ProseMirror a[data-type='jump-anchor'] {
    text-decoration: underline;
    text-decoration-color: var(--tui-link);
}

.tui-editor-socket .ProseMirror a[data-type='jump-anchor']:before {
    content: '#';
}

.tui-editor-socket .ProseMirror a[data-type='jump-anchor']:hover {
    color: var(--tui-link);
}

.tui-editor-socket hr {
    border: none;
    border-top: 1px solid #e7e8ea;
    margin: 16px 0;
}

.tui-editor-socket font[face='Courier New'] {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: #ecf1f7;
    display: inline-block;
    word-break: break-word;
}

.tui-editor-socket font[size='1'] {
    font-size: 11px;
    line-height: 16px;
}

.tui-editor-socket font[size='2'] {
    font-size: 13px;
    line-height: 20px;
}

.tui-editor-socket font[size='3'] {
    font-size: 15px;
    line-height: 24px;
}

.tui-editor-socket font[size='4'] {
    font-size: 17px;
    line-height: 24px;
}

.tui-editor-socket font[size='5'],
.tui-editor-socket font[size='6'],
.tui-editor-socket font[size='7'] {
    display: block;
    margin: 32px 0 16px;
    font-family: var(--tui-font-heading);
}

.tui-editor-socket font[size='5'] {
    font-size: 24px;
    line-height: 28px;
}

.tui-editor-socket font[size='6'] {
    font-size: 30px;
    line-height: 36px;
}

.tui-editor-socket font[size='7'] {
    font-size: 40px;
    line-height: 44px;
}

.tui-editor-socket .tableWrapper,
.tui-editor-socket .tui-table-wrapper {
    overflow-x: auto;
}
`;