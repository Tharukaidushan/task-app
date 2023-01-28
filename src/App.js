import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";


function App() {

  const [tasks, setTasks] = useState(
    [
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
    ]
)

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header title={"Task Tracker"}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} togleReminder={toggleReminder} /> : 'No tasks'}
    </div>
  );
}

export default App;
