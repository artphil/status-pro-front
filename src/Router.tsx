import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import Logout from 'components/Logout';
import SignUpPage from 'pages/SignUpPage';

import HomePage from 'pages/HomePage';
import DeckPage from 'pages/DeckPage';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/deck" element={<DeckPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;