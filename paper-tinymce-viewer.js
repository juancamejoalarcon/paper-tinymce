var $ = Object.defineProperty;
var W = (t, e, o) => e in t ? $(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var V = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var l = (t, e, o) => (W(t, typeof e != "symbol" ? e + "" : e, o), o);
var je = V((Ke, P) => {
  const X = `.mce-content-body{background-color:#f8f9fa;overflow:auto;position:relative;margin:0;padding:0}.mce-content-body h1,.mce-content-body h2,.mce-content-body h3,.mce-content-body h4,.mce-content-body h5,.mce-content-body h6,.mce-content-body p{margin:0;padding:0}.mce-content-body h1{padding-top:.67em;padding-bottom:.67em}.mce-content-body h3,.mce-content-body p{padding:1em 0}.mce-content-body .pages{padding-bottom:10px}.mce-content-body #page-1{margin-top:3rem!important}.mce-content-body article{box-shadow:#0000000d 0 6px 24px,#00000014 0 0 0 1px;margin:20px auto;overflow:auto;background:white;display:flex;flex-direction:column;background-color:#fff}
`, Y = `.mce-content-body .mce-item-anchor{background:transparent url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'8'%20height%3D'12'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M0%200L8%200%208%2012%204.09117821%209%200%2012z'%2F%3E%3C%2Fsvg%3E%0A") no-repeat center}.mce-content-body .mce-item-anchor:empty{cursor:default;display:inline-block;height:12px!important;padding:0 2px;-webkit-user-modify:read-only;-moz-user-modify:read-only;-webkit-user-select:all;-moz-user-select:all;user-select:all;width:8px!important}.mce-content-body .mce-item-anchor:not(:empty){background-position-x:2px;display:inline-block;padding-left:12px}.mce-content-body .mce-item-anchor[data-mce-selected]{outline-offset:1px}.tox-comments-visible .tox-comment[contenteditable=false]:not([data-mce-selected]),.tox-comments-visible span.tox-comment img:not([data-mce-selected]),.tox-comments-visible span.tox-comment>audio:not([data-mce-selected]),.tox-comments-visible span.tox-comment>video:not([data-mce-selected]),.tox-comments-visible span.tox-comment span.mce-preview-object:not([data-mce-selected]){outline:3px solid #ffe89d}.tox-comments-visible .tox-comment[contenteditable=false][data-mce-annotation-active=true]:not([data-mce-selected]){outline:3px solid #fed635}.tox-comments-visible span.tox-comment[data-mce-annotation-active=true] img:not([data-mce-selected]),.tox-comments-visible span.tox-comment[data-mce-annotation-active=true]>audio:not([data-mce-selected]),.tox-comments-visible span.tox-comment[data-mce-annotation-active=true]>video:not([data-mce-selected]),.tox-comments-visible span.tox-comment[data-mce-annotation-active=true] span.mce-preview-object:not([data-mce-selected]){outline:3px solid #fed635}.tox-comments-visible span.tox-comment:not([data-mce-selected]){background-color:#ffe89d;outline:none}.tox-comments-visible span.tox-comment[data-mce-annotation-active=true]:not([data-mce-selected="inline-boundary"]){background-color:#fed635}.tox-checklist>li:not(.tox-checklist--hidden){list-style:none;margin:.25em 0}.tox-checklist>li:not(.tox-checklist--hidden):before{content:url(data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-unchecked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2215%22%20height%3D%2215%22%20x%3D%22.5%22%20y%3D%22.5%22%20fill-rule%3D%22nonzero%22%20stroke%3D%22%234C4C4C%22%20rx%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A);cursor:pointer;height:1em;margin-left:-1.5em;margin-top:.125em;position:absolute;width:1em}.tox-checklist li:not(.tox-checklist--hidden).tox-checklist--checked:before{content:url(data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-checked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%234099FF%22%20fill-rule%3D%22nonzero%22%20rx%3D%222%22%2F%3E%3Cpath%20id%3D%22Path%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22nonzero%22%20d%3D%22M11.5703186%2C3.14417309%20C11.8516238%2C2.73724603%2012.4164781%2C2.62829933%2012.83558%2C2.89774797%20C13.260121%2C3.17069355%2013.3759736%2C3.72932262%2013.0909105%2C4.14168582%20L7.7580587%2C11.8560195%20C7.43776896%2C12.3193404%206.76483983%2C12.3852142%206.35607322%2C11.9948725%20L3.02491697%2C8.8138662%20C2.66090143%2C8.46625845%202.65798871%2C7.89594698%203.01850234%2C7.54483354%20C3.373942%2C7.19866177%203.94940006%2C7.19592841%204.30829608%2C7.5386474%20L6.85276923%2C9.9684299%20L11.5703186%2C3.14417309%20Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A)}[dir=rtl] .tox-checklist>li:not(.tox-checklist--hidden):before{margin-left:0;margin-right:-1.5em}code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px white;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;tab-size:4;-webkit-hyphens:none;hyphens:none}pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}pre[class*=language-]::selection,pre[class*=language-] ::selection,code[class*=language-]::selection,code[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#905}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#690}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.function,.token.class-name{color:#dd4a68}.token.regex,.token.important,.token.variable{color:#e90}.token.important,.token.bold{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.mce-content-body{overflow-wrap:break-word;word-wrap:break-word}.mce-content-body .mce-visual-caret{background-color:#000;background-color:currentColor;position:absolute}.mce-content-body .mce-visual-caret-hidden{display:none}.mce-content-body *[data-mce-caret]{left:-1000px;margin:0;padding:0;position:absolute;right:auto;top:0}.mce-content-body .mce-offscreen-selection{left:-2000000px;max-width:1000000px;position:absolute}.mce-content-body *[contentEditable=false]{cursor:default}.mce-content-body *[contentEditable=true]{cursor:text}.tox-cursor-format-painter{cursor:url(data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M15%2C6%20C15%2C5.45%2014.55%2C5%2014%2C5%20L6%2C5%20C5.45%2C5%205%2C5.45%205%2C6%20L5%2C10%20C5%2C10.55%205.45%2C11%206%2C11%20L14%2C11%20C14.55%2C11%2015%2C10.55%2015%2C10%20L15%2C9%20L16%2C9%20L16%2C12%20L9%2C12%20L9%2C19%20C9%2C19.55%209.45%2C20%2010%2C20%20L11%2C20%20C11.55%2C20%2012%2C19.55%2012%2C19%20L12%2C14%20L18%2C14%20L18%2C7%20L15%2C7%20L15%2C6%20Z%22%2F%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M1%2C1%20L8.25%2C1%20C8.66421356%2C1%209%2C1.33578644%209%2C1.75%20L9%2C1.75%20C9%2C2.16421356%208.66421356%2C2.5%208.25%2C2.5%20L2.5%2C2.5%20L2.5%2C8.25%20C2.5%2C8.66421356%202.16421356%2C9%201.75%2C9%20L1.75%2C9%20C1.33578644%2C9%201%2C8.66421356%201%2C8.25%20L1%2C1%20Z%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A),default}div.mce-footnotes hr{margin-inline-end:auto;margin-inline-start:0;width:25%}div.mce-footnotes li>a.mce-footnotes-backlink{text-decoration:none}@media print{sup.mce-footnote a{color:#000;text-decoration:none}div.mce-footnotes{break-inside:avoid;width:100%}div.mce-footnotes li>a.mce-footnotes-backlink{display:none}}.mce-content-body figure.align-left{float:left}.mce-content-body figure.align-right{float:right}.mce-content-body figure.image.align-center{display:table;margin-left:auto;margin-right:auto}.mce-preview-object{border:1px solid gray;display:inline-block;line-height:0;margin:0 2px;position:relative}.mce-preview-object .mce-shim{background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);height:100%;left:0;position:absolute;top:0;width:100%}.mce-preview-object[data-mce-selected="2"] .mce-shim{display:none}.mce-content-body .mce-mergetag:hover{background-color:#006ce71a}.mce-content-body .mce-mergetag-affix{background-color:#006ce71a;color:#006ce7}.mce-object{background:transparent url(data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M4%203h16a1%201%200%200%201%201%201v16a1%201%200%200%201-1%201H4a1%201%200%200%201-1-1V4a1%201%200%200%201%201-1zm1%202v14h14V5H5zm4.79%202.565l5.64%204.028a.5.5%200%200%201%200%20.814l-5.64%204.028a.5.5%200%200%201-.79-.407V7.972a.5.5%200%200%201%20.79-.407z%22%2F%3E%3C%2Fsvg%3E%0A) no-repeat center;border:1px dashed #aaa}.mce-pagebreak{border:1px dashed #aaa;cursor:default;display:block;height:5px;margin-top:15px;page-break-before:always;width:100%}@media print{.mce-pagebreak{border:0}}.tiny-pageembed .mce-shim{background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);height:100%;left:0;position:absolute;top:0;width:100%}.tiny-pageembed[data-mce-selected="2"] .mce-shim{display:none}.tiny-pageembed{display:inline-block;position:relative}.tiny-pageembed--21by9,.tiny-pageembed--16by9,.tiny-pageembed--4by3,.tiny-pageembed--1by1{display:block;overflow:hidden;padding:0;position:relative;width:100%}.tiny-pageembed--21by9{padding-top:42.857143%}.tiny-pageembed--16by9{padding-top:56.25%}.tiny-pageembed--4by3{padding-top:75%}.tiny-pageembed--1by1{padding-top:100%}.tiny-pageembed--21by9 iframe,.tiny-pageembed--16by9 iframe,.tiny-pageembed--4by3 iframe,.tiny-pageembed--1by1 iframe{border:0;height:100%;left:0;position:absolute;top:0;width:100%}.mce-content-body[data-mce-placeholder]{position:relative}.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks):before{color:#222f3eb3;content:attr(data-mce-placeholder);position:absolute}.mce-content-body:not([dir=rtl])[data-mce-placeholder]:not(.mce-visualblocks):before{left:1px}.mce-content-body[dir=rtl][data-mce-placeholder]:not(.mce-visualblocks):before{right:1px}.mce-content-body div.mce-resizehandle{background-color:#4099ff;border-color:#4099ff;border-style:solid;border-width:1px;box-sizing:border-box;height:10px;position:absolute;width:10px;z-index:1298}.mce-content-body div.mce-resizehandle:hover{background-color:#4099ff}.mce-content-body div.mce-resizehandle:nth-of-type(1){cursor:nwse-resize}.mce-content-body div.mce-resizehandle:nth-of-type(2){cursor:nesw-resize}.mce-content-body div.mce-resizehandle:nth-of-type(3){cursor:nwse-resize}.mce-content-body div.mce-resizehandle:nth-of-type(4){cursor:nesw-resize}.mce-content-body .mce-resize-backdrop{z-index:10000}.mce-content-body .mce-clonedresizable{cursor:default;opacity:.5;outline:1px dashed black;position:absolute;z-index:10001}.mce-content-body .mce-clonedresizable.mce-resizetable-columns th,.mce-content-body .mce-clonedresizable.mce-resizetable-columns td{border:0}.mce-content-body .mce-resize-helper{background:#555;background:rgba(0,0,0,.75);border:1px;border-radius:3px;color:#fff;display:none;font-family:sans-serif;font-size:12px;line-height:14px;margin:5px 10px;padding:5px;position:absolute;white-space:nowrap;z-index:10002}.tox-rtc-user-selection{position:relative}.tox-rtc-user-cursor{bottom:0;cursor:default;position:absolute;top:0;width:2px}.tox-rtc-user-cursor:before{background-color:inherit;border-radius:50%;content:"";display:block;height:8px;position:absolute;right:-3px;top:-3px;width:8px}.tox-rtc-user-cursor:hover:after{background-color:inherit;border-radius:100px;box-sizing:border-box;color:#fff;content:attr(data-user);display:block;font-size:12px;font-weight:700;left:-5px;min-height:8px;min-width:8px;padding:0 12px;position:absolute;top:-11px;white-space:nowrap;z-index:1000}.tox-rtc-user-selection--1 .tox-rtc-user-cursor{background-color:#2dc26b}.tox-rtc-user-selection--2 .tox-rtc-user-cursor{background-color:#e03e2d}.tox-rtc-user-selection--3 .tox-rtc-user-cursor{background-color:#f1c40f}.tox-rtc-user-selection--4 .tox-rtc-user-cursor{background-color:#3598db}.tox-rtc-user-selection--5 .tox-rtc-user-cursor{background-color:#b96ad9}.tox-rtc-user-selection--6 .tox-rtc-user-cursor{background-color:#e67e23}.tox-rtc-user-selection--7 .tox-rtc-user-cursor{background-color:#aaa69d}.tox-rtc-user-selection--8 .tox-rtc-user-cursor{background-color:#f368e0}.tox-rtc-remote-image{background:#eaeaea url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2236%22%20height%3D%2212%22%20viewBox%3D%220%200%2036%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2218%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20begin%3D%22.33s%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2230%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20begin%3D%22.66s%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%3C%2Fsvg%3E%0A") no-repeat center center;border:1px solid #ccc;min-height:240px;min-width:320px}.mce-match-marker{background:#aaa;color:#fff}.mce-match-marker-selected{background:#39f;color:#fff}.mce-match-marker-selected::-moz-selection{background:#39f;color:#fff}.mce-match-marker-selected::selection{background:#39f;color:#fff}.mce-content-body img[data-mce-selected],.mce-content-body video[data-mce-selected],.mce-content-body audio[data-mce-selected],.mce-content-body object[data-mce-selected],.mce-content-body embed[data-mce-selected],.mce-content-body table[data-mce-selected]{outline:3px solid #b4d7ff}.mce-content-body hr[data-mce-selected]{outline:3px solid #b4d7ff;outline-offset:1px}.mce-content-body *[contentEditable=false] *[contentEditable=true]:focus{outline:3px solid #b4d7ff}.mce-content-body *[contentEditable=false] *[contentEditable=true]:hover{outline:3px solid #b4d7ff}.mce-content-body *[contentEditable=false][data-mce-selected]{cursor:not-allowed;outline:3px solid #b4d7ff}.mce-content-body.mce-content-readonly *[contentEditable=true]:focus,.mce-content-body.mce-content-readonly *[contentEditable=true]:hover{outline:none}.mce-content-body *[data-mce-selected=inline-boundary]{background-color:#b4d7ff}.mce-content-body .mce-edit-focus{outline:3px solid #b4d7ff}.mce-content-body td[data-mce-selected],.mce-content-body th[data-mce-selected]{position:relative}.mce-content-body td[data-mce-selected]::-moz-selection,.mce-content-body th[data-mce-selected]::-moz-selection{background:none}.mce-content-body td[data-mce-selected]::selection,.mce-content-body th[data-mce-selected]::selection{background:none}.mce-content-body td[data-mce-selected] *,.mce-content-body th[data-mce-selected] *{outline:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.mce-content-body td[data-mce-selected]:after,.mce-content-body th[data-mce-selected]:after{background-color:#b4d7ffb3;border:1px solid rgba(180,215,255,.7);bottom:-1px;content:"";left:-1px;mix-blend-mode:multiply;position:absolute;right:-1px;top:-1px}@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){.mce-content-body td[data-mce-selected]:after,.mce-content-body th[data-mce-selected]:after{border-color:#0054b4b3}}.mce-content-body img[data-mce-selected]::-moz-selection{background:none}.mce-content-body img[data-mce-selected]::selection{background:none}.ephox-snooker-resizer-bar{background-color:#b4d7ff;opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ephox-snooker-resizer-cols{cursor:col-resize}.ephox-snooker-resizer-rows{cursor:row-resize}.ephox-snooker-resizer-bar.ephox-snooker-resizer-bar-dragging{opacity:1}.mce-spellchecker-word{background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'4'%20height%3D'4'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20stroke%3D'%23ff0000'%20fill%3D'none'%20stroke-linecap%3D'round'%20stroke-opacity%3D'.75'%20d%3D'M0%203L2%201%204%203'%2F%3E%3C%2Fsvg%3E%0A");background-position:0 calc(100% + 1px);background-repeat:repeat-x;background-size:auto 6px;cursor:default;height:2rem}.mce-spellchecker-grammar{background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'4'%20height%3D'4'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20stroke%3D'%2300A835'%20fill%3D'none'%20stroke-linecap%3D'round'%20d%3D'M0%203L2%201%204%203'%2F%3E%3C%2Fsvg%3E%0A");background-position:0 calc(100% + 1px);background-repeat:repeat-x;background-size:auto 6px;cursor:default}.mce-toc{border:1px solid gray}.mce-toc h2{margin:4px}.mce-toc li{list-style-type:none}[data-mce-block]{display:block}table[style*="border-width: 0px"],.mce-item-table:not([border]),.mce-item-table[border="0"],table[style*="border-width: 0px"] td,.mce-item-table:not([border]) td,.mce-item-table[border="0"] td,table[style*="border-width: 0px"] th,.mce-item-table:not([border]) th,.mce-item-table[border="0"] th,table[style*="border-width: 0px"] caption,.mce-item-table:not([border]) caption,.mce-item-table[border="0"] caption{border:1px dashed #bbb}.mce-visualblocks p,.mce-visualblocks h1,.mce-visualblocks h2,.mce-visualblocks h3,.mce-visualblocks h4,.mce-visualblocks h5,.mce-visualblocks h6,.mce-visualblocks div:not([data-mce-bogus]),.mce-visualblocks section,.mce-visualblocks article,.mce-visualblocks blockquote,.mce-visualblocks address,.mce-visualblocks pre,.mce-visualblocks figure,.mce-visualblocks figcaption,.mce-visualblocks hgroup,.mce-visualblocks aside,.mce-visualblocks ul,.mce-visualblocks ol,.mce-visualblocks dl{background-repeat:no-repeat;border:1px dashed #bbb;margin-left:3px;padding-top:10px}.mce-visualblocks p{background-image:url(data:image/gif;base64,R0lGODlhCQAJAJEAAAAAAP///7u7u////yH5BAEAAAMALAAAAAAJAAkAAAIQnG+CqCN/mlyvsRUpThG6AgA7)}.mce-visualblocks h1{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGu1JuxHoAfRNRW3TWXyF2YiRUAOw==)}.mce-visualblocks h2{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8Hybbx4oOuqgTynJd6bGlWg3DkJzoaUAAAOw==)}.mce-visualblocks h3{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIZjI8Hybbx4oOuqgTynJf2Ln2NOHpQpmhAAQA7)}.mce-visualblocks h4{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxInR0zqeAdhtJlXwV1oCll2HaWgAAOw==)}.mce-visualblocks h5{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjane4iq5GlW05GgIkIZUAAAOw==)}.mce-visualblocks h6{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjan04jep1iZ1XRlAo5bVgAAOw==)}.mce-visualblocks div:not([data-mce-bogus]){background-image:url(data:image/gif;base64,R0lGODlhEgAKAIABALu7u////yH5BAEAAAEALAAAAAASAAoAAAIfjI9poI0cgDywrhuxfbrzDEbQM2Ei5aRjmoySW4pAAQA7)}.mce-visualblocks section{background-image:url(data:image/gif;base64,R0lGODlhKAAKAIABALu7u////yH5BAEAAAEALAAAAAAoAAoAAAI5jI+pywcNY3sBWHdNrplytD2ellDeSVbp+GmWqaDqDMepc8t17Y4vBsK5hDyJMcI6KkuYU+jpjLoKADs=)}.mce-visualblocks article{background-image:url(data:image/gif;base64,R0lGODlhKgAKAIABALu7u////yH5BAEAAAEALAAAAAAqAAoAAAI6jI+pywkNY3wG0GBvrsd2tXGYSGnfiF7ikpXemTpOiJScasYoDJJrjsG9gkCJ0ag6KhmaIe3pjDYBBQA7)}.mce-visualblocks blockquote{background-image:url(data:image/gif;base64,R0lGODlhPgAKAIABALu7u////yH5BAEAAAEALAAAAAA+AAoAAAJPjI+py+0Knpz0xQDyuUhvfoGgIX5iSKZYgq5uNL5q69asZ8s5rrf0yZmpNkJZzFesBTu8TOlDVAabUyatguVhWduud3EyiUk45xhTTgMBBQA7)}.mce-visualblocks address{background-image:url(data:image/gif;base64,R0lGODlhLQAKAIABALu7u////yH5BAEAAAEALAAAAAAtAAoAAAI/jI+pywwNozSP1gDyyZcjb3UaRpXkWaXmZW4OqKLhBmLs+K263DkJK7OJeifh7FicKD9A1/IpGdKkyFpNmCkAADs=)}.mce-visualblocks pre{background-image:url(data:image/gif;base64,R0lGODlhFQAKAIABALu7uwAAACH5BAEAAAEALAAAAAAVAAoAAAIjjI+ZoN0cgDwSmnpz1NCueYERhnibZVKLNnbOq8IvKpJtVQAAOw==)}.mce-visualblocks figure{background-image:url(data:image/gif;base64,R0lGODlhJAAKAIAAALu7u////yH5BAEAAAEALAAAAAAkAAoAAAI0jI+py+2fwAHUSFvD3RlvG4HIp4nX5JFSpnZUJ6LlrM52OE7uSWosBHScgkSZj7dDKnWAAgA7)}.mce-visualblocks figcaption{border:1px dashed #bbb}.mce-visualblocks hgroup{background-image:url(data:image/gif;base64,R0lGODlhJwAKAIABALu7uwAAACH5BAEAAAEALAAAAAAnAAoAAAI3jI+pywYNI3uB0gpsRtt5fFnfNZaVSYJil4Wo03Hv6Z62uOCgiXH1kZIIJ8NiIxRrAZNMZAtQAAA7)}.mce-visualblocks aside{background-image:url(data:image/gif;base64,R0lGODlhHgAKAIABAKqqqv///yH5BAEAAAEALAAAAAAeAAoAAAItjI+pG8APjZOTzgtqy7I3f1yehmQcFY4WKZbqByutmW4aHUd6vfcVbgudgpYCADs=)}.mce-visualblocks ul{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIAAALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGuYnqUVSjvw26DzzXiqIDlVwAAOw==)}.mce-visualblocks ol{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybH6HHt0qourxC6CvzXieHyeWQAAOw==)}.mce-visualblocks dl{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybEOnmOvUoWznTqeuEjNSCqeGRUAOw==)}.mce-visualblocks:not([dir=rtl]) p,.mce-visualblocks:not([dir=rtl]) h1,.mce-visualblocks:not([dir=rtl]) h2,.mce-visualblocks:not([dir=rtl]) h3,.mce-visualblocks:not([dir=rtl]) h4,.mce-visualblocks:not([dir=rtl]) h5,.mce-visualblocks:not([dir=rtl]) h6,.mce-visualblocks:not([dir=rtl]) div:not([data-mce-bogus]),.mce-visualblocks:not([dir=rtl]) section,.mce-visualblocks:not([dir=rtl]) article,.mce-visualblocks:not([dir=rtl]) blockquote,.mce-visualblocks:not([dir=rtl]) address,.mce-visualblocks:not([dir=rtl]) pre,.mce-visualblocks:not([dir=rtl]) figure,.mce-visualblocks:not([dir=rtl]) figcaption,.mce-visualblocks:not([dir=rtl]) hgroup,.mce-visualblocks:not([dir=rtl]) aside,.mce-visualblocks:not([dir=rtl]) ul,.mce-visualblocks:not([dir=rtl]) ol,.mce-visualblocks:not([dir=rtl]) dl{margin-left:3px}.mce-visualblocks[dir=rtl] p,.mce-visualblocks[dir=rtl] h1,.mce-visualblocks[dir=rtl] h2,.mce-visualblocks[dir=rtl] h3,.mce-visualblocks[dir=rtl] h4,.mce-visualblocks[dir=rtl] h5,.mce-visualblocks[dir=rtl] h6,.mce-visualblocks[dir=rtl] div:not([data-mce-bogus]),.mce-visualblocks[dir=rtl] section,.mce-visualblocks[dir=rtl] article,.mce-visualblocks[dir=rtl] blockquote,.mce-visualblocks[dir=rtl] address,.mce-visualblocks[dir=rtl] pre,.mce-visualblocks[dir=rtl] figure,.mce-visualblocks[dir=rtl] figcaption,.mce-visualblocks[dir=rtl] hgroup,.mce-visualblocks[dir=rtl] aside,.mce-visualblocks[dir=rtl] ul,.mce-visualblocks[dir=rtl] ol,.mce-visualblocks[dir=rtl] dl{background-position-x:right;margin-right:3px}.mce-nbsp,.mce-shy{background:#aaa}.mce-shy:after{content:"-"}body{font-family:sans-serif}table{border-collapse:collapse}
`, ee = `body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;line-height:1.4;margin:1rem}table{border-collapse:collapse}table:not([cellpadding]) th,table:not([cellpadding]) td{padding:.4rem}table[border]:not([border="0"]):not([style*="border-width"]) th,table[border]:not([border="0"]):not([style*="border-width"]) td{border-width:1px}table[border]:not([border="0"]):not([style*="border-style"]) th,table[border]:not([border="0"]):not([style*="border-style"]) td{border-style:solid}table[border]:not([border="0"]):not([style*="border-color"]) th,table[border]:not([border="0"]):not([style*="border-color"]) td{border-color:#ccc}figure{display:table;margin:1rem auto}figure figcaption{color:#999;display:block;margin-top:.25rem;text-align:center}hr{border-color:#ccc;border-style:solid;border-width:1px 0 0 0}code{background-color:#e8e8e8;border-radius:3px;padding:.1rem .2rem}.mce-content-body:not([dir=rtl]) blockquote{border-left:2px solid #ccc;margin-left:1.5rem;padding-left:1rem}.mce-content-body[dir=rtl] blockquote{border-right:2px solid #ccc;margin-right:1.5rem;padding-right:1rem}
`, te = `.mce-content-body .mce-item-anchor{background:transparent url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'8'%20height%3D'12'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M0%200L8%200%208%2012%204.09117821%209%200%2012z'%2F%3E%3C%2Fsvg%3E%0A") no-repeat center}.mce-content-body .mce-item-anchor:empty{cursor:default;display:inline-block;height:12px!important;padding:0 2px;-webkit-user-modify:read-only;-moz-user-modify:read-only;-webkit-user-select:all;-moz-user-select:all;user-select:all;width:8px!important}.mce-content-body .mce-item-anchor:not(:empty){background-position-x:2px;display:inline-block;padding-left:12px}.mce-content-body .mce-item-anchor[data-mce-selected]{outline-offset:1px}.tox-comments-visible .tox-comment[contenteditable=false]:not([data-mce-selected]),.tox-comments-visible span.tox-comment img:not([data-mce-selected]),.tox-comments-visible span.tox-comment>audio:not([data-mce-selected]),.tox-comments-visible span.tox-comment>video:not([data-mce-selected]),.tox-comments-visible span.tox-comment span.mce-preview-object:not([data-mce-selected]){outline:3px solid #ffe89d}.tox-comments-visible .tox-comment[contenteditable=false][data-mce-annotation-active=true]:not([data-mce-selected]){outline:3px solid #fed635}.tox-comments-visible span.tox-comment[data-mce-annotation-active=true] img:not([data-mce-selected]),.tox-comments-visible span.tox-comment[data-mce-annotation-active=true]>audio:not([data-mce-selected]),.tox-comments-visible span.tox-comment[data-mce-annotation-active=true]>video:not([data-mce-selected]),.tox-comments-visible span.tox-comment[data-mce-annotation-active=true] span.mce-preview-object:not([data-mce-selected]){outline:3px solid #fed635}.tox-comments-visible span.tox-comment:not([data-mce-selected]){background-color:#ffe89d;outline:none}.tox-comments-visible span.tox-comment[data-mce-annotation-active=true]:not([data-mce-selected="inline-boundary"]){background-color:#fed635}.tox-checklist>li:not(.tox-checklist--hidden){list-style:none;margin:.25em 0}.tox-checklist>li:not(.tox-checklist--hidden):before{content:url(data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-unchecked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2215%22%20height%3D%2215%22%20x%3D%22.5%22%20y%3D%22.5%22%20fill-rule%3D%22nonzero%22%20stroke%3D%22%234C4C4C%22%20rx%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A);cursor:pointer;height:1em;margin-left:-1.5em;margin-top:.125em;position:absolute;width:1em}.tox-checklist li:not(.tox-checklist--hidden).tox-checklist--checked:before{content:url(data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-checked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%234099FF%22%20fill-rule%3D%22nonzero%22%20rx%3D%222%22%2F%3E%3Cpath%20id%3D%22Path%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22nonzero%22%20d%3D%22M11.5703186%2C3.14417309%20C11.8516238%2C2.73724603%2012.4164781%2C2.62829933%2012.83558%2C2.89774797%20C13.260121%2C3.17069355%2013.3759736%2C3.72932262%2013.0909105%2C4.14168582%20L7.7580587%2C11.8560195%20C7.43776896%2C12.3193404%206.76483983%2C12.3852142%206.35607322%2C11.9948725%20L3.02491697%2C8.8138662%20C2.66090143%2C8.46625845%202.65798871%2C7.89594698%203.01850234%2C7.54483354%20C3.373942%2C7.19866177%203.94940006%2C7.19592841%204.30829608%2C7.5386474%20L6.85276923%2C9.9684299%20L11.5703186%2C3.14417309%20Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A)}[dir=rtl] .tox-checklist>li:not(.tox-checklist--hidden):before{margin-left:0;margin-right:-1.5em}code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px white;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;tab-size:4;-webkit-hyphens:none;hyphens:none}pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}pre[class*=language-]::selection,pre[class*=language-] ::selection,code[class*=language-]::selection,code[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#905}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#690}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.function,.token.class-name{color:#dd4a68}.token.regex,.token.important,.token.variable{color:#e90}.token.important,.token.bold{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.mce-content-body{overflow-wrap:break-word;word-wrap:break-word}.mce-content-body .mce-visual-caret{background-color:#000;background-color:currentColor;position:absolute}.mce-content-body .mce-visual-caret-hidden{display:none}.mce-content-body *[data-mce-caret]{left:-1000px;margin:0;padding:0;position:absolute;right:auto;top:0}.mce-content-body .mce-offscreen-selection{left:-2000000px;max-width:1000000px;position:absolute}.mce-content-body *[contentEditable=false]{cursor:default}.mce-content-body *[contentEditable=true]{cursor:text}.tox-cursor-format-painter{cursor:url(data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M15%2C6%20C15%2C5.45%2014.55%2C5%2014%2C5%20L6%2C5%20C5.45%2C5%205%2C5.45%205%2C6%20L5%2C10%20C5%2C10.55%205.45%2C11%206%2C11%20L14%2C11%20C14.55%2C11%2015%2C10.55%2015%2C10%20L15%2C9%20L16%2C9%20L16%2C12%20L9%2C12%20L9%2C19%20C9%2C19.55%209.45%2C20%2010%2C20%20L11%2C20%20C11.55%2C20%2012%2C19.55%2012%2C19%20L12%2C14%20L18%2C14%20L18%2C7%20L15%2C7%20L15%2C6%20Z%22%2F%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M1%2C1%20L8.25%2C1%20C8.66421356%2C1%209%2C1.33578644%209%2C1.75%20L9%2C1.75%20C9%2C2.16421356%208.66421356%2C2.5%208.25%2C2.5%20L2.5%2C2.5%20L2.5%2C8.25%20C2.5%2C8.66421356%202.16421356%2C9%201.75%2C9%20L1.75%2C9%20C1.33578644%2C9%201%2C8.66421356%201%2C8.25%20L1%2C1%20Z%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A),default}div.mce-footnotes hr{margin-inline-end:auto;margin-inline-start:0;width:25%}div.mce-footnotes li>a.mce-footnotes-backlink{text-decoration:none}@media print{sup.mce-footnote a{color:#000;text-decoration:none}div.mce-footnotes{break-inside:avoid;width:100%}div.mce-footnotes li>a.mce-footnotes-backlink{display:none}}.mce-content-body figure.align-left{float:left}.mce-content-body figure.align-right{float:right}.mce-content-body figure.image.align-center{display:table;margin-left:auto;margin-right:auto}.mce-preview-object{border:1px solid gray;display:inline-block;line-height:0;margin:0 2px;position:relative}.mce-preview-object .mce-shim{background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);height:100%;left:0;position:absolute;top:0;width:100%}.mce-preview-object[data-mce-selected="2"] .mce-shim{display:none}.mce-content-body .mce-mergetag:hover{background-color:#006ce71a}.mce-content-body .mce-mergetag-affix{background-color:#006ce71a;color:#006ce7}.mce-object{background:transparent url(data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M4%203h16a1%201%200%200%201%201%201v16a1%201%200%200%201-1%201H4a1%201%200%200%201-1-1V4a1%201%200%200%201%201-1zm1%202v14h14V5H5zm4.79%202.565l5.64%204.028a.5.5%200%200%201%200%20.814l-5.64%204.028a.5.5%200%200%201-.79-.407V7.972a.5.5%200%200%201%20.79-.407z%22%2F%3E%3C%2Fsvg%3E%0A) no-repeat center;border:1px dashed #aaa}.mce-pagebreak{border:1px dashed #aaa;cursor:default;display:block;height:5px;margin-top:15px;page-break-before:always;width:100%}@media print{.mce-pagebreak{border:0}}.tiny-pageembed .mce-shim{background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);height:100%;left:0;position:absolute;top:0;width:100%}.tiny-pageembed[data-mce-selected="2"] .mce-shim{display:none}.tiny-pageembed{display:inline-block;position:relative}.tiny-pageembed--21by9,.tiny-pageembed--16by9,.tiny-pageembed--4by3,.tiny-pageembed--1by1{display:block;overflow:hidden;padding:0;position:relative;width:100%}.tiny-pageembed--21by9{padding-top:42.857143%}.tiny-pageembed--16by9{padding-top:56.25%}.tiny-pageembed--4by3{padding-top:75%}.tiny-pageembed--1by1{padding-top:100%}.tiny-pageembed--21by9 iframe,.tiny-pageembed--16by9 iframe,.tiny-pageembed--4by3 iframe,.tiny-pageembed--1by1 iframe{border:0;height:100%;left:0;position:absolute;top:0;width:100%}.mce-content-body[data-mce-placeholder]{position:relative}.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks):before{color:#222f3eb3;content:attr(data-mce-placeholder);position:absolute}.mce-content-body:not([dir=rtl])[data-mce-placeholder]:not(.mce-visualblocks):before{left:1px}.mce-content-body[dir=rtl][data-mce-placeholder]:not(.mce-visualblocks):before{right:1px}.mce-content-body div.mce-resizehandle{background-color:#4099ff;border-color:#4099ff;border-style:solid;border-width:1px;box-sizing:border-box;height:10px;position:absolute;width:10px;z-index:1298}.mce-content-body div.mce-resizehandle:hover{background-color:#4099ff}.mce-content-body div.mce-resizehandle:nth-of-type(1){cursor:nwse-resize}.mce-content-body div.mce-resizehandle:nth-of-type(2){cursor:nesw-resize}.mce-content-body div.mce-resizehandle:nth-of-type(3){cursor:nwse-resize}.mce-content-body div.mce-resizehandle:nth-of-type(4){cursor:nesw-resize}.mce-content-body .mce-resize-backdrop{z-index:10000}.mce-content-body .mce-clonedresizable{cursor:default;opacity:.5;outline:1px dashed black;position:absolute;z-index:10001}.mce-content-body .mce-clonedresizable.mce-resizetable-columns th,.mce-content-body .mce-clonedresizable.mce-resizetable-columns td{border:0}.mce-content-body .mce-resize-helper{background:#555;background:rgba(0,0,0,.75);border:1px;border-radius:3px;color:#fff;display:none;font-family:sans-serif;font-size:12px;line-height:14px;margin:5px 10px;padding:5px;position:absolute;white-space:nowrap;z-index:10002}.tox-rtc-user-selection{position:relative}.tox-rtc-user-cursor{bottom:0;cursor:default;position:absolute;top:0;width:2px}.tox-rtc-user-cursor:before{background-color:inherit;border-radius:50%;content:"";display:block;height:8px;position:absolute;right:-3px;top:-3px;width:8px}.tox-rtc-user-cursor:hover:after{background-color:inherit;border-radius:100px;box-sizing:border-box;color:#fff;content:attr(data-user);display:block;font-size:12px;font-weight:700;left:-5px;min-height:8px;min-width:8px;padding:0 12px;position:absolute;top:-11px;white-space:nowrap;z-index:1000}.tox-rtc-user-selection--1 .tox-rtc-user-cursor{background-color:#2dc26b}.tox-rtc-user-selection--2 .tox-rtc-user-cursor{background-color:#e03e2d}.tox-rtc-user-selection--3 .tox-rtc-user-cursor{background-color:#f1c40f}.tox-rtc-user-selection--4 .tox-rtc-user-cursor{background-color:#3598db}.tox-rtc-user-selection--5 .tox-rtc-user-cursor{background-color:#b96ad9}.tox-rtc-user-selection--6 .tox-rtc-user-cursor{background-color:#e67e23}.tox-rtc-user-selection--7 .tox-rtc-user-cursor{background-color:#aaa69d}.tox-rtc-user-selection--8 .tox-rtc-user-cursor{background-color:#f368e0}.tox-rtc-remote-image{background:#eaeaea url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2236%22%20height%3D%2212%22%20viewBox%3D%220%200%2036%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2218%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20begin%3D%22.33s%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2230%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba(0%2C%200%2C%200%2C%20.2)%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20begin%3D%22.66s%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%3C%2Fsvg%3E%0A") no-repeat center center;border:1px solid #ccc;min-height:240px;min-width:320px}.mce-match-marker{background:#aaa;color:#fff}.mce-match-marker-selected{background:#39f;color:#fff}.mce-match-marker-selected::-moz-selection{background:#39f;color:#fff}.mce-match-marker-selected::selection{background:#39f;color:#fff}.mce-content-body img[data-mce-selected],.mce-content-body video[data-mce-selected],.mce-content-body audio[data-mce-selected],.mce-content-body object[data-mce-selected],.mce-content-body embed[data-mce-selected],.mce-content-body table[data-mce-selected]{outline:3px solid #b4d7ff}.mce-content-body hr[data-mce-selected]{outline:3px solid #b4d7ff;outline-offset:1px}.mce-content-body *[contentEditable=false] *[contentEditable=true]:focus{outline:3px solid #b4d7ff}.mce-content-body *[contentEditable=false] *[contentEditable=true]:hover{outline:3px solid #b4d7ff}.mce-content-body *[contentEditable=false][data-mce-selected]{cursor:not-allowed;outline:3px solid #b4d7ff}.mce-content-body.mce-content-readonly *[contentEditable=true]:focus,.mce-content-body.mce-content-readonly *[contentEditable=true]:hover{outline:none}.mce-content-body *[data-mce-selected=inline-boundary]{background-color:#b4d7ff}.mce-content-body .mce-edit-focus{outline:3px solid #b4d7ff}.mce-content-body td[data-mce-selected],.mce-content-body th[data-mce-selected]{position:relative}.mce-content-body td[data-mce-selected]::-moz-selection,.mce-content-body th[data-mce-selected]::-moz-selection{background:none}.mce-content-body td[data-mce-selected]::selection,.mce-content-body th[data-mce-selected]::selection{background:none}.mce-content-body td[data-mce-selected] *,.mce-content-body th[data-mce-selected] *{outline:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.mce-content-body td[data-mce-selected]:after,.mce-content-body th[data-mce-selected]:after{background-color:#b4d7ffb3;border:1px solid rgba(180,215,255,.7);bottom:-1px;content:"";left:-1px;mix-blend-mode:multiply;position:absolute;right:-1px;top:-1px}@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){.mce-content-body td[data-mce-selected]:after,.mce-content-body th[data-mce-selected]:after{border-color:#0054b4b3}}.mce-content-body img[data-mce-selected]::-moz-selection{background:none}.mce-content-body img[data-mce-selected]::selection{background:none}.ephox-snooker-resizer-bar{background-color:#b4d7ff;opacity:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ephox-snooker-resizer-cols{cursor:col-resize}.ephox-snooker-resizer-rows{cursor:row-resize}.ephox-snooker-resizer-bar.ephox-snooker-resizer-bar-dragging{opacity:1}.mce-spellchecker-word{background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'4'%20height%3D'4'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20stroke%3D'%23ff0000'%20fill%3D'none'%20stroke-linecap%3D'round'%20stroke-opacity%3D'.75'%20d%3D'M0%203L2%201%204%203'%2F%3E%3C%2Fsvg%3E%0A");background-position:0 calc(100% + 1px);background-repeat:repeat-x;background-size:auto 6px;cursor:default;height:2rem}.mce-spellchecker-grammar{background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'4'%20height%3D'4'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20stroke%3D'%2300A835'%20fill%3D'none'%20stroke-linecap%3D'round'%20d%3D'M0%203L2%201%204%203'%2F%3E%3C%2Fsvg%3E%0A");background-position:0 calc(100% + 1px);background-repeat:repeat-x;background-size:auto 6px;cursor:default}.mce-toc{border:1px solid gray}.mce-toc h2{margin:4px}.mce-toc li{list-style-type:none}[data-mce-block]{display:block}table[style*="border-width: 0px"],.mce-item-table:not([border]),.mce-item-table[border="0"],table[style*="border-width: 0px"] td,.mce-item-table:not([border]) td,.mce-item-table[border="0"] td,table[style*="border-width: 0px"] th,.mce-item-table:not([border]) th,.mce-item-table[border="0"] th,table[style*="border-width: 0px"] caption,.mce-item-table:not([border]) caption,.mce-item-table[border="0"] caption{border:1px dashed #bbb}.mce-visualblocks p,.mce-visualblocks h1,.mce-visualblocks h2,.mce-visualblocks h3,.mce-visualblocks h4,.mce-visualblocks h5,.mce-visualblocks h6,.mce-visualblocks div:not([data-mce-bogus]),.mce-visualblocks section,.mce-visualblocks article,.mce-visualblocks blockquote,.mce-visualblocks address,.mce-visualblocks pre,.mce-visualblocks figure,.mce-visualblocks figcaption,.mce-visualblocks hgroup,.mce-visualblocks aside,.mce-visualblocks ul,.mce-visualblocks ol,.mce-visualblocks dl{background-repeat:no-repeat;border:1px dashed #bbb;margin-left:3px;padding-top:10px}.mce-visualblocks p{background-image:url(data:image/gif;base64,R0lGODlhCQAJAJEAAAAAAP///7u7u////yH5BAEAAAMALAAAAAAJAAkAAAIQnG+CqCN/mlyvsRUpThG6AgA7)}.mce-visualblocks h1{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGu1JuxHoAfRNRW3TWXyF2YiRUAOw==)}.mce-visualblocks h2{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8Hybbx4oOuqgTynJd6bGlWg3DkJzoaUAAAOw==)}.mce-visualblocks h3{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIZjI8Hybbx4oOuqgTynJf2Ln2NOHpQpmhAAQA7)}.mce-visualblocks h4{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxInR0zqeAdhtJlXwV1oCll2HaWgAAOw==)}.mce-visualblocks h5{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjane4iq5GlW05GgIkIZUAAAOw==)}.mce-visualblocks h6{background-image:url(data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjan04jep1iZ1XRlAo5bVgAAOw==)}.mce-visualblocks div:not([data-mce-bogus]){background-image:url(data:image/gif;base64,R0lGODlhEgAKAIABALu7u////yH5BAEAAAEALAAAAAASAAoAAAIfjI9poI0cgDywrhuxfbrzDEbQM2Ei5aRjmoySW4pAAQA7)}.mce-visualblocks section{background-image:url(data:image/gif;base64,R0lGODlhKAAKAIABALu7u////yH5BAEAAAEALAAAAAAoAAoAAAI5jI+pywcNY3sBWHdNrplytD2ellDeSVbp+GmWqaDqDMepc8t17Y4vBsK5hDyJMcI6KkuYU+jpjLoKADs=)}.mce-visualblocks article{background-image:url(data:image/gif;base64,R0lGODlhKgAKAIABALu7u////yH5BAEAAAEALAAAAAAqAAoAAAI6jI+pywkNY3wG0GBvrsd2tXGYSGnfiF7ikpXemTpOiJScasYoDJJrjsG9gkCJ0ag6KhmaIe3pjDYBBQA7)}.mce-visualblocks blockquote{background-image:url(data:image/gif;base64,R0lGODlhPgAKAIABALu7u////yH5BAEAAAEALAAAAAA+AAoAAAJPjI+py+0Knpz0xQDyuUhvfoGgIX5iSKZYgq5uNL5q69asZ8s5rrf0yZmpNkJZzFesBTu8TOlDVAabUyatguVhWduud3EyiUk45xhTTgMBBQA7)}.mce-visualblocks address{background-image:url(data:image/gif;base64,R0lGODlhLQAKAIABALu7u////yH5BAEAAAEALAAAAAAtAAoAAAI/jI+pywwNozSP1gDyyZcjb3UaRpXkWaXmZW4OqKLhBmLs+K263DkJK7OJeifh7FicKD9A1/IpGdKkyFpNmCkAADs=)}.mce-visualblocks pre{background-image:url(data:image/gif;base64,R0lGODlhFQAKAIABALu7uwAAACH5BAEAAAEALAAAAAAVAAoAAAIjjI+ZoN0cgDwSmnpz1NCueYERhnibZVKLNnbOq8IvKpJtVQAAOw==)}.mce-visualblocks figure{background-image:url(data:image/gif;base64,R0lGODlhJAAKAIAAALu7u////yH5BAEAAAEALAAAAAAkAAoAAAI0jI+py+2fwAHUSFvD3RlvG4HIp4nX5JFSpnZUJ6LlrM52OE7uSWosBHScgkSZj7dDKnWAAgA7)}.mce-visualblocks figcaption{border:1px dashed #bbb}.mce-visualblocks hgroup{background-image:url(data:image/gif;base64,R0lGODlhJwAKAIABALu7uwAAACH5BAEAAAEALAAAAAAnAAoAAAI3jI+pywYNI3uB0gpsRtt5fFnfNZaVSYJil4Wo03Hv6Z62uOCgiXH1kZIIJ8NiIxRrAZNMZAtQAAA7)}.mce-visualblocks aside{background-image:url(data:image/gif;base64,R0lGODlhHgAKAIABAKqqqv///yH5BAEAAAEALAAAAAAeAAoAAAItjI+pG8APjZOTzgtqy7I3f1yehmQcFY4WKZbqByutmW4aHUd6vfcVbgudgpYCADs=)}.mce-visualblocks ul{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIAAALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGuYnqUVSjvw26DzzXiqIDlVwAAOw==)}.mce-visualblocks ol{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybH6HHt0qourxC6CvzXieHyeWQAAOw==)}.mce-visualblocks dl{background-image:url(data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybEOnmOvUoWznTqeuEjNSCqeGRUAOw==)}.mce-visualblocks:not([dir=rtl]) p,.mce-visualblocks:not([dir=rtl]) h1,.mce-visualblocks:not([dir=rtl]) h2,.mce-visualblocks:not([dir=rtl]) h3,.mce-visualblocks:not([dir=rtl]) h4,.mce-visualblocks:not([dir=rtl]) h5,.mce-visualblocks:not([dir=rtl]) h6,.mce-visualblocks:not([dir=rtl]) div:not([data-mce-bogus]),.mce-visualblocks:not([dir=rtl]) section,.mce-visualblocks:not([dir=rtl]) article,.mce-visualblocks:not([dir=rtl]) blockquote,.mce-visualblocks:not([dir=rtl]) address,.mce-visualblocks:not([dir=rtl]) pre,.mce-visualblocks:not([dir=rtl]) figure,.mce-visualblocks:not([dir=rtl]) figcaption,.mce-visualblocks:not([dir=rtl]) hgroup,.mce-visualblocks:not([dir=rtl]) aside,.mce-visualblocks:not([dir=rtl]) ul,.mce-visualblocks:not([dir=rtl]) ol,.mce-visualblocks:not([dir=rtl]) dl{margin-left:3px}.mce-visualblocks[dir=rtl] p,.mce-visualblocks[dir=rtl] h1,.mce-visualblocks[dir=rtl] h2,.mce-visualblocks[dir=rtl] h3,.mce-visualblocks[dir=rtl] h4,.mce-visualblocks[dir=rtl] h5,.mce-visualblocks[dir=rtl] h6,.mce-visualblocks[dir=rtl] div:not([data-mce-bogus]),.mce-visualblocks[dir=rtl] section,.mce-visualblocks[dir=rtl] article,.mce-visualblocks[dir=rtl] blockquote,.mce-visualblocks[dir=rtl] address,.mce-visualblocks[dir=rtl] pre,.mce-visualblocks[dir=rtl] figure,.mce-visualblocks[dir=rtl] figcaption,.mce-visualblocks[dir=rtl] hgroup,.mce-visualblocks[dir=rtl] aside,.mce-visualblocks[dir=rtl] ul,.mce-visualblocks[dir=rtl] ol,.mce-visualblocks[dir=rtl] dl{background-position-x:right;margin-right:3px}.mce-nbsp,.mce-shy{background:#aaa}.mce-shy:after{content:"-"}
`, R = () => X + Y + ee + te;
  function w() {
  }
  function Z(t) {
    return t();
  }
  function j() {
    return /* @__PURE__ */ Object.create(null);
  }
  function E(t) {
    t.forEach(Z);
  }
  function _(t) {
    return typeof t == "function";
  }
  function oe(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
  }
  function ne(t) {
    return Object.keys(t).length === 0;
  }
  function g(t, e) {
    t.appendChild(e);
  }
  function ae(t, e, o) {
    const a = ie(t);
    if (!a.getElementById(e)) {
      const n = k("style");
      n.id = e, n.textContent = o, ce(a, n);
    }
  }
  function ie(t) {
    if (!t)
      return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument;
  }
  function ce(t, e) {
    return g(t.head || t, e), e.sheet;
  }
  function re(t, e, o) {
    t.insertBefore(e, o || null);
  }
  function q(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function k(t) {
    return document.createElement(t);
  }
  function F(t) {
    return document.createTextNode(t);
  }
  function N() {
    return F(" ");
  }
  function K(t, e, o, a) {
    return t.addEventListener(e, o, a), () => t.removeEventListener(e, o, a);
  }
  function S(t) {
    return function(e) {
      return e.preventDefault(), t.call(this, e);
    };
  }
  function T(t) {
    return function(e) {
      return e.stopPropagation(), t.call(this, e);
    };
  }
  function y(t, e, o) {
    o == null ? t.removeAttribute(e) : t.getAttribute(e) !== o && t.setAttribute(e, o);
  }
  function le(t) {
    return Array.from(t.childNodes);
  }
  function se(t, e) {
    e = "" + e, t.wholeText !== e && (t.data = e);
  }
  function de(t, e, { bubbles: o = !1, cancelable: a = !1 } = {}) {
    const n = document.createEvent("CustomEvent");
    return n.initCustomEvent(t, o, a, e), n;
  }
  let D;
  function C(t) {
    D = t;
  }
  function U() {
    if (!D)
      throw new Error("Function called outside component initialization");
    return D;
  }
  function me(t) {
    U().$$.on_mount.push(t);
  }
  function ue() {
    const t = U();
    return (e, o, { cancelable: a = !1 } = {}) => {
      const n = t.$$.callbacks[e];
      if (n) {
        const i = de(e, o, { cancelable: a });
        return n.slice().forEach((r) => {
          r.call(t, i);
        }), !i.defaultPrevented;
      }
      return !0;
    };
  }
  const v = [], B = [], z = [], M = [], be = Promise.resolve();
  let O = !1;
  function Ae() {
    O || (O = !0, be.then(J));
  }
  function H(t) {
    z.push(t);
  }
  const L = /* @__PURE__ */ new Set();
  let I = 0;
  function J() {
    const t = D;
    do {
      for (; I < v.length; ) {
        const e = v[I];
        I++, C(e), ge(e.$$);
      }
      for (C(null), v.length = 0, I = 0; B.length; )
        B.pop()();
      for (let e = 0; e < z.length; e += 1) {
        const o = z[e];
        L.has(o) || (L.add(o), o());
      }
      z.length = 0;
    } while (v.length);
    for (; M.length; )
      M.pop()();
    O = !1, L.clear(), C(t);
  }
  function ge(t) {
    if (t.fragment !== null) {
      t.update(), E(t.before_update);
      const e = t.dirty;
      t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(H);
    }
  }
  const pe = /* @__PURE__ */ new Set();
  function he(t, e) {
    t && t.i && (pe.delete(t), t.i(e));
  }
  function fe(t, e, o, a) {
    const { fragment: n, after_update: i } = t.$$;
    n && n.m(e, o), a || H(() => {
      const r = t.$$.on_mount.map(Z).filter(_);
      t.$$.on_destroy ? t.$$.on_destroy.push(...r) : E(r), t.$$.on_mount = [];
    }), i.forEach(H);
  }
  function ke(t, e) {
    const o = t.$$;
    o.fragment !== null && (E(o.on_destroy), o.fragment && o.fragment.d(e), o.on_destroy = o.fragment = null, o.ctx = []);
  }
  function ye(t, e) {
    t.$$.dirty[0] === -1 && (v.push(t), Ae(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
  }
  function xe(t, e, o, a, n, i, r, s = [-1]) {
    const m = D;
    C(t);
    const c = t.$$ = {
      fragment: null,
      ctx: [],
      // state
      props: i,
      update: w,
      not_equal: n,
      bound: j(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (m ? m.$$.context : [])),
      // everything else
      callbacks: j(),
      dirty: s,
      skip_bound: !1,
      root: e.target || m.$$.root
    };
    r && r(c.root);
    let p = !1;
    if (c.ctx = o ? o(t, e.props || {}, (d, u, ...h) => {
      const A = h.length ? h[0] : u;
      return c.ctx && n(c.ctx[d], c.ctx[d] = A) && (!c.skip_bound && c.bound[d] && c.bound[d](A), p && ye(t, d)), u;
    }) : [], c.update(), p = !0, E(c.before_update), c.fragment = a ? a(c.ctx) : !1, e.target) {
      if (e.hydrate) {
        const d = le(e.target);
        c.fragment && c.fragment.l(d), d.forEach(q);
      } else
        c.fragment && c.fragment.c();
      e.intro && he(t.$$.fragment), fe(t, e.target, e.anchor, e.customElement), J();
    }
    C(m);
  }
  class ve {
    $destroy() {
      ke(this, 1), this.$destroy = w;
    }
    $on(e, o) {
      if (!_(o))
        return w;
      const a = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return a.push(o), () => {
        const n = a.indexOf(o);
        n !== -1 && a.splice(n, 1);
      };
    }
    $set(e) {
      this.$$set && !ne(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
    }
  }
  const x = {
    width: "21cm",
    height: "29.7cm",
    heightInPixels: 1122.519685,
    widthInPixes: 793.7007874
  }, Ce = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }, we = 66, De = 66;
  class Ee {
    constructor() {
      l(this, "rootContainerEl", null);
      l(this, "editor");
      l(this, "currentMargins", { ...Ce });
      l(this, "currentZoom", 0);
      l(this, "currentPage", 1);
    }
    setEditor(e) {
      this.editor = e;
    }
    setRootContainerEl(e) {
      this.rootContainerEl = e;
    }
    updateGlobalMargins(e) {
      this.editor.dispatch("global-margins-changed", { margins: e });
    }
    updateMargins(e) {
      this.currentMargins = e, this.editor.dispatch("margins-changed", { margins: e });
    }
    updateZoom(e) {
      this.currentZoom = e, this.editor.dispatch("zoom-updated", { zoom: e });
    }
    getCurrentMargins() {
      return this.currentMargins;
    }
    setCurrentPage(e) {
      this.currentPage = e, this.editor.dispatch("current-page-updated", {
        currentPage: this.currentPage
      });
    }
    createShadowRootContainer(e) {
      const o = document.querySelector(e).attachShadow({ mode: "open" });
      this.setRootContainerEl(o);
      const a = document.createElement("div");
      return a.id = "paper-editor-container", this.rootContainerEl.appendChild(a), this.rootContainerEl;
    }
  }
  const f = new Ee();
  function Ie(t) {
    ae(t, "svelte-rzde9l", ".zoom-controls.svelte-rzde9l{position:absolute !important;bottom:0 !important;right:0 !important;margin:1rem !important}.zoom-controls-container.svelte-rzde9l{display:flex !important;align-items:center !important;height:40px !important;background-color:#f3f6f9 !important;justify-content:center !important;border:1px solid #dadce0 !important}.value.svelte-rzde9l{padding:0rem 1rem !important;min-width:50px !important;text-align:center !important}.control.svelte-rzde9l{padding:0rem 1rem !important;cursor:pointer !important;background:white !important;border:none !important;font-size:1.5rem !important;height:100% !important}.control.svelte-rzde9l:hover{background-color:rgb(245, 248, 252) !important}");
  }
  function ze(t) {
    let e, o, a, n, i, r, s, m, c, p, d;
    return {
      c() {
        e = k("div"), o = k("div"), a = k("button"), a.textContent = "-", n = N(), i = k("div"), r = F(
          /*zoomInPercentage*/
          t[1]
        ), s = F(" %"), m = N(), c = k("button"), c.textContent = "+", y(a, "class", "control minus svelte-rzde9l"), y(i, "class", "value svelte-rzde9l"), y(c, "class", "control plus svelte-rzde9l"), y(o, "class", "zoom-controls-container svelte-rzde9l"), y(e, "class", "zoom-controls svelte-rzde9l");
      },
      m(u, h) {
        re(u, e, h), g(e, o), g(o, a), g(o, n), g(o, i), g(i, r), g(i, s), g(o, m), g(o, c), t[6](e), p || (d = [
          K(a, "click", T(S(
            /*click_handler*/
            t[4]
          ))),
          K(c, "click", T(S(
            /*click_handler_1*/
            t[5]
          )))
        ], p = !0);
      },
      p(u, [h]) {
        h & /*zoomInPercentage*/
        2 && se(
          r,
          /*zoomInPercentage*/
          u[1]
        );
      },
      i: w,
      o: w,
      d(u) {
        u && q(e), t[6](null), p = !1, E(d);
      }
    };
  }
  function Le(t, e, o) {
    let a, n, i, r, s = 0;
    const m = ue(), c = (A) => {
      if (A === "in") {
        if (s === 0.5)
          return;
        o(3, s = s + 0.25);
      } else {
        if (s === -0.5)
          return;
        o(3, s = s - 0.25);
      }
      m("zoom", { zoom: s }), p();
    }, p = () => {
      if (!n || !i)
        return;
      const A = n.firstElementChild;
      A.style.width = 29.7 * (1 + s) + "cm";
      const G = i.firstElementChild;
      s < 0 ? (G.style.transform = `scale(${1 + s}, 1)`, i.style.transform = "none") : (i.style.transform = `scale(${1 + s}, 1)`, i.style.transformOrigin = "left", G.style.transform = "none");
    };
    me(() => {
      f.rootContainerEl && (n = f.rootContainerEl.querySelector(".ruler.vertical"), i = f.rootContainerEl.querySelector(".ruler"));
    });
    const d = () => c("out"), u = () => c("in");
    function h(A) {
      B[A ? "unshift" : "push"](() => {
        r = A, o(0, r);
      });
    }
    return t.$$.update = () => {
      t.$$.dirty & /*currentZoom*/
      8 && o(1, a = s * 100);
    }, [
      r,
      a,
      c,
      s,
      d,
      u,
      h
    ];
  }
  class Fe extends ve {
    constructor(e) {
      super(), xe(this, e, Le, ze, oe, {}, Ie);
    }
  }
  const Be = (t) => {
    t.contentWindow.addEventListener("copy", (e) => {
      let o = e.clipboardData.getData("text/html"), a = "";
      o.replace(/<article(.*?)>([\s\S]*?)<\/article>/g, (n, i) => {
        let r = n.replace(/<article(.*?)>/g, "");
        return r = r.replace(/<\/article>/g, ""), r = r.replace(/<section(.*?)>/g, ""), r = r.replace(/<\/section>/g, ""), a += r, n;
      }), e.clipboardData.setData("text/html", a);
    });
  }, Oe = (t, e = window) => {
    const o = t.offsetHeight, a = e.getComputedStyle(t);
    return ["top", "bottom"].map((n) => parseInt(a[`margin-${n}`])).reduce((n, i) => n + i, o);
  };
  class He {
    constructor() {
      l(this, "editor", null);
      l(this, "inited", !1);
      l(this, "styleClasses", {
        root: "pages",
        page: "paper-page",
        pagesContainer: "pages-container"
      });
      l(this, "rootId", "paper-tinymce-pages");
      // Body and document of iframe
      l(this, "body");
      l(this, "doc");
      l(this, "win", window);
      // Root element
      l(this, "root");
      // pagesEl
      l(this, "pagesContainer");
      l(this, "allPages", []);
      l(this, "currentPage", 1);
      l(this, "widthPoint", x.widthInPixes / we);
      l(this, "heightPoint", x.heightInPixels / De);
      l(this, "currentZoom", 0);
    }
    start(e) {
      this.editor = e, setTimeout(() => this.setEvents(), 0), this.doubleUpdate();
    }
    setEvents() {
      this.editor.on("Undo Redo ViewUpdate", this.build), this.editor.on("keydown", (e) => {
        if (e.keyCode === 91 || e.keyCode === 17 || e.ctrlKey || e.metaKey)
          return;
        this.body.querySelector("#page-1") || this.resetToBeforeInitalState(), this.build();
      }), this.editor.on("refresh-pages", () => this.build()), this.editor.on("reset-pages", () => this.resetToBeforeInitalState()), this.editor.on("SetContent", () => {
        this.setInitialState(), this.build(), this.applyZoom(this.currentZoom);
      }), this.editor.on("SelectionChange", () => {
        this.setCurrentPage(), f.setCurrentPage(this.currentPage);
      }), this.editor.contentWindow.addEventListener("paste", () => {
        setTimeout(() => this.build(), 200);
      }), Be(this.editor), this.editor.on("zoom-updated", ({ zoom: e }) => this.applyZoom(e)), this.editor.on("margins-changed", (e) => {
        this.build();
      });
    }
    doubleUpdate() {
      setTimeout(() => this.build(), 10), setTimeout(() => this.build(), 200);
    }
    build() {
      setTimeout(() => {
        const e = this.getCurentSelectorLocation();
        this.updateSavedPagesAndPageContainers();
        const o = this.getAllNodesInEditor();
        this.distributeNodesOnPages(o), this.orderPages(), this.hideEmptyPages(), this.inited = !0, this.editor.selection.setCursorLocation(
          e.node,
          e.offset
        ), this.editor.dispatch("pagesUpdate", {});
      }, 0);
    }
    setInitialState(e = null, o = null) {
      if (this.body = e || this.editor.getBody(), this.doc = o || this.editor.contentDocument, this.doc.getElementById(this.rootId))
        this.root = this.doc.getElementById(this.rootId), this.pagesContainer = this.root.querySelector("." + this.styleClasses.pagesContainer);
      else {
        this.root = this.doc.createElement("main"), this.root.classList.add(this.styleClasses.root), this.root.id = this.rootId;
        const a = this.doc.createElement("div");
        a.classList.add(this.styleClasses.pagesContainer), this.root.appendChild(a), this.pagesContainer = a, this.body.appendChild(this.root);
      }
    }
    resetToBeforeInitalState() {
      this.inited = !1, this.allPages = [];
    }
    getCurentSelectorLocation() {
      return {
        node: this.editor.selection.getRng().commonAncestorContainer,
        offset: this.editor.selection.getRng().startOffset
      };
    }
    getAllNodesInEditor(e = null, o = null) {
      const a = [];
      return this.inited ? this.allPages.forEach((n) => {
        const i = n.firstElementChild;
        a.push(...i.childNodes);
      }) : (this.setInitialState(e, o), this.body.childNodes.forEach((n) => {
        n.constructor.name !== "Comment" && (n == null ? void 0 : n.id) !== this.rootId && a.push(n);
      })), a;
    }
    distributeNodesOnPages(e) {
      const o = this.getHeightOfPage();
      let a = 0, n = 1, i = [];
      e.forEach((r, s) => {
        const m = Oe(r, this.win), c = a + m;
        c > o ? (this.buildPage(n, i), a = m, n += 1, i = [r], s === e.length - 1 && this.buildPage(n, i)) : (a = c, i.push(r), s === e.length - 1 && this.buildPage(n, i));
      });
    }
    buildPage(e, o) {
      const a = "page-" + e;
      let n = this.doc.getElementById(a);
      n || (n = this.createPageContainer(e), this.pagesContainer.appendChild(n), this.allPages.push(n)), n.firstElementChild.append(...o), this.setMarginsOfPage(n.firstElementChild);
    }
    createPageContainer(e) {
      const o = this.doc.createElement("article");
      return o.innerHTML = "<section></section>", o.setAttribute("data-page-number", e.toString()), o.id = "page-" + e, o.classList.add(this.styleClasses.page), o.style.cssText = `
        height: ${x.height}; 
        width: ${x.width};
      `, o;
    }
    setMarginsOfPage(e) {
      const o = f.getCurrentMargins();
      e.style.marginLeft = this.widthPoint * o.left + "px", e.style.marginRight = this.widthPoint * o.right + "px", e.style.marginTop = this.heightPoint * o.top + "px";
    }
    getMarginTopAndBottomOfPage() {
      const e = f.getCurrentMargins();
      return this.heightPoint * e.bottom + this.heightPoint * e.top;
    }
    getHeightOfPage() {
      return x.heightInPixels - this.getMarginTopAndBottomOfPage();
    }
    orderPages() {
      this.allPages = [].slice.call(this.allPages).sort((e, o) => {
        const a = parseInt(e.getAttribute("data-page-number") || "0", 10), n = parseInt(o.getAttribute("data-page-number") || "0", 10);
        return a - n;
      }), this.allPages.forEach((e) => this.pagesContainer.appendChild(e));
    }
    hideEmptyPages() {
      this.allPages.forEach((e) => {
        e.firstElementChild.childNodes.length ? e.style.display = "block" : e.style.display = "none";
      });
    }
    setCurrentPage() {
      if (this.inited) {
        const o = this.editor.selection.getNode().closest(`.${this.styleClasses.page}`);
        if (o) {
          const a = Number(o.getAttribute("data-page-number"));
          a !== this.currentPage && (this.currentPage = a);
        }
      }
    }
    getNumberOfPages() {
      return this.allPages.reduce(
        (e, o) => e + (o.firstElementChild.childNodes.length ? 1 : 0),
        0
      );
    }
    updateSavedPagesAndPageContainers() {
      this.inited && (this.allPages = [
        ...this.doc.querySelectorAll(`.${this.styleClasses.page}`)
      ], this.pagesContainer = this.doc.querySelector(
        `.${this.styleClasses.pagesContainer}`
      ));
    }
    applyZoom(e) {
      if (this.root.style.transformOrigin = "0 0", e < 0) {
        const o = Math.abs(e) * 100;
        this.root.style.left = o / 2 + "%", this.root.style.position = "relative";
      } else
        this.root.style.left = "0";
      this.root.style.transform = `scale(${1 + e})`, this.currentZoom = e;
    }
  }
  const b = new He();
  class Pe {
    constructor() {
      l(this, "doc");
      l(this, "zoomComponent");
      l(this, "body");
      l(this, "currentZoom", 0);
    }
    create(e, o) {
      return this.createIframe(e), this.body.innerHTML = this.cleanContent(o), this.buildPages(), setTimeout(() => this.buildPages(), 200), this.createZoomElement(e), {
        setContent: (a) => {
          this.body.innerHTML = this.cleanContent(a), b.inited = !1, b.resetToBeforeInitalState(), this.buildPages(), setTimeout(() => this.buildPages(), 200), b.applyZoom(this.currentZoom);
        }
      };
    }
    cleanContent(e) {
      const o = e.match(
        new RegExp("(?<=\\<papertinymceinfo>)([^;]*)(?=\\<\\/papertinymceinfo>)", "g")
      );
      if (o && o[0]) {
        const n = JSON.parse(o[0]);
        n != null && n.pgMar && (f.currentMargins = n == null ? void 0 : n.pgMar);
      }
      return e.replace(
        /<papertinymceinfo>([^;]*)<\/papertinymceinfo>/g,
        ""
      ).replace(/(\r\n|\n|\r)/gm, "");
    }
    createIframe(e) {
      const o = document.createElement("iframe");
      e.appendChild(o), o.style.height = "100%", o.style.width = "100%", this.doc = o.contentDocument, this.body = this.doc.body, this.body.classList.add("mce-content-body");
      const a = R(), n = this.doc.createElement("style");
      return n.textContent = a, this.doc.getElementsByTagName("head")[0].appendChild(n), b.win = o.contentWindow, o;
    }
    createShadowDom(e) {
      let o = e.attachShadow({ mode: "open" }), a = document.createElement("div");
      a.classList.add("mce-content-body"), a.style.height = "100%", a.style.width = "100%", this.body = a, this.doc = document;
      const n = R(), i = this.doc.createElement("style");
      return i.textContent = n, o.appendChild(i), o.appendChild(a), o;
    }
    createZoomElement(e) {
      document.createElement("div"), this.zoomComponent = new Fe({ target: e, props: {} }), this.zoomComponent.$on("zoom", ({ detail: { zoom: o } }) => {
        b.applyZoom(o), this.currentZoom = o;
      });
    }
    buildPages() {
      const e = b.getAllNodesInEditor(this.body, this.doc);
      b.distributeNodesOnPages(e), b.orderPages(), b.hideEmptyPages(), b.inited = !0;
    }
  }
  const Q = new Pe(), Ge = (t) => {
    if (typeof P == "object")
      try {
        P.exports = t;
      } catch {
      }
  }, Re = (t) => window.PaperTinymceViewer = t;
  Re(Q);
  Ge(Q);
});
export default je();
