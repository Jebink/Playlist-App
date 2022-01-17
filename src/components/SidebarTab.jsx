import React from 'react'

const SidebarTab = (props) => {
    return (
        <div className="sidebarTab">
            <div >
                <img className="sidelogo" src={props.img} alt="" />
            </div>
            <div className="sidetext">
            {props.name}
            </div>
        </div>
    )
}

export default SidebarTab

