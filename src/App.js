import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor oppoiment",
      day: "Feb 5th september 22",
      reminder: true,
    },
    {
      id: 2,
      text: "Go to bus",
      day: "Feb 6th octomber 01",
      reminder: true,
    },
    {
      id: 3,
      text: "Goto ministry department",
      day: "March 2nd december 09",
      reminder: false,
    },
    {
      id: 4,
      text: "Download a file",
      day: "Feb 19th January 15",
      reminder: true,
    },
    {
      id: 6,
      text: "Download a file",
      day: "Feb 19th January 15",
      reminder: true,
    },
    {
      id: 7,
      text: "Go to bus",
      day: "Feb 6th octomber 01",
      reminder: true,
    },
    {
      id: 8,
      text: "Download a file",
      day: "Feb 19th January 15",
      reminder: false,
    },
  ]);

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title={"Task Tracker"}
        toggleAdd={() => setShowAddTask(!showAddTask)}
        showAddBtn={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          togleReminder={toggleReminder}
        />
      ) : (
        "No tasks"
      )}
    </div>
  );
}

export default App;
