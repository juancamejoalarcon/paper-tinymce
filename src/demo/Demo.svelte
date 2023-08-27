<script lang="ts">
  import { onMount } from "svelte";
  import PaperTinymceDemo from "@/demo/papertinymce/PaperTinymceDemo.svelte";
  import PaperTinymceViewerDemo from "@/demo/papertinymceviewer/PaperTinymceViewerDemo.svelte";

  const searchParams = new URLSearchParams(window.location.search);
  let active = searchParams.get('active');

  function selectOption(selected) {
    active = selected;
    searchParams.set("active", selected);
    window.location.search = searchParams.toString();
	}
</script>

<div class="demo">
  <div>
    <button on:click={() => selectOption('editor')}> Editor </button>
    <button on:click={() => selectOption('viewer')}> Viewer </button>
  </div>

  {#if active === "editor"}
    <PaperTinymceDemo />
  {:else if active === "viewer"}
    <PaperTinymceViewerDemo />
  {/if}
</div>

<style lang="scss">
  .demo {
    height: 100vh;
  }
</style>
