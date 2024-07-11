import React from 'react'
import Food from '../../assets/food/food.png'
import Food2 from '../../assets/food/food2-plate.png'
import Food3 from '../../assets/food/banner.png'
import {motion} from 'framer-motion'
import {SlideHero} from '../Hero/Hero'

const PopularRecipeData = [
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

const PopularRecipe = () => {
  return (
    <section>
      <div class="container py-24">
        <motion.h3
          variants={SlideHero(0.75)}
          whileInView="animate"
          initial="initial"
          className="uppercase font-semibold text-4xl font-league text-center py-8">
          OUR POPULAR RECIPE
        </motion.h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {PopularRecipeData.map((item) => {
            return (
              <div className="group space-y-3 text-center bg-white/50 shadow-xl rounded-xl p-3">
                <img
                  src={item.img}
                  className="w-44 img-shadow 
                  group-hover:scale-x-110 
                  group-hover:translate-x-10 
                  group-hover:translate-y-[-50px]
                  group-hover:rotate-[50deg]
                  transition-all duration-400"
                  alt=""
                />
                <div className="">
                  <button className="btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100">
                    Buy Now
                  </button>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-xl font-bold text-yellow-500">
                    {item.price}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PopularRecipe
