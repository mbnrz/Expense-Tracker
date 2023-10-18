import "./App.css";
import Header from "./components/Header";
import Headerr from "./componentsFa/Headerr";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="row">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}/>
        <Route path='/Fa' element={<Headerr/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;