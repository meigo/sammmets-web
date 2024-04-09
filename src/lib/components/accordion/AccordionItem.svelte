<script>
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let data;
  export let open = false;
</script>

<div class="pt-4">
  <dt>
    <button
      type="button"
      class="flex w-full p-2 items-start justify-between text-left hover:text-neutral-600 focus:bg-neutral-200 outline-none"
      aria-controls="faq-0"
      aria-expanded="false"
      on:click={() => {
        open = !open;
      }}
    >
      <span class="text-lg lg:text-xl uppercase font-medium leading-7">{data.title}</span>
      <span class="ml-6 flex h-7 items-center">
        {#if !open}
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
          </svg>
        {:else}
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"></path>
          </svg>
        {/if}
      </span>
    </button>
  </dt>

  {#if open}
    <dd class="mt-2 mb-6 pr-12" id="faq-0" transition:slide={{ duration: 300, easing: quintOut, axis: "y" }}>
      <p class="text-base leading-7 p-2">
        {data.text}
      </p>
    </dd>
  {/if}
</div>
