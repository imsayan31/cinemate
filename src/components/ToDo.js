import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, markComplete } from "../features/todo/todoSlice";
import { showErrorMessage } from "../features/message/messageSlice";

export default function ToDo() {
    const textRef = useRef(null);
    const listOfTodos = useSelector((state) => state.todo);
    const todoDispatcher = useDispatch();
    const messageDispatcher = useDispatch();

    function submitTodo(e) {
        e.preventDefault();
        if(!textRef.current.value) {
            messageDispatcher(showErrorMessage('Please enter a task before adding!'));
            return;
        }
        const newTodo = {
            id: Date.now(),
            text: textRef.current.value,
            status: 'pending'
        };
        todoDispatcher(addTodo(newTodo));
        textRef.current.value = '';
    }
    return (
        <div>
            <h1 data-testid="ToDo List">ToDo List</h1>
            <section>
                <p>Welcome to the ToDo App! Here are some tasks to get you started:</p>
                <form>
                    <input type="text" placeholder="Enter a new task" ref={textRef} required />
                    <button type="submit" onClick={submitTodo}>Add Task</button>
                </form>
            </section>
            <ul>
                {
                    listOfTodos?.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <span style={{ color: 'black' }}>{todo.text}</span>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    todoDispatcher(markComplete(todo.id));
                                }}>{todo.status === 'pending' ? 'Mark as Completed' : 'Completed'}</button>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    todoDispatcher(deleteTodo(todo.id));
                                }}>Delete</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}