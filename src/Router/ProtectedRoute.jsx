import { Navigate } from 'react-router-dom'
import UseAuth from '../Hooks/UseAuth'

const ProtectedRoute = ({children}) => {
const {IsLogedIn} = UseAuth();

if (!IsLogedIn) {
  return <Navigate to="/login" />;
}

  return children;
   
}

export default ProtectedRoute