<script lang="ts">
  import { onMount } from "svelte";
  import { PaperTinymce } from "@/PaperTinymce";
  import DemoSelector from "@/demo/demoselector/DemoSelector.svelte"

  let editor;


  const onSelectDemo = (e) => {
    editor.paperTinymce.setPaperContent(e.detail.demo)
  }

  onMount(() => {
    editor = PaperTinymce("#paper-tinymce-demo", {
      highlight: true,
      lang: "en",
    }) as any;
    window.editor = editor
  });
</script>


<DemoSelector on:demo={onSelectDemo} />
<div id="paper-tinymce-demo" />

<style lang="scss">
#paper-tinymce-demo {
  height: 90%;
}
</style>
