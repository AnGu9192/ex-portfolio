import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container exprience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
            <div className="experience__content">
              <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <smaill className="text-light">Experienced</smaill>
                </div>
              </article>
              <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <smaill className="text-light">Intermediate</smaill>
                </div>
              </article>    
              <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <smaill className="text-light">Experienced</smaill>
                </div>
              </article>    
              <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <smaill className="text-light">Experienced</smaill>
                </div>
              </article>
              <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  <smaill className="text-light">Experienced</smaill>
                </div>
              </article>
            </div>
        </div>
{/* End Of FRontend */}
        <div className="experience__backend">
        <h3>BackEnd Development</h3>
        <div className="experience__content">
              <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Node JS</h4>
                  <smaill className="text-light">Experienced</smaill>
                </div>
              </article>
              <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>PHP</h4>
                  <smaill className="text-light">Intermediate</smaill>
                </div>
              </article>    
              <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>********</h4>
                  <smaill className="text-light">Intermediate</smaill>
                </div>
              </article>    
              <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySql</h4>
                  <smaill className="text-light">Intermediate</smaill>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>*********</h4>
                  <smaill className="text-light">Intermediate</smaill>
                </div>
              </article>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience