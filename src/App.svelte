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
  import * as css from "./paper_styles.scss?inline";
  import * as oxideContent from "@/assets/tinymce/skins/ui/oxide/content.css?inline";
  import * as defaultContent from "@/assets/tinymce/skins/content/default/content.css?inline";
  import * as oxideContentInline from "@/assets/tinymce/skins/ui/oxide/content.inline.css?inline";
  import { GlobalMethods } from "@/core/editor-global-methods";
  import { getTinymceTemplateStyles } from '@/services/dependencies/styles'

  export let setEditor: any = () => {};
  export let options: any = {};



  const init = () => {
    // @ts-ignore
    (tinymce as TinyMCE).init({
      target: store.rootContainerEl.querySelector('#paper-editor-container'),
      ...getTinymceBasicConfig(),
      ...getMenuOptions(),
      setup: (editor) => {
        setEditor(editor)
        registerImportButton(editor);
        GlobalMethods.start(editor);
        if (options.highlight === true) Highlight.start(editor);
      },
      init_instance_callback: (editor: Editor) => {
        store.setEditor(editor)
        Rulers.start(editor);
        Zoom.start(editor);
        Pages.start(editor);
      },
      content_style: css.default + oxideContent.default + defaultContent.default + oxideContentInline.default,
      skin: false,
      content_css: '',
      height: '100%',
      branding: false,
      language: options.lang || "en",
    });
  };

  onMount(() => {
    let style = document.createElement("style");
    style.textContent = getTinymceTemplateStyles()
    store.rootContainerEl.appendChild(style);
    init();
  });
</script>

<div class="paper-tinymce">
</div>

<style>
</style>
