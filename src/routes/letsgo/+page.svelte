<script>
  export let data;
</script>

<svelte:head>
  <title>Letsgo</title>
  <meta name="letsgo" content="Fetch from API" />
</svelte:head>

<div class="text-column">
  <h1>Fetch from API in svelte</h1>

  <ul>
    {#each data.summaries as { slug, title }}
      <li>{slug} - {title}</li>
    {/each}
  </ul>
</div>
