import { URL } from "../constants";

export async function login(username: string, password: string) {
  try {
    const response = await fetch(`${URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
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
    const err = error as { message: string; stack: string };
    return { success: false, error: err.message };
  }
}

export async function register(username: string, password: string) {
  try {
    const response = await fetch(`${URL}/auth/registration`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
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
    const err = error as { message: string; code: string };
    return { success: false, error: err.message };
  }
}
