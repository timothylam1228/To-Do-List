import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { addItem } from "./todoListSlice"
import styles from "./TodoList.module.css"
import AddIcon from "../../assets/icons/add.svg"

const AddTodo = () => {
  const [title, setTitle] = useState("")
  const dispatch = useAppDispatch()

  const addTodoItem = () => {
    console.log(title)
    dispatch(addItem(title))
    setTitle("")
  }
  return (
    <div className={styles.todolistitem}>
      <input
        className={styles.addItemInput}
        aria-label="Set todo item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <img
        alt="Add todo item"
        src={AddIcon}
        className={styles.addItemButton}
        onClick={() => {
          addTodoItem()
        }}
      ></img>
    </div>
  )
}
export default AddTodo
