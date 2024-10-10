// import { url } from 'inspector';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react'


// interface Memes{
//   id: string;
//   url:string;
//   name:string;
// }

// const App = async () => {


// const Data = await fetch('https://api.imgflip.com/get_memes');
// const responce = await Data.json()
// console.log(responce.data.memes);

//   return (
//     <>
//     <h1>Memes Maker</h1>
//     <div className='flex justify-center gap-5 flex-wrap'>
//       {responce.data.memes.map((item: Memes)=>{
//         return <div>
//           <Image src={item.url} width={200} height={200} alt='meme'/>
//           <button className='btn btn-primery'><Link href={{
//             pathname:'creatememe',
//             query:{
//               url:item.url,
//               id:item.id
//             }
//           }}>generat Meme</Link></button>
//         </div>
//       })}
//     </div>
//     </>
//   )
// }

// export default App


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface Memes{
  id: string,
  url:string,
  name:string
}

const App = async() => {
  const Datafrom  = await fetch('https://api.imgflip.com/get_memes')
  const responce = await Datafrom.json()
  console.log(responce.data.memes);
  const variable = responce.data.memes;
  
  return (
    <>
    <h1 className='text-center text-3xl font-semibold'>Meme makEr</h1>
    <div className='flex justify-center flex-wrap gap-5' >

    {variable.map((item: Memes)=>{
      return <div key={item.id} >
        {<Image src={item.url} width={200} height={200} alt='name'/>}
        <button className='btn btn-accent mt-5'><Link href={{
          pathname:'creatememe',
          query:{
            id:item.id,
            url:item.url
          }
        }}>Generate Meme</Link></button>
      </div>
    })}

    </div>

    </>
  )
}

export default App