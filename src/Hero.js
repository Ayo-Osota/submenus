import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  // const data = useGlobalContext();
  // const {} = data;
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-info">
        <h1>Payment infrastructure for the internet</h1>
        <p>
          Millions of companies of all sizes-from startups to Fortune 500s-
          use Stripe's software and APIs to accept payments, send payouts, and
          manage their businesses online
        </p>
        <button className="btn">start now</button>
        </div>
    <img src={phoneImg} alt="hero" className='hero-images' />
    </div>
    </section>
  )
}

export default Hero
