import { TodoItemState } from "./todoListSlice"
import styles from "./TodoList.module.css"
import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { updateItemTitle, toggleItem, removeItem } from "./todoListSlice"
const TodoItem = ({ todo }: { todo: TodoItemState }) => {
  const [itemData, setItemData] = useState<TodoItemState>(todo)
  const dispatch = useAppDispatch()

  const onChangeInput = (e: { target: { value: string } }) => {
    const { value } = e.target
    setItemData({
      ...itemData,
      title: value,
    })
  }

  //   unfocus input field update title
  const onBlurInputField = (e: React.SyntheticEvent) => {
    console.log(e.target)
    dispatch(
      updateItemTitle({
        id: todo.id,
        title: itemData.title,
      }),
    )
  }

  const onCheck = () => {
    dispatch(toggleItem(todo.id))
  }

  const deleteItem = () => {
    dispatch(removeItem(todo.id))
  }

  return (
    <table className={styles.itemtable}>
      <tbody>
        <tr>
          <td className={styles.td}>{todo.id}</td>
          <td className={styles.td2}>
            <input
              style={{ width: "100%" }}
              type="text"
              value={itemData.title}
              onChange={(e) => onChangeInput(e)}
              onBlur={onBlurInputField}
            ></input>
          </td>
          <td className={styles.td}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={todo.completed}
              onChange={onCheck}
            />
          </td>
          <td>
            <div className={styles.removeButtonContainer}>
              <button className={styles.removebutton} onClick={deleteItem}>
                X
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default TodoItem
