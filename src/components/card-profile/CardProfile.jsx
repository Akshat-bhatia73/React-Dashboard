import React, { useState } from 'react'
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';


const CardProfile = () => {
    const [file, setFile] = useState(null)
  return (
    <div className="flex flex-col items-center justify-center gap-3  px-2 py-3 w-60 xs:w-80 border-2 border-dark/10 dark:border-main-text/10 bg-white dark:bg-second-dark dark:shadow-gray-700/40 shadow-lg shadow-gray-400/35 text-dark/90 dark:text-main-text rounded-md">
                <div className="flex flex-col items-center justify-center gap-3">
                  <img src={file? URL.createObjectURL(file) : 'https://cdn3d.iconscout.com/3d/premium/thumb/young-businessman-avatar-5692602-4743371.png'} className='mt-3 h-28 w-28 rounded-xl' alt="" />
                  <h1 className='name text-xl font-bold'>Akshat Bhatia</h1>
                  <span className="tag text-sm text-blue-500 bg-blue-500/10 px-2 py-1 rounded-full font-bold">Admin</span>
                  <div className="formInput">
                  <label htmlFor="file" className="cursor-pointer text-sm font-bold text-blue-500/80 hover:text-blue-600 dark:text-blue-200 dark:hover:text-blue-300">
                    Change Profile Picture <FileUploadRoundedIcon fontSize='small' />
                  </label>
                  <input type="file" id="file" className="hidden" onChange={(e)=>{setFile(e.target.files[0])}} />
                </div>
                </div>
                  <hr className='w-full border-dark/20 dark:border-main-text/20' />
                <div className='flex flex-col items-center gap-3'>
                  <p className="font-bold text-dark/80 dark:text-main-text/60 text-sm">Username:  <span className='text-dark/90 dark:text-main-text/90 '>Akshat Bhatia</span></p>
                  <p className="font-bold text-dark/80 dark:text-main-text/60 text-sm">Email:  <span className='text-dark/90 dark:text-main-text/90 '>akshat@gmail.com</span></p>
                  <p className="font-bold text-dark/80 dark:text-main-text/60 text-sm">Contact No.:  <span className='text-dark/90 dark:text-main-text/90 '>+91-9650---992</span></p>
                  <p className="font-bold text-dark/80 dark:text-main-text/60 text-sm">Country:  <span className='text-dark/90 dark:text-main-text/90 '>India</span></p>
                    <button className='text-green-500 w-14 py-1 rounded font-bold bg-green-500/10 hover:bg-green-500/20'>Edit</button>


                </div>
    </div>
  )
}

export default CardProfile