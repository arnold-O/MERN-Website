import React from 'react'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
        <section id='Home'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 text-center mt-5'>
                        <h1 className='fs-md fw-bolder mb-5 text-white'> Mern Stack And Its Major Functionality</h1>
                        <p className='mt-2 mb-5 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, esse eos, iste consequuntur a laborum nemo ipsum inventore, consectetur sequi dolorum voluptates provident rem molestiae. Soluta iure maiores totam iusto.</p>
                        <div>
                            <button className='btn btn-outline-light rounded-pill px-4 py-2 me-4'>Get Quote</button>
                            <button className='btn btn-outline-light rounded-pill px-2 py-2'>Our services</button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
        <About/>
        <Services/>
        <Contact/>
        <Footer/>
      
    </div>
  )
}
