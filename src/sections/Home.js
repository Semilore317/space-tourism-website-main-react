import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
        <div className="home-content">
          <div className="home-content-subtitle">
            So, you want to travel to 
          </div>
          <h1 className="home-content-title"><h3>Space</h3></h1>
          <p className='home-content-body'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover over the edge of it. Well sit back and relax becuase we'll give you a truly out of this World experience!
          </p>
          <div className="home-content-explore">
            <Link to='/destination'><h3>Explore</h3></Link>
            
          </div>
        </div>
    </div>
  )
}

export default Home