<script lang="ts">
  import type { Departure } from '../../components/departures';
  
  export let data;
  let departures: Departure[] = data.departures;
</script>

<svelte:head>
  <title>Letsgo</title>
  <meta name="letsgo" content="Fetch from API" />
</svelte:head>

<div class="text-column">
  <ul data-testid="departure-list">
    {#each departures as departure}
      <li>{departure.direction} - {departure.name} - {departure.shortName} - {departure.platform} - {departure.estimatedOtherwisePlannedTime} - {departure.isCancelled}</li>
    {/each}
  </ul>
</div>
