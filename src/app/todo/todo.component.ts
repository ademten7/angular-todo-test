import { Component, OnInit } from '@angular/core';
import { Tags, Todo, TodoserviceService } from '../todoservice.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [];
  tagsList: Tags[] = [];
  singleTag: any;
  showTagElement: boolean = false;
  showSearchBody: boolean = false;
  searchItem: string = '';
  searchedTodo: any;

  constructor(private todoservice: TodoserviceService) {}

  ngOnInit(): void {
    this.getTodos();
    this.getTags();
  }

  searchTodo(myForm: NgForm) {
    this.showSearchBody = true;
    this.searchItem = myForm.control.value.searchTodo;
    this.searchedTodo = this.todoList.find(
      (todo) =>
        todo.title.includes(this.searchItem) ||
        todo.body.includes(this.searchItem)
    );
    console.log(this.searchedTodo);
  }

  getTodos() {
    this.todoList = this.todoservice.todoList;
    console.log(this.todoList);
  }
  getTags() {
    this.tagsList = this.todoservice.tags;
    console.log(this.tagsList);
  }
  showTag(id: number) {
    this.showTagElement = true;
    this.singleTag = this.tagsList.filter((tag) => tag.id === id);
    console.log(this.singleTag);
  }
}
