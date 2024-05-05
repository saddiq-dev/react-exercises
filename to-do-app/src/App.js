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
    <header className="header">
      <h1>TaskMaster - Your Ultimate To-Do List Companion 🚩</h1>
    </header>
  );
}

function Form() {
  return (
    <div className="form-container">
      <form className="form">
        <h3>Add a New Task</h3>
        <input
          type="text"
          className="input-field"
          placeholder="Enter your task here..."
        ></input>
        <button type="submit" className="submit-button">
          Add ✅
        </button>
      </form>
    </div>
  );
}
