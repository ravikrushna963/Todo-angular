import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  
 todoList : string [] = [];
 inputvalue: string = "";
 removetodo(todo : string): void{
  this.todoList = this.todoList.filter(value => value !== todo)
 }
 addtodo(){
   if(this.inputvalue != ""){
    this.todoList.push(this.inputvalue);
    this.inputvalue = "";
   } 
   else{
    alert("Please Enter Proper Value" )
   }

 }

  constructor() { }
  
  ngOnInit(): void {
    this.todoList = ["Task 1","Task 2"];
  }

}
