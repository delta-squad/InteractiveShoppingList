import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../app.component.css']
})
export class DashboardComponent  {
  opened = true;
  showDialog = false;
  editingTodo: any = null;
  fieldValue = '';
  todoList: any = [];
  okButtonText = 'Dodaj';

  todoDialog(todo = null) {
    this.okButtonText = 'Dodaj';
    this.fieldValue = '';
    this.editingTodo = todo;
    if (todo) {
      this.fieldValue = todo.title;
      this.okButtonText = 'Edytuj';
    }
    this.showDialog = true;
  }

  remove(index: number) {
    this.todoList.splice(index, 1);
  }

  editTodo(title) {
    this.editingTodo.title = title;
  }

  updateTodo(title) {
    if (title) {
      title = title.trim();
      if (this.editingTodo) {
        this.editTodo(title);
      } else {
        this.addTodo(title);
      }
    }
    this.hideDialog();
  }

  addTodo(title) {
    const todo = {title: title, completed: false};
    this.todoList.push(todo);
  }

  hideDialog() {
    this.showDialog = false;
    this.editingTodo = null;
    this.fieldValue = null; // make sure Input is new
  }

}
