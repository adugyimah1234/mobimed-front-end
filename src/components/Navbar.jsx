import React, { useState } from 'react'
import { FiAlignRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
function Navbar() {

    const [toggle,setToggle]=useState(false)
    const menuList = [
        {
            id: 1,
            title: 'HOME'
        },
        {
            id: 1,
            title: 'SERVICES'
        },
        {
            id: 1,
            title: 'CONTACT'
        },

    ]

    return (
        <div className='flex items- justify-between'>
            <div>
                <img className="md:w-* md:h-*" src='src/assets/logo.png' />
            </div>
            <div className='hidden md:flex gap-4 items-start'>

                {menuList.map(menu => (
                    <div>
                        <h2 className='text-black hover:text-blue-400
                            px-3 py-1 cursor-pointer'>{menu.title}</h2>
                    </div>
                ))}
            </div>
            <div className='hidden md:flex'>
                <h2 className='text-black hover:text-blue-400
                            px-3 py-1 cursor-pointer'>LOGIN
                </h2>
                <h2 className='hover:text-blue-400
                            px-3 py-1 cursor-pointer'><button className='px-3 py-0 bg-[#57BDDD] border-r-4
                            p-2 text-white'>SIGNUP</button>
                </h2>
            </div>
            <div className='md:hidden'>
              { !toggle ? <FiAlignRight onClick={()=>setToggle(!toggle)} className="text-black cursor-pointer"/>
               :<FiX onClick={()=>setToggle(!toggle)} className="text-black cursor-pointer"/>}
               {toggle?<menuOverlay menuList={menuList}/>: null}
            </div>
        </div>
    )
}

export default Navbar
