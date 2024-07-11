import React from 'react'
import Food3 from '../../assets/food/banner.png'
import Avatar from '../../assets/food/avt.png'
import {motion} from 'framer-motion'
import {SlideHero} from '../Hero/Hero'

const Testimonial = () => {
  return (
    <section>
      <div class="container py-24">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          {/* LEFT  */}
          <div className="w-[400px] space-y-5">
            <motion.p
              variants={SlideHero(0.6)}
              initial="initial"
              whileInView="animate"
              className="text-xl font-serif  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              blanditiis ipsam, optio molestias sit itaque a. Sint,ptio
              molestias sit itaque a. Sint, vero obcaecati. Ipsam.
            </motion.p>
            <div className="flex items-center gap-3">
              <motion.img
                variants={SlideHero(0.8)}
                initial="initial"
                whileInView="animate"
                src={Avatar}
                alt=""
                className="w-14 h-14 object-cover rounded-full "
              />
              <motion.div
                variants={SlideHero(1)}
                initial="initial"
                whileInView="animate">
                <h3 className="font-semibold text-xl">John Doe</h3>
                <p className="text-sm">Designation</p>
              </motion.div>
            </div>
          </div>
          {/* RIGHT  */}
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
                scale: 1.1,
                rotate: 15,
                x: 50,
                y: -50,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                scale: {
                  duration: 0.5,
                },
              }}
              className=" relative z-10 w-full lg:max-w-[280px] img-shadow"
              src={Food3}
              alt=""
            />
            <div className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%]   h-[320px] w-[320px]   bg-lightYellow rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
