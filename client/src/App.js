import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Doctorprofile from './pages/Doctorprofile'
import Userprofile from './pages/Userprofile'
import Admin from './pages/Admin'
import About from './pages/About'
import Help from './pages/Help'
import FAQ from './pages/FAQ'
import Page404 from './pages/Page404'
import Book from './pages/Book'
import Contact from './pages/Contact';
import Doctor from './pages/Doctors'
import DoctorApplication from './pages/DoctorApplication'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/book' element={<Book />} />
        <Route path='/doctor-profile' element={<Doctorprofile />} />
        <Route path='/doctor-application' element={<DoctorApplication />} />
        <Route path='/user-profile' element={<Userprofile />} />
        <Route path='/doctors' element={<Doctor/>} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/help' element={<Help />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path="*" element={<Page404/>} />
      </Routes>      
    </div>
  );
}

export default App;
