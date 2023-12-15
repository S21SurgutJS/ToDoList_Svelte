import axios from 'axios';
import type { ITodoItem } from './types';

const baseUrl = 'http://localhost:3000';

export async function getTodos() {
	const payload = await fetch(`${baseUrl}/todo`);
	// const payload = await axios.get(`${baseUrl}/todo`);
	// return payload.data;
	return payload.json();
}

export async function addTodo(odt: ITodoItem) {
	return await axios.post(`${baseUrl}/todo`, odt);
}

export async function removeTodo(id: number) {
	return await axios.delete(`${baseUrl}/todo/${id}`);
}

// export async function removeAllTodo() {
// 	return await axios.delete(`${baseUrl}/todo`);
// }

export async function updateTodo(odt: ITodoItem) {
	return await axios.put(`${baseUrl}/todo`, odt);
}

export const todoApiModule = {
	getTodos,
	addTodo,
	removeTodo,
	updateTodo
};
