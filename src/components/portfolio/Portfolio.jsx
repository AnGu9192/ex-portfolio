import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio5.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16673715-Crypto-dashboards-and-visualition'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16673715-Crypto-dashboards-and-visualition'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16673715-Crypto-dashboards-and-visualition'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16673715-Crypto-dashboards-and-visualition'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16673715-Crypto-dashboards-and-visualition'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency',
    github: 'https://github.com',
    demo: 'https://dribble.com/shots/16673715-Crypto-dashboards-and-visualition'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
        <div className="portfolio__item-image">
            <img src={image} alt={title} />
        </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      
      </div>
    </section>
  )
}

export default Portfolio