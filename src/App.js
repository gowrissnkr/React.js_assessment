import { useEffect, useState } from 'react';
import './App.css';
import DashBoard from './Component/DashBoard';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import SignUp from './Component/SignUp';
import HomePage from './Component/HomePage';


function App() {
  const [formData, setFormData] = useState(null)

  useEffect(() => {
  }, [formData])
  return (
    <div className="wrapper">
      <Router basename="">
        <Routes>
          <Route path="/" element={<HomePage formData={formData} setFormData={setFormData}/>} />
          <Route path="/sign-up" element={<SignUp setFormData={setFormData} />} />
          <Route path="/dashboard" element={<DashBoard formData={formData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
