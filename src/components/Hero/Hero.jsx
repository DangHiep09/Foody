import React from 'react'
import Food from '../../assets/food/food.png'
import Leaf from '../../assets/food/leaf.png'
import Spoon from '../../assets/food/spoon.png'
import Banana from '../../assets/food/banana2.png'
import {LuShoppingCart} from 'react-icons/lu'
import { motion} from 'framer-motion'

export const SlideHero = (delay) => {
  return {
    initial: {
      y: '100%',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
      },
    },
  }
}

const Hero = () => {
  return (
    <main className="relative ">
      <div className="container min-h-[650px] flex justify-center relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
          {/* CONTENT  */}
          <div className="space-y-3  text-center md:text-left ">
            <motion.h1
              variants={SlideHero(0.75)}
              initial="initial"
              whileInView="animate"
              className="relative font-bold uppercase text-5xl lg:text-7xl  xl:text-8xl text-transparent text-outline">
              Yummy
              <img
                src={Leaf}
                alt=""
                className="absolute w-12 top-0 right-0 md:right-24"
              />
            </motion.h1>
            <motion.h1
              variants={SlideHero(1)}
              initial="initial"
              whileInView="animate"
              className="font-bold uppercase text-5xl lg:text-7xl  xl:text-8xl">
              BREAKFAST
            </motion.h1>
            <motion.p
              variants={SlideHero(1.25)}
              initial="initial"
              whileInView="animate"
              className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              temporibus perspiciatis soluta?
            </motion.p>
            <motion.button
              variants={SlideHero(1.5)}
              initial="initial"
              whileInView="animate"
              className="btn-primary inline-block !mt-10">
              <LuShoppingCart className="inline mr-2 " />
              Order Now
            </motion.button>
          </div>
          {/* IMG  */}
          <div className="relative flex">
            <motion.img
              initial={{opacity: 0, rotate: 20, x: 200, y: 50}}
              whileInView={{opacity: 1, rotate: 0, x: 0, y: 0}}
              transition={{duration: 0.8}}
              src={Food}
              alt=""
              className="img-shadow w-[450px]"
            />
            <motion.img
              initial={{opacity: 0, rotate: 95, x: 200, y: 50}}
              whileInView={{opacity: 1, rotate: 75, x: 0, y: 0}}
              transition={{duration: 0.8}}
              src={Spoon}
              alt=""
              className="img-shadow w-[350px] absolute bottom-[-120px] -left-16 rotate-[75deg]"
            />
            <motion.img
              initial={{opacity: 0, rotate: 20, x: 200, y: 50}}
              whileInView={{opacity: 1, rotate: 0, x: 0, y: 0}}
              transition={{duration: 0.8}}
              src={Banana}
              alt=""
              className="img-shadow w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px]"
            />
          </div>
        </div>
      </div>
      {/* BACKGROUND YELLOW  */}
      <motion.div
        initial={{opacity: 0, rotate: 60, x: 200, y: 100}}
        whileInView={{opacity: 1, rotate: 40, x: 0, y: 0}}
        className="w-[2500px] h-[2500px] rounded-3xl bg-lightYellow absolute top-[-30%] left-[70%] z-0"></motion.div>
    </main>
  )
}

export default Hero
