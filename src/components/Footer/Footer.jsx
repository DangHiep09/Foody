import React from "react";
import Logo from '../../assets/food/logo.png'
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration:1}}
      className="bg-lightYellow rounded-t-3xl">
      <div class="container py-14">
        <div class="grid md:grid-cols-3 gap-12">
          <div className="space-y-3 lg:max-w-[300px]">
            <img src={Logo} alt="" className="w-24 " />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              nihil in eveniet explicabo
            </p>
            <a href="#" className="inline-block mt-6 text-sm">
              Contact@food.com
            </a>
          </div>

          <div className=" col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">Home</li>
                <li className="footer-link">About</li>
                <li className="footer-link">Contact</li>
                <li className="footer-link">Food</li>
              </ul>
            </div>

            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">Home</li>
                <li className="footer-link">About</li>
                <li className="footer-link">Contact</li>
                <li className="footer-link">Food</li>
              </ul>
            </div>

            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">Home</li>
                <li className="footer-link">About</li>
                <li className="footer-link">Contact</li>
                <li className="footer-link">Food</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
};

export default Footer;
