import { useAppSelector } from "../../app/hooks"
import { todoListItem } from "./todoListSlice"
import AddTodo from "./AddTodo"
import TodoItem from "./TodoItem"
import styles from "./TodoList.module.css"
const TodoList = () => {
  const list = useAppSelector(todoListItem)
  console.log(list)
  return (
    <div className={styles.todoContainer}>
      <AddTodo />
      <div className={styles.listcontainer}>
        {list.length === 0
          ? "No todos found"
          : list
              .slice()
              .reverse()
              .map((todo) => <TodoItem key={`${todo.id}`} todo={todo} />)}
      </div>
    </div>
  )
}

export default TodoList
