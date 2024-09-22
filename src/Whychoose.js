import React from 'react'
import "./Whychoose.css"

function Whychoose() {
  return (
    <div>
      <div>
        <div>
            <h1 className='title'>Why Choose MutaEngine?</h1>
            <br />
            <br />
            <br />
            <div className='flex-row'>
              <div className='borders box1'>
              <img src="https://th.bing.com/th/id/OIP.spMAq2tuykRRdeh1B4w3hQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Tech Security" />
              <h1 className='measure'>State of the Art Technology</h1>
              <p className='measure'>Our Polymorphic Code Engine is a game-changer in the field of software security, offering unparalleled protection against reverse engineering and unauthorized modifications.</p>
              </div>
              <div className='borders box2'>
              <img src="https://th.bing.com/th/id/OIP.spMAq2tuykRRdeh1B4w3hQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Tech Security" />
              <h1 className='measure'>Expert team</h1>
              <p className='measure'>Our team of cybersecurity professionals and software engineers brings a wealth of knowledge and experience to the table, ensuring that your software is protected by the best in the business.
              </p>
              </div>
              <div className='borders box3'>
              <img src="https://th.bing.com/th/id/OIP.spMAq2tuykRRdeh1B4w3hQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Tech Security" />
              <h1 className='measure'>Proven Track Record</h1>
              <p className='measure'> We have a history of successful partnerships with companies of all sizes, from startups to enterprises, helping them secure their software and protect their intellectual property.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Whychoose
