import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AuthPage from './AuthPage.jsx'
import DashboardPage from './DashboardPage.jsx'
import StudentTutorsPage from './StudentTutorsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/students" element={<StudentTutorsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
