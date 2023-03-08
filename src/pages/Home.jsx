import axios from "axios";
import { useEffect, useState } from "react";
import AddTask from "../components/AddTask";
import Header from "../components/Header";
import TaskCard from "../components/TaskCard";

const Home = () => {
  const [show, setShow] = useState(false);

  const [tasks, setTasks] = useState([]);
  const BASE_URL = "https://63f94c8a473885d837cc3b67.mockapi.io/tasks";

  const getData = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(tasks);
  return (
    <div>
      <Header show={show} onShow={setShow} />
      {show && <AddTask BASE_URL={BASE_URL} getData={getData} />}
      <div className="card-container">
        {tasks.length ? (
          tasks.map((task, i) => (
            <div key={i}>
              <TaskCard todo={task} BASE_URL={BASE_URL} getData={getData} />
            </div>
          ))
        ) : (
          <p>No Tasks To Show</p>
        )}
      </div>
    </div>
  );
};

export default Home;
