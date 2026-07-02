import React from 'react'
import Title from './Title.jsx'
import assets from '../assets/assets.js'
import { motion } from "motion/react"
const Ourwork = () => {

  const workData = [
    {
      title : 'Mobile App Development',
      desc : 'We create mobile applications that are user-friendly, responsive, and visually appealing.',
      image : assets.work_mobile_app
    },
    {
      title : 'Dashboard Management',
      desc : 'We design and develop intuitive dashboards that provide real-time insights and analytics.',
      image : assets.work_dashboard_management
    },
    {
      title : 'Fitness app promotion',
      desc : 'We help promote fitness apps through targeted marketing strategies and campaigns.',
      image : assets.work_fitness_app

    }
  ]



  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3, ease: 'easeout' }}
        viewport={{ once: true }}
    
    
    id='our-work' className = 'flex flex-col items-center gap-7 px-9 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white' >
      <Title title='Our latest Work' desc='Check out some of our recent projects and see the quality of our work.'/>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2, ease: 'easeout' }}
        viewport={{ once: true }}
        
      
      className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl' >
        {
          workData.map((work , index)=>(
            <div key ={index} className ='hover:scale-102 duration-500 transition-all cursor-pointer' > 
            <img src={work.image} alt='' className='w-full rounded-xl' />
            <h3 className ='mt-3 mb-2 text-lg  font-semibold'>{work.title}</h3>
            <p className ='text-sm opacity-60 w-5/6'>{work.desc}</p>
            </div>

          ))
        }

      </motion.div>
  
    </motion.div>
  )
}

export default Ourwork
