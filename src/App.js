import "./App.css";
import Home from "./Router/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <div id="test">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;