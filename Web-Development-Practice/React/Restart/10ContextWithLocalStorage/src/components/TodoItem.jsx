import { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const [isToDoEditable, setIsToDoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.title);
  const { updateTodo, deleteTodo, toggleDone } = useTodo();

  return <div>TodoItem</div>;
}

export default TodoItem;
