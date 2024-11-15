  <script lang="ts" > 
  import '/svalte/svelte-project/src/app.css'
  import todoStore from './todosStore';

  let todos: any = [];
  todoStore.subscribe((value) => {
    todos = value;
  });

  function addTodo() {
    todoStore.addItem();
  }

  function removeTodo(index: number) {
    todoStore.removeItem(index);
  }
</script>


<div class="flex justify-center items-center w-full ">
    <div id="box-todo" class="flex justify-center items-center mt-16 p-10  rounded-[15px] flex-col bg-slate-100 border-[1px] border-black w-[50%]  "  >
      <h1 class="text-center font-bold text-[20px] mt-10 "  >Buat Jadwalmu Hari ini </h1>
      {#each $todoStore as todo, index}
      <h1 class="text-[25px] font-bold  " >{index + 1}</h1>
      <p>
        <input
        style="text-shadow: 0 0 10px violet;" 
        bind:value={todos[index]}
        class="border-2 border-black font-semibold p-2 ml-10 rounded-[4px] mb-5" />
        <button 
        style="box-shadow: 0 0 10px black;"
        class="bg-white border-[1px] border-rose-500 -mr-10 ml-5 hover:bg-black w-16 rounded-[5px] p-2 "
        on:click={() => removeTodo(index)}>❌</button>
  </p>
{/each}

<button
style="box-shadow: 0 0 10px black;" 
class="bg-white  border-[1px] animate-bounce hover:bg-black mt-3 border-violet-600 w-16 rounded-[5px] p-2  " 
on:click={addTodo}>➕</button>
</div>
</div>


<div class="m-10 text-center">
  <a href="/" 
    class="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition font-semibold">
    Kembali Ke CRUD
  </a>
</div>



<style>
  #box-todo{
    box-shadow: 0 0 10px black;
}
</style>