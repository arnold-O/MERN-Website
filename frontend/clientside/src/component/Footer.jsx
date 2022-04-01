import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div>

        <section id='footer'>
            <div className="container-fluid mt-5 py-4">
                <div className="row">
                    <div className="col-3 text-center">
                        <h5 className='py-2 text-white'> Arnold MernStack</h5>
                        <p className='mb-1 text-white'>NodeJs</p>
                        <p className='mb-1 text-white'>Express</p>
                        <p className='mb-1 text-white'>Mongodb</p>
                        <p className='mb-1 text-white'>Reactjs</p>
                    </div>
                    <div className="col-3 text-center">
                        <h5 className='py-2 text-white'>Node js</h5>
                        <p className='mb-1 text-white'>Protecting Routes,</p>
                        <p className='mb-1 text-white'> Authorization,</p>
                        <p className='mb-1 text-white'>Authentication,</p>
                        <p className='mb-1 text-white'> Middleware,</p>
                        <p className='mb-1 text-white'>Error Handling</p>
                    </div>
                    <div className="col-3 text-center">
                   <h5 className='py-2 text-white'> Mongose & Express</h5>
                   <p className='mb-1 text-white'>Routing</p>
                   <p className='mb-1 text-white'>Queries</p>
                   <p className='mb-1 text-white'>DB Structure</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <h5 className='py-2 text-white'>MongoDB</h5>
                        <p className='mb-1 text-white'>Documennt</p>
                        <p className='mb-1 text-white'>Collections</p>
                        <div className='d-flex text-center justify-content-center'>
                           <h3 className='me-2  text-white'><BsGithub/></h3>
                            <h3 className=' text-white'><BsLinkedin/></h3>
                        </div>
                    </div>
                    
                </div>
            </div>
            <hr className='fw-bolder text-white'/>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-6 text-center">

               <p className='fs-6 text-white mx-auto'> cc2022 Copyright Reserved Arnold Inc.</p>
                    </div>
                    <div className="col-6">
                        <p className='text-white ms-3'>This is work is licence under<b> common laws </b></p>

                    </div>

                </div>
            </div>
        </section>
      
    </div>
  )
}
