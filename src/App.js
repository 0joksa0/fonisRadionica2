import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from './models/Home';
import Form from './models/Form/Form';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
      </Routes>
    </div>
  );
}

export default App;
