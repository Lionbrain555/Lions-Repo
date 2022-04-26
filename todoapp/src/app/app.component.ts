import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const data = localStorage.getItem("todos")
    if(data !== "" && data !== null) {
    this.todos = JSON.parse(data)}
  }
 todos = [
  {todo: "Einkaufen", done: false },
  {todo: "Lesen", done: false },
  {todo: "Hausaufgaben", done: true}
 ];

 newtodo = ' ';
 
 settodo(event: KeyboardEvent) {
   this.newtodo = (event.target as HTMLInputElement).value;
 }

 addtodo() {
   if(this.newtodo.trim() !== '') {
   this.todos.push({todo: this.newtodo, done: false})
   }
   this.storetodos()
 }

 storetodos() {
   localStorage.setItem("todos",JSON.stringify(this.todos))
 }

 countopentodos(){
   const done = this.todos.filter((item)=> {
   return !item.done
   });
   return done;
 }

toggletodo(index: number) {
  this.todos[index].done = !this.todos[index].done;
  this.storetodos()
}
deletetodo(index: number) {
this.todos.splice(index, 1);
this.storetodos()
}

  title = 'todoapp';
}
