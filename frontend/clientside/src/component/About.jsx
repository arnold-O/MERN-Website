import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <section id='about'>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src="/assets/aboutme.jpg" alt=""  className='mt-5 w-75'/>
                    </div>

                    <div className='col-md-6'>
                        <h3 className='fs-5 mb-0'>About Us</h3>
                        <h1 className='display-6 mb-1'>Who <b>we</b> are</h1>
                        <hr/>
                        <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta consequatur et. Quibusdam numquam nemo officiis fugiat ratione in animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, officia. Lorem ipsum dolor, sit amet consectetur adipisicing quod animi qui? Tempore, qui.</p>
                        <NavLink to="/services" className='btn btn-primary rounded-pill px-4 py-2'>Get Started</NavLink>
                        <NavLink to="/contact" className='btn btn-outline-primary rounded-pill ms-2 py-2 px-4'>Contact Us</NavLink>
                    </div>

                </div>
            </div>
           
        </section>
      
    </div>
  )
}
