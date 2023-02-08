<script lang="ts">
  import { onMount } from 'svelte';
  import { PaperTinyMCE } from "../plugin/PaperTinyMCE";
  import DemoContent from "./DemoContent.svelte";
  const init = () => {
    tinymce.PluginManager.add("paper-tinymce", PaperTinyMCE);
    tinymce.init({
      selector: "#paper-editor-container",
      plugins: [ "paper-tinymce"]
    });
  }
  onMount(() => {
    init()
  })
</script>
<div id="paper-editor-container">
  <DemoContent/>
</div>

<style>
  
:global(.tox.tox-tinymce) {
  height: 95vh !important;
  }
</style>
