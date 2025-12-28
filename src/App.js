import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Payment from './pages/Payment';
import Attendance from './pages/Attendance';
import Performance from './pages/Performance';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        <aside className="sidebar">
          <h2 className="brand">Class Manager</h2>
          <nav aria-label="Main navigation">
            <ul>
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/classes">Classes</NavLink></li>
              <li><NavLink to="/payment">Payment</NavLink></li>
              <li><NavLink to="/attendance">Attendance</NavLink></li>
              <li><NavLink to="/performance">Performance</NavLink></li>
              <li><NavLink to="/contacts">Contacts</NavLink></li>
            </ul>
          </nav>
        </aside>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}