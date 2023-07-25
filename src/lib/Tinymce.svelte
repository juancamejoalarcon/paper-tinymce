<script lang="ts">
  import { onMount } from 'svelte';
  import { PaperTinyMCE } from "../plugin/PaperTinyMCE";
  import DemoContratoArrendamiento from "./demos/DemoContratoArrendamiento.svelte";
  import DemoEmpty from "./demos/DemoEmpty.svelte";
  import { loadScript } from './services/load-script';
  import { tinymceBasicConfig } from './services/tinymce-basic-config';

  const urlParams = new URLSearchParams(window.location.search);
  const demo = urlParams.get('demo');
  const init = () => {
    // @ts-ignore
    tinymce.PluginManager.add("paper-tinymce", PaperTinyMCE);
    // @ts-ignore
    tinymce.init({
      selector: "#paper-editor-container",
      plugins: 'paper-tinymce preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount charmap quickbars emoticons',
      ...tinymceBasicConfig
    });
  }
  onMount(() => {
    // init()
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
