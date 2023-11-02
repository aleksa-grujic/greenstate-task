import { useEffect, useState } from "react";
import { addTask, deleteTask, editTask, getTasks } from "../api/tasks";
import { Priority, Task } from "../constants/types";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [priority, setPriority] = useState<Priority | undefined>(undefined);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      const res = await getTasks({ priority, page });
      if (res.success) {
        setTasks(res.data.items);
        setCount(res.data.count);
      } else {
        setError(res.data);
      }
      setLoading(false);
    };
    fetchTasks();
  }, [priority, page]);

  const createTask = async ({
    title,
    description,
    priority,
  }: {
    title: string;
    description: string;
    priority: string;
  }) => {
    const res = await addTask({ title, description, priority });
    if (res.success) {
      setTasks([...tasks, res.data]);
      setCount(count + 1);
    } else {
      setError(res.data);
    }
  };

  const handleDeleteTask = async (id: string) => {
    const res = await deleteTask(id);

    if (res.success) {
      setTasks((current) => current.filter((task) => task.id !== id));
      setCount(count - 1);
    } else {
      setError(res.error as string);
    }
  };

  const handleEditTask = async ({
    title,
    description,
    priority,
    done,
    id,
  }: {
    title: string;
    description: string;
    priority: string;
    done: boolean;
    id: string;
  }) => {
    const res = await editTask({ title, description, priority, done, id });
    if (res.success) {
      setTasks((current) =>
        current.map((task) => {
          if (task.id === res.data.id) {
            return res.data;
          }
          return task;
        })
      );
    } else {
      setError(res.error as string);
    }
  };
  return {
    tasks,
    count,
    loading,
    error,
    createTask,
    handleDeleteTask,
    handleEditTask,
    priority,
    setPriority,
    page,
    setPage,
  };
};
