
import { GoDotFill } from 'react-icons/go'
import { GrLocation } from "react-icons/gr";


const JobTitle = () => {
  return (
    <div className='w-full h-[166px] border-b'>
      <div className='flex justify-center items-center w-[623px] h-[98px] mx-[100px] leading-[47.25px] gap-[24px]'>
        <div className='w-full h-[47px] flex flex-col items-center justify-between gap-[24px]'>
            <div className='flex items-center gap-[12px] w-full  h-full'>
                <h1 className='font-sans font-semibold text-[35px] text-[#3D3D3D] '>Senior Product Designer</h1>
                <GoDotFill className=' h-2 w-2 text-[#D1D1D1]'/>
                <h1 className='font-light text-[#888888] font-sans text-sm'>posted 2 days ago</h1>
                <div className='flex items-center gap-[4px] py-[2px] justify-center pr-[8px] pl-[6px] w-[57px] h-[22px] rounded-full bg-[#ECFDF3] border-[1px] border-[#ABEFC6]'>
                    <GoDotFill className='h-2 w-2 text-[#17B26A] '/>
                    <p className='text-[#067647] text-xs'>Open</p>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-[368px] h-[27px] flex items-center gap-[16px]'>
                    <div className='w-[168px] h-full gap-[8px] flex items-center text-[#5D5D5D]'>
                        <GrLocation className='w-[24px] h-[24px]'/>
                        <h1 className=' font-medium text-lg'>Delaware, USA</h1>
                    </div>
                    <GoDotFill className='h-2 w-2 text-[#D1D1D1]'/>
                    <div className='w-[159px] h-full gap-[12px] flex items-center text-[#5D5D5D]'>
                        <svg width="20px" height="18px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25" stroke="#5D5D5D" strokeWidth="1.344" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <h1 className='font-medium text-lg'>$300k-$400k</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default JobTitle


