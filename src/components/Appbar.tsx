import { LuBriefcase } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { PiHandCoins } from "react-icons/pi";
import { PiBellSimple } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";

const Appbar = () => {
  return (
    <div className='flex justify-between w-full h-[109px] items-center  pl-[40px] border border-b'>
        <div className='bg-[#E7E7E7] w-[100px] h-[61px] flex items-center gap-[10px]'>
            <h1 className='text-[#DC4A2D] font-medium text-[20px] leading-[27px] mx-auto'>Logo</h1>
        </div>
        <div className="border border-gray-200 w-[538px] h-[74px] flex items-center justify-between rounded-full p-3">
            <div className='w-[109px] border-[2px] border-[#FCB4A5] rounded-full p-3 flex justify-center bg-[#DC4A2D] items-center'>
                <LuBriefcase className='text-white mr-1 h-5 w-5'/>
                <p className='text-white font-medium'>Jobs</p>   
            </div>
            <div className="flex justify-center items-center w-[128px]">
                <div className='relative inline-block mr-1 mt-0.5'>
                    <LuMessageSquare className='text-[#B0B0B0] w-6 h-6 relative' />
                    <GoDotFill className='absolute -top-1 -right-1 h-3 w-3 text-[#DC4A2D]'/>
                </div>
                <p className="font-normal text-lg text-[#B0B0B0]">Messages</p>
            </div>
            <div className="flex justify-center items-center px-2">
                <PiHandCoins className='text-[#B0B0B0] w-6 h-6 mr-1'/>
                <p className="font-normal text-lg text-[#B0B0B0]">Payments</p>
            </div>
        </div>
        <div className='flex justify-center items-center w-[134px]'>
            <div className='relative inline-block'>
                <PiBellSimple  className='w-7 h-7'/>
                <GoDotFill className='absolute -top-[1px] right-[0.5px] h-2.5 w-2.5 text-[#DC4A2D]'/>
            </div>
            <div className='pl-3 flex justify-center items-center'>
                <div className='h-[34px] w-[34px] rounded-full'>
                    <img src="logo.png" alt="" className=' rounded-full'/>
                </div>
                <GoChevronDown className='ml-1 h-5 w-5'/>
            </div>
        </div>
    </div>
  )
}

export default Appbar
