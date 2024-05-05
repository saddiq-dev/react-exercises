import "./index.css";

export default function App() {
  return <Header />;
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
