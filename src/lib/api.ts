import axios from 'axios';
import type { ITodoItem } from './types';

const baseUrl = 'http://localhost:3000';

async function getTodos() {
	const payload = await axios.get(`${baseUrl}/todo`);
	console.log(payload.data);
	return payload.data;
}

async function addTodo(odt: ITodoItem) {
	return await axios.post(`${baseUrl}/todo`, odt);
}

async function removeTodo(id: number) {
	return await axios.delete(`${baseUrl}/todo/${id}`);
}

async function updateTodo(odt: ITodoItem) {
	return await axios.put(`${baseUrl}/todo`, odt);
}

export const todoApiModule = {
	getTodos,
	addTodo,
	removeTodo,
	updateTodo
};
