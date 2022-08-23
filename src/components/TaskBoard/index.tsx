import { EmptyTaskList } from "../EmptyTaskList";
import { ITask } from "../Task";
import { TaskList } from "../TaskList";

import styles from "./index.module.css";

interface Props {
  tasks: ITask[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function TaskBoard({ tasks, onComplete, onDelete }: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.taskBoard}>
      <header>
        <div>
          <p className={styles.created}>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.done}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      {tasksQuantity <= 0 ? (
        <EmptyTaskList />
      ) : (
        <TaskList tasks={tasks} onComplete={onComplete} onDelete={onDelete} />
      )}
    </section>
  );
}
