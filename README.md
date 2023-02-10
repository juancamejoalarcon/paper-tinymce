# PaperTinyMCE

The goal of this project is to create a tool capable of editing HTML in paper format. (A4, A3,…)

It works as a plugin for TinyMCE.

Live demo: [HERE](https://juancamejoalarcon.github.io/paper-tinymce/live-demo/)

## Install

```
npm install paper-tinymce
```

or via cdn

```
https://cdn.jsdelivr.net/npm/paper-tinymce@latest/paper-tinymce.umd.js
```


## Use

```js
  tinymce.PluginManager.add("paper-tinymce", PaperTinyMCE);
  tinymce.init({
    selector: "#paper-editor-container",
    plugins: ["paper-tinymce"]
  });
```