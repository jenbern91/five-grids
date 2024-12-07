import React from 'react'
import cat1 from './assets/images/cat1.jpg';
import cat2 from './assets/images/cat2.jpg';
import cat3 from './assets/images/cat3.jpg';
import cat4 from './assets/images/cat4.jpg';


const Grid5 = () => {
  return (

  <div className='master-container'>
    <div className="card">
        <div className="cat-image">
          <img src={cat1} alt='' />
        </div>
        <div className='cat-info'>
          <h2> Name: Mr. Moon</h2>
          <h3>Bio</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div className="card">
        <div className="cat-image">
          <img src={cat2} alt='' />
        </div>
        <div className='cat-info'>
          <h2> Name: Pebbles</h2>
          <h3>Bio</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div className="card">
        <div className="cat-image">
          <img src={cat3} alt='' />
        </div>
        <div className='cat-info'>
          <h2> Name: Tigggger</h2>
          <h3>Bio</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
    <div className="card">
        <div className="cat-image">
          <img src={cat4} alt='' />
        </div>
        <div className='cat-info'>
          <h2> Name: Batman</h2>
          <h3>Bio</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>


  </div>
  )
}

export default Grid5

