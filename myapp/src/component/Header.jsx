import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='container-header'>
            <div className="main-header">
                <div className="bar-logo">
                    <i class="fa-solid fa-bars"></i>
                    <img src="asset/YouTube_Logo_2017.svg.png" alt="" />
                </div>

                <div className="search-mic-hd">
                    <div className="search-mic-flx">
                        <div className="search-bar"><div className='input'>
                            <input type="text" placeholder='Search' />
                        </div>
                            
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="search-mic">
                            <i class="fa-solid fa-microphone"></i>
                        </div>
                    </div>

                </div>

                <div className="vid-not-sin">
                    <div className="v-n-s-flx">
                        <div className="vid-ic">
                            <i class="fa-solid fa-video"></i>
                        </div>
                        <div className="not-ic">
                            <i class="fa-regular fa-bell"></i>
                        </div>
                        <div className="sin-ic">
                             <img src="asset/minion.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header