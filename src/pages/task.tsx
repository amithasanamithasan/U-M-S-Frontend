import {
  selectFilter,
  selectTasks,
} from "@/app/features/counter/task/taskSlice";
import { useAppSelector } from "@/app/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);
  return (
    <div>
      <h1>this is Task pages</h1>
    </div>
  );
}
