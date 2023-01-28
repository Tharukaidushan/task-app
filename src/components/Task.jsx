import React from "react";
import { FaTimes } from "react-icons/fa";

export const Task = ({ tasks, task, onDelete, togleReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => togleReminder(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", curser: "pointer" }}
          onClick={() => onDelete(task.id)}
        />{" "}
      </h3>
      <p>{task.day}</p>
    </div>
  );
};
