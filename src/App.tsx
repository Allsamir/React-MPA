import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useNavigation, useLocation } from "react-router-dom";

function App() {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Sidebar />
      <div style={{ textAlign: "center" }}>
        <h1>Hello React Router</h1>
        <p>Welcome to the React Router Project</p>
        {navigation.state === "loading" ? <p>Loading.....</p> : <Outlet />}
      </div>
      <Footer />
    </>
  );
}

export default App;
