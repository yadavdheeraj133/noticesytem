import Noticecard from "../components/Noticecard";
import Noticeform from "../components/Noticeform";
import { useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseNotices from "../Hooks/UseNotices";


const Dashboard  = () => {

const {
  notices,
  editingNotice,
  addNotice,
  DeleteNotice,
  editNotice,
  updateNotice
} = UseNotices()

const {IsLogedIn,logout} = UseAuth();
const navigate = useNavigate();

if (!IsLogedIn) {
   navigate("/Login");
  return null
}


const handleLogout = () => {
  logout();
  navigate("/Login");
};
 
  return (
    <div className=''>
      <nav className='flex items-center justify-between  bg-slate-900 text-white md:text-xl  md:px-20  p-5 py-7 md:py-5'>
        <h1 className='font-bold md:text-xl  text-white uppercase   '>Admin Panel</h1> 
        <h1 className='font-bold md:text-xl  text-white uppercase   '>Admin DashBoard</h1>
        <button onClick={handleLogout} className="font-bold md:text-xl  text-white uppercase">Logout</button>
      </nav>

      <div className='md:pb-10 pb-5 text-center'>
      
      </div>
      <Noticeform  addNotice = {addNotice} editingNotice={editingNotice} updateNotice={updateNotice} />
      <Noticecard notices={notices} DeleteNotice={DeleteNotice} editNotice={editNotice} />
      
      
      
    </div>
  )
}

export default Dashboard
