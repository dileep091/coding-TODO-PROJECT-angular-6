import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {ITodo} from './todos/interfaces'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  todos:ITodo[]=[];
  originalTodos:ITodo[]=[];
  todo:string = '';
  all:string = 'selected';
  active:string;
  completed:string;

  ngOnInit() {

  }


  submitTodo() {
   let newTodo = {text:this.todo,completed:false};
   this.todos.push(newTodo);
   this.originalTodos = [...this.todos];
   this.todo = '';
  }

  onTodoEmitter(event) {
    this.todos =  [...event];
    this.originalTodos = [...this.todos];
  }

  clearCompleted() {
     let i = 0;
     const filteredTodos = this.todos.filter((item) => item.completed !== true);
     this.todos = [...filteredTodos];
     this.originalTodos =  this.originalTodos.filter((item) => item.completed !== true);
     this.todos =  [...this.originalTodos];
     }
  selectedClass(value) {
    this.todos = [...this.originalTodos];
    switch(value) {
      case "all" :    this.all = 'selected'; this.active = ''; this.completed = ''; this.todos = [...this.originalTodos]; break;
      case "active" : this.active = 'selected'; this.all = ''; this.completed = '';
                      const filteredATodos = this.originalTodos.filter((item) => item.completed !== true);
                      this.todos = [...filteredATodos];
                      break;
      case "completed": this.active = ''; this.all = ''; this.completed = 'selected';
                        const filteredCTodos = this.originalTodos.filter((item) => item.completed === true);
                        this.todos = [...filteredCTodos];
                       break;

    }

  }

}
