<script lang="ts">
  import { onMount } from 'svelte';
  import { PaperTinyMCE } from "../plugin/PaperTinyMCE";
  import DemoContratoArrendamiento from "./demos/DemoContratoArrendamiento.svelte";
  import DemoEmpty from "./demos/DemoEmpty.svelte";

  const urlParams = new URLSearchParams(window.location.search);
  const demo = urlParams.get('demo');
  const init = () => {
    // @ts-ignore
    tinymce.PluginManager.add("paper-tinymce", PaperTinyMCE);
    // @ts-ignore
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
  {#if demo === 'contrato-arrendamiento'}
    <DemoContratoArrendamiento/>
  {:else}
    <DemoEmpty/>
  {/if}

</div>

<style>
  
:global(.tox.tox-tinymce) {
  height: 95vh !important;
  }
</style>
