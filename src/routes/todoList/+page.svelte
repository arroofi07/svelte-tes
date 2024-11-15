<script lang="ts">
	import '$src/app.css';
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

<div class="flex w-full items-center justify-center">
	<div
		id="box-todo"
		class="mt-16 flex w-[50%] flex-col items-center justify-center rounded-[15px] border-[1px] border-black bg-slate-100 p-10"
	>
		<h1 class="mt-10 text-center text-[20px] font-bold">Buat Jadwalmu Hari ini</h1>
		{#each $todoStore as todo, index}
			<h1 class="text-[25px] font-bold">{index + 1}</h1>
			<p>
				<input
					style="text-shadow: 0 0 10px violet;"
					bind:value={todos[index]}
					class="mb-5 ml-10 rounded-[4px] border-2 border-black p-2 font-semibold"
				/>
				<button
					style="box-shadow: 0 0 10px black;"
					class="-mr-10 ml-5 w-16 rounded-[5px] border-[1px] border-rose-500 bg-white p-2 hover:bg-black"
					on:click={() => removeTodo(index)}>❌</button
				>
			</p>
		{/each}

		<button
			style="box-shadow: 0 0 10px black;"
			class="mt-3 w-16 animate-bounce rounded-[5px] border-[1px] border-violet-600 bg-white p-2 hover:bg-black"
			on:click={addTodo}>➕</button
		>
	</div>
</div>

<div class="m-10 text-center">
	<a
		href="/"
		class="inline-block rounded bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
	>
		Kembali Ke CRUD
	</a>
</div>

<style>
	#box-todo {
		box-shadow: 0 0 10px black;
	}
</style>
