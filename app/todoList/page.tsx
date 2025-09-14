"use client";

import React, { useState } from "react";

function ToDoList() {
  const taskList = ["Eat Breakfast", "Walk the dog", "Take a Shower"];

  const [task, setTask] = useState(taskList);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];

      setTask(updatedTask);
    }
  }

  function moveTaskDown(index: number) {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];

      setTask(updatedTask);
    }
  }

  return (
    <div className="text-center mt-[100px]">
      <h1 className="text-[2rem]">To-Do-List</h1>

      <div className="space-x-5">
        <input
          type="text"
          placeholder="Enter a Task"
          value={newTask}
          onChange={handleInputChange}
          className="text-[1.6rem] p-[10px] border-1 border-solid border-neutral-200 text-neutral-950"
        />

        <button
          className=" text-[1.7rem] font-bold px-[10px] py-[20px]  border-0 rounded-[5px] cursor-pointer hover:bg-green-400 duration-150 ease-in  bg-green-500"
          onClick={addTask}
        >Add</button>
      </div>

      <ol className="p-0 flex items-center flex-col mt-10">
        {task.map((task, index) => (
          <li
            key={index}
            className=" text-[2rem] font-bold p-[15px] bg-neutral-100 mb-[10px] border-[3px] border-solid border-neutral-200 rounded-[5px] flex items-center w-[50%] justify-center"
          >
            <span className="flex-1 text-neutral-800">{task}</span> 
            <button
              className=" font-bold text-white border-0 rounded-[5px] cursor-pointer hover:bg-red-400 duration-150 ease-in bg-red-500 px-[8px] py-[12px] text-[1.4rem] ml-[10px]"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>

            <button
              className="px-[8px] py-[12px] text-[1.4rem] ml-[10px] text-white border-0 rounded-[5px] cursor-pointer hover:bg-blue-300 duration-150 ease-in bg-blue-400 "
              onClick={() => moveTaskUp(index)}
            >
              Up
            </button>

            <button
              className="px-[8px] py-[12px] text-[1.4rem] ml-[10px] text-white border-0 rounded-[5px] cursor-pointer hover:bg-blue-300 duration-150 ease-in bg-blue-400 "
              onClick={() => moveTaskDown(index)}
            >
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
