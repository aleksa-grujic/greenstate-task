import { URL } from "../constants";
import { Priority } from "../constants/types";

export const getTasks = async ({
  priority,
  page = 1,
}: {
  priority?: Priority | undefined;
  page?: number;
}) => {
  try {
    const token = localStorage.getItem("accessToken");
    const params = new URLSearchParams();
    if (priority) {
      params.append("priority", priority);
    }
    params.append("offset", page.toString());
    params.append("limit", "10");
    const url = `https://task-server-lsezakpcoq-ey.a.run.app/api/v1/tasks?${params.toString()}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error };
  }
};

export const getTask = async (id: string) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(`${URL}/tasks/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error };
  }
};

export const deleteTask = async (id: string) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(`${URL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error("Error deleting task");
    }
    return { success: true };
  } catch (error) {
    return { success: false, error: error };
  }
};

export const addTask = async ({
  title,
  description,
  priority,
}: {
  title: string;
  description: string;
  priority: string;
}) => {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(`${URL}/tasks`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify({ title, description, priority }),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error };
  }
};

export const editTask = async ({
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
  try {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(`${URL}/tasks/${id}}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify({ title, description, priority, done }),
    });
    const data = await response.json();
    if (!response.ok || data.message === "Somerthing went wrong") {
      throw new Error(data.message);
    }
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error };
  }
};
