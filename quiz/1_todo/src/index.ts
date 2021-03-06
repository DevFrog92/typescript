// type TODO = {
//   id: number;
//   title: string;
//   done: boolean;
// };

interface TODO {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: TODO[];

// api
function fetchTodoItems(): TODO[] {
  const todos = [
    // shape { id: number, title: string, done: boolean }
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): TODO[] {
  const todos = fetchTodoItems();
  return todos;
}
// void 는 반환값이 없다.
function addTodo(todo: TODO): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: TODO): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): TODO {
  return todoItems[0];
}

function showCompleted(): TODO[] {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
  const task01 = {
    id: 4,
    title: 'javascript',
    done: false,
  };
  const task02 = {
    id: 5,
    title: 'typescript',
    done: false,
  };
  addTodo(task01);
  addTodo(task02);
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
