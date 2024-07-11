import React from 'react'
import Food3 from '../../assets/food/banner.png'
import { motion } from 'framer-motion'
import {SlideHero} from '../Hero/Hero'

const Banner = () => {
  return (
    <section>
      <div class="container py-24">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          <div className="relative">
            <motion.img
              initial={{
                opacity: 0,
                x: -100,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              whileHover={{
                scale: 1.25,
                rotate: 15,
                x: 50,
                y : -50
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                scale: {
                  duration:0.5
                }
              }}
              className=" relative z-10 w-full lg:max-w-[350px] img-shadow"
              src={Food3}
              alt=""
            />
            <div className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%]   h-[320px] w-[320px] md:h-[400px] md:w-[400px]  bg-lightYellow rounded-full"></div>
          </div>
          <div className="w-[400px] space-y-5">
            <motion.h1
              variants={SlideHero(0.6)}
              initial="initial"
              whileInView="animate"
              className="text-6xl uppercase font-semibold font-league ">
              THE BEST YUMMY FOOD IN THE TOWN
            </motion.h1>
            <motion.p
              variants={SlideHero(0.8)}
              initial="initial"
              whileInView="animate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea
              enim porro!
            </motion.p>
            <motion.button
              variants={SlideHero(1)}
              initial="initial"
              whileInView="animate"
              className="btn-primary ">
              Order Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
