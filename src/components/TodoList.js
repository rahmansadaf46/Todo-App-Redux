import {  useSelector } from "react-redux";

import Todo from "./Todo";

export default function TodoList() {
    const todos = useSelector((state) => state.todos)
    const filters = useSelector((state) => state.filters)
 

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {filters.status === 'All' ? todos.map(todo => <Todo key={todo.id}  todo={todo} />) : filters.status === 'Incomplete' ? todos.filter(todo => !todo.completed).map(todo => <Todo key={todo.id}  todo={todo} />) : todos.filter(todo => todo.completed).map(todo => <Todo key={todo.id}  todo={todo} />)}


        </div>
    );
}
