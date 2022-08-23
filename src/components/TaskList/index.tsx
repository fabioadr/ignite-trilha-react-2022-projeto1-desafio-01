import { ITask, Task } from "../Task";

import styles from "./index.module.css";

interface Props {
  tasks: ITask[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function TaskList({ tasks, onComplete, onDelete }: Props) {
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
