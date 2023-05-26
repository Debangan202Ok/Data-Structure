import { FcUndo, FcRedo } from 'react-icons/fc'
import { RiRestartFill } from 'react-icons/ri'
import { useState } from 'react'

export default function Lab() {
    const [val, setVal] = useState('');
    const [undoStack, setUndoStack] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
    const changes = (e) => {
        setVal(e.target.value);
        setUndoStack((prevUndoStack) => [...prevUndoStack, val]);
        setRedoStack([]);

    }
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
    }
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
    }
    const reset = () => {
        setVal("")
        setUndoStack([]);
        setRedoStack([]);
    }
    return (
        <div>
            <div className='box-border flex flex-col justify-center items-center w-screen h-screen bg-sky-200 '>
                <div className='box-border w-[95%] h-[40%] md:w-[80%] md:h-[80%] md:bg-sky-200 p-2 rounded-xl flex flex-col justify-center items-center '>
                    <h1 className='text-xl md:text-4xl text-left font-bold'>STACK OPERATION</h1>
                    <div className='box-border w-[95%] h-[90%] md:w-[70%] rounded-md flex flex-col items-center justify-center drop-shadow-2xl backdrop-blur-xl bg-white/30 '>
                        <input value={val} onChange={changes} type="text" placeholder='Enter your text' className='p-2 text-[#6a6a6a] focus:outline-sky-400 rounded-xl' />
                        <div className='mt-2 flex justify-evenly '>
                            <FcUndo style={{ fontSize: 35 }} className='mx-3' onClick={undoBtn} />
                            <RiRestartFill style={{ fontSize: 35 }} className='mx-3 fill-sky-400' onClick={reset} />
                            <FcRedo style={{ fontSize: 35 }} className='mx-3' onClick={redoBtn} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
