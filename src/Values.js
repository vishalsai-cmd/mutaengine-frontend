import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import './Values.css';

function Values() {
  return (
    <div>
        <div className='flex-row'>
        <div className="flex-col pos1">
        <h1>Our Values</h1>
        <p>We are driven by innovation, integrity, excellence, and a customer-centric approach to deliver unparalleled software security solutions.</p>
        <button className="get-started-btn">get started</button>
      </div>
      <div className='flex-col pos1'>
        <div>
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <h3>innovation</h3>
            <p>We are committed to pushing the boundaries of what’s possible in software security. Our team constantly explores new technologies and methodologies to keep our solutions at the forefront of the industry.</p>
        </div>
        <div>
            <h3>Integrity</h3>
            <p>Trust is at the core of everything we do. We are dedicated to providing transparent, reliable, and effective security solutions that our clients can depend on.</p>
        </div>
        <div>
            <h3>Excellence</h3>
            <p>We strive for excellence in every aspect of our work, from the quality of our products to the level of service we provide to our clients.</p>
        </div>
        <div>
            <h3>Customer-Centric</h3>
            <p>Our clients are our top priority. We work closely with them to understand their unique needs and tailor our solutions to meet those needs.</p>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Values
