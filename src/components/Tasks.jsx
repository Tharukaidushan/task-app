import { Task } from "./Task"

export const Tasks = ({tasks, onDelete, togleReminder}) => {
  return (
    <>{tasks.map((task) => 
        (<Task tasks={tasks} task={task} onDelete={onDelete} togleReminder={togleReminder}/>
    ))}</>
  )
}
