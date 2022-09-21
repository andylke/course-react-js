import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest } = useHttp();

  const fetchTasks = (taskText) => {
    const request = {
      url: "https://react-http-ba022-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
    };
    const applyDataFn = (data) => {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    sendRequest(request, applyDataFn);
    // setIsLoading(true);
    // setError(null);
    // try {
    //   const response = await fetch();
    //   if (!response.ok) {
    //     throw new Error("Request failed!");
    //   }
    //   const data = await response.json();
    //   const loadedTasks = [];
    //   for (const taskKey in data) {
    //     loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    //   }
    //   setTasks(loadedTasks);
    // } catch (err) {
    //   setError(err.message || "Something went wrong!");
    // }
    // setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
