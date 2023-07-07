import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3> UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li><p>Lorem ipsum dolor sit amet.</p></li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3> Web Developement</h3>
          </div>

          <ul className='service__list'>
            <li><p>Lorem ipsum dolor sit amet.</p></li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3> Full Stack Developement</h3>
          </div>

          <ul className='service__list'>
            <li><p>Lorem ipsum dolor sit amet.</p></li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services