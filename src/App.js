import "./App.css";
import ShowsTable from "./components/ShowsTable";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Shows Tracker Web App!</h1>
      </header>
      <main>
        <button className="AddBtn" onClick={() => console.log("Show added.")}>
          + Add New Show
        </button>
        <ShowsTable />
      </main>
      <footer>
        <a
          href="https://www.flaticon.com/free-icons/popcorn"
          title="popcorn icons"
        >
          Popcorn icons created by Freepik - Flaticon
        </a>
      </footer>
    </div>
  );
};

export default App;
