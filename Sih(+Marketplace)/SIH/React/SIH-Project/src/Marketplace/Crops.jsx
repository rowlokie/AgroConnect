// import { Button } from '@/components/ui/button'
// import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
// import { Bookmark, Brackets } from 'lucide-react'
// import { Badge } from "@/components/ui/badge"
// import React from 'react'

// const Crops = () => {
//   return (
//     <div className='left-2  relative'>
//     <div className=''>
//         <div className='top-2 text-[1.1rem] relative left-[18rem] '>
//         <p className=''>2 days ago</p>
//         </div>
//         <div className=' top-[-1rem] relative'>
//         <Button variant='outline' classname='rounded-full ' size="icon"><Bookmark/></Button>
//         </div>
//         </div>
       
//             <Avatar className='absolute top-[3rem] left-[21rem]'>
//                 <AvatarImage className='size-[4rem] ' src='https://media.istockphoto.com/id/1142275340/vector/farm-simple-icon-farm-animal-sign-green-symbol-for-animal-husbandry.jpg?s=612x612&w=0&k=20&c=FI0a8aVYfS0vxkDE06FQK-HlHSbyBXGQy3vNfPfveOg=' />
//                 </Avatar>
//                 <div>
//         <p className='text-lime-800 font-bold text-2xl'>Organisation Name</p>
//         <p className='text-lime-500 font-semibold text-xl'>India</p>
      
// </div>
//         <div className='top-[8rem] absolute'>
//           <p className='text-[1.5rem] text-blue-600'>Corn Limited</p>
//           <p >Lorem ipsum dolor safsafsafa sdfajklfj aj lk;fa ljl j;alj;ldsfa;lfj;al j;l jlakfl afl dlajljsa;  ljfasjlfjoaffjoerjfpo  afasf afa sfd afarum nisi dolores.</p>
//         </div>

//         <div className='flex top-[17rem] gap-2 bg-white absolute'>
//         <Badge className='text-blue-800 bg-white border-blue-800 text-xl'>crop</Badge>
//         <Badge className={'text-red-600 bg-white border-red-600 text-xl'}>price</Badge>
//            <Badge className={'text-green-800 bg-white border-green-800 text-xl'}>quantity</Badge>
//         </div>
//         <div className='flex gap-4 top-[12.5rem] text-xl relative'>
//           <Button variant='outline'> Details</Button>
//           <Button classname='bg-slate-400'>Apply</Button>
//         </div>
//     </div>
//   )
// }

// export default Crops






import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Bookmark, Brackets } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import React from 'react'

const Crops = () => {
  return (
    <div className='left-2  relative'>
    <div className=''>
        <div className='top-2 text-[1.1rem] relative left-[13rem] '>
        <p className=''>2 days ago</p>
        </div>
        <div className=' top-[-1rem] relative'>
        <Button variant='outline' classname='rounded-full ' size="icon"><Bookmark/></Button>
        </div>
        </div>
       
            <Avatar className='absolute top-[3rem] left-[16rem]'>
                <AvatarImage className='size-[4rem] ' src='https://media.istockphoto.com/id/1142275340/vector/farm-simple-icon-farm-animal-sign-green-symbol-for-animal-husbandry.jpg?s=612x612&w=0&k=20&c=FI0a8aVYfS0vxkDE06FQK-HlHSbyBXGQy3vNfPfveOg=' />
                </Avatar>
                <div>
        <p className='text-lime-800 font-bold text-2xl'>Organisation Name</p>
        <p className='text-lime-500 font-semibold text-xl'>India</p>
      
</div>
        <div className='top-[8rem] absolute'>
          <p className='text-[1.5rem] text-blue-600'>Corn Limited</p>
          <p >Lorem ipsum dolor safsafsafa sdfajklfj aj lk;fa ljl j;alj;ldsfa;lfj;al j;l jlakfl afl dlajljsa;  ljfasjlfjoaffjoerjfpo  afasf afa sfd afarum nisi dolores.</p>
        </div>

        <div className='flex top-[17rem] gap-2 bg-white absolute'>
        <Badge className='text-blue-800 bg-white border-blue-800 text-xl'>crop</Badge>
        <Badge className={'text-red-600 bg-white border-red-600 text-xl'}>price</Badge>
           <Badge className={'text-green-800 bg-white border-green-800 text-xl'}>quantity</Badge>
        </div>
        <div className='flex gap-4 top-[12.5rem] text-xl relative'>
          <Button variant='outline'> Details</Button>
          <Button classname='bg-slate-400'>Apply</Button>
        </div>
    </div>
  )
}

export default Crops