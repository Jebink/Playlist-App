import React from 'react'
import Sidebar from '../components/Sidebar'
const HomeScreen = () => {
    return (
        <div>
        <div className="main">
            <div className="sidebar">
            <Sidebar/>
            </div>
            <div className="aside">
                <div className="header"></div>
                <div className="article">
                    <div className="article1">
                        <div className="LUFS"></div>
                        <div className="musiclist"></div>
                    </div>
                    <div className="article2">
                        <div className="musicThumbnail"></div>
                        <div className="musicDetails"></div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="footer"></div>
        </div>
    )
}

export default HomeScreen
