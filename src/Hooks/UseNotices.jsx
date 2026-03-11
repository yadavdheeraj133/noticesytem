import { useCallback, useState } from "react";
import { useEffect } from "react";

const UseNotices = () => {

  const [notices, setNotice] = useState([]);
  
  const [editingNotice, setEditingNotice] = useState(null)
  
  //add notice
  const addNotice = useCallback((newNotice) => {
    setNotice((prevNotices) => [...prevNotices, newNotice]);
  }, [setNotice]);

  //deleteNotice
   const DeleteNotice = useCallback((id) => {
        setNotice((prevNotices) => 
          prevNotices.filter((notice) => notice.id !== id) 
      )}, [setNotice]);

  
  //EditNotice
  const editNotice = useCallback((notice) => {
    setEditingNotice(notice);
  }, [setEditingNotice]);

  //Update Notice
  const updateNotice = useCallback((updatedNotice) => {
    setNotice((prev) =>
      prev.map((notice) =>
        notice.id === updatedNotice.id ? updatedNotice : notice
      )
    );
    setEditingNotice(null);
  }, [setNotice, setEditingNotice]);

  
  //Load Notices from local storage on componentDidmount
  useEffect(() => {
    const saved = localStorage.getItem("notices");
    if (saved) {
      setNotice(JSON.parse(saved));
    }
  }, []);
  


  //Save Notices to local storage on notices state change
  useEffect(() => {
    localStorage.setItem("notices", JSON.stringify(notices));
  }, [notices]);
  
  return {
  notices,
  editingNotice,
  addNotice,
  DeleteNotice,
  editNotice,
  updateNotice
};

}

export default UseNotices
