import { TodoContextWrapper } from './context/TodoContext/index'
import TodoList from './components/TodoList'
import AddLayer from './components/AddLayer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {  
  return (
    <TodoContextWrapper>
      <div className="App">
      <h1>React Todo App</h1>
      <div className="todo"> 
        <AddLayer />       
        <main className="todo__main">
          <TodoList />
        </main>
      </div>
    </div>
    </TodoContextWrapper>
    
  )
}

export default App
