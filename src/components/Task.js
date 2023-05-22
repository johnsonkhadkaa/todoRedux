import { useRef } from 'react';// Allows us to obtain a reference to HTML elements.
import { useDispatch } from "react-redux";// To dispatch the addTodo action.
import  {addTodo } from '../actions/index'// To add new tasks to the state.


export const Task = () => {
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    function addNewTask() {
        const task = inputRef.current.value.trim();
        if (task !== "") {
          dispatch(addTodo(task));
          inputRef.current.value = "";
        }
      }
    return (
        <>
            <div className="task-component">
                <div className="add-task">
                    <input
                        type="text"
                        placeholder="Add task here..."
                        ref={inputRef}
                        className="taskInput"
                    />
                    <button onClick={addNewTask}>Add task</button>
                </div>
            </div>
        </>
    )
}


// LocalStorage Implementation using hooks
// const getLocalData = () => {
//     const lists = localStorage.getItem("mytodoList")
//     if (lists) {
//         return JSON.parse(lists)
//     } else {
//         return []
//     }
// }

// const [toggleButton, setToggleButton] = useState(false)

// const addItem = () => {
//     if (!inputData) {
//         alert("Please add the items.")
//     } else if (inputData && toggleButton) {
//         setItems(
//             items.map((currElem) => {
//                 if (currElem.id === isEditItem) {
//                     return { ...currElem, name: inputData }
//                 }
//                 return currElem
//             })
//         )
//         setInputData("")
//         setIsEditItem(null)
//         setToggleButton(false)
//     }
//     else {
//         const myNewInputData = {
//             id: new Date().getTime().toString(),
//             name: inputData,
//         }
//         setItems([...items, myNewInputData])
//         setInputData("")
//     }
// }