<script lang="ts" >
import '$src/app.css'

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


<!-- pilih data data -->
<div class="m-10 " >
  <h1 class="font-bold capitalize">pilih data yg ingin  diubah atau dihapus</h1>
  <select class="border-2 border-red-500" name="" id="" bind:value={selected} onchange={handleSelect}> 
    {#each peoples as people }
    <option value={people}>{people.name}, {people.umur}, {people.email}</option>
    {/each}
  </select>
  <br>
</div>


<!-- input -->
<div class="m-10  ">
  <div class="" >
    <label for="">Name :</label>
    <input type="text" class="border-black border-2" bind:value={newPerson.name} >
  </div>
  <div class="" >
    <label for="">Umur :</label>
    <input type="text" class="border-black border-2" bind:value={newPerson.umur} >
  </div>
  <div class="" >
    <label for="">Email :</label>
    <input type="text" class="border-black border-2" bind:value={newPerson.email} >
  </div>
</div>

<!-- button -->
<div class="m-10" >
  <button class="bg-green-500 p-2" onclick={createPeople} >Create</button>
  <button class="bg-yellow-500 p-2" onclick={updatePeople} >Update</button>
  <button class="bg-red-500 p-2" onclick={deletePeople} >Delete</button>
</div>

<br>

<!-- list data -->
<div class="m-10" >
  <h1>List Data</h1>
  {#each peoples as people }
      <p>Name: {people.name}</p>
      <p>Name: {people.umur}</p>
      <p>Name: {people.email}</p>
      <br>
      {/each}
    </div>
<br>
<a href="/todoList">Buat Jadwalmu</a>