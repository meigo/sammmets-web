<script lang="ts">
  import { fly, scale } from "svelte/transition";
  import { quintOut, sineOut, sineIn } from "svelte/easing";
  import LanguageButton from "./LanguageButton.svelte";
  import BurgerIcon from "@lib/svg/BurgerIcon.svelte";
  import XIcon from "@lib/svg/XIcon.svelte";

  export let language: Language;
  export let data: MenuData;

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeIfOpen() {
    if (isOpen) isOpen = false;
  }

  let scrollY = 0;
  let innerWidth = 0;

  $: bigMenuVisible = innerWidth > 1350 && scrollY < 350;
</script>

<svelte:window bind:scrollY bind:innerWidth on:scroll={closeIfOpen} />

<nav class="fixed z-10 w-full">
  {#if bigMenuVisible}
    <div
      class="absolute w-full z-3"
      in:fly={{ delay: 0, duration: 400, opacity: 100, easing: sineOut, y: -50 }}
      out:fly={{ delay: 0, duration: 400, opacity: 100, easing: sineIn, y: -50 }}
    >
      <div class="flex items-center justify-center w-full px-4 bg-white shadow-md h-14">
        <!-- <div class="flex-shrink-0">
          Your logo or brand here
        </div> -->

        <div class="flex ml-10 space-x-4">
          {#each data as { title, target }}
            <a href="#{target}" class="px-3 menu-item">{title}</a>
          {/each}
        </div>

        <div class="absolute flex justify-end w-full pr-4 pointer-events-none">
          {#if language === "et"}
            <LanguageButton label="EN" href="/en/" />
          {:else}
            <LanguageButton label="EE" href="/" />
          {/if}
        </div>
      </div>
    </div>
  {/if}

  <!-- HAMBURGER MENU BUTTON -->
  {#if !bigMenuVisible}
    <div
      class="absolute left-0 w-16 h-16 z-2"
      in:fly={{ delay: 200, duration: 400, opacity: 100, easing: sineOut, y: -50 }}
      out:fly={{ delay: 0, duration: 400, opacity: 100, easing: sineIn, y: -50 }}
    >
      <div class="relative h-full pb-3 pr-3 bg-white rounded-br-full" class:shadow-md={!isOpen}>
        <button
          type="button"
          class="flex items-center justify-center w-full h-full p-2"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          on:click={toggleMenu}
        >
          {#if !isOpen}
            <div class="absolute" transition:scale={{ duration: 500 }}>
              <BurgerIcon class="hover:text-lime-600 size-6" />
            </div>
          {:else}
            <div class="absolute" transition:scale={{ duration: 500 }}>
              <XIcon class="hover:text-lime-600 size-6" />
            </div>
          {/if}
        </button>
      </div>
    </div>
  {/if}

  <!-- HAMBURGER MENU -->
  {#if isOpen}
    <!-- BG CLOSE BUTTON -->
    <button class="fixed w-full h-full" on:click={closeIfOpen}></button>

    <!-- MENU ITEMS -->
    <div
      id="mobile-menu"
      class="absolute pt-16 pb-6 pl-4 pr-8 bg-white shadow-md rounded-br-2xl"
      transition:fly={{ delay: 0, duration: 300, easing: quintOut, y: -20 }}
    >
      <!-- LANGUAGE BUTTON -->
      <div class="absolute top-0 right-0 flex justify-end w-full p-3">
        {#if language === "et"}
          <LanguageButton label="EN" href="/en/" />
        {:else}
          <LanguageButton label="EE" href="/" />
        {/if}
      </div>

      {#each data as { title, target }}
        <a href="#{target}" class="block py-2 menu-item mobile" on:click={() => (isOpen = false)}>{title} </a>
      {/each}
    </div>
  {/if}
</nav>

<style lang="postcss">
  .menu-item {
    @apply text-sm font-brandon font-medium space-x-8 whitespace-nowrap uppercase;
  }
  .menu-item.mobile {
    @apply text-base whitespace-normal;
  }
  .menu-item:hover {
    @apply text-lime-600;
  }
</style>
