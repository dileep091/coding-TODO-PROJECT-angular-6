import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ITodo } from '@app/todos/interfaces';

@Component({
  selector: 'app-todos-list',
  styleUrls: [
    './todo-list.component.scss',
  ],
  templateUrl: './todo-list.component.html',
})
export class TodosListComponent implements OnInit {
@Input() todos:ITodo[];
@Output() todoEmitter = new EventEmitter();
editable = [];


ngOnInit() {

}

submitTodo(index,text) {
  this.todos[index].text = text;
  this.editable[index] = false;

 }

onDbClick(index) {
  for(let i = 0 ; i < this.todos.length; i++) {
    if(i === index) {
      this.editable[i] = true;
      this.todos[i].completed ? 'completed editing' : ''
    }
    else {
      this.editable[i] = false;
    }
  }

}

todoToggle(event,val) {
  if(event.target.checked) {
    this.todos[val].completed = true;
  }
  else{
    this.todos[val].completed = false;
  }
}

removeTodo(index) {
  this.todos.splice(index,1);
  this.todoEmitter.emit(this.todos);
}


}
