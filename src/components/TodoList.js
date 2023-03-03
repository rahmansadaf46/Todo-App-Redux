import { useDispatch, useSelector } from "react-redux";
import { deleted, toggled } from "../redux/todos/actions";
import Todo from "./Todo";

export default function TodoList() {
    const todos = useSelector((state)=> state.todos)
    const dispatch = useDispatch()
    const toggle = (id) => {
        dispatch(toggled(id))
    }
    const removeTodo = (id) => {
        dispatch(deleted(id))
    }
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos.map(todo=>  <Todo key={todo.id} removeTodo={removeTodo} toggle={toggle} todo={todo} />)}
           
        </div>
    );
}
