import confetti from 'canvas-confetti';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
};

// *SELECT ELEMENTS
const todoList = document.querySelector<HTMLUListElement>('.list');
const todoInput = document.querySelector<HTMLInputElement>('.form__input');
const formButton = document.querySelector<HTMLButtonElement>('.form__button');
// !different way 👇👇
const form = document.getElementById('#form') as HTMLFormElement | null;

const todos: Todo[] = [];

// *BUTTON EVENT LISTENER
formButton?.addEventListener('click', (e) => {
  e.preventDefault();

  // value check
  if (todoInput?.value === '' || todoInput?.value === null) return;

  const newTodo: Todo = {
    id: Math.trunc(Math.random() * 1000) + 1,
    title: todoInput!.value,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  todos.push(newTodo);

  addTodoItem(newTodo);
});

// *FUNCTIONS

// add todo item function ----------------------
function addTodoItem(todo: Todo) {
  //  const item = document.createElement('li');
  //  const label = document.createElement('label');
  //  const checkbox = document.createElement('input');
  //  checkbox.type = 'checkbox';
  //  checkbox.checked = todo.completed;
  //  label.append(checkbox, todo.title);
  //  item.append(label);
  //
  //  // bind - todo list and new added item
  //  todoList?.append(item);

  const html = `
		<div class="list__container">
			<li class="list__item">${todo.title}</li>
			<button type="submit" class="list__button">
				<i class="fa-solid fa-check"></i>
			</button>
		</div>
	`;

  todoList!.insertAdjacentHTML('beforeend', html);

  //  clar input
  todoInput!.value = '';

  // confetti show :)
  confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
    resize: true,
    useWorker: true,
  })({ particleCount: 200, spread: 600 });
}
