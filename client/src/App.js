import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import About from './pages/About'
import Help from './pages/Help'
import FAQ from './pages/FAQ'
import Page404 from './pages/Page404'
import Book from './pages/Book'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Book />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/about' element={<About />} />
        <Route path='/help' element={<Help />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path="*" element={<Page404/>} />
      </Routes>      
    </div>
  );
}

export default App;
