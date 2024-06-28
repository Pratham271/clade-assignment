

const About = () => {
  return (
    <div className='w-full border-b'>
      <div className='flex flex-col  w-[736px] h-[271px] mx-[100px] gap-[16px] my-[25px]'>
        <div className='flex items-center p-[10px] gap-[10px]'>
            <img src="logo.png" alt="" height={40} width={40} className='rounded-[4px]'/>
            <h1 className='text-xl text-[#4F4F4F] '>Atlassian</h1>
        </div>
        <div className='flex w-full h-[195px] gap-[48px]'>
            <div className='flex flex-col justify-between gap-[8px]'>
                <div className='w-[344px] h-[49px] flex flex-col justify-between'>
                    <div className='text-[#6E6D6D] text-sm'>
                        Company size
                    </div>
                    <div className='text-[#3D3D3D] text-[16px]'>
                        1k-2k Employees
                    </div>
                </div>
                <div className='w-[344px] h-[49px] flex flex-col justify-between'>
                    <div className='text-[#6E6D6D] text-sm'>
                        Sector
                    </div>
                    <div className='text-[#3D3D3D] text-[16px]'>
                        Information Technology, Infrastructure
                    </div>
                </div>
                <div className='w-[344px] h-[49px] flex flex-col justify-between'>
                    <div className='text-[#6E6D6D] text-sm'>
                        Founded In
                    </div>
                    <div className='text-[#3D3D3D] text-[16px]'>
                        2019
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between gap-[8px]'>
                <div className='w-[344px] h-[49px] flex flex-col justify-between'>
                    <div className='text-[#6E6D6D] text-sm'>
                        Type
                    </div>
                    <div className='text-[#3D3D3D] text-[16px]'>
                        Private
                    </div>
                </div>
                <div className='w-[344px] h-[49px] flex flex-col justify-between'>
                    <div className='text-[#6E6D6D] text-sm'>
                       Funding 
                    </div>
                    <div className='text-[#3D3D3D] text-[16px]'>
                        Bootstrapped
                    </div>
                </div>
                <div className='w-[344px] h-[49px] flex flex-col justify-between'>
                    <div className='text-[#6E6D6D] text-sm'>
                        Founded By
                    </div>
                    <div className='text-[#3D3D3D] text-[16px]'>
                        Scott Farquhar, Mike Cannon-Brookes
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
