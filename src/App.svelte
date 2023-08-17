<script lang="ts">
  // import Tinymce from './lib/Tinymce.svelte';
  import { onMount } from "svelte";
  import "./app.css";
  import tinymce, { Editor } from "tinymce";
  import { getTinymceBasicConfig } from "./lib/services/tinymce-basic-config";
  import { registerImportButton, getMenuOptions } from "./services/menu/menu.service";
  import * as Rulers from './components/rulers/Rulers'
  import * as Zoom from './components/zoom/Zoom'
  import * as Pages from './components/pages/Pages'
  import * as css from "./app.css?inline";
  import * as Api from "./plugin/api/Api";

  const init = () => {
    tinymce.init({
      selector: "#paper-editor-container",
      ...getTinymceBasicConfig(),
      ...getMenuOptions(),
      setup: function (editor) {
        registerImportButton(editor);
      },
      init_instance_callback: (editor: Editor) => {
        const api = Api.get();

        Rulers.setup(editor);
        Zoom.setup(editor);
        Pages.setup(editor, api, 100);

      },
      content_style: css.default,
    });
  };

  onMount(() => {
    init();
  });
</script>

<div class="paper-tinymce">
  <div id="paper-editor-container">
    <p>Caca</p>
  </div>
</div>

<style>
</style>
