
import { IoTrashOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='border-l-2 border-[#E7E7E7] bg-[#FCFCFC] h-full w-full pt-[25px]'>
      <div className='w-[360px] h-[361px] gap-[16px] ml-[25px]'>
        <div className='flex w-full h-[46px] gap-[16px] items-center'>
            <button className='bg-[#FEF4F2] w-[172px] border-[#DC4A2D] flex justify-center items-center border-[0.8px] rounded-[8px] py-[12px] px-[24px] gap-[10px] text-[#DC4A2D] font-base text-sm'>
                <IoTrashOutline className='w-4 h-4'/>
                <p>Delete Job</p>
            </button>
            <button className='bg-[#DC4A2D] w-[172px] border-2 border-[#FED3CA] flex justify-center items-center  rounded-[8px] py-[12px] px-[24px] gap-[10px] text-[#FFFFFF] font-base text-sm'>
                <LuPencil className='w-4 h-4'/>
                <p>Edit Job</p>
            </button>
        </div>
        <div className='mt-[10px] w-full h-[291px] p-[12px] gap-[16px]'>
            <div className='w-[336px] h-[42px] flex flex-col items-center  justify-between'>
                <div className='flex w-full justify-between items-center border-b p-[12px]'>
                    <div className='flex items-center gap-[10px] p-[10px] text-[#4F4F4F]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4F4F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>    
                        <h1 className='text-[18px] font-light'>Applicants</h1>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='font-semibold text-[#3D3D3D] text-lg'>400</h1>
                    </div>
                </div>
                <div className='flex w-full justify-between items-center border-b p-[12px]'>
                    <div className='flex items-center gap-[10px] p-[10px] text-[#4F4F4F]'>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="#4F4F4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 19.2857L15.8 21L20 17M4 21C4 17.134 7.13401 14 11 14C12.4872 14 13.8662 14.4638 15 15.2547M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>  
                        <h1 className='text-[18px] font-light'>Matches</h1>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='font-semibold text-[#3D3D3D] text-lg'>100</h1>
                    </div>
                </div>
                <div className='flex w-full justify-between items-center border-b p-[12px]'>
                    <div className='flex items-center gap-[10px] p-[10px] text-[#4F4F4F]'>
                        <LuMessageSquare className='h-5 w-5'/>   
                        <h1 className='text-[18px] font-light'>Messages</h1>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='font-semibold text-[#3D3D3D] text-lg'>147</h1>
                    </div>
                </div>
                <div className='flex w-full justify-between items-center p-[12px]'>
                    <div className='flex items-center gap-[10px] p-[10px] text-[#4F4F4F]'>
                        <MdOutlineRemoveRedEye className='h-5 w-5'/>
                        <h1 className='text-[18px] font-light'>Views</h1>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='font-semibold text-[#3D3D3D] text-lg'>800</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
