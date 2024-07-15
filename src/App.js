import './App.css';
import Navbar from './components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard.jsx';
import Error from './components/pages/Error.jsx';
import Book_Appointment from './components/pages/Book_Appointment.jsx';
import Update from './components/pages/Update.jsx';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          
          <Route path='/dash' element={<Dashboard/>}></Route>
          <Route path='/reg' element={<Book_Appointment/>}></Route>
          <Route path='/up/:appId' element={<Update/>}></Route>




          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
