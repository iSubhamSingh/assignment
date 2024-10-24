/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.list = [];
  }

  add(todo){
    this.list.push(todo);
  }

  remove(indexOfTodo){
    this.list.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo){
    if(index >= this.list.length) return;
    this.list[index] = updatedTodo;
  }

  getAll(){
    return this.list;
  }

  get(indexOfTodo){
    if(indexOfTodo >= this.list.length || indexOfTodo < 0) return null;
    return this.list[indexOfTodo];
  }

  clear(){
    this.list = [];
  }

}

// let todo = new Todo();
// todo.add("gym");
// todo.add('grocery');
// todo.add('sleep')
// console.log(todo.getAll());
// console.log(todo.get(1));
// todo.remove(1);
// console.log(todo.getAll());
// todo.update(0, 'running');
// console.log(todo.getAll());



module.exports = Todo;
