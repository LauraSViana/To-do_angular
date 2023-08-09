import { style } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: "./todo.component.html",
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  
  Todos: string[] = [];
todo:string ="";
  ok="notactive";
  newtodo(){
 if(this.todo === undefined){
  alert('escreva algo')
  return
 } else{
  this.Todos.push(this.todo)
  this.todo = ""
 }
  }

  okay(){ if (this.ok = "notactive"){
    this.ok="active";
  } else{
   this.ok ="notactive"
    
  }}


  

 

}

