<script lang="ts">
  import { onMount } from "svelte";
  import type { Editor, TinyMCE } from "tinymce";
  import { store } from "@/core/store" 
  import { getTinymceBasicConfig } from "@/services/tinymce-basic-config";
  import { registerImportButton, getMenuOptions } from "@/services/menu/menu.service";
  import { Highlight } from "@/services/highlight/highlight.service";
  import { Rulers } from '@/components/rulers/Rulers'
  import { Zoom } from '@/components/zoom/Zoom'
  import { Pages } from '@/components/pages/Pages'
  import * as css from "./paper_styles.css?inline";
  import { PaperTinymce } from "@/core/editor-global-methods";

  export let setEditor: any = () => {};

  const init = () => {
    // @ts-ignore
    (tinymce as TinyMCE).init({
      selector: "#paper-editor-container",
      ...getTinymceBasicConfig(),
      ...getMenuOptions(),
      setup: (editor) => {
        setEditor(editor)
        registerImportButton(editor);
        Highlight.start(editor);
        PaperTinymce.start(editor);
      },
      init_instance_callback: (editor: Editor) => {
        store.setEditor(editor)
        Rulers.start(editor);
        Zoom.start(editor);
        Pages.start(editor);
      },
      content_style: css.default,
      skin: false,
      content_css: ''
    });
  };

  onMount(() => {
    init();
  });
</script>

<div class="paper-tinymce">
  <div id="paper-editor-container">
    <p>Start typing here...</p>
  </div>
</div>

<style>
</style>
