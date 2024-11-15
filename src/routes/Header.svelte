
<!-- cara 1 pkaai props -->
<!-- <script lang="ts">
    export let name : string;
    export let gaya: string;
</script> -->


<!-- cara 2 pakai props -->
<script lang="ts" >
  let {gaya} : any = $props();
</script>

<h1 class={gaya} >Hello saya adalah  </h1>