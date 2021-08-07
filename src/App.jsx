import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="app__body">
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
