import "./App.css";
import Mainpage from "./components/Mainpage";
import Header from "./components/Header";
import Form from "./components/ShipForm/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/ship" element={<Form />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
