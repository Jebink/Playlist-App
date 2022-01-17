import React from 'react'

const Header = (props) => {
    return (
        <div className="header "> 
            <div className="Headertitle">{props.playlist} / {props.songname}</div>
            <div className="Headeravatarsection">
                <img className="Headeravatar" src="./avatar.png" alt="" />
                <img className="Headeravatardownarrow" src="./downarrow.png" alt="" />
            </div>
        </div>
    )
}

export default Header
