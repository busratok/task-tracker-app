import axios from "axios";
import { useState } from "react";

const initialData = { task: "", date: "", isDone: false };
const AddTask = ({ BASE_URL, getData }) => {
  const [newTask, setNewTask] = useState({});
  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.id]: e.target.value });
    console.log(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BASE_URL, newTask);
    } catch (error) {
      console.log(error);
    }
    getData();
    setNewTask({ ...initialData });
  };
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div>
        <label htmlFor="task">Task</label>
        <br />
        <input
          type="text"
          id="task"
          onChange={(e) => handleChange(e)}
          value={newTask.task}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Day & Time</label>
        <br />
        <input
          type="datetime-local"
          id="date"
          onChange={(e) => handleChange(e)}
          value={newTask.date}
          required
        />
      </div>
      <input type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
