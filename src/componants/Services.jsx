import React from 'react'
import assets from '../assets/assets.js'
import Title from './Title.jsx'
import ServiceCard from './ServiceCard.jsx'
import { motion } from "motion/react"

const  Services = () => {

    const servicesData =[
        {
            title: 'Advetising',
            description: 'We help you reach your target audience and increase brand awareness through effective advertising strategies.',
            icon : assets.ads_icon
        },
        {
            title: 'Content Marketing',
            description: 'We create and distribute valuable, relevant, and consistent content to attract and retain a clearly defined audience.',
            icon : assets.marketing_icon
        },
        {
            title : 'content writing',
            description: 'We provide high-quality content writing services that help you communicate your message effectively and engage your audience.',
            icon : assets.content_icon
        },
        {
            title: 'Social Media',
            description: 'We help you build and maintain a strong social media presence that engages your audience and drives business growth.',
            icon : assets.social_icon
        }
    ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.3, ease: 'easeout' }}
      viewport={{ once: true }}
    
    id='services' className ='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white '>
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 z-1 dark:hidden'/>
      
      <div className =' relati ve flex flex-col items-center z-10' >
        <Title title='How can we help?' desc='from strategy to execution, we crafe the digital solotion that move your business forward' />

        <div className='flex flex-col md:grid grid-cols-2'>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Services
