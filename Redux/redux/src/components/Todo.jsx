import { Linter } from "eslint";
import AddForm from "./AddForm";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../features/todo/todoSlice";


export default function Todo(){
 const todos= useSelector(state=> state.todos) ;
 console.log(todos);
 const dispatch = useDispatch();

 const clickHaldler= () => {
  console.log("delete",id);
  dispatch(deleteTodo(id));
 }
  return (<>
  <AddForm />
  <h3> Todo List App</h3>
  <ul>
    {todos.map((todo) => (<li key={todo.id}>{todo.task}
      <button onClick={() => clickHaldler(todo.id)}>Delete</button>
    </li>))}
    
  </ul>
  </>
  );
}