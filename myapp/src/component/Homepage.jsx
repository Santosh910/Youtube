import React, { useState } from 'react'
import './Homepage.css'

const Homepage = () => {
  const [counter, setCounter] = useState(false);
  const [photos, setPhotos] = useState([
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

  const hnadleColor = () => {
    setCounter(!counter)
  }
  const colorclassName = counter ? 'act-li' : 'Inact-li';
  return (
    <div className='container-hp'>
      <div className="con-hp-flex">
        <div className="flex-left-hp">
          <div className="flx-hp-1">
            <ul>
              <li><i class="fa-solid fa-house"></i>Home</li>
              <li><i class="fa-brands fa-youtube"></i>Shorts</li>
              <li><i class="fa-brands fa-square-youtube"></i>Subscription</li>
            </ul>
          </div>
          <hr />

          <div className="flx-hp-1">
            <li><h3>You </h3> </li>
            <ul>
              <li><i class="fa-regular fa-user"></i>Your Channel</li>
              <li><i class="fa-solid fa-clock-rotate-left"></i>history</li>
              <li><i class="fa-regular fa-circle-play"></i>your videos</li>
              <li><i class="fa-regular fa-clock"></i>watch later</li>
              <li><i class="fa-solid fa-download"></i>downloads</li>
              <li><i class="fa-regular fa-thumbs-up"></i>liked videos</li>
            </ul>
          </div>
          <hr />

          <div className="flx-hp-1">
            <li><h3>Subscriptions</h3></li>
            <ul>
              <li><i class="fa-solid fa-house"></i>Home</li>
              <li><i class="fa-solid fa-circle-plus"></i>Browse Channels</li>

            </ul>
          </div>
          <hr />

          <div className="flx-hp-1">
            <li><h2>Explore</h2></li>
            <ul>
              <li><i class="fa-solid fa-fire"></i>Trending</li>
              <li><i class="fa-brands fa-youtube"></i>Shopping</li>
              <li><i class="fa-brands fa-square-youtube"></i>Music</li>
              <li>Films</li>
              <li>live</li>
              <li>Gaming</li>
              <li>News</li>
              <li>Sport</li>
              <li>Learning</li>
              <li>Fahio & beauty</li>
              <li>Podcast</li>
            </ul>
          </div>
          <hr />

          <div className="flx-hp-1">
            <ul>
              <li><i class="fa-solid fa-house"></i>Home</li>
              <li><i class="fa-brands fa-youtube"></i>Shorts</li>
              <li><i class="fa-brands fa-square-youtube"></i>Subscription</li>
            </ul>
          </div>
          <hr />

          <div className="flx-hp-1">
            <ul>
              <li><i class="fa-solid fa-house"></i>Home</li>
              <li><i class="fa-brands fa-youtube"></i>Shorts</li>
              <li><i class="fa-brands fa-square-youtube"></i>Subscription</li>
            </ul>
          </div>
          <hr />
        </div>

        <div className="flex-right-hp">
          <div className="first-alltab">
            <ul>
              <li className={colorclassName} onClick={hnadleColor}>All</li>
              <li style={{ background: 'lightgray' }}>music</li>
              <li style={{ background: 'lightgray' }}>auditions</li>
              <li style={{ background: 'lightgray' }}>react routers</li>
              <li style={{ background: 'lightgray' }}>movie musicals</li>
              <li style={{ background: 'lightgray' }}>Dramedy</li>
              <li style={{ background: 'lightgray' }}>live</li>
              <li style={{ background: 'lightgray' }}>news</li>
              <li style={{ background: 'lightgray' }}>comuters</li>
              <li style={{ background: 'lightgray' }}>hindu music</li>
              <li style={{ background: 'lightgray' }}>recently uploaded</li>
              <li style={{ background: 'lightgray' }}>new to you</li>
            </ul>
          </div>

          <div className="mapping-flex">
            {photos.length &&
              <div className='flex-hp-thum'>{photos.map((pho) => (
                <div className="video-thumb">

                  <img style={{width:"100%",marginBottom:"10px"}} src={pho.image} alt="" />
                  <div className="title-vid">
                    <img style={{width:"40px",border:"1px solid black",borderRadius:"50%"}} src="asset/minion.jpg" alt="" />
                    <h5>{pho.title}</h5>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                  <h4  style={{marginRight:"170px",color:"gray",fontWeight:"100",marginBottom:"5px"}}>{pho.channel}</h4>
                  <div className="views-days">
                    <h5>{pho.like}</h5>
                    <h5>{pho.day}</h5>
                  </div>
                </div>
              ))}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage