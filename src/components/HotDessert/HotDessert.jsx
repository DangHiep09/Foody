import React from 'react'
import Food from '../../assets/food/food.png'
import Food2 from '../../assets/food/food2-plate.png'
import Food3 from '../../assets/food/banner.png'
import {SlideHero} from '../Hero/Hero'
import {motion} from 'framer-motion'

const HotDessertData = [
  {
    id: 1,
    name: 'Hot Cake',
    img: Food,
    price: '$5.99',
    delay: '0.4',
  },
  {
    id: 2,
    name: 'HotDessert',
    img: Food2,
    price: '$5.99',
    delay: '0.6',
  },
  {
    id: 3,
    name: 'HotDessert',
    img: Food3,
    price: '$5.99',
    delay: '0.8',
  },
]

const HotDessert = () => {
  return (
    <section>
      <div class="container py-12">
        <motion.h3
          variants={SlideHero(0)}
          initial="initial"
          whileInView="animate"
          className="text-darkGreen text-2xl font-semibold uppercase py-8">
          Hot Desserts
        </motion.h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {HotDessertData.map((item) => {
            return (
              <motion.div
                variants={SlideHero(item.delay)}
                initial="initial"
                whileInView="animate"
                className="group bg-white/50 shadow-md p-3 flex items-center gap-3">
                <img
                  className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-45"
                  src={item.img}
                  alt=""
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-xl  text-yellow-500">{item.price}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HotDessert
