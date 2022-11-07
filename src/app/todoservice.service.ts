import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  body: string;
}
export interface Tags {
  id: number;
  tag: string;
  todos: object;
}

@Injectable({
  providedIn: 'root',
})
export class TodoserviceService {
  todoList: Todo[] = [
    {
      id: 1,
      title: 'Books to read',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
    },
    {
      id: 2,
      title: 'Grocery List/Store',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
    },
  ];

  tags: Tags[] = [
    {
      id: 1,
      tag: 'Ideas',
      todos: ['setup a meeting', 'check todos', 'apply breain tree'],
    },
    {
      id: 2,
      tag: 'Todos',
      todos: ['setup a meeting', 'check todos', 'apply breain tree'],
    },
    {
      id: 3,
      tag: 'Morning',
      todos: ['setup a meeting', 'check todos', 'apply breain tree'],
    },
  ];
  constructor() {}
}
