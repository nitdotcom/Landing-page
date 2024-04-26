import React from 'react'

function Footer(){

    const resourcesLink = [
        { href: "#", text: "Getting Started" },
        { href: "#", text: "Documentation" },
        { href: "#", text: "Tutorials" },
        { href: "#", text: "API Reference" },
        { href: "#", text: "Community Forums" },
      ];

    const platformLinks = [
        { href: "#", text: "Features" },
        { href: "#", text: "Supported Devices" },
        { href: "#", text: "System Requirements" },
        { href: "#", text: "Downloads" },
        { href: "#", text: "Release Notes" },
      ];
      
    const communityLinks = [
        { href: "#", text: "Events" },
        { href: "#", text: "Meetups" },
        { href: "#", text: "Conferences" },
        { href: "#", text: "Hackathons" },
        { href: "#", text: "Jobs" },
      ];

    return(
        <footer className='mt-20 border-t py-10 border-neutral-700'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>


                <div className=' ml-[70px]'>
                    <h3 className='text-md   font-semibold mb-4 '>Resources</h3>
                    <ul className='space-y-2'>
                        {resourcesLink.map((resourcesLink,index)=>(
                            <>
                            <li>
                                <span className='text-neutral-500 hover:text-black cursor-pointer'>{resourcesLink.text}</span>
                            </li>
                            </>
                        ))}
                    </ul>
                </div>
                <div className='ml-[70px]'>
                    <h3 className='text-md font-semibold mb-4'>Platform</h3>
                    <ul className='space-y-2'>
                        {platformLinks.map((platformLinks,index)=>(
                            <>
                            <li>
                                <span  className='text-neutral-500 hover:text-black cursor-pointer'>{platformLinks.text}</span>
                            </li>
                            </>
                        ))}
                    </ul>
               </div>
               <div className={`ml-[70px]`}>
               <h3 className='text-md font-semibold mb-4'>Community</h3>
                    <ul className='space-y-2'>
                        {communityLinks.map((communityLinks,index)=>(
                            <>
                            <li>
                                <span className='text-neutral-500 hover:text-black cursor-pointer'>{communityLinks.text}</span>
                            </li>
                            </>
                        ))}
                    </ul>

               </div>
   
            </div>

        </footer>
    )
}
export default Footer