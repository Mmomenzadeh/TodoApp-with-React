export const Reducer = (todoState, action) => {
  switch (action.type) {
    case "create_todo":
      return [
        ...todoState,
        {
          title: action.payload.title,
          desc: action.payload.desc,
          id: Math.floor(Math.random() * 100000),
          checked: false,
        },
      ];

    case "delete_todo":
      return todoState.filter((todoItem) => todoItem.id !== action.payload.id);

    case "edite_todo":
      const todoIndex = todoState.findIndex(
        (todoItem) => todoItem.id === action.payload.id
      );
      const UpdateTodo = [...todoState];
      UpdateTodo.splice(todoIndex, 1, {
        title: action.payload.title,
        desc: action.payload.desc,
        id: action.payload.id,
        checked: false,
      });
      return UpdateTodo;

    case "check_todo":
      return todoState.map((todoItem) =>(todoItem.id === action.payload.id? { ...todoItem, checked: action.payload.status }: todoItem));

    default:
      return todoState;
  }
};
