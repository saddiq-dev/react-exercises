import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <Form />
    </>
  );
}

function Header() {
  return (
    <header className="bg-black">
      <h1 className="text-lg font-black-ops-one text-center text-white py-4">
        TaskMaster - Your Ultimate To-Do List Companion 🚩
      </h1>
    </header>
  );
}

function Form() {
  return (
    <div className="w-3/5 m-auto py-5">
      <form className="flex flex-row justify-between items-center">
        <h3 className="font-black-ops-one">Add a New Task</h3>
        <input
          className="border-2 rounded-lg px-2"
          placeholder="Enter your task here..."
        ></input>
        <button type="submit" className="bg-slate-400 px-3 rounded-lg">
          Add ✅
        </button>
      </form>
    </div>
  );
}
