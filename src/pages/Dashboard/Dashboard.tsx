import { FC, useContext, useState } from "react";
import Header from "../../components/Molecules/Header/Header";
import EmptySection from "../../components/Organisms/EmptySection/EmptySection";
import { useTasks } from "../../hooks/useTasks";
import TaskModal from "../../components/Organisms/TaskModal/TaskModal";
import Tasks from "../../components/Organisms/Tasks/Tasks";
import { AuthContext } from "../../contexts/AuthContext";
import Filters from "../../components/Organisms/Filters/Filters";
import Pagination from "../../components/Organisms/Pagination/Pagination";
import { Task } from "../../constants/types";

const Dashboard: FC = () => {
  const {
    tasks,
    createTask,
    count,
    loading,
    handleDeleteTask,
    handleEditTask,
    priority,
    setPriority,
    page,
    setPage,
  } = useTasks();
  const { logout: handleLogout } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [editTask, setEditTask] = useState<Task | undefined>(undefined);

  return (
    <>
      <Header
        showCreateTaskButton={count > 0}
        handleLogout={handleLogout}
        handleCreateTask={() => setOpenModal(true)}
      />
      {count === 0 && <EmptySection createTask={() => setOpenModal(true)} />}
      {count > 0 && (
        <>
          <Filters
            priority={priority}
            onChange={(newPriority) => setPriority(newPriority)}
          />
          <Tasks
            tasks={tasks}
            count={count}
            onEdit={(task) => {
              setEditTask(task);
              setOpenModal(true);
            }}
            onDelete={handleDeleteTask}
            loading={loading}
          />
          <Pagination
            count={count}
            activePage={page}
            onClick={(newPage) => setPage(newPage)}
          />
        </>
      )}
      <TaskModal
        isOpen={openModal}
        task={editTask}
        closeModal={() => {
          setEditTask(undefined);
          setOpenModal(false);
        }}
        onSubmit={(props) => {
          if (editTask) {
            handleEditTask({ ...props, id: editTask.id });
          } else {
            createTask(props);
          }
        }}
      />
    </>
  );
};

export default Dashboard;
