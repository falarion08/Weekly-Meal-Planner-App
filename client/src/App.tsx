import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="bg-white-500 min-h-screen"> 
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path ="/login" element={<Login/>}/>
          <Route path = "/register" element = {<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;