import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  todoArray=[]

  addTodo(value){
    if(value != null || value != "")
    {
      this.todoArray.push(value)

    }
   // console.log(value)
  }

  deleteItem(tododelete)
  {
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(tododelete== this.todoArray[i]){
       this.todoArray.splice(i,1)
      }
     }
  }

  todoSubmit(value:any){
    console.log(value)
     }
}

