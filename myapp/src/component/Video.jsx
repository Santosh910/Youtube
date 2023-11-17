import React, { useState } from 'react'
import './Video.css'

const Video = () => {
    const [vid, setVid] = useState([
        {
            image: "asset/3dwebsite.webp",
            title: "Code A React Website Tutorial | ReactJS Tutorial For Beginners",
            channel: "code",
            like: "16K views",
            day: "30days"
        },
        {
            image: "asset/aigiri.webp",
            title: "Code A React Website Tutorial | ReactJS Tutorial For Beginners",
            channel: "code",
            like: "16K views",
            day: "30days"
        },
        {
            image: "asset/boatri.webp",
            title: "Code A React Website Tutorial | ReactJS Tutorial For Beginners",
            channel: "code",
            like: "16K views",
            day: "30days"
        },
        {
            image: "asset/chanting.webp",
            title: "Code A React Website Tutorial | ReactJS Tutorial For Beginners",
            channel: "code",
            like: "16K views",
            day: "30days"
        },
        {
            image: "asset/dsa.webp",
            title: "Code A React Website Tutorial | ReactJS Tutorial For Beginners",
            channel: "code",
            like: "16K views",
            day: "30days"
        },
        {
            image: "asset/dsaint.webp",
            title: "Code A React Website Tutorial | ReactJS Tutorial For Beginners",
            channel: "code",
            like: "16K views",
            day: "30days"
        },
        {
            image: "asset/gadar2.webp",
            title: "Code A React Website Tutorial | ReactJS Tutorial For Beginners",
            channel: "code",
            like: "16K views",
            day: "30days"
        },
        {
            image: "asset/hanuman.webp",
            title: "Code A React Website Tutorial | ReactJS Tutorial For Beginners",
            channel: "code",
            like: "16K views",
            day: "30days"
        },
        {
            image: "asset/javatoreact.webp",
            title: "Code A React Website Tutorial | ReactJS Tutorial For Beginners",
            channel: "code",
            like: "16K views",
            day: "30days"
        },
        {
            image: "asset/junsenreact.webp",
            title: "Code A React Website Tutorial | ReactJS Tutorial For Beginners",
            channel: "code",
            like: "16K views",
            day: "30days"
        },
        {
            image: "asset/kabj.webp",
            title: "Code A React Website Tutorial | ReactJS Tutorial For Beginners",
            channel: "code",
            like: "16K views",
            day: "30days"
        },
        {
            image: "asset/mindref.webp",
            title: "Code A React Website Tutorial | ReactJS Tutorial For Beginners",
            channel: "code",
            like: "16K views",
            day: "30days"
        }
    ])
    const [counter, setCounter] = useState(0)


    return (
        <div className='container-vid'>
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

            <div className="vid-left-right">
                <div className="vid-left">
                    <video controls style={{ width: "100%", borderRadius: "10px", }} src="asset/video.mp4"></video>

                    <div className='item-title'>
                        <div className='title-vid'>
                            <h3>Chicken burger recipe🍔|</h3>
                        </div>

                        <div className="channel-name">
                            <div className="chn-sub-like">
                                <img style={{ width: "40px", border: "1px solid gray", borderRadius: "50%", height: "40px" }} src="asset/minion.jpg" alt="" />
                                <div className='chn-1'>
                                    <h4>foodie brain</h4>
                                    <h6>44 subscribers</h6>
                                </div>
                                <div className="subscription">
                                    <i class="fa-regular fa-bell"></i>
                                    <h4>subscribed</h4>
                                </div>

                            </div>

                            <div className="lik-share-downlo">
                                <div className="lik-dislik">
                                    <i style={{ display: "flex" }} class="fa-regular fa-thumbs-up" onClick={() => setCounter((val) => val + 1)}> <span style={{ marginLeft: "5px", marginRight: "5px" }}>{counter}</span> |</i>
                                    <i class="fa-regular fa-thumbs-down"></i>

                                </div>
                                <div className="share">
                                    <i class="fa-solid fa-share"></i>
                                    <h4>Share</h4>
                                </div>

                                <div className="download">
                                    <i class="fa-solid fa-download"></i>
                                    <h4>Download</h4>
                                </div>

                            </div>
                        </div>

                        <div className="view-month">
                                <div className='view-part'>
                                    <h5>240 views 4 months ago</h5>
                                    <h5>...more</h5>
                                </div>
                                
                            </div>
                    </div>
                </div>

                <div className="vid-right">
                    {vid.length &&
                        <div  >{vid.map((pho) => (
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <img style={{ width: "180px", borderRadius: "10px", marginBottom: "8px" }} src={pho.image} alt="" />
                                <div>
                                    <h3 style={{ fontSize: "13px", textAlign: "left", marginLeft: "5px" }}>{pho.title}</h3>
                                    <h4 style={{ fontSize: "13px", fontWeight: "100", textAlign: "left", marginLeft: "5px" }}>{pho.channel}</h4>
                                    <div style={{ display: "flex" }}>
                                        <h5 style={{ fontWeight: "100", marginLeft: "5px" }}>{pho.like}</h5>
                                        <h5 style={{ fontWeight: "100", marginLeft: "10px" }}>{pho.day}</h5>
                                    </div>
                                </div>
                            </div>

                        ))}</div>

                    }
                </div>
            </div>
        </div>
    )
}

export default Video