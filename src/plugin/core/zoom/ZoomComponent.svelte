<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import type { Editor } from "tinymce";
  import { makeAllElementsNonEditable } from "../shared/utils"

  export let editor: Editor;

  let rulerVertical: HTMLDivElement;
  let rulerHorizontal: HTMLDivElement;
  let container: HTMLDivElement;
  let currentZoom = 0;
  $: zoomInPercentage = currentZoom * 100;
  const dispatch = createEventDispatcher();

  const zoom = (direction: string): void => {
    if (direction === "in") {
      currentZoom = currentZoom + 0.25;
    } else {
      currentZoom = currentZoom - 0.25;
    }
    dispatch("zoom", { zoom: currentZoom });
    setZoomInContainer();
  };

  const setZoomInContainer = (): void => {

    rulerVertical.style.transform = `scale(1, ${1 + currentZoom})`;
    rulerVertical.style.transformOrigin = 'top';
    rulerHorizontal.style.transform = `scale(${1 + currentZoom}, 1)`;
    rulerHorizontal.style.transformOrigin = 'left';
  };

  onMount(() => {
    const contentDoc = editor.contentDocument;
    rulerVertical = contentDoc.querySelector(".ruler.vertical");
    rulerHorizontal = contentDoc.querySelector(".ruler");

    makeAllElementsNonEditable(container)
  });
</script>

<div bind:this={container} class="zoom-controls">
  <div class="zoom-controls-container">
    <button
      class="control minus"
      on:click|preventDefault|stopPropagation={() => zoom("out")}
    >
      -
    </button>
    <div class="value">{zoomInPercentage} %</div>
    <button
      class="control plus"
      on:click|preventDefault|stopPropagation={() => zoom("in")}>+</button
    >
  </div>
</div>
