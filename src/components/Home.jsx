import React, { useEffect, useState } from "react";
import Header from "./Header";
import Todo from "./Todo";

const Home = () => {
  const [inputs, setInputs] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(inputs));
  }, [inputs]);

  const deletItem = (id) => {
        setInputs(inputs.filter((el) => el.id !== id))
  }

  return (
    <div>
      <Header inputs={inputs} setInputs={setInputs} />
      <Todo  inputs={inputs} deletItem={deletItem} />
    </div>
  );
};

export default Home;
