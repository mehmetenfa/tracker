import React, { useState } from "react";
import { RiDeleteBin3Fill, RiEdit2Fill } from "react-icons/ri";
const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 0,
      title: "Deneme Todo",
      complated: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date(),
      title: inputValue,
      complated: false,
    };
    setTodo([...todo, newTodo]);
    setInputValue("");
  };

  const handleDelete = (data) => {
    setTodo(todo.filter((items) => items.id !== data.id));
  };

  const handleUpdate = (idx) => {
    console.log(idx)
  }

  return (
    <div className="max-w-screen-sm mx-auto h--[12rem] mt-[4rem] flex justify-center ">
      <div className="p-10 bg-gray-300 rounded-lg w-full">
        <p className="text-center mb-7 text-2xl font-semibold">
          Todo App Project
        </p>
        <form className="text-center" onSubmit={handleSubmit}>
          <input
            placeholder="Enter something"
            required
            className="text-center px-4 py-2 bg-slate-500 hover:bg-slate-400 rounded-lg overflow-hidden focus:bg-slate-400 duration-300 placeholder:text-white outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        <div className="bg-slate-200 mt-5 w-full h-[20rem] p-5 space-y-5 overflow-y-auto">
          {todo?.map((item, idx) => (
            <div
              key={idx}
              className="border-b-[1px] border-black border-opacity-50 pb-2 flex justify-between items-center"
            >
              <p>{item.title}</p>
              <div className="flex items-center gap-3">
                <RiDeleteBin3Fill
                  className="text-xl cursor-pointer"
                  onClick={() => handleDelete(item)}
                />
                <RiEdit2Fill className="text-xl cursor-pointer" onSubmit={handleUpdate} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;