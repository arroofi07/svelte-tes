<!-- <script>
  import "../app.css"
	import Condition from "./condition.svelte";
	import Derived from "./derived.svelte";
  import Header from "./Header.svelte";
	import State from "./state.svelte";
</script>

<center>
  <br>
  <a href="/page2"  class="p-3 bg-red-300 mt-10 hover:bg-blue-400  " >
    todo list
  </a>
</center>

<br>
  <Header gaya="text-red-400 font-bold " />
  <State/>
  <Derived/>
  <Condition/> -->

  <script lang="ts" >
    import '../app.css'
    
    type Person =  {
        name: string,
        umur: string
        email: string
      }
    
      let peoples = $state([
      {name: 'arovi', umur: '20', email:'arofi@gmail.com'},
      {name: 'axe', umur: '16', email:'axe@gmail.com'}
      ])
    
        let selected: any = $state<Person>()
        let newPerson = $state({name: '', umur: '',  email: ''})
            
       function handleSelect() {
        newPerson ={
            name: selected?.name ?? '',
            umur: selected?.umur ?? '',
            email: selected?.email ?? '',
          }
       }
        
    
        // logic
        // create
        const createPeople = ()=> {
          peoples.push(newPerson)
          clearInput()
        }
        // update
        const updatePeople = ()=> {
            const index = peoples.indexOf(selected!)
            peoples[index] = {name : newPerson.name, umur: newPerson.umur, email: newPerson.email}
          clearInput()
          }
    
        // // delete
        const deletePeople = ()=> {
          peoples = peoples.filter(p => p.name !== newPerson.name || p.umur !== newPerson.umur || p.email !== newPerson.email )
          clearInput()
        }
    
    
    
    // membersihkn data di input
    function clearInput (){
      newPerson = {name: '', umur: '',  email: ''}
    }
    </script>
    
    
<!-- Pilih Data -->
<div class="m-10 space-y-4">
  <h1 class="font-bold text-xl capitalize text-gray-700">Pilih Data yang Ingin Diubah atau Dihapus</h1>
  <select class="border-2 border-red-500 rounded px-4 py-2 focus:ring-2 focus:ring-red-300 focus:outline-none w-full" 
    bind:value={selected} 
    onchange={handleSelect}>
    {#each peoples as people}
      <option value={people}>{people.name}, {people.umur}, {people.email}</option>
    {/each}
  </select>
</div>

<!-- Input Data -->
<div class="m-10 space-y-4 bg-gray-100 p-6 rounded shadow-md">
  <div class="space-y-2">
    <label for="name" class="block font-semibold text-gray-600">Name:</label>
    <input type="text" id="name" 
      class="border-2 border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-300 focus:outline-none" 
      bind:value={newPerson.name}>
  </div>
  <div class="space-y-2">
    <label for="umur" class="block font-semibold text-gray-600">Umur:</label>
    <input type="text" id="umur" 
      class="border-2 border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-300 focus:outline-none" 
      bind:value={newPerson.umur}>
  </div>
  <div class="space-y-2">
    <label for="email" class="block font-semibold text-gray-600">Email:</label>
    <input type="text" id="email" 
      class="border-2 border-gray-300 rounded px-4 py-2 w-full focus:ring-2 focus:ring-blue-300 focus:outline-none" 
      bind:value={newPerson.email}>
  </div>
</div>

<!-- Tombol Aksi -->
<div class="m-10 flex space-x-4">
  <button class="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition" onclick={createPeople}>Create</button>
  <button class="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition" onclick={updatePeople}>Update</button>
  <button class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition" onclick={deletePeople}>Delete</button>
  <button class="bg-purple-500 text-white px-6 py-2 rounded hover:bg-red-600 transition" onclick={clearInput}>Clear Input</button>
</div>

<!-- Daftar Data -->
<div class="m-10 bg-white p-6 rounded shadow-md">
  <h1 class="font-bold text-xl mb-4 text-gray-700">List Data</h1>
  <div class="space-y-4">
    {#each peoples as people}
      <div class="border-b pb-4">
        <p class="text-gray-700"><span class="font-semibold">Name:</span> {people.name}</p>
        <p class="text-gray-700"><span class="font-semibold">Umur:</span> {people.umur}</p>
        <p class="text-gray-700"><span class="font-semibold">Email:</span> {people.email}</p>
      </div>
    {/each}
  </div>
</div>

<!-- Navigasi -->
<div class="m-10 text-center">
  <a href="/todoList" 
    class="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition font-semibold">
    Buat Jadwalmu
  </a>
</div>
