<script lang="ts" >
  import '../app.css'
    let number: number = $state(0)
</script>

<input type="number" class="border-[1px]  border-red-500 m-10 " bind:value={number}   >

<p class="m-10" >{number}</p>

<button onclick={()=> alert('tombol di tekan')} class={`m-10 border-2 p-2 w-20 ${number > 0 ? 'bg-black' : 'bg-red-300' }   `} >hello</button>