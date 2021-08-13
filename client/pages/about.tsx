import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
function About() {
    return (
        <div className="about-container merge-contents">
            <div className="about-aside">
                <div className="d-flex">
                    <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.78 }} className="aside-image right-side">
                        <img className="featured-image" src="/img/fariza-about.png" />
                    </motion.div>
                    <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="aside-content">
                        <div className="overflow-hidden">
                            <motion.h3 initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.98 }} className="title">هذا النص هو مثال لنص؟</motion.h3>
                            <motion.p initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text">ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث.</motion.p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="about-aside">
                <div className="d-flex">
                    <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="aside-content">
                        <div className="overflow-hidden">
                            <motion.h3 initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.98 }} className="title">هذا النص هو مثال لنص؟</motion.h3>
                            <motion.p initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text">ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث.</motion.p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.78 }} className="aside-image left-side">
                        <img className="featured-image" src="/img/fariza-about2.png" />
                        <img className="absolute-image" src="/img/fariza-about3.png" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
