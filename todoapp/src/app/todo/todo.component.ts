import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo = {todo: '', done: false };
  @Input() index = 0;

  @Output() todoindex = new EventEmitter<number>()
  @Output() deleteindex = new EventEmitter<number>()

  toggletodo() {
    this.todoindex.emit(this.index);
  }
   deletetodo() {
    this.deleteindex.emit(this.index);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
