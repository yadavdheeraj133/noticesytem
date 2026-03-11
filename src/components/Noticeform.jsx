import { useEffect } from "react"
import { useState } from "react" 


const Noticeform = ({addNotice, editingNotice, updateNotice}) => {
 
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
 
  //Handle Edit Notice
   useEffect(()=>{
    if(editingNotice){
      setTitle(editingNotice.title)
      setDescription(editingNotice.description)
    }},[editingNotice])


  //Handle Form Sumit
  const handleSumit = (e) =>{
   e.preventDefault();

   if(!title || !description){
    alert("Please fill all the fields")
    return;
   }

   if(editingNotice){
    const updatedNotice = {
      ...editingNotice,
      title,
      description
    }
   updateNotice(updatedNotice)

   }else{
    const newNotice = {
      id: Date.now(),
      title,
      description,
      category: "General"
    }
    addNotice(newNotice)
   }

   setTitle("")
   setDescription("")

  }

  return (
    <div>
      <form onSubmit={handleSumit} className="pb-10 px-4 md:px-10 flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-5">
        
        <input 
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border py-2 px-5 shadow-md w-full md:w-auto"
        />
        
        <input 
          type="text" 
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border py-2 px-5 shadow-md w-full md:w-auto"
        />

        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 cursor-pointer rounded text-xl w-full md:w-auto">
          {editingNotice ? "Update Notice" : "Add Notice"}
        </button>
      </form>
    </div>
  )
}

export default Noticeform