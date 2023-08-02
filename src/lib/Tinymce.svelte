<script lang="ts">
  import { onMount } from 'svelte';
  import { loadScript } from './services/load-script';
  import { getTinymceBasicConfig } from './services/tinymce-basic-config';
  import { PaperTinyMCE } from "../plugin/PaperTinyMCE";
  import DemoContratoArrendamiento from "./demos/DemoContratoArrendamiento.svelte";
  import DemoEmpty from "./demos/DemoEmpty.svelte";

  const urlParams = new URLSearchParams(window.location.search);
  const demo = urlParams.get('demo');
  const init = () => {
    // @ts-ignore
    tinymce.PluginManager.add("paper-tinymce", PaperTinyMCE.init);
    // @ts-ignore
    tinymce.init({
      selector: "#paper-editor-container",
      plugins: 'paper-tinymce preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount charmap quickbars emoticons',
      content_style: PaperTinyMCE.getStyles(),
      ...getTinymceBasicConfig()
    });
  }
  onMount(() => {
    loadScript(`https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.5.1/tinymce.min.js`, { async: true, defer: true }).then(() => {
      init()
    })
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
