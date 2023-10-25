import { FcUndo, FcRedo } from "react-icons/fc";
import { RiRestartFill } from "react-icons/ri";
import { useState } from "react";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToFront(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  removeFromFront() {
    if (!this.head) return null;
    const removedValue = this.head.value;
    this.head = this.head.next;
    return removedValue;
  }
}

export default function Stack() {
  const [val, setVal] = useState("");
  const [undoList, setUndoList] = useState(new LinkedList());
  const [redoList, setRedoList] = useState(new LinkedList());

  const changes = (e) => {
    const newValue = e.target.value;
    setVal(newValue);
    undoList.addToFront(val);
    setRedoList(new LinkedList()); // Clear redo list
  };

  const undoBtn = () => {
    const previousVal = undoList.removeFromFront();
    if (previousVal === null) {
      alert("Nothing to undo");
      return;
    }
    setVal(previousVal);
    redoList.addToFront(val);
  };

  const redoBtn = () => {
    const newVal = redoList.removeFromFront();
    if (newVal === null) {
      alert("Nothing to redo");
      return;
    }
    undoList.addToFront(val);
    setVal(newVal);
  };

  const reset = () => {
    setVal("");
    setUndoList(new LinkedList());
    setRedoList(new LinkedList());
  };

  return (
    <>
      <div className="md:ml-[10px] mt-[80px] box-border flex flex-col justify-center items-center lg:mt-[10vh]">
        <div className="h-[40vh] w-full lg:w-[80%] md:h-[80vh] flex flex-col items-center">
          <h1 className="text-xl md:text-4xl text-left font-bold mt-3 mb-6">
            LINKED-LIST OPERATION
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
              <button
                style={{ fontSize: 35 }}
                className="mx-3"
                onClick={undoBtn}
                disabled={undoList.head === null}
              >
                <FcUndo />
              </button>
              <button
                style={{ fontSize: 35 }}
                className="mx-3"
                onClick={reset}
              >
                <RiRestartFill />
              </button>
              <button
                style={{ fontSize: 35 }}
                className="mx-3"
                onClick={redoBtn}
                disabled={redoList.head === null}
              >
                <FcRedo />
              </button>
            </div>
          </div>
        </div>
        <div className="box-border border-2 w-[90%] flex flex-col rounded-md bg-slate-100 p-5 my-10 shadow-md">
          <h1 className="text-2xl font-bold">HOW IT WORKS</h1>
          <p className="text-justify text-[#6a6a6a] font-sans">
            We are using React hooks useState to manage the state of actions,
            undo list, and redo list. The custom LinkedList class helps us
            maintain the order of actions efficiently.

            The `addToFront` method adds a new action to the front of the linked list,
            and the `removeFromFront` method removes and returns the action from the front.

            The "Undo" button removes the last action from the undo list, adds it to the redo list,
            and updates the input value.

            Similarly, the "Redo" button removes the last action from the redo list, adds it back to the undo list,
            and updates the input value with the re-executed action.

            You can use this UndoRedoExample component in your React application to test the undo/redo functionality
            by typing in the input field and clicking on the buttons. The buttons are disabled when there are no actions
            to undo or redo.
          </p>
        </div>
      </div>
    </>
  );
}
