import "./App.css";
import Registration from "./components/auth/Registration.tsx";
import Login from "./components/auth/Login.tsx";
import Dashboard from "./components/auth/Dashboard.tsx";
import Barber from "./components/auth/Barber.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Registration />
      {/* <Routes>
        <Route path="/" exact component={<Registration />} />
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/:id/" element={<Barber />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
