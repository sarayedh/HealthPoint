import { Routes, Route } from "react-router-dom"
import 'react-pro-sidebar/dist/css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Login, Signup, ForgotPassword } from './screens/screens'
import AuthLayout from '../src/screens/containers/AuthLayout'
import DashboardLayout from '../src/screens/containers/DashboardLayout'

import './App.css';


function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
       
      </Routes>
    </main>
  );
}

export default App;
