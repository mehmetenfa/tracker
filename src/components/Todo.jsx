import {AiFillDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'

const Todo = ({inputs, deleteItem}) => {
  return (
    <div>
        <h2>Todos</h2>
        <div>
            <button className="border px-2 m-2" >All</button>
            <button className="border px-2 m-2" >Done</button>
            <button className="border px-2 m-2" >Todo</button>
        </div>
        <div>
            {inputs.map((each) => {
                const {id, todo} = each
                return (
                    <div className="flex justify-between">
                        <p>{todo}</p>
                        <div>
                            <FiEdit />
                            <AiFillDelete />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Todo