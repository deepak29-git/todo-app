import {
  Accordion,
  Button,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type TodoProps = {
  todo: any;
  todos: any;
  setTodos: any;
};
export const TodoList = ({ todo, todos, setTodos }: TodoProps) => {
  const { text, description, dateAndTime } = todo;

  const deleteTodoHandler = (id: any) => {
    const deleteTodo = todos.filter((todo: any) => todo.id !== id);
    setTodos(deleteTodo);
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{text}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Description: {description}</Typography>
          <Typography>Date/Time: {dateAndTime}</Typography>
        </AccordionDetails>
        <Button
          variant="contained"
          color="error"
          onClick={() => deleteTodoHandler(todo.id)}
        >
          Delete
        </Button>
      </Accordion>
    </div>
  );
};
