import { FcUndo, FcRedo } from "react-icons/fc";
import { RiRestartFill } from "react-icons/ri";
import { useState } from "react";

export default function Stack() {
  const [val, setVal] = useState("");
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const changes = (e) => {
    setVal(e.target.value);
    setUndoStack((prevUndoStack) => [...prevUndoStack, val]);
    setRedoStack([]);
  };
  const undoBtn = () => {
    if (undoStack.length === 0) {
      alert("nothing to undo");
      return;
    }
    const previousVal = undoStack[undoStack.length - 1];
    const newUndoStack = undoStack.slice(0, undoStack.length - 1);
    setVal(previousVal);
    setUndoStack(newUndoStack);
    setRedoStack((prevRedoVal) => [...prevRedoVal, val]);
  };
  const redoBtn = () => {
    if (redoStack.length === 0) {
      alert("nothing to redo");
      return;
    }
    const newVal = redoStack[redoStack.length - 1];
    const newRedoStack = redoStack.slice(0, redoStack.length - 1);
    setVal(newVal);
    setUndoStack((prevUndoStack) => [...prevUndoStack, val]);
    setRedoStack(newRedoStack);
  };
  const reset = () => {
    setVal("");
    setUndoStack([]);
    setRedoStack([]);
  };
  return (
    <>
      <div className="sm:ml-[10px] m-[10px] md:ml-[18rem] box-border flex flex-col justify-center items-center lg:mt-[10vh]">
        <div className="h-[40vh] w-full lg:w-[80%] md:h-[80vh] flex flex-col items-center">
          <h1 className="text-xl md:text-4xl text-left font-bold mt-3 mb-6">
            STACK OPERATION
          </h1>
          <div className="box-border w-[90%] h-[80%] md:h-[80%] rounded-md flex flex-col items-center justify-center drop-shadow-2xl backdrop-blur-xl bg-gray-200 border-2 border-[#ff6633] md:bg-sky-200 ">
            <input
              value={val}
              onChange={changes}
              type="text"
              placeholder="Enter your text"
              className="p-2 text-[#6a6a6a] focus:outline-sky-400 rounded-xl"
            />
            <div className="mt-2 flex justify-evenly ">
              <FcUndo
                style={{ fontSize: 35 }}
                className="mx-3"
                onClick={undoBtn}
              />
              <RiRestartFill
                style={{ fontSize: 35 }}
                className="mx-3 fill-sky-400"
                onClick={reset}
              />
              <FcRedo
                style={{ fontSize: 35 }}
                className="mx-3"
                onClick={redoBtn}
              />
            </div>
          </div>
        </div>
        <div className="box-border border-2 border-[#ff6633] w-[90%] flex flex-col rounded-md bg-slate-100 p-5 my-10 shadow-md">
          <h1 className="text-2xl font-bold">HOW IT WORK?</h1>
          <p className="text-justify text-[#6a6a6a] font-sans">
            we are using React hooks useState to manage the state of actions,
            undo stack, and redo stack. The performAction function adds a new
            action to the actions state and updates the undo and redo stacks
            accordingly. The undo function removes the last action from the undo
            stack, adds it to the redo stack, and updates the actions state.
            Similarly, the redo function removes the last action from the redo
            stack, adds it to the undo stack, and updates the actions state.
          </p>
          <p className="text-justify text-[#6a6a6a] font-sans">
            You can use this UndoRedoExample component in your React application
            to test the undo/redo functionality by performing actions and
            clicking on the undo and redo buttons. The console log statements
            provide output to track the state of the undo and redo stacks.
          </p>
        </div>
      </div>
    </>
  );
}
