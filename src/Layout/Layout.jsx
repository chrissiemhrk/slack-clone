import "./Layout.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout__body">
        <Sidebar />
        {children}
      </main>
    </div>
  );
}

export default Layout;
