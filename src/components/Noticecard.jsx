import React from "react";

const Noticecard = ({notices, DeleteNotice, editNotice}) => {
  


  return (
     <div className="px-4 md:px-10">
      {notices.map((notice) => (
       <div key={notice.id} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-md rounded-lg p-4 md:p-5 mb-4">

        <div className="w-full md:w-auto">
          <h2 className="text-lg md:text-xl font-bold">{notice.title}</h2>
          <p className="text-gray-600 md:mb-2 mb-3">{notice.description}</p>
          <span className="text-sm bg-blue-100 px-2 py-1  rounded">{notice.category}</span>
        </div>

        <div className="flex flex-row gap-4 mt-8 md:mt-0 w-full md:w-auto justify-center md:justify-start">
          <button
          onClick={() => DeleteNotice(notice.id)}
          className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded cursor-pointer transition duration-400 w-full md:w-auto text-center">
          Delete
        </button>

         <button 
         onClick={() => editNotice(notice)}
         className="bg-green-100 hover:bg-green-200 text-green-600 px-3 py-1 rounded cursor-pointer transition duration-400 w-full md:w-auto text-center"> Edit</button>
         </div>

       </div>
      ))}
    </div>
  )
}

export default Noticecard;
