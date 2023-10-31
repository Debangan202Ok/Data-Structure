import { FcUndo, FcRedo } from "react-icons/fc";
import { RiRestartFill } from "react-icons/ri";
import { useState } from "react";

export default function Stack() {
  const [val, setVal] = useState("");
  const [undoQueue, setUndoQueue] = useState([]);
  const [redoQueue, setRedoQueue] = useState([]);

  const changes = (e) => {
    const newValue = e.target.value;
    setVal(newValue);
    setUndoQueue((prevUndoQueue) => [newValue, ...prevUndoQueue]);
    setRedoQueue([]);
  };

  const undoBtn = () => {
    if (undoQueue.length === 0) {
      alert("Nothing to undo");
      return;
    }
    const previousVal = undoQueue.shift(); // Remove the first item from the queue
    setVal(previousVal);
    setRedoQueue((prevRedoQueue) => [val, ...prevRedoQueue]); // Add current value to redo queue
  };

  const redoBtn = () => {
    if (redoQueue.length === 0) {
      alert("Nothing to redo");
      return;
    }
    const newVal = redoQueue.shift(); // Remove the first item from the redo queue
    setVal(newVal);
    setUndoQueue((prevUndoQueue) => [val, ...prevUndoQueue]); // Add current value to undo queue
  };

  const reset = () => {
    setVal("");
    setUndoQueue([]);
    setRedoQueue([]);
  };

  return (
    <>
      <div className="md:ml-[10px] mt-[80px] box-border flex flex-col justify-center items-center lg:mt-[10vh]">
        <div className="h-[40vh] w-full lg:w-[80%] md:h-[80vh] flex flex-col items-center">
          <h1 className="text-xl md:text-4xl text-left font-bold mt-3 mb-6">
            QUEUE OPERATION
          </h1>
          <div className="box-border w-[90%] h-[80%] md:h-[80%] rounded-md flex flex-col items-center justify-center drop-shadow-2xl backdrop-blur-xl bg-gray-200 border-2 md:bg-sky-200 ">
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
        <div className="box-border border-2 w-[90%] flex flex-col rounded-md bg-slate-100 p-5 my-10 shadow-md">
          <h1 className="text-2xl font-bold">HOW IT WORK?</h1>
          <p className="text-justify text-[#6a6a6a] font-sans">
            we are using React hooks useState to manage the state of actions,
            undo queue, and redo queue using FIFO concept. The performAction function adds a new
            action to the actions state and updates the undo and redo queues
            accordingly. The undo function removes the last action from the undo
            queue, adds it to the redo queue, and updates the actions state.
            Similarly, the redo function removes the first action from the redo
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