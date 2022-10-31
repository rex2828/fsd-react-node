import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Doctorprofile from "./pages/Doctorprofile";
import Userprofile from "./pages/Userprofile";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Help from "./pages/Help";
import FAQ from "./pages/FAQ";
import Page404 from "./pages/Page404";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import Doctor from "./pages/Doctors";
import DoctorApplication from "./pages/DoctorApplication";
import Calender from "./pages/Calender"
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import cookie from 'react-cookie'
function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const location = useLocation()
	const handleLogin = () => {
		setIsLoggedIn(true)
	}
	const handleLogout = async () => {
		setIsLoggedIn(false)
		await fetch('http://localhost:3000/api/users/logout', {
			credentials: 'include'
		})
	}

	useEffect(() => {
		cookie.load('jwt') ? setIsLoggedIn(true) : setIsLoggedIn(false)
	}, [isLoggedIn])


	return (
		<div className="App">
			{location.pathname !== '/login' && location.pathname!=='/register' && location.pathname!=='/event' && location.pathname!== '/admin' && <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login handleLogin={handleLogin} />} />
				<Route path="/register" element={<Register />} />
				<Route path="/doctor-profile" element={<Doctorprofile />} />
				<Route path="/book" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Book /></ProtectedRoute>} />
				<Route path="/apply" element={<ProtectedRoute isLoggedIn={isLoggedIn}><DoctorApplication /></ProtectedRoute>} />
				<Route path="/user-profile" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Userprofile /></ProtectedRoute>} />
				<Route path="/doctors" element={<Doctor />} />
				<Route path="/admin" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Admin /></ProtectedRoute>} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/help" element={<Help />} />
				<Route path="/faq" element={<FAQ />} />
				<Route path="/event" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Calender /></ProtectedRoute>} />
				<Route path="*" element={<Page404 />} />
			</Routes>
			{location.pathname !== '/login' && location.pathname!=='/register' && location.pathname!=='/event' && location.pathname!== '/admin' && <Footer/>}
		</div>
	);
}

const ProtectedRoute = ({ isLoggedIn, children }) => {
	if (!isLoggedIn && !cookie.load('jwt')) {
	  return <Navigate to="/login" replace />;
	}
	return children;
  };


export default App;
