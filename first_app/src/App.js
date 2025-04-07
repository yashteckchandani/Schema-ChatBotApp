import './App.css';
import logo from './assets/logo1.png';
import addBtn from './assets/add-30.png';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'; // Import Routes from react-router-dom
import Chat from './components/Chat';
import AddSchema from './components/AddSchema';
import AllSchemas from './components/AllSchemas';
import UpdateSchema from './components/UpdateSchema';
import AllSchemaSelection from './components/AllSchemaSelection';
import axios from 'axios';

function App() {

  const clearContext = () => {
    axios.post('http://localhost:8080/api/chat/clear');
    window.location.reload();
  }

  return (
    <div className="App">
      <Router>
        <div className="sidebar">
          <div className="upperSidebar">
            <div className="upperSideTop">
              <img src={logo} alt="" className="logo" />
              <span className="brand">Pace3.Chat</span>
            </div>
            <button className="midbtn" onClick={clearContext}>
              <Link to="/" className='midbtn1'>
                <img src={addBtn} alt="" className="addbtn" /> New Chat
              </Link>
            </button>

            <button className="midbtn" >
              <Link to="/add-schema" className='midbtn1'>
                <img src={addBtn} alt="" className="addbtn" /> Add New Schema
              </Link>
            </button>

            <button className="midbtn" >
              <Link to="/view-schema " className='midbtn1'>
              <img src={addBtn} alt="" className="addbtn" /> Update/Delete Schema
              </Link>
            </button>
          </div>
          <div className="lowerSidebar">
            <AllSchemaSelection />
          </div>
        </div>

        {/* Wrap your Routes inside <Routes> component */}
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/add-schema" element={<AddSchema />} />
          <Route path="/view-schema" element={<AllSchemas />} />
          <Route path="/update-schema" element={<UpdateSchema />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
