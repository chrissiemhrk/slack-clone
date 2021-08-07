import "./Home.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function Home() {
  return (
    <div className="home">
      <Header />
      <main className="home__body">
        <Sidebar />
      </main>
    </div>
  );
}

export default Home;
