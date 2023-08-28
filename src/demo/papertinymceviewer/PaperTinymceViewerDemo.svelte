<script lang="ts">
  import { onMount } from "svelte";
  import { Viewer } from "@/components/viewer/Viewer";
  import DemoSelector from "@/demo/demoselector/DemoSelector.svelte"
  import * as demo from "@/demo/demoselector/all-demos/demo.html?raw";

  let viewer;

  const onSelectDemo = (e) => {
    viewer.setContent(e.detail.demo)
  }


  onMount(() => {
    viewer = Viewer.create(
      document.querySelector("#paper-tinymce-viewer-demo"),
      demo.default
    );
    window.viewer = viewer
  });
</script>

<DemoSelector on:demo={onSelectDemo} />
<div id="paper-tinymce-viewer-demo" />

<style lang="scss">
  #paper-tinymce-viewer-demo {
    height: 90%;
  }
</style>
