import axios from "axios";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const TaskCard = ({ todo, BASE_URL, getData }) => {
  const { task, date, id, isDone } = todo;
  const [isFinished, setIsFinished] = useState(isDone);

  const handleStatus = async () => {
    setIsFinished(!isFinished);
    try {
      await axios.put(`${BASE_URL}/${id}`, {
        ...todo,
        isDone: isFinished,
      });
    } catch (error) {
      console.log(error);
    }
    getData();
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getData();
  };
  return (
    <div className="card" onClick={handleStatus}>
      <div>
        <h3 className={isFinished ? "finished" : ""}>{task}</h3>
        <p>{date.split("T").join(" at ")}</p>
      </div>

      <AiFillCloseCircle className="icon" onClick={handleDelete} />
    </div>
  );
};

export default TaskCard;
