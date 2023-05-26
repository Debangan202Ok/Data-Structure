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
        <>
            <div className='box-border flex flex-col justify-center items-center w-[100%] pt-[10vh] md:pt-[15vh]'>
                <h1 className='text-xl md:text-4xl text-left font-bold'>STACK OPERATION</h1>
                <div className='box-border w-[95%] h-[40vh] md:h-[70vh] md:w-[70%] rounded-md flex flex-col items-center justify-center drop-shadow-2xl backdrop-blur-xl bg-gray-200 md:bg-sky-200 '>
                    <input value={val} onChange={changes} type="text" placeholder='Enter your text' className='p-2 text-[#6a6a6a] focus:outline-sky-400 rounded-xl' />
                    <div className='mt-2 flex justify-evenly '>
                        <FcUndo style={{ fontSize: 35 }} className='mx-3' onClick={undoBtn} />
                        <RiRestartFill style={{ fontSize: 35 }} className='mx-3 fill-sky-400' onClick={reset} />
                        <FcRedo style={{ fontSize: 35 }} className='mx-3' onClick={redoBtn} />
                    </div>
                </div>
                <div className='box-border w-[90%] flex flex-col rounded-md bg-slate-100 p-5 my-10 shadow-md'>
                    <h1 className='text-2xl font-bold'>HOW IT WORK?</h1>
                    <p className='text-justify text-[#6a6a6a] font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet maiores earum voluptate, minus numquam qui aperiam, odit ratione impedit fugiat fugit libero dolorem est rerum sint culpa! Nemo, provident.</p>
                    <p className='text-justify text-[#6a6a6a] font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quasi in, laudantium harum quo dicta ratione iste pariatur, incidunt nostrum odio ut quaerat? Aliquid enim nobis sunt quos explicabo rem?</p>
                    <p className='text-justify text-[#6a6a6a] font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam atque illo culpa, animi recusandae. Facere quod nesciunt sapiente impedit eaque sint pariatur eveniet minima molestiae, optio blanditiis animi laudantium incidunt aliquid libero modi dolore. Obcaecati debitis doloribus aliquid consequuntur excepturi expedita soluta deleniti fuga in dicta? Amet corporis totam qui eum voluptas at in assumenda vel. Mollitia temporibus inventore vel officiis soluta reprehenderit, minima amet! Labore suscipit, a eos optio minus molestiae. Totam pariatur doloremque excepturi amet minima repellendus necessitatibus neque quas illo facere consequuntur possimus quaerat, suscipit quia ab dolor rerum, tempora distinctio magnam quibusdam architecto. Dolore fuga numquam quasi dignissimos quam excepturi, quibusdam architecto iusto sint in nisi facere vel ab pariatur optio nobis repellat porro mollitia commodi eos? Sapiente totam necessitatibus labore amet saepe, quisquam facilis vero repellendus autem explicabo laudantium natus enim delectus mollitia, earum repudiandae! Cumque aperiam magnam, sapiente consequatur similique explicabo. Maxime, sit a non quas voluptatibus accusantium sed nulla voluptatum labore dolore, nisi enim odit neque nobis harum molestiae, maiores placeat nemo adipisci? A, culpa. Dolorem minus excepturi numquam, deserunt officia deleniti aliquam quod incidunt fugit consequatur atque fugiat sequi nulla cupiditate, libero dolorum ipsum magnam autem laudantium est velit? Cum, aliquam.</p>
                </div>
            </div>
        </>
    )
}
