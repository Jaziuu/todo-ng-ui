import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "../todos/model/todo";

@Pipe({
  name: "todoTextFilter"
})
export class TodoTextFilterPipe implements PipeTransform {
  transform(todos: Todo[], text: string): Todo[] {
    if (text == null || text === "") {
      return todos;
    }
    {
      return todos.filter(n =>
        n.text.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
}
