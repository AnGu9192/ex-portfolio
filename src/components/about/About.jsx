import React from 'react';
import "./about.css"
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me_about" />
                    </div>
                </div>
                <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className='about__icon'/>
                        <h5>Experience</h5>
                        <small>1+ Years Working</small>
                    </article>

                    <article className="about__card">
                        <FiUsers className='about__icon'/>
                        <h5>Clients</h5>
                        <small>200+ Worldwide</small>
                    </article>

                    <article className="about__card">
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Projects</h5>
                        <small>2+ Completed Project</small>
                    </article>

                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Minus iure ipsum rem quas repellat molestiae
                     itaque eaque quae, illum doloribus!
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus perspiciatis ducimus
                     error maxime laborum in modi molestiae voluptatum dicta.
                </p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
            </div>

           
        </section>
    );
};

export default About;