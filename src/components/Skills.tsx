

const Skills = () => {
  return (
    <div className='w-full h-[166px] border-b'>
        <div className='flex justify-between items-center w-[872px] h-[115px] gap-[64px] mx-[100px] my-[25px]'>
            <div className='h-full w-[170px] gap-[8px] flex flex-col justify-center'>
                <h1 className='text-sm text-[#6E6D6D] h-[19px] font-normal'>Skills Required</h1>
                <div className='w-[126.41px] h-[88px] gap-[8px] flex flex-col justify-center'>
                    <div className='flex items-center h-[24px] w-[66px] border-[1px] border-[#D0D5DD] rounded-md px-[4px] py-[6px] gap-[3px]'>
                        <img src="figma.png" alt="figma" width={16} height={16}/>
                        <p className='text-[#344054] text-xs'>Figma</p>
                    </div>
                    <div className='flex items-center h-[24px] w-[126.41px] border-[1px] border-[#D0D5DD] rounded-md px-[4px] py-[6px] gap-[3px]'>
                        <img src="Adobe.png" alt="figma" width={16} height={16}/>
                        <p className='text-[#344054] text-xs'>Adobe Illustrator</p>
                    </div>
                    <div className='flex items-center h-[24px] w-[88.41px] border-[1px] border-[#D0D5DD] rounded-md px-[4px] py-[6px] gap-[3px]'>
                        <img src="AdobeXD.png" alt="figma" width={16} height={16}/>
                        <p className='text-[#344054] text-xs'>Adobe XD</p>
                    </div>  
                </div>

            </div>
            <div className='h-full w-[170px] gap-[8px] flex flex-col justify-center'>
                <h1 className='text-sm text-[#6E6D6D] h-[19px] font-normal'>Skills Required</h1>
                <div className='w-[126.41px] h-[88px] gap-[8px] flex flex-col '>
                    <div className='flex items-center h-[24px] w-[66px] rounded-md px-[4px] py-[6px] gap-[3px]'>
                        <p className='text-[#3D3D3D] text-sm font-semibold'>English</p>
                    </div>  
                </div>

            </div>
            <div className='h-full w-[170px] gap-[8px] flex flex-col justify-center'>
                <h1 className='text-sm text-[#6E6D6D] h-[19px] font-normal'>Skills Required</h1>
                <div className='w-[126.41px] h-[88px] gap-[8px] flex flex-col '>
                    <div className='flex items-center h-[24px] w-[66px] rounded-md px-[4px] py-[6px] gap-[3px]'>
                        <p className='text-[#3D3D3D] text-sm font-semibold'>Full time</p>
                    </div>  
                </div>

            </div>
            <div className='h-full w-[170px] gap-[8px] flex flex-col justify-center'>
                <h1 className='text-sm text-[#6E6D6D] h-[19px] font-normal'>Skills Required</h1>
                <div className='w-[126.41px] h-[88px] gap-[8px] flex flex-col '>
                    <div className='flex items-center h-[24px] w-[170px] rounded-md px-[4px] py-[6px] gap-[3px]'>
                        <p className='text-[#3D3D3D] text-sm font-semibold'>3+ Years Of Experience</p>
                    </div>  
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills
