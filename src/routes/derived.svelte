<script lang="ts" >
  let count: number = $state(5);
  let doubled: number = $derived(count * 2);
  
</script>

<h1>{doubled}</h1>