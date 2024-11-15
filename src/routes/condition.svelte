<script lang="ts" >
import '../app.css'

let listProduk = $state({
  name: 'semen',
  jenis: 'bahan bangunan',
  no_produk : 2
})

let doubled: number = $derived(listProduk.no_produk * 2 )

let listProduk2 = $state([
  {
    name:'tv',
    jenis:'elektronik',
    no_produk: 3,
  },
  {
    name:'hp',
    jenis:'elektronik',
    no_produk: 8,
  },
  {
    name:'laptop',
    jenis:'elektronik',
    no_produk: 2,
  },
])


// state tebak kata
let word = $state('')
</script>


<br>
<br>
<div>
  
  {listProduk.name}

  <p>nomor produk dua kali lipat {doubled}</p>

  <br>
  <div class="m-10 bg-black text-white p-5" >
      <h1>list produk</h1>
      {#each listProduk2 as data, i }
          <p>No {i}</p>
          <p>Nama Produk: {data.name} </p>
          <p>Jenis Produk: {data.jenis} </p>
          <p>No_produk: {data.no_produk} </p>
          <br>
      {/each}
  </div>
</div>

  <br>
  <br>

  <center>
    <input name="input1" type="text" class="border-2 border-black p-2" bind:value={word} >
    <div>
      <h1>Ayo tebak kata, clue nya asset investasi</h1>
      {#if word === 'bitcoin'}
        <p>anda berhasil menebak kata tersembunyi level tinggi yaitu :{word}  </p>
        {:else if word === 'emas'}
        <p>anda berhasil menebak kata tersembunyi level menengah yaitu :{word}  </p>
        {:else if word !== ''  }
        <p>anda menebak kata yang salah </p>
      {/if} 
    </div>
  </center>


<br>
<br>
<br>




