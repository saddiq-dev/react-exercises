import "./index.css";

const tasks = [{ task: "Clean house" }, { task: "Go to Gym" }];

export default function App() {
  return (
    <>
      <Header />
      <Form />
      <List />
      <Buttons />
      <Stats />
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

function List() {
  return (
    <div className="list">
      <div className="list-item">
        <input type="checkbox"></input>
        <p>Item 1</p>
        <button>❌</button>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="buttons">
      <button className="btn">Sort by Input Date</button>
      <button className="btn">Clear List</button>
    </div>
  );
}

function Stats() {
  return (
    <div className="stats">
      <p>70% of your tasks are completed </p>
    </div>
  );
}
