import Header from "./Header";
import Todo from "./Todo";
import { useState, useEffect } from "react";
const Home = () => {
  const [inputs, setInputs] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(inputs));
  }, [inputs]);
  const deleteItem = (id) => {
    setInputs(inputs.filter((el) => el.id !== id));
  };
  return (
    <div>
      <Header inputs={inputs} setInputs={setInputs} />
      <Todo inputs={inputs} deleteItem={deleteItem} />
    </div>
  );
};
export default Home;
