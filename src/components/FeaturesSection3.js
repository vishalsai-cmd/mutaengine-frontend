import React from 'react';
import './FeaturesSection3.css';

function Values() {
  return (
    <div>
        <div className='flex-row'>
        <div className="flex-col pos11">
        <h1>You Innovate
        We Secure</h1>
        <p>With MutaEngine,you can focus on creating cutting-edge
        software while we ensure it stays protected from threats.Our
        advanced technology keeps your intelluctual property safe
        allowing you to concentrate on what you do best.</p>
        <button className="get-started-btn1">get started</button>
      </div>
      <div className='flex-col pos11'>
        <div>
            <h3>Polymorphic code</h3>
            <p>MutaEngine constantly mutates your
            software's code in real time, making it nearly
            impossible for hackers to decompile or reverse-engineer</p>
        </div>
        <div>
            <h3>360degree security</h3>
            <p>Our multi-layered defense mechanisms
            ensure that every part of your software is protected, from code to data to user to transactions</p>
        </div>
        <div>
            <h3>web3 Integration</h3>
            <p>Fully compatible with decentalized applications. MutaEngine provides robust security for your blockchain projects</p>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Values
