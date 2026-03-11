import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoute from "./Router/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
   <div className=' h-screen w-full '>
  <AuthProvider>
  <ErrorBoundary>
   <Routes>
   <Route path="/" element={<Login/>} />
   <Route path="/Login" element = {<Login/>}> </Route>
   <Route path="/Signup" element = {<Signup/>}> </Route>
   <Route path="/Dashboard" element = {<ProtectedRoute><Dashboard/></ProtectedRoute>}> </Route>
   </Routes>
  </ErrorBoundary>
  </AuthProvider>
   </div>
  )
}

export default App
