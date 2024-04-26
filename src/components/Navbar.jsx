import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-dom'


function Navbar(){
    
    const navItems = [
        { label: "Features" },
        { label: "Workflow" },
        { label: "Pricing" },
        { label: "Testimonials"},
      ];

    return(
        <div className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className={`container px-4 mx-auto relative lg:text-sm`}>



            

                <div className={`flex items-center justify-center`}>
                    {/* for logo */}
                        
                    <div className={`flex items-center flex-shrink-0 right-0`}>
                        <img className={`h-10 w-10 mr-2`} src={logo} alt="Logo" />
                        <span className={`text-xl tracking-tight`}>Logo</span>

                    </div>

                    
                    <div className='flex items-center justify-center'>
                    <ul className={`hidden lg:flex ml-14 space-x-12`}>
                        {navItems.map((navItems,index)=>(
                            <>
                             <li key={index}>
                                <span className='hover:text-orange-900 cursor-pointer'>{navItems.label}</span>
                             </li>
                            </>
                          
                        ))}
                    </ul>
                    </div>
                    
                    

                </div>

            </div>
            
        </div>
    )
}
export default Navbar