import { selectTasks } from "@/app/features/counter/task/taskSlice";
import { useAppSelector } from "@/app/hook";
import TaskCard from "@/components/module/tasks/TaskCard";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);

  console.log(tasks);

  return (
    <div className=" mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1>Tasks</h1>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
        {/* <TaskCard></TaskCard> */}
      </div>
    </div>
  );
}
