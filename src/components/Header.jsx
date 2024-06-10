import React, { useState, useEffect } from 'react'
import logo from '../assets/Images/logo (1).png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
    import { HiPlus,HiDotsVertical } from "react-icons/hi";
import Headeritem from './Headeritem';


function Header() {
    const [toggle,setToggle]=useState(false);
    const [isSticky, setSticky] = useState(false);

    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ];
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
  return (
    
    <div className={`flex items-center gap-8 justify-between p-5 font-primaryBold transition-all duration-300 ${isSticky ? 'fixed top-0 w-full z-50 bg-gradient-to-b from-black to-gray-900' : 'relative'}`}>
        <div className='flex gap-8 items-center mt-3'>
        <img src={logo} className='w-[80px] md:w-[115px]
         object-cover mb-3' />
         <div className=' hidden md:flex gap-8'>
         {menu.map((item)=>(
            <Headeritem name={item.name} Icon={item.icon} />
         ))}
        </div>
        <div className='flex md:hidden gap-5'>
         {menu.map((item,index)=>index<3&&(
            <Headeritem name={''} Icon={item.icon} />
         ))}
         <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                 <Headeritem name={''} Icon={HiDotsVertical} />
                {toggle? <div className='absolute mt-3 bg-[#121212] 
                 border-[1px] border-gray-700 p-3 px-5 py-4 '>
                 {menu.map((item,index)=>index>2&&(
            <Headeritem name={item.name} Icon={item.icon} />
                 ))}
                 </div>:null}
           </div>
        </div>
        </div>
         <div className='flex items-center gap-2 font-primaryRegular 
         rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in p-1'>
        <p className='text-white hidden md:flex'>kayke</p>  
    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/513E3EBEAE7DA89FB7124F9CD0F4F5FE6A4DA6EF8FA8C8F9E95EC5BC158831BE/scale?width=300&aspectRatio=1.00&format=png" 
    className='w-[40px] rounded-full ' />
         </div>
    </div>
  );
}

export default Header