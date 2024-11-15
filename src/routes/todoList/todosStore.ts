// import { writable, type Writable } from 'svelte/store';

// function createTodo() {
// 	// Inisialisasi array kosong sebagai nilai awal
// 	const todos: string[] = [''];

// 	// Destructuring dengan tipe yang benar
// 	const { subscribe, update }: Writable<string[]> = writable(todos);

// 	return {
// 		subscribe,
// 		addItem: () => update((currentTodos) => [...currentTodos, '']),
// 		removeItem: (index: number) =>
// 			update((currentTodos) => [
//         ...currentTodos.slice(0, index),
//         ...currentTodos.slice(index + 1)
//       ])
// 	};
// }

// export const todoStore = createTodo();

// /////////////
import { writable } from 'svelte/store';

// periksa local storage ada atau tidak
const isBrowser = typeof localStorage !== 'undefined';

// buat data awal di local storage
const todoStore = writable<string[]>(
	isBrowser ? JSON.parse(localStorage.getItem('todos') || '[]') : []
);

// bagian updatenya
if (isBrowser) {
	todoStore.subscribe((todos) => {
		localStorage.setItem('todos', JSON.stringify(todos));
	});
}

// Ekspor store
export default {
	subscribe: todoStore.subscribe,
	addItem: () => todoStore.update((todos) => [...todos, '']),
	removeItem: (index: number) =>
		todoStore.update((todos) => [...todos.slice(0, index), ...todos.slice(index + 1)])
};
