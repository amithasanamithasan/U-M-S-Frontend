import { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: ITask[];
}

const initialState: InitialState = {
  task: [
    {
      id: "adadasdasd",
      title: "Initialize frontend",
      description: "Crearte Home pages and routing",
      dueDate: "2025-11",
      isCompleated: false,
      priority: "High",
    },
  ],
};
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

//  export const { increment, decrement } = counterSlice.actions;

export default taskSlice.reducer;
