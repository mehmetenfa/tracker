import { useState } from "react";
import React from "react";

const Home = () => {
    const [addBtn, setAddBtn] = useState("")
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" mt-10">
        <h1 className="text-3xl mb-5">Welcome To-Do List</h1>
        <p>Enter To-do</p>
      </div>
      <div className="mt-10">
        <input
          type="text"
          placeholder="Enter To-do"
          className="w-[17rem] h-[3rem] border  "
        />
        <button className="bg-red-600 rounded-xl h-[3rem] w-[5rem] m-4">
          Add
        </button>
      </div>
    </div>
  );
};

export default Home;