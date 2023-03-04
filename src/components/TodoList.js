import { useDispatch, useSelector } from "react-redux";
import { colorSelected, deleted, toggled } from "../redux/todos/actions";
import Todo from "./Todo";

export default function TodoList() {
    const todos = useSelector((state) => state.todos)
    const filters = useSelector((state) => state.filters)
    const dispatch = useDispatch()
    const toggle = (id) => {
        dispatch(toggled(id))
    }
    const removeTodo = (id) => {
        dispatch(deleted(id))
    }
    const handleColor = (id, color) => {
        dispatch(colorSelected(id, color))
    }

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {filters.status === 'All' ? todos.map(todo => <Todo key={todo.id} handleColor={handleColor} removeTodo={removeTodo} toggle={toggle} todo={todo} />) : filters.status === 'Incomplete' ? todos.filter(todo => !todo.completed).map(todo => <Todo key={todo.id} handleColor={handleColor} removeTodo={removeTodo} toggle={toggle} todo={todo} />) : todos.filter(todo => todo.completed).map(todo => <Todo key={todo.id} handleColor={handleColor} removeTodo={removeTodo} toggle={toggle} todo={todo} />)}


        </div>
    );
}
