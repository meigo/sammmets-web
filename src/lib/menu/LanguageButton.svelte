<script lang="ts">
  export let label: string;
  export let href: string;
</script>

<a {href} class="flex items-center justify-center rounded-lg pointer-events-auto size-8 bg-neutral-500 hover:bg-lime-600">
  <div class="text-sm font-medium text-white font-brandon">{label}</div>
</a>
