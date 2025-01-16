import { RootState } from "@/app/store";
import { ITask } from "@/type";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "KzKcGlDtNlNFsVrhKSsp1",
      isCompleted: false,
      title: "dadasddas",
      description: "dsadas",
      priority: "medium",
      dueDate: "2024-12-31T18:00:00.000Z",
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;
const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggoleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFielter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter == "low") {
    return state.todo.tasks.filter((task) => task.priority == "low");
  } else if (filter == "medium") {
    return state.todo.tasks.filter((task) => task.priority == "medium");
  } else if (filter == "high") {
    return state.todo.tasks.filter((task) => task.priority == "high");
  } else {
    return state.todo.tasks;
  }
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export const { addTask, toggoleCompleteState, deleteTask, updateFielter } =
  taskSlice.actions;
export default taskSlice.reducer;
