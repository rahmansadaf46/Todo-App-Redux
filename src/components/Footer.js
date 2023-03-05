import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions";


export default function Footer() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)
    const filters = useSelector((state) => state.filters)
    let todosRemaining = todos.filter(todo => !todo.completed).length;
   
    const handleStatus = (status) => {
        dispatch(statusChanged(status))
    }

    const handleColor = (color, changeType) => {
        dispatch(colorChanged(color, changeType))
    }

    const findColor = (value) =>{
        return filters.colors.filter(color => color === value).length > 0;
    }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{todosRemaining} tasks left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={() => handleStatus('All')} className={`cursor-pointer ${filters.status === 'All' && 'font-bold'}`}>All</li>
                <li>|</li>
                <li onClick={() => handleStatus('Incomplete')} className={`cursor-pointer ${filters.status === 'Incomplete' && 'font-bold'}`}>Incomplete</li>
                <li>|</li>
                <li onClick={() => handleStatus('Complete')} className={`cursor-pointer ${filters.status === 'Complete' && 'font-bold'}`}>Complete</li>
                <li></li>
                <li></li>
                <li onClick={() => findColor('green') ? handleColor('green', 'removed') : handleColor('green', 'added')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${findColor('green') && 'bg-green-500'} `}></li>
                <li onClick={() => findColor('red') ? handleColor('red', 'removed') : handleColor('red', 'added')} className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${findColor('red') && 'bg-red-500'}`}></li>
                <li onClick={() => findColor('yellow') ? handleColor('yellow', 'removed') : handleColor('yellow', 'added')} className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer  ${findColor('yellow') && 'bg-yellow-500'}`}></li>
            </ul>
        </div>
    );
}
