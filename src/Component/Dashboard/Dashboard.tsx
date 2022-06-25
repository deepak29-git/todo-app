import {
  TextField,
  Button,
  TextareaAutosize,
  Input,
  FormControl,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import { useReducer, useState } from "react";
import { TodoList } from "../TodoList/TodoList";
import "../Dashboard/Dashboard.css";
import { TodoObj } from "./Dashboard.types";
import { reducerFun } from "./reducerFun";
import { initialState } from "./initialState";

export const DashBoard = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [state, dispatch] = useReducer(reducerFun, initialState);
  const { todoInput, todoDescription, todoDateAndTime } = state;

  const addTodoHandler = () => {
    const todoObj: TodoObj = {
      id: uuid(),
      text: todoInput,
      description: todoDescription,
      dateAndTime: todoDateAndTime,
      isDone: false,
    };

    setTodos((todos) => [...todos, todoObj]);
    dispatch({ type: "INPUT_TODO", payload: "" });
    dispatch({ type: "INPUT_DESCRIPTION", payload: "" });
    dispatch({ type: "INPUT_DATE_TIME", payload: "" });
  };

  return (
    <FormControl>
      <h2 className="center-text">Todo App</h2>
      <div className="mb-1">
        <TextField
          type="text"
          onChange={(e) =>
            dispatch({ type: "INPUT_TODO", payload: e.target.value })
          }
          id="standard-basic"
          label="Add Todo"
          value={todoInput}
          variant="outlined"
        />
      </div>
      <div className="mb-1">
        <TextareaAutosize
          className="description-input"
          onChange={(e) =>
            dispatch({ type: "INPUT_DESCRIPTION", payload: e.target.value })
          }
          aria-label="minimum height"
          minRows={3}
          value={todoDescription}
          placeholder="Description"
          style={{ width: 200 }}
        />
      </div>
      <div className="mb-1">
        <Input
          type="datetime-local"
          value={todoDateAndTime}
          onChange={(e) =>
            dispatch({ type: "INPUT_DATE_TIME", payload: e.target.value })
          }
        />
      </div>
      <div className="center">
        <Button
          disabled={todoInput || todoDescription || todoDateAndTime ? false : true}
          onClick={() => addTodoHandler()}
          variant="contained"
        >
          Add Todo
        </Button>
      </div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoList todos={todos} setTodos={setTodos} todo={todo} />
        </div>
      ))}
    </FormControl>
  );
};
