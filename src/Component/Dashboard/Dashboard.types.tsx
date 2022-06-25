export type InitialState = {
  todoInput: string;
  todoDescription: string;
  todoDateAndTime: string;
};

export type Action =
  | {
      type: "INPUT_TODO";
      payload: string;
    }
  | {
      type: "INPUT_DESCRIPTION";
      payload: string;
    }
  | {
      type: "INPUT_DATE_TIME";
      payload: string;
    };

export type TodoObj={
    id:string,
    text:string,
    description:string,
    dateAndTime:string,
    isDone:boolean
  }