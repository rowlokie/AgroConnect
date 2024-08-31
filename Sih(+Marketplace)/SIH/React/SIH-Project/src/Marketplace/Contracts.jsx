



import React from 'react'
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from '@radix-ui/react-accordion';
import Crops from './Crops'

const Contracts = () => {
  
    const jobs=[1,2,3,4,5,6,7,8,9];
      return (
    <div className='w-full top-[6rem] absolute'>
<div className='text-black font-bold text-8xl text-center '>
    <span  className='text-lime-600 '> New</span> Contracts
</div>
<div className='text-1xl'>
    <button className='bg-black h-[2.5rem] w-[5rem] rounded-md right-[10rem]  absolute hover:bg-lime-600 text-white hover:text-black'>Create +</button>
    <button className='bg-black h-[2.5rem] w-[5rem] rounded-md right-[4rem]  absolute hover:bg-lime-600 text-white hover:text-black'>Get</button>
</div>
<div className='f' > 
    <div className='absolute top-[7rem] left-2 '>
<p className='font-bold text-5xl  absolute'>Filter</p>
<Accordion className='top-[4rem] absolute text-xl ' type="single" collapsible>
  <AccordionItem value="item-1" className='cursor-pointer'>
    <AccordionTrigger className='font-semibold text-3xl'>Products</AccordionTrigger>
    <AccordionContent className='hover:text-blue-600'>
     Fruits
    </AccordionContent>
    <AccordionContent className='hover:text-blue-600'>
    Crops
    </AccordionContent>
    <AccordionContent className='hover:text-blue-600'>
   Cereals
    </AccordionContent>
    <AccordionContent className='hover:text-blue-600'>
    Dairy 
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2" className='cursor-pointer'>
    <AccordionTrigger className='font-semibold text-3xl '>Price</AccordionTrigger>
    <AccordionContent className='hover:text-blue-600'>
   5-10k
    </AccordionContent>
    <AccordionContent className='hover:text-blue-600'>
    10-15k
    </AccordionContent>
    <AccordionContent className='hover:text-blue-600'>
    15-20k
    </AccordionContent>
    <AccordionContent className='hover:text-blue-600'>
   20-25k
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div>
<div className='grid grid-cols-3 top-[10rem] gap-8 slide right-[2rem] absolute'>
{
    jobs.slice().map((item,index)=><div className='w-[21rem] h-[25rem] shadow-2xl '><div><Crops/></div> </div>  )
}
</div>
</div>
    </div>
  )
}

export default Contracts