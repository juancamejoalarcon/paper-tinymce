<script lang="ts">
    import { onMount } from "svelte";
    import { createEventDispatcher } from 'svelte';
    import * as demo from "@/demo/demoselector/all-demos/demo.html?raw";
    import * as demo2 from "@/demo/demoselector/all-demos/demo2.html?raw";
    import * as demo3 from "@/demo/demoselector/all-demos/demo3.html?raw";
  
    const dispatch = createEventDispatcher();
    let questions = [
          { id: 1, text: `Demo 1`, var: demo },
          { id: 2, text: `Demo 2`, var: demo2 },
          { id: 3, text: `Demo 3`, var: demo3 },
      ];
  
    let selected = questions[0];
  
    const onSelectDemo = (e) => {
      const question = questions.find((question) => question.id === parseInt(e.target.value))
      if (!question) return
      dispatch('demo', { demo: question.var.default });
    }
  
    onMount(() => {
    });
  </script>
  
  <div class="demo-selector">
    <select bind:value={selected} on:change={onSelectDemo}>
      {#each questions as question}
        <option value={question.id}>
          {question.text}
        </option>
      {/each}
    </select>
  </div>

  
  <style lang="scss">
    .demo-selector {
      padding: 1rem;
    }
  </style>
  