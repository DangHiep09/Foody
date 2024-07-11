import React from 'react'
import Logo from '../../assets/food/logo.png'
import {LuShoppingCart} from 'react-icons/lu'
import { motion} from 'framer-motion'

const NavLinks = [
  {
    id: 1,
    name: 'Home',
    link: '#',
    delay: 0.1,
  },
  {
    id: 2,
    name: 'About',
    link: '#',
    delay: 0.2,
  },
  {
    id: 3,
    name: 'Menu',
    link: '#',
    delay: 0.3,
  },
  {
    id: 4,
    name: 'Delivery',
    link: '#',
    delay: 0.4,
  },
  {
    id: 5,
    name: 'Contact Us',
    link: '#',
    delay: 0.5,
  },
]
const SlideMenu = (delay) => {
  return {
    initial: {
      y: '-100%',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  }
}

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center font-league">
        <a href="#" >
          <motion.img
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, delay: 0.3}}
            src={Logo}
            alt=""
            className="w-36 "
          />
        </a>

        <div className="hidden md:block">
          <ul className="flex gap-6">
            {NavLinks.map((menu) => {
              return (
                <motion.li
                  variants={SlideMenu(menu.delay)}
                  initial="initial"
                  animate="animate"
                  key={menu.id}>
                  <a className="p-2 inline-block text-2xl" href={menu.link}>
                    {menu.name}
                  </a>
                </motion.li>
              )
            })}
          </ul>
        </div>
        <div>
          <motion.button
            variants={SlideMenu(0.8)}
            initial="initial"
            animate="animate"
            className="w-10 h-10 grid place-items-center rounded-full text-white bg-dark">
            <LuShoppingCart />
          </motion.button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
