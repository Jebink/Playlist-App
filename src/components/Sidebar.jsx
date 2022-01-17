import React from 'react'
import SidebarTab from './SidebarTab'
const Sidebar = () => {
    return (
        <div>
           <div >
               <img className="logo"src="./logo.png" alt="" />
           </div>
           <SidebarTab name="Home" img="./Home.png"/>
           <SidebarTab name="Files" img="./Files.png"/>
        </div>
    )
}

export default Sidebar
