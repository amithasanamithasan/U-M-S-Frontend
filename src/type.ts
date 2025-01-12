export interface ITask {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  iscompleted: boolean;
  priority: "High" | "Medium" | "Low";
}
