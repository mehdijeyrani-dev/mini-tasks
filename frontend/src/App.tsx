import { useEffect, useState } from "react";

type ITask = {
  id: number;
  title: string;
  completed: boolean;
};

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const createTask = async () => {
    const response = await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });

    const data = await response.json();

    setTasks((prevTasks) => [...prevTasks, data]);

    setTitle("");
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Stackly.</h1>
        <div className="">
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter task title"
            className="border px-4 py-2 min-w-md rounded-md border-neutral-200 outline-none"
          />
          <button
            onClick={createTask}
            className="bg-green-600 px-4 py-2 ml-2 rounded-md text-white font-semibold"
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 my-4">
        {tasks.map((task) => (
          <div
            className="bg-neutral-100 p-4 border border-neutral-300 rounded-lg flex items-center gap-2"
            key={task.title}
          >
            <span>{task.id} - </span>
            <h2
              className={`${task.completed ? "text-neutral-500 line-through" : "text-neutral-800"}`}
            >
              {task.title}
            </h2>
            |
            <p
              className={`text-sm font-semibold px-2 py-1 rounded border ${task.completed ? "bg-green-600/15 text-green-600" : "bg-orange-600/15 text-orange-600"}`}
            >
              {task.completed ? "Completed" : "Pending"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
