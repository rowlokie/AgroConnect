
import React from 'react'
import LatestCards from './LatestCards';


const Latestjobs = () => {
  
    const jobs=[1,2,3,4,5,6,7,8,9];
      return (
    <div className='w-full '>
<div className='text-black font-bold text-8xl text-center '>
    <span  className='text-blue-600 '> Latest</span> Job Openings
</div>

<div className='f' > 
    <div className=''>

    </div>
<div className='grid grid-cols-3 top-[5rem] m-4  gap-4 relative'>
{
    jobs.slice(0,6).map((item,index)=><div className='w-[25rem] h-[25rem] shadow-2xl '><div><LatestCards /></div> </div>  )
}
</div>
</div>
    </div>
  )
}

export default Latestjobs