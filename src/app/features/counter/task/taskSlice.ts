import { RootState } from "@/app/store";
import { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "adadasdasd",
      title: "Initialize frontend",
      description: "Crearte Home pages and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "adadasdasdsadadasdaada",
      title: "Init Git hub  repo",
      description: "Crearte Stage branch",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "all",
};
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

//  export const { increment, decrement } = counterSlice.actions;
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export default taskSlice.reducer;
