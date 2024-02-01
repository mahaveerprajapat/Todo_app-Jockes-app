import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css";
export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "code", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevtodos) => {
            return [...prevtodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    }

    let updateTodovalue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };
        }));
    };

    let upperCaseOne = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            } else {
                return todo;
            }

        }));
    };

    let oneMark = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    isDone: true,
                };
            } else {
                return todo;
            }

        }));

    };

    let allMark = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true,
            };
        }));
    };
    return (
        <div className="Container">
            <input type="text"
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodovalue} />

            <br /><br />

            <button onClick={addNewTask}>Add task</button>
            <br /><br />
            <hr />
            <p>task Todo</p>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                                {todo.task}
                            </span>

                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => upperCaseOne(todo.id)}>uppercaseOne</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => oneMark(todo.id)}>mark Done</button>
                        </li>
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}>UpperCase All</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={allMark}>All Mark is Done</button>
        </div>
    );
}