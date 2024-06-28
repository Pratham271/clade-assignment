import JobTitle from './JobTitle'
import Sidebar from './Sidebar'
import Skills from './Skills'
import JobDescription from './JobDescription'
import About from './About'

const HeroSection = () => {
  return (
    <div className='flex'>
      <div className='flex-1'>
        <div className='max-w-[1319px]'>
            <JobTitle/>
        </div>
        <div className='max-w-[1319px]'>
            <Skills/>
        </div>
        <div className='max-w-[1319px]'>
            <JobDescription/>
        </div>
        <div className='max-w-[1319px]'>
            <About/>
        </div>
      </div>
      <div className='w-[409px] max-h-[1150px]'>
        <Sidebar/>
      </div>
    </div>
  )
}

export default HeroSection
