

const SubAppbar = () => {
  return (
    <div className='flex items-center w-full h-[67px] border-b'>
      <div className='w-[590px] flex items-center h-[27px] mx-[100px] justify-between'>
            <div className='relative'>
                <h1 className='text-[#DC4A2D] font-semibold text-lg'>Job Preview</h1>
                <div className='absolute bottom-[-18.5px] left-5 w-[65px]  border-b-[2px] border-[#DC4A2D]'></div>
            </div>
            <h1 className='text-[#888888] font-medium font-sans text-lg'>
                Applicants
            </h1>
            <h1 className='text-[#888888] font-medium font-sans text-lg'>
                Match
            </h1>
            <h1 className='text-[#888888] font-medium font-sans text-lg'>
                Messages
            </h1>
      </div>
    </div>
  )
}

export default SubAppbar
