import React, {useState} from "react";


const Header = ( inputs, setInputs ) => {
    const [todo, setTodo] = useState("")
    
    const handleSubmit = (e) => {
        e.preventdefault();

        const id = new Data().getTime();
        const newTodo = {id : id, todo : todo, isDone : false}
        setInputs([...inputs, newTodo])
    }


  return (
    <div className="flex flex-col items-center justify-center mt-11">
      <h2 className="text-2xl">React Todo List</h2>
      <form className="mt-3 flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={todo}
          className="border w-[13rem] h-[2rem] outline-none text-black"
          placeholder="Enter todo"
          onChange={() => setTodo()}
        />
        <input
          type="submit"
          value="add"
          className="border w-[13rem] h-[2rem] bg-slate-400 text-white mt-4"
        />
      </form>
    </div>
  );
};

export default Header;
