import "./App.css"
import TodoList from "./features/todolist/TodoList"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <main>
        <div className="main">
          <TodoList />
        </div>
      </main>
    </div>
  )
}

export default App
