<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { makeAllElementsNonEditable } from "../shared/utils";

  // export let defaultMargin: Margins = { top: 0, left: 0, bottom: 0, right: 0 };
  export let vertical: boolean = false;
  export let currentPage: number = 0;
  export let currentZoom: number = 0;
  export let win: Window;

  let rangeBackground = "white";
  let globalRangeBackground = "white";
  let verticalOffset: string;
  let zoom: number = 1;

  $: {
    if (vertical) {
      zoom = 1 + currentZoom
      verticalOffset = vertical && currentPage && currentPage !== 1
      ? (currentPage - 1) * 1123 + (currentPage - 1) * 20 + "px"
      : "";
      setVerticalMarginTop()
    }
  }

  $: markClass = "mark" + (vertical ? "-vertical" : "");
  $: {
    const inputColor = "#E8EAED";
    const rangeColor = "white";
    rangeBackground = `linear-gradient(
      to right,
      ${inputColor} 0%,
      ${inputColor} ${(startValue / numberOfPoints) * 100}%,
      ${rangeColor} ${(startValue / numberOfPoints) * 100}%,
      ${rangeColor} ${(endValue / numberOfPoints) * 100}%, 
      ${inputColor} ${(endValue / numberOfPoints) * 100}%, 
      ${inputColor} 100%)`;
    globalRangeBackground = `linear-gradient(
      to right,
      ${inputColor} 0%,
      ${inputColor} ${(globalStartValue / numberOfPoints) * 100}%,
      ${rangeColor} ${(globalStartValue / numberOfPoints) * 100}%,
      ${rangeColor} ${(globalEndValue / numberOfPoints) * 100}%, 
      ${inputColor} ${(globalEndValue / numberOfPoints) * 100}%, 
      ${inputColor} 100%)`;
      
  }

  const numberOfPoints = 66;
  const ruler: number[] = Array.from(Array(numberOfPoints + 2).keys());

  let globalRightMarginInput: HTMLInputElement;
  let rightMarginInput: HTMLInputElement;
  let rulerMarks: HTMLUListElement;
  let container: HTMLDivElement;

  export let startValue = 0;
  export let endValue = numberOfPoints;
  export let indentValue = 0;

  export let globalStartValue = 0;
  export let globalEndValue = numberOfPoints;

  const dispatch = createEventDispatcher();

  const onControlChanged = (side: string): void => {
    let value: number;

    if (side === "start" && startValue > endValue) {
      startValue = endValue;
    }
    if (side === "end") {
      endValue = startValue <= endValue ? endValue : startValue;
    }

    if (side === "global-start" && globalStartValue > globalEndValue) {
      globalStartValue = globalEndValue;
    }

    if (side === "global-end") {
      globalEndValue = globalStartValue <= globalEndValue ? globalEndValue : globalStartValue;
    }



    if (side === "start") value = startValue - globalStartValue
    if (side === "end") {
      value = (!vertical ? globalEndValue : numberOfPoints) - (endValue)
    }
    if (side === "global-start") value = globalStartValue 
    if (side === "global-end") value = numberOfPoints - globalEndValue 
    

    dispatch("margin-changed", {
      side,
      value,
    });
  };

  const onIndentChange = () => {
    dispatch("indent-changed", {
      value: indentValue - globalStartValue,
    });
  }

  const toggleRulerMark = (control: string, add = true) => {
    let value: number;

    if (control === "start") value = startValue
    if (control === "end") value = endValue + 1
    if (control === "global-start") value = globalStartValue
    if (control === "global-end") value = globalEndValue + 1
    if (control === "indent") value = indentValue

    rulerMarks.children[value].classList[add ? "add" : "remove"](markClass);
  };

  const toggleRulerMarkAndListener = (control: string) => {
    toggleRulerMark(control);
    const removeMark = () => {
      toggleRulerMark(control, false);
      window.removeEventListener("mouseup", removeMark);
    };
    window.addEventListener("mouseup", removeMark);
  };

  const hideMark = () => {
    for (let i = 0; i < rulerMarks.children.length; i++) {
      rulerMarks.children[i].classList.remove(markClass);
    }
  };

  const onRangePointMove = (control: string) => {
    hideMark();
    toggleRulerMark(control);
  };

  const setVerticalMarginTop = () => {
    const contentVertical = container?.firstElementChild as HTMLElement
    const offset = 16 + (verticalOffset ? parseInt(verticalOffset) : 0);
          const margin = (-1 * (win.scrollY)) + (offset * zoom);
          if (contentVertical) contentVertical.style.marginTop = `${margin}px`
  }

  const onScrollListener = (): void => {

      win.addEventListener('scroll', () => {
        if (!vertical) {
          container.style.marginLeft = '-' + win.scrollX + 'px'
        } else {
          setVerticalMarginTop()
        }
      })
  }

  onMount(() => {
    // makeAllElementsNonEditable(container)
    if (vertical) {
      const offset = 50
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          container.style.height = (entry.contentRect.height + offset) + 'px'
        }
      });
      observer.observe(win.document.body);
    }
    onScrollListener()
  });
</script>

<div bind:this={container} class="ruler" class:vertical>
  <div class="content" >
    <div class="controls">
      <div class="controls-container">
        {#if !vertical}
          <input
            bind:value={indentValue}
            on:change={() => onIndentChange()}
            on:input={() => onRangePointMove("indent")}
            on:mousedown={() => toggleRulerMarkAndListener("indent")}
            class="indent"
            type="range"
            min="0"
            max={numberOfPoints}
          />
          <input
            bind:value={globalStartValue}
            on:change={() => onControlChanged("global-start")}
            on:input={() => onRangePointMove("global-start")}
            on:mousedown={() => toggleRulerMarkAndListener("global-start")}
            class="global-start"
            type="range"
            min="0"
            max={numberOfPoints}
          />
          <input
            bind:this={globalRightMarginInput}
            bind:value={globalEndValue}
            on:change={() => onControlChanged("global-end")}
            on:input={() => onRangePointMove("global-end")}
            on:mousedown={() => toggleRulerMarkAndListener("global-end")}
            class="global-end"
            type="range"
            style="background: {globalRangeBackground};"
            min="0"
            max={numberOfPoints}
          />
        {/if}
        <input
          bind:value={startValue}
          on:change={() => onControlChanged("start")}
          on:input={() => onRangePointMove("start")}
          on:mousedown={() => toggleRulerMarkAndListener("start")}
          class="start"
          type="range"
          min="0"
          max={numberOfPoints}
        />
        <input
          bind:this={rightMarginInput}
          bind:value={endValue}
          on:change={() => onControlChanged("end")}
          on:input={() => onRangePointMove("end")}
          on:mousedown={() => toggleRulerMarkAndListener("end")}
          class="end"
          type="range"
          style="background: {vertical ? rangeBackground : 'white'};"
          min="0"
          max={numberOfPoints}
        />
      </div>
    </div>
    <ul class="ruler-points" bind:this={rulerMarks}>
      {#each ruler as point}
        <li></li>
      {/each}
    </ul>
  </div>
</div>
<style lang="scss">
</style>


