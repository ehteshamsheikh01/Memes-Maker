// "use client"
// import Image from 'next/image';
// import React, { useRef, useState } from 'react'

// const creatmeme = ({searchParams}: {searchParams: {id:string;  url:string}}) => {

//   const [Meme, setMeme] = useState<string | null>(null)
//   const text1 = useRef<HTMLInputElement>(null)
//   const text2 = useRef<HTMLInputElement>(null)

// const Enterbtn =async (event: React.FormEvent<HTMLInputElement>)=>{
//   event.preventDefault()
//   console.log(text1.current?.value);
//   console.log(text2.current?.value);

//   const DatafromApi =await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=ehtesham&password=123456&text0=${text1.current?.value}&text1=${text2.current?.value}` ,{
//     method: 'POST'
//   })
// const responce   = await DatafromApi.json()
// console.log(responce);
// setMeme(responce.DatafromApi.url)

// }

//   return (
//    <>
//    <h1 className='text-center text-3xl font-thin' >Generate meme</h1>
//    <div className='justify-center flex w-[300px] h-[300px]  mx-auto '>
//     <Image src={searchParams.url} width={200} height={200} alt='name'/>
//   <form  onSubmit={Enterbtn} className='border-[10px]  justify-center  '>
//     <input className='mt-3 ml-3 p-[20px] '  type="text" placeholder='Enter meme' ref={text1} /> <br />
//     <input className='mt-3 ml-5 p-[20px] ' type="text" placeholder='Enter meme' ref={text2} />
//     <button type='submit'  className='btn btn-secondary mx-auto' >creat  meme</button>
//   </form>
//    </div>
//    {Meme ? <Image src={Meme} width={200} height={200} alt='Meme'/> : null}
//    </>
//   )
// }

// export default creatmeme




//convert to js
// "use client";
// import Image from "next/image";
// import { useRef, useState } from "react";


// const Creatmeme = (searchParam) => {
//   // const [meme, setMeme] = useState(null);
//   const text1 = useRef();
//   const text2 = useRef();
//   const [generateMeme, setgenerateMeme] = useState(null);

//   const { id , url } = searchParam.searchParams;
//   // console.log(id);

//   const Enterbtn = async (event) => {
//     event.preventDefault();

//     const data = await fetch(
//       `https://api.imgflip.com/caption_image?template_id=${id}&username=haseeburrehmanjs&password=haseeb123&text0=${text1.current?.value}&text1=${text2.current?.value}`,
//       {
//         method: "POST",
//       }
//     );

//     const responce = await data.json();
//     // console.log(responce.data.url);
//     setgenerateMeme(responce.data.url);
//     // console.log(generateMeme);

//     // setMeme(responce)
//   };

//   return (
//     <>
//       <h1>GEnerate meme</h1>
//       <div className="text-center mx-auto flex justify-center">
//         <div>
//           <Image src={url} width={200} height={200} alt="name" />
//           <div>
//             {generateMeme && <div><Image src={generateMeme} width={200} height={200} /></div>}
//           </div>
//         </div>
//         <form onSubmit={Enterbtn}>
//           <input
//             type="text"
//             placeholder="Eneter meme"
//             className="h-[50px]"
//             ref={text1}
//           />
//           <input
//             type="text"
//             placeholder="Eneter meme"
//             className=" h-[50px]"
//             ref={text2}
//           />
//           <button type="submiit" className="btn btn-primery ">
//             Generate Meme
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default Creatmeme;

'use client'

import Image from "next/image";
import { useRef, useState } from "react"


const creatmeme = (searchParam)=>{

    const {id , url} = searchParam.searchParams;
    console.log(id);
    

    const [meme , setMeme]= useState(null)

    const text1 = useRef()
    const text2 = useRef()

    const Enterbtn =async (event)=>{
        event.preventDefault()
        const Data = await fetch (`https://api.imgflip.com/caption_image?template_id=${id}&username=haseeburrehmanjs&password=haseeb123&text0=${text1.current?.value}&text1=${text2.current?.value}`,
                   {
         method: "POST",
      })
      const responce = await Data.json()
      console.log(responce);
      setMeme(responce.data.url)
      console.log(meme);
      
       
    }

    
    return(
        <>
        <h2>Create meme</h2>
        <div className="flex justify-center flex-wrap">
            <div>
                <Image src={url} width={200} height={200} alt="name"/>
            </div>
        <form onSubmit={Enterbtn}>
            <input type="text" placeholder="Enter meme" ref={text1}/>
            <input type="text" placeholder="Enter meme" ref={text2}/>
            <button type="submit"  className="btn btn-success">Generate</button>
        </form>
        {meme ? <Image src={meme} width={200} height={200} alt="name"/> : null}
        
        </div>
        </>
    )
}

export default creatmeme