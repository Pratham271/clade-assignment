

const JobDescription = () => {
  return (
    <div className='w-full border-b'>
      <div className='w-[526px] h-[401px] gap-[64px] mx-[100px] my-[25px]'>
        <div className='w-[88px] h-[19px] gap-[8px]'>
            <h1 className='text-sm text-[#6E6D6D] font-sans font-normal'>About the job</h1>
        </div>
        <div className='pt-[8px] w-full h-[374px]'>
            <ol className='text-[16px] text-[#3D3D3D] font-normal list-decimal list-inside'>
                <li className='py-0.5'>Handle the UI/UX research design</li>
                <li className='py-0.5'>Work on researching on latest web applications designs & trends</li>
                <li className='py-0.5'>Work on conceptualizing and visualizing</li>
                <li className='py-0.5'>Work on creating graphics content and other graphic related works</li>
            </ol>
            <ul className='py-1 text-[16px] text-[#3D3D3D] font-normal list-disc list-inside'>
                Benefits:
                <li className='py-0.5 px-3'>Health insurance</li>
                <li className='py-0.5 px-3'>Provident fund</li>
            </ul>
            <ul className='py-1 text-[16px] text-[#3D3D3D] font-normal list-disc list-inside'>
                Schedule:
                <li className='py-0.5 px-3'>Day shift</li>
            </ul>
            <ul className='py-1 text-[16px] text-[#3D3D3D] font-normal list-disc list-inside'>
                Supplemental pay types:
                <li className='py-0.5 px-3'>Performance bonus</li>
                <li className='py-0.5 px-3'>Yearly bonus</li>
            </ul>
            <p className='py-1 text-[16px] text-[#3D3D3D] font-normal'>Work Location: In person</p>
        </div>
      </div>
    </div>
  )
}

export default JobDescription
